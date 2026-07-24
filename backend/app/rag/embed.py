"""OpenAI embeddings for RAG."""

from __future__ import annotations

import logging

import httpx

from app.config import settings

logger = logging.getLogger(__name__)


async def embed_texts(texts: list[str]) -> list[list[float]]:
    if not texts:
        return []
    if not settings.openai_api_key:
        raise RuntimeError("OPENAI_API_KEY gerekli (embedding).")

    async with httpx.AsyncClient(timeout=60.0) as client:
        response = await client.post(
            "https://api.openai.com/v1/embeddings",
            headers={
                "Authorization": f"Bearer {settings.openai_api_key}",
                "Content-Type": "application/json",
            },
            json={
                "model": settings.openai_embedding_model,
                "input": texts,
                "dimensions": 1536,
            },
        )

    if response.status_code != 200:
        logger.error("Embedding error: %s %s", response.status_code, response.text)
        raise RuntimeError("Embedding isteği başarısız.")

    data = response.json().get("data", [])
    data_sorted = sorted(data, key=lambda item: item["index"])
    return [item["embedding"] for item in data_sorted]


async def embed_query(text: str) -> list[float]:
    vectors = await embed_texts([text])
    return vectors[0]
