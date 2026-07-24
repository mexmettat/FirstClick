import os

# Keep tests deterministic and avoid 429s during the suite.
os.environ.setdefault("RATE_LIMIT_ENABLED", "false")

import pytest
from fastapi.testclient import TestClient

from app.auth import AuthUser, get_current_user
from app.main import app

TEST_USER = AuthUser(id="11111111-1111-1111-1111-111111111111", email="test@example.com")


@pytest.fixture
def client() -> TestClient:
    return TestClient(app)


@pytest.fixture
def authed_client(client: TestClient):
    app.dependency_overrides[get_current_user] = lambda: TEST_USER
    yield client
    app.dependency_overrides.clear()
