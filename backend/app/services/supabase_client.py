from functools import lru_cache
import logging
from typing import Any

from supabase import Client, create_client

from app.config import settings

logger = logging.getLogger(__name__)


@lru_cache
def get_supabase() -> Client | None:
    if not settings.supabase_configured:
        return None
    return create_client(settings.supabase_url, settings.supabase_service_role_key)


def _bucket_missing(exc: BaseException) -> bool:
    text = str(exc).lower()
    return "bucket not found" in text or "404" in text and "bucket" in text


def ensure_storage_bucket(bucket: str | None = None) -> None:
    """Create private product-docs bucket if missing (common on fresh local Supabase)."""
    client = get_supabase()
    if client is None:
        return
    name = bucket or settings.supabase_storage_bucket
    try:
        buckets = client.storage.list_buckets()
        names: set[str] = set()
        for b in buckets:
            n = getattr(b, "name", None) or getattr(b, "id", None)
            if n is None and isinstance(b, dict):
                n = b.get("name") or b.get("id")
            if n:
                names.add(str(n))
        if name in names:
            return
        client.storage.create_bucket(name, options={"public": False})
        logger.info("Created storage bucket %s", name)
    except Exception as exc:
        # Race / already exists are fine
        logger.warning("ensure_storage_bucket(%s): %s", name, exc)


def upload_bytes_to_product_docs(
    storage_path: str,
    data: bytes,
    *,
    content_type: str = "application/octet-stream",
) -> None:
    """Upload with auto-create bucket + one retry on 'Bucket not found'."""
    client = get_supabase()
    if client is None:
        raise RuntimeError("Supabase yapılandırılmamış.")

    bucket = settings.supabase_storage_bucket
    ensure_storage_bucket(bucket)
    options: dict[str, Any] = {"content-type": content_type, "upsert": "true"}

    try:
        client.storage.from_(bucket).upload(storage_path, data, file_options=options)
        return
    except Exception as exc:
        if not _bucket_missing(exc):
            raise
        logger.warning("Bucket missing on upload; recreating %s (%s)", bucket, exc)

    # Force recreate then retry once
    try:
        client.storage.create_bucket(bucket, options={"public": False})
    except Exception as create_exc:
        logger.warning("create_bucket retry: %s", create_exc)

    client.storage.from_(bucket).upload(storage_path, data, file_options=options)
