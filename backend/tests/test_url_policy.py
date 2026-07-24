import pytest

from app.security.url_policy import assert_public_http_url


@pytest.mark.parametrize(
    "url",
    [
        "http://127.0.0.1/",
        "http://localhost/docs",
        "http://169.254.169.254/latest/meta-data",
        "http://10.0.0.5/internal",
        "http://192.168.1.10/",
    ],
)
def test_blocks_private_urls(url: str):
    with pytest.raises(ValueError, match="engellendi|Geçerli"):
        assert_public_http_url(url)


def test_allows_public_https():
    assert assert_public_http_url("https://example.com/landing") == "https://example.com/landing"


def test_rejects_non_http_scheme():
    with pytest.raises(ValueError):
        assert_public_http_url("file:///etc/passwd")
