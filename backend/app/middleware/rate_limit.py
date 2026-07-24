"""Light in-memory rate limiting for expensive API routes."""

from __future__ import annotations

import time
from collections import defaultdict, deque
from typing import Callable

from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from starlette.responses import JSONResponse, Response

# path prefix -> (max_requests, window_seconds)
RATE_LIMIT_RULES: dict[str, tuple[int, int]] = {
    "/api/v1/analyze": (20, 60),
    "/api/v1/analyze/stream": (20, 60),
    "/api/v1/analyze/ab": (10, 60),
    "/api/v1/followup": (40, 60),
    "/api/v1/documents/upload": (30, 3600),
    "/api/v1/documents/ingest-url": (20, 3600),
}

_PUBLIC_LIMIT = (120, 60)  # health, demo, stats


class RateLimitMiddleware(BaseHTTPMiddleware):
    def __init__(self, app, *, enabled: bool = True) -> None:  # noqa: ANN001
        super().__init__(app)
        self.enabled = enabled
        self._hits: dict[str, deque[float]] = defaultdict(deque)

    def _client_key(self, request: Request) -> str:
        auth = request.headers.get("authorization", "")
        if auth.lower().startswith("bearer "):
            return f"user:{auth[7:36]}"
        forwarded = request.headers.get("x-forwarded-for", "")
        ip = forwarded.split(",")[0].strip() if forwarded else (request.client.host if request.client else "unknown")
        return f"ip:{ip}"

    def _rule_for(self, path: str) -> tuple[int, int]:
        for prefix, rule in RATE_LIMIT_RULES.items():
            if path == prefix or path.startswith(prefix + "/"):
                return rule
        if path in ("/health", "/api/v1/demo", "/api/v1/stats/public"):
            return _PUBLIC_LIMIT
        return (0, 0)

    def _allow(self, key: str, limit: int, window: int) -> tuple[bool, int]:
        now = time.monotonic()
        bucket = self._hits[key]
        while bucket and now - bucket[0] > window:
            bucket.popleft()
        if limit and len(bucket) >= limit:
            retry_after = max(1, int(window - (now - bucket[0])))
            return False, retry_after
        bucket.append(now)
        return True, 0

    async def dispatch(self, request: Request, call_next: Callable) -> Response:
        if not self.enabled or request.method == "OPTIONS":
            return await call_next(request)

        limit, window = self._rule_for(request.url.path)
        if not limit:
            return await call_next(request)

        bucket_key = f"{request.url.path}:{self._client_key(request)}"
        allowed, retry_after = self._allow(bucket_key, limit, window)
        if not allowed:
            return JSONResponse(
                status_code=429,
                content={"detail": "Çok fazla istek. Lütfen kısa süre sonra tekrar deneyin."},
                headers={"Retry-After": str(retry_after)},
            )

        response = await call_next(request)
        response.headers["X-RateLimit-Limit"] = str(limit)
        response.headers["X-RateLimit-Window"] = str(window)
        return response
