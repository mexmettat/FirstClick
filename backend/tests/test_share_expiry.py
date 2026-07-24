from datetime import datetime, timedelta, timezone

import pytest
from fastapi import HTTPException

from app.services.share_links import (
    assert_share_active,
    default_share_expires_at,
    is_share_expired,
    parse_expires_at,
)


def test_default_expiry_is_in_future():
    expires = default_share_expires_at(days=7)
    assert not is_share_expired(expires)


def test_expired_share_detected():
    past = (datetime.now(timezone.utc) - timedelta(hours=1)).isoformat()
    assert is_share_expired(past)


def test_active_share_passes():
    future = (datetime.now(timezone.utc) + timedelta(days=2)).isoformat()
    assert_share_active(future)


def test_expired_share_raises_410():
    past = (datetime.now(timezone.utc) - timedelta(minutes=5)).isoformat()
    with pytest.raises(HTTPException) as exc:
        assert_share_active(past)
    assert exc.value.status_code == 410


def test_parse_zulu_timestamp():
    parsed = parse_expires_at("2026-01-01T00:00:00Z")
    assert parsed.tzinfo is not None
