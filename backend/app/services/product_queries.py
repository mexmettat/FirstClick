"""Shared product listing helpers."""

from __future__ import annotations

from app.services.workspace_access import get_workspace_roles


def list_accessible_products(client, user_id: str) -> list[dict]:
    own = (
        client.table("products")
        .select("*")
        .eq("user_id", user_id)
        .order("created_at", desc=True)
        .execute()
    )
    rows = list(own.data or [])
    seen = {row["id"] for row in rows}

    workspace_ids = list(get_workspace_roles(client, user_id).keys())
    if workspace_ids:
        shared = (
            client.table("products")
            .select("*")
            .in_("workspace_id", workspace_ids)
            .order("created_at", desc=True)
            .execute()
        )
        for row in shared.data or []:
            if row["id"] not in seen:
                rows.append(row)
                seen.add(row["id"])

    rows.sort(key=lambda r: r.get("created_at") or "", reverse=True)
    return rows
