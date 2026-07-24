from dataclasses import dataclass
from functools import lru_cache
from typing import Annotated

import httpx
import jwt
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from jwt import PyJWKClient

from app.config import settings

_bearer = HTTPBearer(auto_error=False)


@dataclass
class AuthUser:
    id: str
    email: str | None = None


@lru_cache
def _jwks_client() -> PyJWKClient | None:
    if not settings.supabase_url:
        return None
    # Local/cloud Supabase asymmetric JWT keys
    return PyJWKClient(f"{settings.supabase_url.rstrip('/')}/auth/v1/.well-known/jwks.json")


def _decode_token(token: str) -> dict:
    """Verify Supabase access token (ES256 JWKS preferred, HS256 secret fallback)."""
    header = jwt.get_unverified_header(token)
    alg = header.get("alg", "HS256")

    if alg in ("ES256", "RS256"):
        client = _jwks_client()
        if client is None:
            raise jwt.InvalidTokenError("JWKS client unavailable")
        signing_key = client.get_signing_key_from_jwt(token)
        return jwt.decode(
            token,
            signing_key.key,
            algorithms=[alg],
            audience="authenticated",
        )

    if not settings.supabase_jwt_secret:
        raise jwt.InvalidTokenError("JWT secret missing")
    return jwt.decode(
        token,
        settings.supabase_jwt_secret,
        algorithms=["HS256"],
        audience="authenticated",
    )


async def _decode_via_auth_api(token: str) -> dict | None:
    """Last-resort verification through Supabase Auth /user endpoint."""
    if not settings.supabase_url or not settings.supabase_service_role_key:
        return None
    try:
        async with httpx.AsyncClient(timeout=10.0) as client:
            response = await client.get(
                f"{settings.supabase_url.rstrip('/')}/auth/v1/user",
                headers={
                    "Authorization": f"Bearer {token}",
                    "apikey": settings.supabase_service_role_key,
                },
            )
        if response.status_code != 200:
            return None
        data = response.json()
        if not data.get("id"):
            return None
        return {"sub": data["id"], "email": data.get("email")}
    except Exception:
        return None


async def get_current_user(
    credentials: Annotated[HTTPAuthorizationCredentials | None, Depends(_bearer)],
) -> AuthUser:
    if not settings.supabase_configured:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Supabase auth yapılandırılmamış. SUPABASE_* env değişkenlerini ayarlayın.",
        )

    if credentials is None or not credentials.credentials:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Giriş yapmanız gerekiyor.",
            headers={"WWW-Authenticate": "Bearer"},
        )

    token = credentials.credentials
    payload: dict | None = None
    try:
        payload = _decode_token(token)
    except jwt.PyJWTError:
        payload = await _decode_via_auth_api(token)

    if not payload:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Geçersiz veya süresi dolmuş oturum.",
            headers={"WWW-Authenticate": "Bearer"},
        )

    user_id = payload.get("sub")
    if not user_id:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Geçersiz token.")

    return AuthUser(id=str(user_id), email=payload.get("email"))


async def get_optional_user(
    credentials: Annotated[HTTPAuthorizationCredentials | None, Depends(_bearer)],
) -> AuthUser | None:
    if not settings.supabase_configured or credentials is None:
        return None
    try:
        return await get_current_user(credentials)
    except HTTPException:
        return None
