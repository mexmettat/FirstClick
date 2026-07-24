import Link from "next/link";
import { Suspense } from "react";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { AnalysisForm } from "@/components/analyze/analysis-form";
import { AuthGuard } from "@/components/auth/auth-guard";
import { LoadingState } from "@/components/ui/empty-state";

export default function AnalyzePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-brand-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Ana sayfa
          </Link>
          <div className="mb-8">
            <h1 className="font-display text-3xl font-semibold tracking-tight text-lab-ink">
              Ürün testi
            </h1>
            <p className="mt-2 text-slate-500">
              Üç adım: ürün → kaynaklar → personalar. Sonra laboratuvarı çalıştırın.
            </p>
          </div>
          <AuthGuard>
            <Suspense fallback={<LoadingState label="Form hazırlanıyor…" />}>
              <AnalysisForm />
            </Suspense>
          </AuthGuard>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
