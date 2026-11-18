"""Persistent cache control and TTL policy.

    t_expiry = t0 + I        reuse while t_now < t_expiry

Base intervals: lists 6 h, search 12 h, movie details 30 d, review analysis 3 d.
Dynamic rules shorten/lengthen the interval by release age and popularity, always within
[30 minutes, 90 days]. Review analysis for movies released within 2 days bypasses the cache,
and for 3-7 days uses a one-hour interval.
"""
from __future__ import annotations

import logging
from datetime import date, datetime, timedelta, timezone
from typing import Any, Awaitable, Callable

from sqlalchemy.exc import IntegrityError
from sqlalchemy.ext.asyncio import AsyncSession

from .config import settings
from .db import CacheEntry

log = logging.getLogger("cache")

LIST_TTL = 6 * 3600
SEARCH_TTL = 12 * 3600
DETAILS_TTL = 30 * 24 * 3600
ANALYSIS_TTL = 3 * 24 * 3600


def now() -> datetime:
    return datetime.now(timezone.utc)


def _aware(value: datetime) -> datetime:
    return value if value.tzinfo else value.replace(tzinfo=timezone.utc)


def clamp_ttl(seconds: float) -> int:
    return int(max(settings.cache_min_ttl_seconds, min(settings.cache_max_ttl_seconds, seconds)))


def _days_since_release(release_date: str | None) -> int | None:
    if not release_date:
        return None
    try:
        return (date.today() - date.fromisoformat(release_date[:10])).days
    except ValueError:
        return None


def dynamic_ttl(base_seconds: int, release_date: str | None, popularity: float | None) -> int:
    """Shorter TTL for new/popular movies, longer for old/unpopular ones (clamped)."""
    days = _days_since_release(release_date)
    if days is None:
        age_factor = 1.0
    elif days <= 30:        # upcoming, or released within the last month
        age_factor = 0.1
    elif days <= 180:
        age_factor = 0.5
    elif days <= 730:
        age_factor = 1.0
    else:
        age_factor = 2.0
    pop = popularity or 0
    if pop >= 100:
        pop_factor = 0.5
    elif pop >= 30:
        pop_factor = 0.75
    elif pop < 10:
        pop_factor = 1.5
    else:
        pop_factor = 1.0
    return clamp_ttl(base_seconds * age_factor * pop_factor)


def analysis_ttl(release_date: str | None, popularity: float | None = None) -> int:
    """0 means bypass the analysis cache entirely."""
    days = _days_since_release(release_date)
    if days is not None:
        if -2 <= days <= 2:
            return 0
        if -7 <= days <= 7:
            return clamp_ttl(3600)
    return dynamic_ttl(ANALYSIS_TTL, release_date, popularity)


async def cache_get(session: AsyncSession | None, key: str) -> Any | None:
    """Return a valid cached payload (incrementing its hit count) or None."""
    if session is None:
        return None
    try:
        entry = await session.get(CacheEntry, key)
        if entry is not None and _aware(entry.expires_at) > now():
            payload = entry.payload
            entry.hit_count = (entry.hit_count or 0) + 1
            await session.commit()
            return payload
        await session.commit()  # end the read transaction so no connection is held during upstream calls
    except Exception as exc:  # a cache failure must never break the API
        log.warning("cache_get failed for %s: %s", key, exc)
        await session.rollback()
    return None


async def cache_set(session: AsyncSession | None, key: str, endpoint: str, payload: Any, ttl_seconds: int) -> None:
    """Store a fresh payload and restart its interval. ttl_seconds == 0 means do not store."""
    if session is None or ttl_seconds <= 0:
        return
    expires = now() + timedelta(seconds=clamp_ttl(ttl_seconds))
    try:
        entry = await session.get(CacheEntry, key)
        if entry is None:
            session.add(CacheEntry(cache_key=key, endpoint=endpoint, payload=payload, expires_at=expires, hit_count=0))
        else:
            entry.endpoint, entry.payload, entry.expires_at, entry.hit_count = endpoint, payload, expires, 0
            entry.updated_at = now()
        await session.commit()
    except IntegrityError:  # another request stored the same key first
        await session.rollback()
    except Exception as exc:
        log.warning("cache_set failed for %s: %s", key, exc)
        await session.rollback()


async def cached(
    session: AsyncSession | None,
    key: str,
    endpoint: str,
    ttl_seconds: int | Callable[[Any], int],
    fetcher: Callable[[], Awaitable[Any]],
) -> Any:
    """Serve from the database while valid; otherwise fetch, store and return."""
    existing = await cache_get(session, key)
    if existing is not None:
        return existing
    fresh = await fetcher()
    ttl = ttl_seconds(fresh) if callable(ttl_seconds) else ttl_seconds
    await cache_set(session, key, endpoint, fresh, ttl)
    return fresh
