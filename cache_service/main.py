"""Movie Shelf FastAPI cache service: TMDB + YouTube data, sentiment analysis, PostgreSQL-backed cache."""
from __future__ import annotations

import asyncio
import logging
import sys
from contextlib import asynccontextmanager
from datetime import date, datetime
from typing import Any, AsyncIterator, Awaitable, Callable

from fastapi import APIRouter, Depends, FastAPI, HTTPException, Query
from fastapi.responses import JSONResponse
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncEngine, AsyncSession, async_sessionmaker

from . import cache
from .analysis import analyze
from .clients import collect_review_comments, poster_url, tmdb, trailer_from_tmdb, youtube_trailer_search
from .config import settings
from .db import Base, MovieRecord, YoutubeComment, make_engine, make_session_factory

if sys.platform == "win32":  # psycopg's async mode cannot run on the Windows Proactor loop
    asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())

log = logging.getLogger("cache-service")
LIST_KINDS = ("popular", "now-playing", "upcoming", "top-rated")
LIST_PATHS = {"popular": "popular", "now-playing": "now_playing", "upcoming": "upcoming", "top-rated": "top_rated"}

engine: AsyncEngine | None = None
session_factory: async_sessionmaker[AsyncSession] | None = None
database_error: str | None = None


@asynccontextmanager
async def lifespan(_: FastAPI) -> AsyncIterator[None]:
    global engine, session_factory, database_error
    if settings.database_url:
        try:
            engine = make_engine(settings.database_url)
            async with engine.begin() as conn:
                await conn.run_sync(Base.metadata.create_all)
            session_factory = make_session_factory(engine)
        except Exception as exc:  # keep serving (uncached) and report the problem in /health
            database_error = f"{type(exc).__name__}: {exc}"
            session_factory = None
            log.error("Database unavailable: %s", database_error)
    missing = settings.missing_keys()
    if missing:
        log.warning("Cache service is NOT ready; missing: %s", ", ".join(missing))
    yield
    if engine is not None:
        await engine.dispose()


app = FastAPI(title="Movie Shelf FastAPI Cache Service", lifespan=lifespan)
router = APIRouter(prefix="/api")


async def get_session() -> AsyncIterator[AsyncSession | None]:
    if session_factory is None:
        yield None
        return
    async with session_factory() as session:
        yield session


Session = Depends(get_session)

# ---- single-flight: concurrent identical requests share one upstream fetch -------------------
_inflight: dict[str, asyncio.Future[Any]] = {}


async def single_flight(key: str, factory: Callable[[], Awaitable[Any]]) -> Any:
    existing = _inflight.get(key)
    if existing is not None:
        return await asyncio.shield(existing)
    future = asyncio.ensure_future(factory())
    _inflight[key] = future
    try:
        return await future
    finally:
        _inflight.pop(key, None)


# ---- persistence helpers ---------------------------------------------------------------------
def _parse_date(value: str | None) -> date | None:
    try:
        return date.fromisoformat(value[:10]) if value else None
    except ValueError:
        return None


def _parse_ts(value: str | None) -> datetime | None:
    try:
        return datetime.fromisoformat(value.replace("Z", "+00:00")) if value else None
    except ValueError:
        return None


async def persist_movie(session: AsyncSession | None, movie: dict[str, Any], analysis: dict[str, Any] | None = None) -> None:
    if session is None:
        return
    try:
        data = {**movie, "analysis": analysis} if analysis else movie
        await session.merge(MovieRecord(tmdb_id=movie["id"], title=movie.get("title") or "Untitled movie", release_date=_parse_date(movie.get("release_date")), data=data))
        await session.commit()
    except Exception as exc:
        log.warning("persist_movie failed: %s", exc)
        await session.rollback()


async def persist_comments(session: AsyncSession | None, tmdb_id: int, comments: list[dict[str, Any]]) -> None:
    if session is None or not comments:
        return
    try:
        ids = [c["id"] for c in comments]
        existing = set((await session.execute(select(YoutubeComment.id).where(YoutubeComment.id.in_(ids)))).scalars())
        for c in comments:
            if c["id"] in existing:
                continue
            session.add(YoutubeComment(id=c["id"], tmdb_id=tmdb_id, video_id=c["video_id"], author_name=c.get("author_name"), text=c["text"], like_count=c.get("like_count") or 0, published_at=_parse_ts(c.get("published_at")), data=c["data"]))
        await session.commit()
    except Exception as exc:
        log.warning("persist_comments failed: %s", exc)
        await session.rollback()


# ---- data loaders ----------------------------------------------------------------------------
async def fetch_movie_details(tmdb_id: int) -> dict[str, Any]:
    details = await tmdb(f"/movie/{tmdb_id}", {"append_to_response": "credits,videos", "include_video_language": "en,null"})
    credits = details.pop("credits", {})
    videos = details.pop("videos", {})
    movie = {
        "id": details["id"], "title": details.get("title"), "overview": details.get("overview"),
        "poster_url": poster_url(details.get("poster_path")), "release_date": details.get("release_date"),
        "vote_average": details.get("vote_average"), "vote_count": details.get("vote_count"),
        "popularity": details.get("popularity"),
        "genres": [g["name"] for g in details.get("genres", [])], "runtime": details.get("runtime"), "tagline": details.get("tagline"),
        "cast": [{"name": c.get("name"), "character": c.get("character")} for c in credits.get("cast", [])[:10]],
        "director": next((c.get("name") for c in credits.get("crew", []) if c.get("job") == "Director"), None),
    }
    movie["trailer"] = trailer_from_tmdb(videos) or await youtube_trailer_search(movie["title"] or "", movie.get("release_date"))
    return movie


