import uuid
from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException, Request, UploadFile
from starlette.datastructures import UploadFile as StarletteUploadFile

from app.auth import AuthUser, get_current_user
from app.config import settings
from app.rag.ingest import delete_document_chunks, extract_text_from_bytes, ingest_document_text
from app.rag.vision import describe_image_bytes
from app.rag.web_fetch import fetch_url_text
from app.schemas.analysis import DocumentOut, WebIngestRequest
from app.services.supabase_client import get_supabase, upload_bytes_to_product_docs
from app.services.workspace_access import (
    get_shared_product_ids,
    require_product_read,
    require_product_write,
)

router = APIRouter(prefix="/documents", tags=["documents"])

ALLOWED_EXTENSIONS = {".pdf", ".md", ".txt", ".markdown", ".png", ".jpg", ".jpeg", ".webp"}
IMAGE_EXTENSIONS = {".png", ".jpg", ".jpeg", ".webp"}
MAX_BYTES = 8 * 1024 * 1024


def _doc_out(row: dict) -> DocumentOut:
    return DocumentOut(
        id=row["id"],
        title=row["title"],
        product_id=row["product_id"],
        created_at=row.get("created_at"),
        byte_size=row.get("byte_size"),
        source_kind=row.get("source_kind") or "upload",
        source_url=row.get("source_url"),
    )


@router.get("", response_model=list[DocumentOut])
async def list_documents(
    user: Annotated[AuthUser, Depends(get_current_user)],
    product_id: str | None = None,
) -> list[DocumentOut]:
    client = get_supabase()
    if client is None:
        raise HTTPException(status_code=503, detail="Supabase yapılandırılmamış.")

    query = client.table("documents").select("*").eq("user_id", user.id).order("created_at", desc=True)
    if product_id:
        require_product_read(client, user.id, product_id)
        query = client.table("documents").select("*").eq("product_id", product_id).order("created_at", desc=True)
    response = query.execute()
    rows = list(response.data or [])
    if not product_id:
        shared_ids = get_shared_product_ids(client, user.id)
        if shared_ids:
            shared = (
                client.table("documents")
                .select("*")
                .in_("product_id", shared_ids)
                .order("created_at", desc=True)
                .execute()
            )
            seen = {row["id"] for row in rows}
            for row in shared.data or []:
                if row["id"] not in seen:
                    rows.append(row)
            rows.sort(key=lambda r: r.get("created_at") or "", reverse=True)
    return [_doc_out(row) for row in rows]


@router.post("/upload", response_model=DocumentOut)
async def upload_document(
    request: Request,
    user: Annotated[AuthUser, Depends(get_current_user)],
) -> DocumentOut:
    """Accept multipart upload via request.form() (avoids UploadFile-as-str validation errors)."""
    client = get_supabase()
    if client is None:
        raise HTTPException(status_code=503, detail="Supabase yapılandırılmamış.")

    content_type = (request.headers.get("content-type") or "").lower()
    if "multipart/form-data" not in content_type:
        raise HTTPException(
            status_code=400,
            detail="Dosya yükleme multipart/form-data olmalı. Sayfayı yenileyip tekrar deneyin.",
        )

    form = await request.form()
    product_id_raw = form.get("product_id")
    if not isinstance(product_id_raw, str) or not product_id_raw.strip():
        raise HTTPException(status_code=400, detail="product_id gerekli.")
    product_id = product_id_raw.strip()

    upload = form.get("file")
    if not isinstance(upload, (UploadFile, StarletteUploadFile)):
        raise HTTPException(
            status_code=400,
            detail="Dosya alınamadı. PDF, MD, TXT veya görsel seçtiğinizden emin olun.",
        )

    require_product_write(client, user.id, product_id)

    filename = upload.filename or "document.txt"
    lower = filename.lower()
    if not any(lower.endswith(ext) for ext in ALLOWED_EXTENSIONS):
        raise HTTPException(
            status_code=400,
            detail="Sadece PDF, MD, TXT veya ekran görüntüsü (PNG/JPG/WEBP) yükleyebilirsiniz.",
        )

    data = await upload.read()
    if len(data) > MAX_BYTES:
        raise HTTPException(status_code=400, detail="Dosya en fazla 8MB olabilir.")

    is_image = any(lower.endswith(ext) for ext in IMAGE_EXTENSIONS)
    source_kind = "screenshot" if is_image else "upload"
    mime = upload.content_type

    if is_image:
        text = await describe_image_bytes(data, mime=mime or "image/png", filename=filename)
    else:
        try:
            text = extract_text_from_bytes(data, filename, mime)
        except ValueError as exc:
            raise HTTPException(status_code=400, detail=str(exc)) from exc

    if not text.strip():
        raise HTTPException(status_code=400, detail="Dosyadan metin çıkarılamadı.")

    document_id = str(uuid.uuid4())
    storage_path = f"{user.id}/{product_id}/{document_id}_{filename}"

    try:
        upload_bytes_to_product_docs(
            storage_path,
            data,
            content_type=mime or "application/octet-stream",
        )
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Dosya yüklenemedi: {exc}") from exc

    title = filename
    row = {
        "id": document_id,
        "user_id": user.id,
        "product_id": product_id,
        "title": title,
        "storage_path": storage_path,
        "mime_type": mime,
        "byte_size": len(data),
        "source_kind": source_kind,
        "source_url": None,
    }
    try:
        client.table("documents").insert(row).execute()
    except Exception as exc:
        msg = str(exc)
        if "source_kind" in msg or "source_url" in msg:
            row.pop("source_kind", None)
            row.pop("source_url", None)
            client.table("documents").insert(row).execute()
            row["source_kind"] = source_kind
            row["source_url"] = None
        else:
            raise HTTPException(status_code=500, detail=f"Kayıt başarısız: {exc}") from exc

    try:
        await ingest_document_text(
            user_id=user.id,
            product_id=product_id,
            document_id=document_id,
            title=title,
            text=text,
            source_type="document",
        )
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"RAG ingest başarısız: {exc}") from exc

    return _doc_out(row)


