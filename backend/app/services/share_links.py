"""Share link expiry helpers."""

from __future__ import annotations

from datetime import datetime, timedelta, timezone

from fastapi import HTTPException

DEFAULT_SHARE_TTL_DAYS = 30


def default_share_expires_at(*, days: int = DEFAULT_SHARE_TTL_DAYS) -> str:
    return (datetime.now(timezone.utc) + timedelta(days=days)).isoformat()


def parse_expires_at(value: str) -> datetime:
    normalized = value.replace("Z", "+00:00")
    parsed = datetime.fromisoformat(normalized)
    if parsed.tzinfo is None:
        parsed = parsed.replace(tzinfo=timezone.utc)
    return parsed


def is_share_expired(expires_at: str | None) -> bool:
    if not expires_at:
        return False
    return parse_expires_at(expires_at) <= datetime.now(timezone.utc)


def assert_share_active(expires_at: str | None) -> None:
    if is_share_expired(expires_at):
        raise HTTPException(status_code=410, detail="Paylaşım linkinin süresi dolmuş.")