async def load_details(session: AsyncSession | None, tmdb_id: int) -> dict[str, Any]:
    key = f"movie:{tmdb_id}:details"
    return await single_flight(key, lambda: cache.cached(
        session, key, "movie-details",
        lambda m: cache.dynamic_ttl(cache.DETAILS_TTL, m.get("release_date"), m.get("popularity")),
        lambda: fetch_movie_details(tmdb_id),
    ))


async def load_analysis(session: AsyncSession | None, movie: dict[str, Any]) -> dict[str, Any]:
    tmdb_id = movie["id"]
    key = f"movie:{tmdb_id}:analysis"
    ttl = cache.analysis_ttl(movie.get("release_date"), movie.get("popularity"))

    async def fetch() -> dict[str, Any]:
        comments, errors = await collect_review_comments(movie.get("title") or "", movie.get("release_date"), tmdb_id)
        await persist_comments(session, tmdb_id, comments)
        analysis = analyze(comments, errors)
        await persist_movie(session, movie, analysis)
        return analysis

    if ttl == 0:  # released within 2 days: bypass the analysis cache
        return await single_flight(f"{key}:bypass", fetch)
    # A failed/empty collection is only kept for the minimum TTL so it is retried soon.
    ttl_for = lambda a: ttl if a.get("reviews_analyzed") else settings.cache_min_ttl_seconds
    return await single_flight(key, lambda: cache.cached(session, key, "review-analysis", ttl_for, fetch))


# ---- routes ----------------------------------------------------------------------------------
async def health() -> JSONResponse:
    missing = settings.missing_keys()
    body = {
        "ok": not missing, "ready": not missing, "missing": missing,
        "database": session_factory is not None, "tmdb": bool(settings.tmdb_api_key), "youtube": bool(settings.youtube_api_key),
    }
    if settings.database_url and session_factory is None:
        body["database_error"] = database_error or "Database not initialised"
    return JSONResponse(body, status_code=200 if not missing else 503)


app.add_api_route("/health", health, methods=["GET"])
router.add_api_route("/health", health, methods=["GET"])


@router.get("/search")
async def search(q: str = Query(min_length=1), page: int = Query(1, ge=1), session: AsyncSession | None = Session) -> dict[str, Any]:
    async def fetch() -> dict[str, Any]:
        result = await tmdb("/search/movie", {"query": q, "page": page, "include_adult": "false"})
        items = [
            {"id": i.get("id"), "title": i.get("title"), "overview": i.get("overview"), "release_date": i.get("release_date"),
             "vote_average": i.get("vote_average"), "vote_count": i.get("vote_count"), "poster_url": poster_url(i.get("poster_path"))}
            for i in result.get("results", [])
        ]
        return {"page": result.get("page", page), "total_pages": result.get("total_pages", 1), "results": items}

    return await cache.cached(session, f"search:{q.strip().lower()}:{page}", "search", cache.SEARCH_TTL, fetch)


def _register_list(kind: str) -> None:
    async def list_movies(page: int = Query(1, ge=1), session: AsyncSession | None = Session) -> dict[str, Any]:
        async def fetch() -> dict[str, Any]:
            result = await tmdb(f"/movie/{LIST_PATHS[kind]}", {"page": page})
            return {**result, "results": [{**x, "poster_url": poster_url(x.get("poster_path"))} for x in result.get("results", [])]}

        return await cache.cached(session, f"list:{kind}:{page}", "movie-list", cache.LIST_TTL, fetch)

    router.add_api_route(f"/movies/{kind}", list_movies, methods=["GET"], name=f"list_{kind}")


for _kind in LIST_KINDS:  # registered before /movies/{movie_id} so "popular" etc. are not read as ids
    _register_list(_kind)


@router.get("/movies/{movie_id}")
async def movie_details(movie_id: int, session: AsyncSession | None = Session) -> dict[str, Any]:
    return await load_details(session, movie_id)


@router.get("/movies/{movie_id}/analysis")
async def movie_analysis(movie_id: int, session: AsyncSession | None = Session) -> dict[str, Any]:
    return await load_analysis(session, await load_details(session, movie_id))


@router.get("/movies/{movie_id}/full")
async def movie_full(movie_id: int, session: AsyncSession | None = Session) -> dict[str, Any]:
    movie = await load_details(session, movie_id)
    return {"movie": movie, "analysis": await load_analysis(session, movie)}


@router.get("/movies/{movie_id}/reviews")
async def movie_reviews(movie_id: int, session: AsyncSession | None = Session) -> dict[str, Any]:
    analysis = await load_analysis(session, await load_details(session, movie_id))
    return {"source": "youtube", "reviews": analysis.get("positive_reviews", []) + analysis.get("negative_reviews", []), "analysis": analysis}


@router.get("/movies/{movie_id}/trailer")
async def movie_trailer(movie_id: int, session: AsyncSession | None = Session) -> dict[str, Any]:
    movie = await load_details(session, movie_id)
    return {"source": "youtube", "trailer": movie.get("trailer")}


app.include_router(router)