@router.post("/ingest-url", response_model=DocumentOut)
async def ingest_url(
    body: WebIngestRequest,
    user: Annotated[AuthUser, Depends(get_current_user)],
) -> DocumentOut:
    """Dynamic corpus: fetch a public webpage into the product RAG corpus."""
    client = get_supabase()
    if client is None:
        raise HTTPException(status_code=503, detail="Supabase yapılandırılmamış.")

    require_product_write(client, user.id, body.product_id)

    try:
        title, text = await fetch_url_text(body.url)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    except Exception as exc:
        raise HTTPException(status_code=502, detail=f"URL alınamadı: {exc}") from exc

    document_id = str(uuid.uuid4())
    storage_path = f"{user.id}/{body.product_id}/{document_id}_web.txt"
    payload = text.encode("utf-8")

    try:
        upload_bytes_to_product_docs(
            storage_path,
            payload,
            content_type="text/plain",
        )
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Storage yazılamadı: {exc}") from exc

    row = {
        "id": document_id,
        "user_id": user.id,
        "product_id": body.product_id,
        "title": title,
        "storage_path": storage_path,
        "mime_type": "text/html",
        "byte_size": len(payload),
        "source_kind": "web",
        "source_url": body.url,
    }
    try:
        client.table("documents").insert(row).execute()
    except Exception as exc:
        # Migration 002 may not be applied yet — retry without new columns
        logger_msg = str(exc)
        if "source_kind" in logger_msg or "source_url" in logger_msg:
            row.pop("source_kind", None)
            row.pop("source_url", None)
            client.table("documents").insert(row).execute()
            row["source_kind"] = "web"
            row["source_url"] = body.url
        else:
            raise HTTPException(status_code=500, detail=f"Kayıt başarısız: {exc}") from exc

    try:
        await ingest_document_text(
            user_id=user.id,
            product_id=body.product_id,
            document_id=document_id,
            title=title,
            text=text,
            source_type="web",
            source_url=body.url,
        )
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"RAG ingest başarısız: {exc}") from exc

    return _doc_out(row)


@router.delete("/{document_id}")
async def delete_document(
    document_id: str,
    user: Annotated[AuthUser, Depends(get_current_user)],
) -> dict:
    client = get_supabase()
    if client is None:
        raise HTTPException(status_code=503, detail="Supabase yapılandırılmamış.")

    existing = (
        client.table("documents")
        .select("*")
        .eq("id", document_id)
        .eq("user_id", user.id)
        .limit(1)
        .execute()
    )
    if not existing.data:
        raise HTTPException(status_code=404, detail="Doküman bulunamadı.")

    row = existing.data[0]
    await delete_document_chunks(document_id)
    try:
        client.storage.from_(settings.supabase_storage_bucket).remove([row["storage_path"]])
    except Exception:
        pass
    client.table("documents").delete().eq("id", document_id).eq("user_id", user.id).execute()
    return {"success": True}
