from app.middleware.security_headers import SECURITY_HEADERS


def test_security_headers_on_health(client):
    response = client.get("/health")
    assert response.status_code == 200
    for key, value in SECURITY_HEADERS.items():
        assert response.headers.get(key) == value
    assert response.headers.get("x-request-id")


def test_security_headers_on_public_demo(client):
    response = client.get("/api/v1/demo")
    assert response.status_code == 200
    assert response.headers.get("x-content-type-options") == "nosniff"
