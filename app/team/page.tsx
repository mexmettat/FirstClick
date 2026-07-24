"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Loader2, Users } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { AuthGuard } from "@/components/auth/auth-guard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EmptyState, LoadingState } from "@/components/ui/empty-state";
import {
  acceptWorkspaceInvite,
  createWorkspace,
  declineWorkspaceInvite,
  inviteWorkspaceMember,
  linkProductToWorkspace,
  listPendingInvites,
  listProducts,
  listWorkspaceMembers,
  listWorkspaceProducts,
  listWorkspaces,
} from "@/lib/api";
import { useAuth } from "@/lib/supabase/auth-context";

type PendingInvite = {
  id: string;
  workspaceId: string;
  workspaceName: string;
  role: string;
  email: string;
  status: string;
};

function TeamContent() {
  const { getAccessToken } = useAuth();
  const [workspaces, setWorkspaces] = useState<
    { id: string; name: string; role: string }[]
  >([]);
  const [pending, setPending] = useState<PendingInvite[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [members, setMembers] = useState<
    { id: string; email: string; role: string; status: string }[]
  >([]);
  const [name, setName] = useState("");
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState<"viewer" | "editor">("viewer");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const refresh = useCallback(async () => {
    const token = await getAccessToken();
    if (!token) return;
    const [list, invites] = await Promise.all([
      listWorkspaces(token),
      listPendingInvites(token),
    ]);
    setWorkspaces(list);
    setPending(invites);
    if (list.length === 0) {
      setActiveId("");
      return;
    }
    setActiveId((current) =>
      current && list.some((w) => w.id === current) ? current : list[0].id
    );
  }, [getAccessToken]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        await refresh();
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : "Yüklenemedi.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [refresh]);

  useEffect(() => {
    if (!activeId) {
      setMembers([]);
      return;
    }
    let cancelled = false;
    (async () => {
      try {
        const token = await getAccessToken();
        if (!token) return;
        const m = await listWorkspaceMembers(token, activeId);
        if (!cancelled) setMembers(m);
      } catch {
        if (!cancelled) setMembers([]);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [activeId, getAccessToken]);

  async function handleCreate(e: FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    setBusy(true);
    setError(null);
    try {
      const token = await getAccessToken();
      if (!token) throw new Error("Oturum gerekli.");
      const ws = await createWorkspace(token, name.trim());
      setName("");
      await refresh();
      setActiveId(ws.id);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Oluşturulamadı.");
    } finally {
      setBusy(false);
    }
  }

  async function handleInvite(e: FormEvent) {
    e.preventDefault();
    if (!activeId || !inviteEmail.trim()) return;
    setBusy(true);
    setError(null);
    try {
      const token = await getAccessToken();
      if (!token) throw new Error("Oturum gerekli.");
      await inviteWorkspaceMember(token, activeId, inviteEmail.trim(), inviteRole);
      setInviteEmail("");
      const m = await listWorkspaceMembers(token, activeId);
      setMembers(m);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Davet başarısız.");
    } finally {
      setBusy(false);
    }
  }

  async function handleAccept(inviteId: string) {
    setBusy(true);
    setError(null);
    try {
      const token = await getAccessToken();
      if (!token) throw new Error("Oturum gerekli.");
      const accepted = await acceptWorkspaceInvite(token, inviteId);
      await refresh();
      const invite = pending.find((p) => p.id === inviteId);
      if (invite) setActiveId(invite.workspaceId);
      void accepted;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Kabul edilemedi.");
    } finally {
      setBusy(false);
    }
  }

  async function handleDecline(inviteId: string) {
    setBusy(true);
    setError(null);
    try {
      const token = await getAccessToken();
      if (!token) throw new Error("Oturum gerekli.");
      await declineWorkspaceInvite(token, inviteId);
      await refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Reddedilemedi.");
    } finally {
      setBusy(false);
    }
  }

  if (loading) return <LoadingState label="Takım yükleniyor…" />;

  return (
    <div className="space-y-6">
      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {pending.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="font-display text-base">Bekleyen davetleriniz</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="divide-y divide-slate-100 rounded-xl border border-slate-200">
              {pending.map((invite) => (
                <li
                  key={invite.id}
                  className="flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="text-sm">
                    <p className="font-medium text-lab-ink">{invite.workspaceName}</p>
                    <p className="text-slate-500">
                      Rol: {invite.role} · {invite.email}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      size="sm"
                      disabled={busy}
                      onClick={() => handleAccept(invite.id)}
                    >
                      Kabul et
                    </Button>
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      disabled={busy}
                      onClick={() => handleDecline(invite.id)}
                    >
                      Reddet
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="font-display text-base">Workspace oluştur</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCreate} className="flex flex-col gap-3 sm:flex-row">
            <Input
              placeholder="Örn: Growth Lab"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Button type="submit" disabled={busy}>
              {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
              Oluştur
            </Button>
          </form>
        </CardContent>
      </Card>

      {workspaces.length === 0 ? (
        <EmptyState
          title="Henüz workspace yok"
          description="Workspace oluşturup e-posta ile davet edin. Davetli kişi aynı e-posta ile giriş yapınca buradan kabul eder."
        />
      ) : (
        <>
          <div className="flex flex-wrap gap-2">
            {workspaces.map((w) => (
              <button
                key={w.id}
                type="button"
                onClick={() => setActiveId(w.id)}
                className={
                  activeId === w.id
                    ? "rounded-xl bg-lab-ink px-3 py-1.5 text-sm text-white"
                    : "rounded-xl bg-white px-3 py-1.5 text-sm text-slate-600 ring-1 ring-slate-200"
                }
              >
                {w.name} · {w.role}
              </button>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-display text-base">Üyeler · davet</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleInvite} className="grid gap-3 sm:grid-cols-[1fr_auto_auto]">
                <div>
                  <Label htmlFor="invite">E-posta</Label>
                  <Input
                    id="invite"
                    type="email"
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                    placeholder="pm@sirket.com"
                  />
                </div>
                <div>
                  <Label htmlFor="role">Rol</Label>
                  <select
                    id="role"
                    className="flex h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm"
                    value={inviteRole}
                    onChange={(e) => setInviteRole(e.target.value as "viewer" | "editor")}
                  >
                    <option value="viewer">viewer</option>
                    <option value="editor">editor</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <Button type="submit" disabled={busy}>
                    Davet et
                  </Button>
                </div>
              </form>
              <ul className="divide-y divide-slate-100 rounded-xl border border-slate-200">
                {members.map((m) => (
                  <li key={m.id} className="flex items-center justify-between px-4 py-3 text-sm">
                    <span>{m.email}</span>
                    <div className="flex gap-2">
                      <Badge variant="neutral">{m.role}</Badge>
                      <Badge variant={m.status === "active" ? "success" : "warning"}>
                        {m.status === "active" ? "aktif" : "bekliyor"}
                      </Badge>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-500">
                Davet e-posta ile kaydedilir. Davetli kişi FirstClick’e o e-posta ile giriş
                yapınca “Bekleyen davetleriniz”den kabul eder. Mail gönderimi yok — demo için
                aynı hesabı/ikinci hesabı kullanın.
              </p>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}

export default function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          <Link
            href="/analyze"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-brand-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Analize dön
          </Link>
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lab-ink text-lab-signal">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <h1 className="font-display text-3xl font-semibold text-lab-ink">Takım</h1>
              <p className="text-slate-500">Workspace · davet · kabul</p>
            </div>
          </div>
          <AuthGuard>
            <TeamContent />
          </AuthGuard>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
