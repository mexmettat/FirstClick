"""Block SSRF targets when fetching user-supplied URLs."""

from __future__ import annotations

import ipaddress
import re
from urllib.parse import urlparse

_BLOCKED_HOSTS = frozenset(
    {
        "localhost",
        "localhost.localdomain",
        "0.0.0.0",
        "127.0.0.1",
        "::1",
        "[::1]",
    }
)


def _hostname_is_private(host: str) -> bool:
    lowered = host.lower().rstrip(".")
    if lowered in _BLOCKED_HOSTS:
        return True
    if lowered.endswith(".local") or lowered.endswith(".internal"):
        return True

    try:
        addr = ipaddress.ip_address(lowered.strip("[]"))
        return addr.is_private or addr.is_loopback or addr.is_link_local or addr.is_reserved
    except ValueError:
        pass

    if re.fullmatch(r"169\.254\.\d{1,3}\.\d{1,3}", lowered):
        return True
    if lowered in ("metadata.google.internal", "metadata"):
        return True

    return False


def assert_public_http_url(url: str) -> str:
    """Validate http(s) URL and reject private/local targets."""
    parsed = urlparse(url.strip())
    if parsed.scheme not in ("http", "https") or not parsed.netloc:
        raise ValueError("Geçerli bir http(s) URL girin.")

    host = parsed.hostname
    if not host or _hostname_is_private(host):
        raise ValueError("Yerel veya özel ağ adresleri güvenlik nedeniyle engellendi.")

    return url.strip()
