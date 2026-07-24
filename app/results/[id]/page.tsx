"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, GitCompare, RotateCcw, Video } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { AuthGuard } from "@/components/auth/auth-guard";
import { ResultsDashboard } from "@/components/results/results-dashboard";
import { Button } from "@/components/ui/button";
import { LoadingState } from "@/components/ui/empty-state";
import { getAnalysis } from "@/lib/api";
import { useAuth } from "@/lib/supabase/auth-context";
import { STORAGE_KEYS } from "@/lib/constants";
import type { AnalysisFormData, AnalysisResult, RagSource } from "@/types/analysis";

function ResultsByIdContent() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const { getAccessToken } = useAuth();
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [formData, setFormData] = useState<AnalysisFormData | null>(null);
  const [source, setSource] = useState<"openai" | "mock">("mock");
  const [ragSources, setRagSources] = useState<RagSource[]>([]);
  const [analysisId, setAnalysisId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const token = await getAccessToken();
        if (!token) throw new Error("Oturum gerekli.");
        const detail = await getAnalysis(params.id, token);
        if (cancelled) return;
        if (!detail.result) throw new Error("Analiz sonucu boş.");
        setResult(detail.result as AnalysisResult);
        setFormData(detail.formData);
        setSource(detail.source);
        setRagSources(detail.ragSources ?? []);
        setAnalysisId(detail.id);
        sessionStorage.setItem(STORAGE_KEYS.formData, JSON.stringify(detail.formData));
        sessionStorage.setItem(STORAGE_KEYS.analysisResult, JSON.stringify(detail.result));
        sessionStorage.setItem("firstclick-analysis-source", detail.source);
        sessionStorage.setItem(STORAGE_KEYS.ragSources, JSON.stringify(detail.ragSources ?? []));
        sessionStorage.setItem(STORAGE_KEYS.analysisId, detail.id);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Analiz yüklenemedi.");
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [getAccessToken, params.id]);

  if (error) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-6 text-center text-sm text-red-700">
        <p>{error}</p>
        <button
          type="button"
          className="mt-3 text-brand-700 underline"
          onClick={() => router.push("/history")}
        >
          Geçmişe dön
        </button>
      </div>
    );
  }

  if (!result) {
    return <LoadingState label="Sonuç yükleniyor…" />;
  }

  const productId = formData?.productId;
  const retestHref = productId
    ? `/analyze?productId=${encodeURIComponent(productId)}&retest=1`
    : "/analyze";
  const compareHref = analysisId
    ? `/compare?after=${encodeURIComponent(analysisId)}`
    : "/compare";

  return (
    <>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link
            href="/analyze"
            className="mb-4 inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-brand-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Yeni analiz
          </Link>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-lab-ink">
            Analiz Sonuçları
          </h1>
          <p className="mt-2 text-slate-500">
            Bu sayfa paylaşılabilir — linki kopyalayıp sonra geri açabilirsiniz.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {analysisId && (
            <Link href={`/results/${analysisId}/talk?persona=${encodeURIComponent(result.personas[0]?.name ?? "")}`}>
              <Button className="gap-2">
                <Video className="h-4 w-4" />
                Canlı persona danışmanı
              </Button>
            </Link>
          )}
          <Link href={compareHref}>
            <Button variant="outline">
              <GitCompare className="h-4 w-4" />
              Karşılaştır
            </Button>
          </Link>
          <Link href={retestHref}>
            <Button variant="outline">
              <RotateCcw className="h-4 w-4" />
              Pitch’i değiştirip tekrar ölç
            </Button>
          </Link>
        </div>
      </div>

      <ResultsDashboard
        result={result}
        productName={formData?.productName}
        formData={formData}
        source={source}
        ragSources={ragSources}
        analysisId={analysisId}
      />
    </>
  );
}

export default function ResultsByIdPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <AuthGuard>
            <ResultsByIdContent />
          </AuthGuard>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
