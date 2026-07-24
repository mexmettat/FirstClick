from fastapi import APIRouter

from app.config import settings
from app.services.supabase_client import get_supabase

router = APIRouter(tags=["health"])


@router.get("/health")
async def health_check() -> dict:
    openai_ok = bool(settings.openai_api_key)
    supabase_ok = get_supabase() is not None
    mode = "openai" if openai_ok else "mock"
    return {
        "status": "ok",
        "service": "firstclick-api",
        "openaiConfigured": openai_ok,
        "supabaseConfigured": supabase_ok,
        "mode": mode,
        "security": {
            "headersEnabled": settings.security_headers_enabled,
            "rateLimitEnabled": settings.rate_limit_enabled,
        },
        "models": {
            "persona": settings.openai_model,
            "synthesis": settings.openai_synthesis_model,
            "embedding": settings.openai_embedding_model,
        },
    }
