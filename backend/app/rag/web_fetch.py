"""Fetch and extract readable text from a public URL (dynamic corpus)."""

from __future__ import annotations

import logging
import re
from html.parser import HTMLParser

import httpx

from app.security.url_policy import assert_public_http_url

logger = logging.getLogger(__name__)


class _TextExtractor(HTMLParser):
    SKIP = {"script", "style", "noscript", "svg", "nav", "footer", "header"}

    def __init__(self) -> None:
        super().__init__()
        self._skip_depth = 0
        self._parts: list[str] = []
        self.title = ""
        self._in_title = False

    def handle_starttag(self, tag: str, attrs) -> None:  # noqa: ANN001
        if tag.lower() in self.SKIP:
            self._skip_depth += 1
        if tag.lower() == "title":
            self._in_title = True

    def handle_endtag(self, tag: str) -> None:
        if tag.lower() in self.SKIP and self._skip_depth:
            self._skip_depth -= 1
        if tag.lower() == "title":
            self._in_title = False

    def handle_data(self, data: str) -> None:
        text = data.strip()
        if not text:
            return
        if self._in_title:
            self.title = text
            return
        if self._skip_depth == 0:
            self._parts.append(text)


def _normalize_url(url: str) -> str:
    return assert_public_http_url(url)


async def fetch_url_text(url: str) -> tuple[str, str]:
    """Return (title, plain_text) from a public webpage."""
    clean = _normalize_url(url)
    async with httpx.AsyncClient(
        timeout=30.0,
        follow_redirects=True,
        headers={"User-Agent": "FirstClickBot/1.0 (+local research crawler)"},
    ) as client:
        response = await client.get(clean)

    if response.status_code >= 400:
        raise ValueError(f"Sayfa alınamadı (HTTP {response.status_code}).")

    content_type = (response.headers.get("content-type") or "").lower()
    if "html" not in content_type and "text" not in content_type:
        raise ValueError("Bu URL HTML/metin değil; PDF için dosya yükleme kullanın.")

    raw = response.text
    parser = _TextExtractor()
    try:
        parser.feed(raw)
    except Exception as exc:
        logger.warning("HTML parse soft-fail: %s", exc)

    title = parser.title or clean
    text = " ".join(parser._parts)
    text = re.sub(r"\s+", " ", text).strip()
    if len(text) < 80:
        raise ValueError("Sayfadan yeterli metin çıkarılamadı.")
    # Cap corpus size per page
    return title[:200], text[:40000]
