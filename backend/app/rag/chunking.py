"""Text chunking with overlap for RAG ingest."""

from __future__ import annotations


def chunk_text(
    text: str,
    *,
    chunk_size: int = 800,
    overlap: int = 150,
) -> list[str]:
    cleaned = " ".join(text.split())
    if not cleaned:
        return []

    if len(cleaned) <= chunk_size:
        return [cleaned]

    chunks: list[str] = []
    start = 0
    while start < len(cleaned):
        end = min(start + chunk_size, len(cleaned))
        # Prefer breaking on sentence/word boundaries
        if end < len(cleaned):
            window = cleaned[start:end]
            for sep in (". ", "? ", "! ", "; ", ", ", " "):
                idx = window.rfind(sep)
                if idx > chunk_size // 3:
                    end = start + idx + len(sep)
                    break
        piece = cleaned[start:end].strip()
        if piece:
            chunks.append(piece)
        if end >= len(cleaned):
            break
        start = max(end - overlap, start + 1)

    return chunks
