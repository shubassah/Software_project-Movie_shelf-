"""Filter YouTube comments before sentiment analysis.

Keeps only comments that are (1) in English, (2) long enough, and
(3) about the movie being analysed, not some other movie.
"""
from __future__ import annotations

import re
from typing import Any

MIN_WORDS = 6
MIN_ENGLISH_STOPWORD_RATIO = 0.25  # share of words that are common English words
MIN_ASCII_LETTER_RATIO = 0.9

# Common English words. Hinglish is written in Latin letters, so an ASCII check alone
# cannot catch it; this list does.
ENGLISH_WORDS = {
    "the", "a", "an", "and", "or", "but", "is", "are", "was", "were", "be", "been", "it", "its",
    "this", "that", "these", "those", "i", "you", "he", "she", "we", "they", "me", "my", "your",
    "his", "her", "their", "our", "to", "of", "in", "on", "at", "for", "with", "from", "by", "as",
    "not", "no", "so", "very", "just", "have", "has", "had", "do", "did", "does", "will", "would",
    "can", "could", "if", "when", "what", "which", "who", "how", "all", "more", "most", "than",
    "about", "there", "here", "out", "up", "one", "too", "really", "even", "like", "because",
}

# Common Hindi/Hinglish words written in Latin letters.
HINGLISH = {
    "hai", "he", "nhi", "nahi", "ka", "ki", "ke", "ko", "kya", "bhai", "yaar", "aap", "aapko",
    "tumhe", "achha", "acha", "achi", "bahut", "bhaut", "mein", "main", "hota", "hoga", "isliye",
    "kunki", "kaam", "aayi", "rahi", "bhi", "toh", "mst", "dekh", "dekho", "kar", "karo", "wala",
    "yogi", "kabhi", "abhi", "bohot", "sir", "bana", "banega", "wo", "ye", "ek", "aur", "se", "par",
}
MAX_HINGLISH_WORDS = 1

# Words that suggest the comment is talking about a film.
MOVIE_WORDS = re.compile(
    r"\b(movie|film|ending|scene|scenes|acting|actor|actress|plot|story|climax|director|"
    r"cinematography|soundtrack|performance|screenplay|sequel|watched|watching|trailer)\b",
    re.IGNORECASE,
)

# "Some Title (2021)" or "Some Title 2021" style mentions.
YEAR_TITLE = re.compile(r"((?:[A-Z][\w'’:\-]*\s?){1,6})\s*[\(\[]?((?:19|20)\d{2})[\)\]]?")
# "movie The Wild Robot", "watch Inception"
AFTER_MOVIE = re.compile(r"\b(?:movie|film|watch|watched)\s+((?:The\s+)?(?:[A-Z][\w'’\-]*\s?){1,5})")
# Quoted text such as "Resident Evil" or “Wild Robot”.
QUOTED = re.compile(r"[\"“”']([A-Z][^\"“”']{2,50})[\"“”']")


# Emojis, pictographs, dingbats (❤ ✨ ⭐), arrows/symbols, skin-tone modifiers, ZWJ and variation selectors.
EMOJI = re.compile(
    "["
    "\U0001F000-\U0001FAFF"  # emoticons, symbols, pictographs, flags
    "\u2300-\u23FF"          # misc technical (⌚ ⏰)
    "\u2600-\u27BF"          # misc symbols + dingbats (☀ ❤ ✔)
    "\u2B00-\u2BFF"          # arrows and stars (⭐ ⬆)
    "\u2190-\u21FF"          # arrows
    "\u203C\u2049\u2122\u2139"  # ‼ ⁉ ™ ℹ
    "\uFE0F\u200D\u20E3"    # variation selector, zero-width joiner, keycap
    "]+"
)


def strip_emojis(text: str) -> str:
    text = EMOJI.sub(" ", text)
    return re.sub(r"\s{2,}", " ", text).strip()


def _norm(text: str) -> str:
    return re.sub(r"[^a-z0-9 ]+", " ", text.lower()).strip()


def _words(text: str) -> list[str]:
    return re.findall(r"[A-Za-z']+", text)


def is_english(text: str) -> bool:
    letters = [c for c in text if c.isalpha()]
    if not letters:
        return False
    ascii_ratio = sum(c.isascii() for c in letters) / len(letters)
    if ascii_ratio < MIN_ASCII_LETTER_RATIO:
        return False
    words = [w.lower() for w in _words(text)]
    if not words:
        return False
    if sum(w in HINGLISH for w in words) > MAX_HINGLISH_WORDS:
        return False
    hits = sum(w in ENGLISH_WORDS for w in words)
    return hits / len(words) >= MIN_ENGLISH_STOPWORD_RATIO


def _movie_names(movie: dict[str, Any]) -> tuple[set[str], set[str]]:
    """Return (title phrases, people names) in normalised form."""
    titles = {_norm(movie.get("title") or "")}
    if ":" in (movie.get("title") or ""):  # "Resident Evil: Welcome to Raccoon City" -> also "resident evil"
        titles.add(_norm(movie["title"].split(":")[0]))
    people: set[str] = set()
    names = [c.get("name") for c in movie.get("cast", [])[:5]] + [movie.get("director")]
    for name in filter(None, names):
        full = _norm(name)
        people.add(full)
        last = full.split()[-1] if full.split() else ""
        if len(last) >= 4:
            people.add(last)
    titles.discard("")
    return titles, people


def _mentions_other_title(text: str, titles: set[str], people: set[str]) -> bool:
    """True if the comment names a title (with a year, or in quotes) that is not this movie."""
    candidates = (
        [m.group(1) for m in YEAR_TITLE.finditer(text)]
        + [m.group(1) for m in AFTER_MOVIE.finditer(text)]
        + QUOTED.findall(text)
    )
    for cand in candidates:
        n = _norm(cand)
        if len(n) < 4 or n in people:
            continue
        if any(t in n or n in t for t in titles):
            continue
        return True
    return False


def filter_comments(comments: list[dict[str, Any]], movie: dict[str, Any]) -> list[dict[str, Any]]:
    titles, people = _movie_names(movie)
    kept: list[dict[str, Any]] = []
    for c in comments:
        text = strip_emojis(c.get("text") or "")  # emojis removed before the model and before display
        if len(_words(text)) < MIN_WORDS:
            continue
        if not is_english(text):
            continue
        norm = _norm(text)
        if _mentions_other_title(text, titles, people):
            continue
        about_this = (
            any(t in norm for t in titles)
            or any(re.search(rf"\b{re.escape(p)}\b", norm) for p in people)
            or MOVIE_WORDS.search(text)
        )
        if about_this:
            kept.append({**c, "text": text})
    return kept