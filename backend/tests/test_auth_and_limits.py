import pytest
from fastapi.testclient import TestClient

from app.main import app
from app.middleware.rate_limit import RateLimitMiddleware


@pytest.fixture
def limited_client() -> TestClient:
    limited_app = app
    # Stack already has rate limit disabled via env; test middleware directly below.
    return TestClient(limited_app)


@pytest.mark.parametrize(
    "method,path",
    [
        ("POST", "/api/v1/analyze"),
        ("POST", "/api/v1/analyze/stream"),
        ("POST", "/api/v1/analyze/ab"),
        ("GET", "/api/v1/products"),
        ("GET", "/api/v1/analyses"),
        ("POST", "/api/v1/followup"),
    ],
)
def test_protected_routes_require_auth(client, method: str, path: str):
    response = client.request(method, path, json={})
    assert response.status_code == 401


def test_public_demo_without_auth(client):
    response = client.get("/api/v1/demo")
    assert response.status_code == 200


def test_rate_limit_middleware_returns_429():
    from starlette.applications import Starlette
    from starlette.responses import PlainTextResponse
    from starlette.routing import Route

    async def ok(_request):
        return PlainTextResponse("ok")

    starlette_app = Starlette(routes=[Route("/api/v1/analyze", ok, methods=["POST"])])
    starlette_app.add_middleware(RateLimitMiddleware, enabled=True)

    test_client = TestClient(starlette_app)
    for _ in range(20):
        assert test_client.post("/api/v1/analyze").status_code == 200
    blocked = test_client.post("/api/v1/analyze")
    assert blocked.status_code == 429
    assert blocked.headers.get("retry-after")
