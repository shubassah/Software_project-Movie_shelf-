"""Sentiment analysis with aspect detection.

Every sentence is scored by the DeBERTa model service (SENTIMENT_API_URL).
There is no word-list fallback: if the model service fails, analyze() raises.

P = 100 * N+ / (N+ + N-);  P >= 65 Mostly Positive, P <= 35 Mostly Negative, else Mixed,
no scored sentences -> Not enough data.
"""
from __future__ import annotations

import os
import re
from typing import Any

import httpx
from langdetect import DetectorFactory, LangDetectException, detect

DetectorFactory.seed = 0  # makes language detection repeatable
from dotenv import load_dotenv
load_dotenv()  # reads .env from the project root (run the service from there)
SENTIMENT_API_URL = os.getenv("SENTIMENT_API_URL", "").rstrip("/")
SENTIMENT_API_KEY = os.getenv("SENTIMENT_API_KEY", "")
MIN_CONFIDENCE = 0.9      # below this, a sentence counts as neutral
MAX_SENTENCES = 150       # lower to 80 if pages time out

# Used only to tag WHICH aspect a sentence talks about. Sentiment comes from the model.
ASPECTS: dict[str, set[str]] = {
    "Acting": {"acting", "actor", "actors", "actress", "actresses", "performance", "performances", "cast", "portrayal", "role"},
    "Story": {"story", "storyline", "plot", "script", "writing", "screenplay", "ending", "twist", "dialogue", "twists"},
    "Visuals": {"visual", "visuals", "cinematography", "effects", "cgi", "camera", "shots", "animation", "scenery", "imax", "vfx"},
    "Music": {"music", "score", "soundtrack", "song", "songs", "sound", "composer"},
    "Pacing": {"pacing", "pace", "paced", "runtime", "length", "editing", "dragged", "drags", "rushed"},
}
SENTENCE_SPLIT = re.compile(r"(?<=[.!?])\s+|\n+")
TOKEN = re.compile(r"[a-z][a-z'\-]*")


def _is_english(text: str) -> bool:
    try:
        return detect(text) == "en"
    except LangDetectException:
        return False


def _collect_sentences(comments: list[dict[str, Any]]) -> list[str]:
    """Unique English sentences (15+ chars), up to MAX_SENTENCES."""
    seen: set[str] = set()
    out: list[str] = []
    for comment in comments:
        for raw in SENTENCE_SPLIT.split(comment.get("text") or ""):
            sentence = re.sub(r"\s+", " ", raw).strip()
            if len(sentence) < 15:
                continue
            fingerprint = sentence.lower()
            if fingerprint in seen:
                continue
            seen.add(fingerprint)
            if not _is_english(sentence):
                continue
            out.append(sentence)
            if len(out) >= MAX_SENTENCES:
                return out
    return out


def _model_scores(sentences: list[str]) -> list[int]:
    """+1 (Positive) / -1 (Negative) / 0 (low confidence) per sentence, from the model."""
    if not sentences:
        return []
    if not SENTIMENT_API_URL:
        raise RuntimeError("SENTIMENT_API_URL is not set")

    last_error: Exception | None = None
    for _ in range(2):  # one retry, e.g. while the service wakes up
        try:
            r = httpx.post(
                f"{SENTIMENT_API_URL}/predict_batch",
                json={"texts": sentences},
                headers={"x-api-key": SENTIMENT_API_KEY},
                timeout=90,
            )
            r.raise_for_status()
            results = r.json()["results"]
            if len(results) != len(sentences):
                raise RuntimeError("Model returned the wrong number of results")
            scores: list[int] = []
            for item in results:
                if item["confidence"] < MIN_CONFIDENCE:
                    scores.append(0)
                else:
                    scores.append(1 if item["label"] == "Positive" else -1)
            return scores
        except Exception as exc:
            last_error = exc
    raise RuntimeError(f"Sentiment model request failed: {last_error}")


def verdict_for(pct: float | None) -> str:
    if pct is None:
        return "Not enough data"
    if pct >= 65:
        return "Mostly Positive"
    if pct <= 35:
        return "Mostly Negative"
    return "Mixed"


def analyze(comments: list[dict[str, Any]], source_errors: dict[str, str] | None = None) -> dict[str, Any]:
    positive: list[tuple[float, str]] = []
    negative: list[tuple[float, str]] = []
    aspects = {name: {"positive": 0, "negative": 0, "positive_examples": [], "negative_examples": []} for name in ASPECTS}

    sentences = _collect_sentences(comments)
    model_scores = _model_scores(sentences)

    for sentence, score in zip(sentences, model_scores):
        if score == 0:
            continue  # low-confidence sentences are excluded from the scored total
        side = "positive" if score > 0 else "negative"
        (positive if score > 0 else negative).append((1, sentence[:300]))
        token_set = set(TOKEN.findall(sentence.lower()))
        for name, keywords in ASPECTS.items():
            if token_set & keywords:
                bucket = aspects[name]
                bucket[side] += 1
                if len(bucket[f"{side}_examples"]) < 3:
                    bucket[f"{side}_examples"].append(sentence[:300])

    n_pos, n_neg = len(positive), len(negative)
    total = n_pos + n_neg
    pct = round((n_pos / total) * 100, 1) if total else None
    verdict = verdict_for(pct)

    def top(items: list[tuple[float, str]]) -> list[str]:
        return [text for _, text in sorted(items, key=lambda x: (-x[0], -len(x[1])))[:12]]

    pros = [
        {"aspect": n, "mentions": a["positive"], "examples": a["positive_examples"]}
        for n, a in aspects.items() if a["positive"] > a["negative"]
    ]
    cons = [
        {"aspect": n, "mentions": a["negative"], "examples": a["negative_examples"]}
        for n, a in aspects.items() if a["negative"] > a["positive"]
    ]
    pros.sort(key=lambda x: -x["mentions"])
    cons.sort(key=lambda x: -x["mentions"])

    result: dict[str, Any] = {
        "source": "youtube",
        "reviews_analyzed": len(comments),
        "sentences_scored": total,
        "positive_sentences": n_pos,
        "negative_sentences": n_neg,
        "overall_positive_pct": pct,
        "overall_verdict": verdict,
        "summary": f"{verdict}: {pct}% positive across {total} scored sentences from {len(comments)} YouTube comments." if total else "Not enough YouTube review data yet.",
        "aspects": aspects,
        "pros": pros,
        "cons": cons,
        "positive_reviews": top(positive),
        "negative_reviews": top(negative),
    }
    if source_errors:
        result["source_errors"] = source_errors
    return result