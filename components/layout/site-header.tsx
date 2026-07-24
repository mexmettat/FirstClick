"use client";

import Link from "next/link";
import {
  Bell,
  FlaskConical,
  GitCompare,
  History,
  LogOut,
  Menu,
  Split,
  User,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/supabase/auth-context";
import { listNotifications, markNotificationRead } from "@/lib/api";

export function SiteHeader() {
  const { user, loading, signOut, configured, getAccessToken } = useAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState<
    { id: string; title: string; body: string; href?: string | null; read: boolean }[]
  >([]);

  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    (async () => {
      try {
        const token = await getAccessToken();
        if (!token) return;
        const items = await listNotifications(token);
        if (!cancelled) setNotifications(items.filter((n) => !n.read).slice(0, 8));
      } catch {
        /* ignore */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [user, getAccessToken]);

  async function handleSignOut() {
    await signOut();
    setOpen(false);
    router.push("/");
  }

  async function openNotif(id: string, href?: string | null) {
    try {
      const token = await getAccessToken();
      if (token) await markNotificationRead(token, id);
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    } catch {
      /* ignore */
    }
    setNotifOpen(false);
    if (href) router.push(href);
  }

  const navLinks = user ? (
    <>
      <Link
        href="/history"
        className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-white hover:text-lab-ink"
      >
        <History className="h-4 w-4" />
        Geçmiş
      </Link>
      <Link
        href="/compare"
        className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-white hover:text-lab-ink"
      >
        <GitCompare className="h-4 w-4" />
        Karşılaştır
      </Link>
      <Link
        href="/ab"
        className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-white hover:text-lab-ink"
      >
        <Split className="h-4 w-4" />
        A/B
      </Link>
      <Link
        href="/team"
        className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-white hover:text-lab-ink"
      >
        <Users className="h-4 w-4" />
        Takım
      </Link>
    </>
  ) : null;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[rgba(244,247,250,0.85)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-lab-ink text-lab-signal">
            <FlaskConical className="h-4 w-4" />
          </div>
          <span className="font-display text-lg font-semibold tracking-tight text-lab-ink">
            FirstClick
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex lg:gap-1">
          {!loading && user && (
            <>
              {navLinks}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setNotifOpen((v) => !v)}
                  className="relative inline-flex items-center rounded-lg px-3 py-2 text-slate-600 hover:bg-white"
                  aria-label="Bildirimler"
                >
                  <Bell className="h-4 w-4" />
                  {notifications.length > 0 && (
                    <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-rose-500" />
                  )}
                </button>
                {notifOpen && (
                  <div className="absolute right-0 z-50 mt-2 w-80 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                    {notifications.length === 0 ? (
                      <p className="px-3 py-4 text-sm text-slate-500">Bildirim yok</p>
                    ) : (
                      notifications.map((n) => (
                        <button
                          key={n.id}
                          type="button"
                          onClick={() => openNotif(n.id, n.href)}
                          className="block w-full rounded-lg px-3 py-2 text-left hover:bg-lab-chalk"
                        >
                          <p className="text-sm font-medium text-lab-ink">{n.title}</p>
                          <p className="text-xs text-slate-500">{n.body}</p>
                        </button>
                      ))
                    )}
                  </div>
                )}
              </div>
              <span className="hidden items-center gap-1.5 px-2 text-xs text-slate-500 xl:inline-flex">
                <User className="h-3.5 w-3.5" />
                {user.email}
              </span>
              <button
                type="button"
                onClick={handleSignOut}
                className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-white"
              >
                <LogOut className="h-4 w-4" />
                Çıkış
              </button>
            </>
          )}
          {!user && configured && (
            <>
              <Link
                href="/demo"
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-white"
              >
                Demo
              </Link>
              <Link
                href="/login"
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-white hover:text-lab-ink"
              >
                Giriş
              </Link>
            </>
          )}
          <Link
            href="/analyze"
            className="rounded-lg bg-lab-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700"
          >
            Teste başla
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Link href="/analyze" className="rounded-lg bg-lab-ink px-3 py-2 text-sm font-medium text-white">
            Test
          </Link>
          <button
            type="button"
            className="rounded-lg p-2 text-slate-600 hover:bg-white"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {!loading && user && (
              <>
                <Link href="/history" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-lab-chalk">
                  Geçmiş
                </Link>
                <Link href="/compare" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-lab-chalk">
                  Karşılaştır
                </Link>
                <Link href="/ab" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-lab-chalk">
                  A/B pitch
                </Link>
                <Link href="/team" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-lab-chalk">
                  Takım
                </Link>
                <button type="button" onClick={handleSignOut} className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-700 hover:bg-lab-chalk">
                  Çıkış
                </button>
              </>
            )}
            {!user && configured && (
              <>
                <Link href="/demo" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-lab-chalk">
                  Demo
                </Link>
                <Link href="/login" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-lab-chalk">
                  Giriş
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
