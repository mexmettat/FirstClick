from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings
from app.middleware.rate_limit import RateLimitMiddleware
from app.middleware.security_headers import SecurityHeadersMiddleware
from app.routers import ab_analyze, analyses, analyze, documents, followup, health, knowledge, personas, products, public_extras, tts, workspaces

app = FastAPI(
    title="FirstClick API",
    description="AI destekli kullanıcı simülasyonu backend servisi (Auth + RAG)",
    version="1.5.0",
)

if settings.security_headers_enabled:
    app.add_middleware(SecurityHeadersMiddleware)

if settings.rate_limit_enabled:
    app.add_middleware(RateLimitMiddleware, enabled=True)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origin_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router)
app.include_router(public_extras.router)
app.include_router(analyze.router, prefix=settings.api_prefix)
app.include_router(ab_analyze.router, prefix=settings.api_prefix)
app.include_router(documents.router, prefix=settings.api_prefix)
app.include_router(products.router, prefix=settings.api_prefix)
app.include_router(analyses.router, prefix=settings.api_prefix)
app.include_router(followup.router, prefix=settings.api_prefix)
app.include_router(tts.router, prefix=settings.api_prefix)
app.include_router(personas.router, prefix=settings.api_prefix)
app.include_router(workspaces.router, prefix=settings.api_prefix)
app.include_router(knowledge.router, prefix=settings.api_prefix)
