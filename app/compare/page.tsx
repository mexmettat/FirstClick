"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, GitCompare, Loader2, TrendingDown, TrendingUp } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { AuthGuard } from "@/components/auth/auth-guard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CompareDeltaSummary } from "@/components/compare/compare-delta-summary";
import { EmptyState, LoadingState } from "@/components/ui/empty-state";
import { compareAnalyses, listAnalyses, type AnalysisSummary } from "@/lib/api";
import { useAuth } from "@/lib/supabase/auth-context";
import type { CompareResult } from "@/types/analysis";
import { cn } from "@/lib/utils";

function CompareContent() {
  const { getAccessToken } = useAuth();
  const searchParams = useSearchParams();
  const [items, setItems] = useState<AnalysisSummary[]>([]);
  const [beforeId, setBeforeId] = useState("");
  const [afterId, setAfterId] = useState("");
  const [result, setResult] = useState<CompareResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [comparing, setComparing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [autoRan, setAutoRan] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const token = await getAccessToken();
        if (!token) throw new Error("Oturum bulunamadı.");
        const data = await listAnalyses(token);
        if (cancelled) return;
        setItems(data);
        const qBefore = searchParams.get("before");
        const qAfter = searchParams.get("after");
        if (qBefore && qAfter) {
          setBeforeId(qBefore);
          setAfterId(qAfter);
        } else if (data.length >= 2) {
          setAfterId(data[0].id);
          setBeforeId(data[1].id);
        }
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : "Yüklenemedi.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [getAccessToken, searchParams]);

  async function runCompare(b = beforeId, a = afterId) {
    setComparing(true);
    setError(null);
    setResult(null);
    try {
      const token = await getAccessToken();
      if (!token) throw new Error("Oturum gerekli.");
      const data = await compareAnalyses(token, b, a);
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Karşılaştırma başarısız.");
    } finally {
      setComparing(false);
    }
  }

  useEffect(() => {
    if (autoRan || loading) return;
    const qBefore = searchParams.get("before");
    const qAfter = searchParams.get("after");
    if (qBefore && qAfter && qBefore !== qAfter) {
      setAutoRan(true);
      void runCompare(qBefore, qAfter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, searchParams, autoRan]);

  const timeline = useMemo(() => {
    const selected = items.filter((i) => i.id === beforeId || i.id === afterId);
    return [...selected].reverse();
  }, [items, beforeId, afterId]);

  if (loading) {
    return <LoadingState label="Karşılaştırma hazırlanıyor…" />;
  }

  if (items.length < 2) {
    return (
      <EmptyState
        title={items.length === 0 ? "Karşılaştırılacak test yok" : "İkinci test gerekli"}
        description={
          items.length === 0
            ? "Önce bir ürün testi çalıştırın. Sonra pitch’i değiştirip tekrar ölçün — fark burada görünür."
            : "Aynı ürünü yeniden test edin. v1 → v2 farkı ancak iki kayıtla ölçülür."
        }
        action={
          <Link href="/analyze">
            <Button>{items.length === 0 ? "İlk testi başlat" : "İkinci testi çalıştır"}</Button>
          </Link>
        }
      />
    );
  }

  return (
    <div className="space-y-6">
      <Card className="border-slate-200 bg-white">
        <CardHeader>
          <CardTitle className="font-display text-base">İki testi seç</CardTitle>
          <p className="text-sm text-slate-500">
            Aynı ürünün v1 → v2 farkını görün: düzeldi, bozuldu, aynı kaldı.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Önce (eski)</label>
              <select
                className="flex h-11 w-full rounded-xl border border-slate-200 bg-lab-chalk px-3 text-sm"
                value={beforeId}
                onChange={(e) => setBeforeId(e.target.value)}
              >
                <option value="">Seç…</option>
                {items.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.productName} · {item.overallScore ?? "—"} ·{" "}
                    {item.createdAt ? new Date(item.createdAt).toLocaleDateString("tr-TR") : ""}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Sonra (yeni)</label>
              <select
                className="flex h-11 w-full rounded-xl border border-slate-200 bg-lab-chalk px-3 text-sm"
                value={afterId}
                onChange={(e) => setAfterId(e.target.value)}
              >
                <option value="">Seç…</option>
                {items.map((item) => (
                  <option key={`a-${item.id}`} value={item.id}>
                    {item.productName} · {item.overallScore ?? "—"} ·{" "}
                    {item.createdAt ? new Date(item.createdAt).toLocaleDateString("tr-TR") : ""}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <Button
            onClick={() => runCompare()}
            disabled={comparing || !beforeId || !afterId || beforeId === afterId}
          >
            {comparing ? <Loader2 className="h-4 w-4 animate-spin" /> : <GitCompare className="h-4 w-4" />}
            Ne değişti?
          </Button>
          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}
        </CardContent>
      </Card>

      {timeline.length === 2 && (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-lab-ink text-white">
          <div className="border-b border-white/10 px-6 py-4 sm:px-8">
            <p className="text-xs uppercase tracking-[0.18em] text-lab-signal">Lab timeline</p>
            <p className="mt-1 text-sm text-slate-400">Aynı ürün · iki ölçüm · skor farkı</p>
          </div>
          <div className="grid gap-0 sm:grid-cols-[1fr_auto_1fr]">
            {timeline.map((t, i) => (
              <div key={t.id} className="contents">
                <div
                  className="animate-delta-slide px-6 py-8 sm:px-8"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    {i === 0 ? "v1 · önce" : "v2 · sonra"}
                  </p>
                  <p className="mt-2 font-display text-5xl font-semibold tabular-nums text-lab-signal">
                    {t.overallScore ?? "—"}
                  </p>
                  <p className="mt-3 text-sm text-slate-300">{t.productName}</p>
                  {t.createdAt && (
                    <p className="mt-1 text-xs text-slate-500">
                      {new Date(t.createdAt).toLocaleString("tr-TR")}
                    </p>
                  )}
                </div>
                {i === 0 && (
                  <div className="hidden items-center justify-center sm:flex">
                    <div className="h-16 w-px bg-gradient-to-b from-transparent via-lab-signal/60 to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {result && (
        <div className="space-y-6">
          <CompareDeltaSummary
            result={result}
            beforeScore={items.find((i) => i.id === beforeId)?.overallScore}
            afterScore={items.find((i) => i.id === afterId)?.overallScore}
          />

          <details className="group rounded-2xl border border-slate-200 bg-white">
            <summary className="cursor-pointer list-none px-6 py-4 text-sm font-medium text-slate-700 marker:content-none">
              Detaylı skor tablosu ve madde listesi
              <span className="float-right text-xs text-slate-400 group-open:hidden">Göster</span>
              <span className="float-right hidden text-xs text-slate-400 group-open:inline">Gizle</span>
            </summary>
            <div className="space-y-6 border-t border-slate-100 px-6 pb-6 pt-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-display text-base">Skor farkları</CardTitle>
              <p className="text-sm text-slate-500">
                {result.beforeLabel} → {result.afterLabel}
              </p>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              {result.scoreDeltas.map((d, i) => (
                <div
                  key={d.key}
                  className="flex items-center justify-between rounded-xl border border-slate-100 bg-lab-chalk px-4 py-3 animate-delta-slide"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div>
                    <p className="text-sm font-medium text-slate-800">{d.label}</p>
                    <p className="text-xs text-slate-500">
                      {d.before} → {d.after}
                    </p>
                  </div>
                  <Badge
                    variant={d.delta > 0 ? "success" : d.delta < 0 ? "danger" : "neutral"}
                    className="inline-flex items-center gap-1"
                  >
                    {d.delta > 0 ? (
                      <>
                        <TrendingUp className="h-3 w-3" />
                        düzeldi +{d.delta}
                      </>
                    ) : d.delta < 0 ? (
                      <>
                        <TrendingDown className="h-3 w-3" />
                        bozuldu {d.delta}
                      </>
                    ) : (
                      "aynı kaldı"
                    )}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="grid gap-4 lg:grid-cols-3">
            <ChangeList title="Düzeldi" items={result.improved} tone="success" />
            <ChangeList title="Bozuldu" items={result.regressed} tone="danger" />
            <ChangeList title="Aynı kaldı" items={result.unchangedRisks} tone="warning" />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-display text-base">Özet</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-700">
              <p className="leading-relaxed">{result.narrative}</p>
              <p className="rounded-xl bg-brand-50 px-4 py-3 text-brand-950">
                <span className="font-medium">Öneri: </span>
                {result.recommendation}
              </p>
            </CardContent>
          </Card>
            </div>
          </details>
        </div>
      )}
    </div>
  );
}

function ChangeList({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "success" | "danger" | "warning";
}) {
  const bg =
    tone === "success" ? "bg-emerald-50" : tone === "danger" ? "bg-red-50" : "bg-amber-50";
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-display text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {(items.length ? items : ["—"]).map((item, i) => (
            <li key={i} className={cn("rounded-lg px-3 py-2 text-sm text-slate-700", bg)}>
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default function ComparePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
          <Link
            href="/history"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-brand-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Geçmişe dön
          </Link>
          <div className="mb-8">
            <h1 className="font-display text-3xl font-semibold tracking-tight text-lab-ink">
              Ne değişti?
            </h1>
            <p className="mt-2 text-slate-500">
              FirstClick’in kalbi: aynı ürünü tekrar test edip farkı ölç.
            </p>
          </div>
          <AuthGuard>
            <Suspense
              fallback={
                <div className="flex min-h-[30vh] items-center justify-center">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-600 border-t-transparent" />
                </div>
              }
            >
              <CompareContent />
            </Suspense>
          </AuthGuard>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
