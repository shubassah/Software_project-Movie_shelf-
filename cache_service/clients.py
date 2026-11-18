"""TMDB and YouTube clients."""
from __future__ import annotations

from typing import Any

import httpx
from fastapi import HTTPException

from .config import settings

TMDB_BASES = ("https://api.themoviedb.org/3", "https://api.tmdb.org/3")
YOUTUBE_BASE = "https://www.googleapis.com/youtube/v3"
IMAGE_BASE = "https://image.tmdb.org/t/p/w500"


def poster_url(path: str | None) -> str | None:
    return f"{IMAGE_BASE}{path}" if path else None


async def tmdb(path: str, params: dict[str, Any] | None = None) -> dict[str, Any]:
    """Try both TMDB API hosts; raise a controlled error if both fail."""
    if not settings.tmdb_api_key:
        raise HTTPException(503, "TMDB_API_KEY is not configured")
    query = {"api_key": settings.tmdb_api_key, "language": "en-US", **(params or {})}
    async with httpx.AsyncClient(timeout=15) as client:
        for base in TMDB_BASES:
            try:
                response = await client.get(f"{base}{path}", params=query)
            except httpx.HTTPError:
                continue
            if response.status_code == 404:
                raise HTTPException(404, "Movie not found")
            if response.status_code < 400:
                return response.json()
    raise HTTPException(502, "TMDB is unavailable right now")


def trailer_from_tmdb(videos: dict[str, Any] | None) -> dict[str, Any] | None:
    """Pick the best YouTube trailer from TMDB's appended `videos` block."""
    results = [v for v in (videos or {}).get("results", []) if v.get("site") == "YouTube" and v.get("key")]
    if not results:
        return None
    def rank(v: dict[str, Any]) -> tuple[int, int]:
        return (0 if v.get("type") == "Trailer" else 1 if v.get("type") == "Teaser" else 2, 0 if v.get("official") else 1)
    best = sorted(results, key=rank)[0]
    vid = best["key"]
    return {"video_id": vid, "name": best.get("name") or "Trailer", "youtube_url": f"https://www.youtube.com/watch?v={vid}", "youtube_embed_url": f"https://www.youtube.com/embed/{vid}"}


async def _youtube(path: str, params: dict[str, Any]) -> httpx.Response:
    async with httpx.AsyncClient(timeout=20) as client:
        return await client.get(f"{YOUTUBE_BASE}/{path}", params={"key": settings.youtube_api_key, **params})


async def youtube_trailer_search(title: str, release_date: str | None) -> dict[str, Any] | None:
    """Fallback when TMDB has no trailer video."""
    if not settings.youtube_api_key:
        return None
    year = (release_date or "")[:4]
    try:
        response = await _youtube("search", {"part": "snippet", "q": f"{title} {year} official trailer", "type": "video", "maxResults": 1})
    except httpx.HTTPError:
        return None
    if response.status_code >= 400:
        return None
    items = response.json().get("items", [])
    vid = items[0].get("id", {}).get("videoId") if items else None
    if not vid:
        return None
    return {"video_id": vid, "name": items[0].get("snippet", {}).get("title", f"{title} trailer"), "youtube_url": f"https://www.youtube.com/watch?v={vid}", "youtube_embed_url": f"https://www.youtube.com/embed/{vid}"}


async def collect_review_comments(title: str, release_date: str | None, tmdb_id: int, max_videos: int = 3) -> tuple[list[dict[str, Any]], dict[str, str]]:
    """Search YouTube for review videos and collect top-level comments.

    Videos whose comments are unavailable are skipped rather than failing the whole collection.
    """
    errors: dict[str, str] = {}
    if not settings.youtube_api_key:
        return [], {"youtube": "YOUTUBE_API_KEY is not configured"}
    year = (release_date or "")[:4]
    try:
        search = await _youtube("search", {"part": "snippet", "q": f"{title} {year} movie review", "type": "video", "maxResults": 5, "relevanceLanguage": "en"})
    except httpx.HTTPError:
        return [], {"youtube": "YouTube search is unavailable right now"}
    if search.status_code >= 400:
        return [], {"youtube": "YouTube search failed (quota or key problem)"}
    video_ids = [i.get("id", {}).get("videoId") for i in search.json().get("items", [])]
    comments: list[dict[str, Any]] = []
    used = 0
    for video_id in filter(None, video_ids):
        if used >= max_videos:
            break
        try:
            response = await _youtube("commentThreads", {"part": "snippet", "videoId": video_id, "maxResults": 50, "textFormat": "plainText", "order": "relevance"})
        except httpx.HTTPError:
            errors[video_id] = "Comments could not be loaded for one review video"
            continue
        if response.status_code >= 400:
            errors[video_id] = "Comments are unavailable for one review video"
            continue  # skip unavailable comment threads
        used += 1
        for item in response.json().get("items", []):
            snippet = item.get("snippet", {}).get("topLevelComment", {}).get("snippet", {})
            if not item.get("id") or not snippet.get("textDisplay"):
                continue
            comments.append({
                "id": item["id"], "tmdb_id": tmdb_id, "video_id": video_id,
                "author_name": snippet.get("authorDisplayName"), "text": snippet.get("textDisplay", ""),
                "like_count": snippet.get("likeCount", 0), "published_at": snippet.get("publishedAt"), "data": item,
            })
    if not comments and not errors:
        errors["youtube"] = "No review comments were found for this movie"
    return comments, errors
