from unittest.mock import MagicMock

from app.services.workspace_access import (
    can_read_product,
    can_write_product,
    get_workspace_roles,
    list_accessible_analyses,
    load_accessible_analysis,
)


def _client_with_tables(*, workspaces=None, members=None, products=None, analyses=None):
    workspaces = workspaces or []
    members = members or []
    products = products or []
    analyses = analyses or []

    client = MagicMock()

    def table(name: str):
        mock = MagicMock()
        mock._filters = []
        mock._in_filter = None
        mock._limit = None

        def select(*_args, **_kwargs):
            return mock

        def eq(field, value):
            mock._filters.append((field, value))
            return mock

        def in_(field, values):
            mock._in_filter = (field, values)
            return mock

        def order(field, desc=False):
            mock._order = (field, desc)
            return mock

        def limit(n):
            mock._limit = n
            return mock

        def execute():
            rows = []
            filters = mock._filters
            if name == "workspaces":
                rows = list(workspaces)
            elif name == "workspace_members":
                rows = list(members)
            elif name == "products":
                rows = list(products)
            elif name == "analyses":
                rows = list(analyses)
            for field, value in filters:
                rows = [r for r in rows if r.get(field) == value]
            if mock._in_filter:
                field, values = mock._in_filter
                rows = [r for r in rows if r.get(field) in values]
            if mock._limit is not None:
                rows = rows[: mock._limit]
            result = MagicMock()
            result.data = rows
            return result

        mock.select = select
        mock.eq = eq
        mock.in_ = in_
        mock.order = order
        mock.limit = limit
        mock.execute = execute
        return mock

    client.table = table
    return client


def test_workspace_member_can_read_shared_product():
    user_id = "member-1"
    ws_id = "ws-1"
    product_id = "prod-1"
    client = _client_with_tables(
        workspaces=[{"id": ws_id, "owner_id": "owner-1"}],
        members=[{"workspace_id": ws_id, "user_id": user_id, "role": "viewer", "status": "active"}],
        products=[{"id": product_id, "user_id": "owner-1", "workspace_id": ws_id}],
    )
    assert can_read_product(client, user_id, product_id)
    assert not can_write_product(client, user_id, product_id)


def test_workspace_editor_can_write_shared_product():
    user_id = "editor-1"
    ws_id = "ws-1"
    product_id = "prod-1"
    client = _client_with_tables(
        members=[{"workspace_id": ws_id, "user_id": user_id, "role": "editor", "status": "active"}],
        products=[{"id": product_id, "user_id": "owner-1", "workspace_id": ws_id}],
    )
    assert can_write_product(client, user_id, product_id)


def test_list_accessible_analyses_includes_workspace_history():
    user_id = "viewer-1"
    ws_id = "ws-1"
    product_id = "prod-1"
    client = _client_with_tables(
        members=[{"workspace_id": ws_id, "user_id": user_id, "role": "viewer", "status": "active"}],
        products=[{"id": product_id, "workspace_id": ws_id}],
        analyses=[
            {"id": "a-own", "user_id": user_id, "product_id": None, "created_at": "2026-07-21T12:00:00+00:00", "form_data": {}, "result": {}, "source": "mock"},
            {"id": "a-shared", "user_id": "owner-1", "product_id": product_id, "created_at": "2026-07-21T13:00:00+00:00", "form_data": {}, "result": {}, "source": "openai"},
        ],
    )
    rows = list_accessible_analyses(client, user_id)
    ids = {row["id"] for row in rows}
    assert "a-own" in ids
    assert "a-shared" in ids


def test_load_accessible_analysis_via_product_share():
    user_id = "viewer-1"
    ws_id = "ws-1"
    product_id = "prod-1"
    client = _client_with_tables(
        members=[{"workspace_id": ws_id, "user_id": user_id, "role": "viewer", "status": "active"}],
        products=[{"id": product_id, "workspace_id": ws_id}],
        analyses=[{"id": "a1", "user_id": "owner-1", "product_id": product_id, "form_data": {}, "result": {}, "source": "openai"}],
    )
    row = load_accessible_analysis(client, user_id, "a1")
    assert row is not None
    assert row["id"] == "a1"


def test_get_workspace_roles_merges_owner_and_member():
    client = _client_with_tables(
        workspaces=[{"id": "ws-owned", "owner_id": "u1"}],
        members=[{"workspace_id": "ws-member", "user_id": "u1", "role": "editor", "status": "active"}],
    )
    roles = get_workspace_roles(client, "u1")
    assert roles["ws-owned"] == "owner"
    assert roles["ws-member"] == "editor"
