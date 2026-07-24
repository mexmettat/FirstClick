"""Describe screenshots / prototypes with OpenAI vision for RAG ingest."""

from __future__ import annotations

import base64
import logging

import httpx

from app.config import settings

logger = logging.getLogger(__name__)


async def describe_image_bytes(data: bytes, *, mime: str, filename: str) -> str:
    """Return Turkish UX-oriented description of a product screenshot."""
    if not settings.openai_api_key:
        return (
            f"[Ekran görüntüsü: {filename}] Yapay zeka görsel analizi için OPENAI_API_KEY gerekli. "
            "Görsel yüklendi; metin açıklaması üretilemedi."
        )

    b64 = base64.b64encode(data).decode("ascii")
    data_url = f"data:{mime};base64,{b64}"
    prompt = (
        "Bu bir ürün / landing / prototip ekran görüntüsü. "
        "Türkçe olarak şunları yaz: (1) görünen ana mesaj ve CTA, "
        "(2) düzen / hiyerarşi, (3) olası kafa karışıklığı veya güven sorunları, "
        "(4) ilk 5 saniyede kullanıcı ne anlar. Madde madde, somut ol."
    )

    try:
        async with httpx.AsyncClient(timeout=60.0) as client:
            response = await client.post(
                "https://api.openai.com/v1/chat/completions",
                headers={
                    "Authorization": f"Bearer {settings.openai_api_key}",
                    "Content-Type": "application/json",
                },
                json={
                    "model": settings.openai_vision_model,
                    "messages": [
                        {
                            "role": "user",
                            "content": [
                                {"type": "text", "text": prompt},
                                {"type": "image_url", "image_url": {"url": data_url}},
                            ],
                        }
                    ],
                    "max_tokens": 700,
                },
            )
            response.raise_for_status()
            payload = response.json()
            text = payload["choices"][0]["message"]["content"]
            return f"[Ekran görüntüsü: {filename}]\n{text}".strip()
    except Exception as exc:
        logger.warning("vision describe failed: %s", exc)
        return (
            f"[Ekran görüntüsü: {filename}] Görsel yüklendi ancak otomatik açıklama "
            f"üretilmedi ({exc})."
        )
