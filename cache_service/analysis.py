"""Deterministic lexicon-based sentiment analysis with aspect detection.

score(sentence) = positive matches - negative matches; zero-score sentences are not scored.
P = 100 * N+ / (N+ + N-);  P >= 65 Mostly Positive, P <= 35 Mostly Negative, else Mixed,
no scored sentences -> Not enough data.
"""
from __future__ import annotations

import re
from typing import Any

POSITIVE_WORDS = {
    "amazing", "awesome", "beautiful", "best", "brilliant", "captivating", "classic", "stunning",
    "entertaining", "epic", "excellent", "fantastic", "fun", "funny", "good", "gorgeous", "great",
    "incredible", "love", "loved", "loves", "masterpiece", "outstanding", "perfect", "superb",
    "phenomenal", "solid", "wonderful", "powerful", "moving", "enjoyed", "impressive", "hilarious",
    "gripping", "thrilling", "charming", "favorite", "favourite", "must-see", "underrated",
}
NEGATIVE_WORDS = {
    "awful", "bad", "boring", "cringe", "disappointing", "disappointed", "dull", "forgettable",
    "garbage", "hate", "hated", "horrible", "mess", "messy", "mediocre", "overrated", "pointless",
    "poor", "predictable", "rushed", "slow", "stupid", "terrible", "trash", "waste", "weak",
    "worst", "unwatchable", "annoying", "confusing", "lazy", "flat", "bland", "dragged", "drags",
}
ASPECTS: dict[str, set[str]] = {
    "Acting": {"acting", "actor", "actors", "actress", "actresses", "performance", "performances", "cast", "portrayal", "role"},
    "Story": {"story", "storyline", "plot", "script", "writing", "screenplay", "ending", "twist", "dialogue", "twists"},
    "Visuals": {"visual", "visuals", "cinematography", "effects", "cgi", "camera", "shots", "animation", "scenery", "imax", "vfx"},
    "Music": {"music", "score", "soundtrack", "song", "songs", "sound", "composer"},
    "Pacing": {"pacing", "pace", "paced", "runtime", "length", "editing", "dragged", "drags", "rushed"},
}
SENTENCE_SPLIT = re.compile(r"(?<=[.!?])\s+|\n+")
TOKEN = re.compile(r"[a-z][a-z'\-]*")


def _score(tokens: list[str]) -> int:
    return sum(t in POSITIVE_WORDS for t in tokens) - sum(t in NEGATIVE_WORDS for t in tokens)


def verdict_for(pct: float | None) -> str:
    if pct is None:
        return "Not enough data"
    if pct >= 65:
        return "Mostly Positive"
    if pct <= 35:
        return "Mostly Negative"
    return "Mixed"


def analyze(comments: list[dict[str, Any]], source_errors: dict[str, str] | None = None) -> dict[str, Any]:
    positive: list[tuple[int, str]] = []
    negative: list[tuple[int, str]] = []
    aspects = {name: {"positive": 0, "negative": 0, "positive_examples": [], "negative_examples": []} for name in ASPECTS}
    seen: set[str] = set()

    for comment in comments:
        for raw in SENTENCE_SPLIT.split(comment.get("text") or ""):
            sentence = re.sub(r"\s+", " ", raw).strip()
            if len(sentence) < 15:
                continue
            fingerprint = sentence.lower()
            if fingerprint in seen:
                continue
            seen.add(fingerprint)
            tokens = TOKEN.findall(fingerprint)
            score = _score(tokens)
            if score == 0:
                continue  # neutral sentences are excluded from the scored total
            side = "positive" if score > 0 else "negative"
            (positive if score > 0 else negative).append((abs(score), sentence[:300]))
            token_set = set(tokens)
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

    def top(items: list[tuple[int, str]]) -> list[str]:
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
