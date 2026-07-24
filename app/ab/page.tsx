"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Loader2, Split } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { AuthGuard } from "@/components/auth/auth-guard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScoreRing } from "@/components/ui/score-ring";
import { DEFAULT_PERSONA_IDS, PERSONA_OPTIONS } from "@/lib/constants";
import { submitAbAnalysis } from "@/lib/api";
import { useAuth } from "@/lib/supabase/auth-context";
import type { AnalysisResult } from "@/types/analysis";
import { cn } from "@/lib/utils";

function AbContent() {
  const { getAccessToken } = useAuth();
  const [productName, setProductName] = useState("TaskFlow");
  const [pitchA, setPitchA] = useState(
    "Küçük ekipler için görev yönetimi. Tek tıkla kurulum, sprint panosu."
  );
  const [pitchB, setPitchB] = useState(
    "2 dakikada sprint panosu. Kart istemeden 14 gün deneyin — hafif Jira alternatifi."
  );
  const [personas, setPersonas] = useState<string[]>([...DEFAULT_PERSONA_IDS]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resultA, setResultA] = useState<AnalysisResult | null>(null);
  const [resultB, setResultB] = useState<AnalysisResult | null>(null);
  const [winner, setWinner] = useState<"A" | "B" | "tie" | null>(null);
  const [idA, setIdA] = useState<string | null>(null);
  const [idB, setIdB] = useState<string | null>(null);

  function togglePersona(id: string) {
    setPersonas((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const token = await getAccessToken();
      if (!token) throw new Error("Oturum gerekli.");
      const res = await submitAbAnalysis(token, {
        productName,
        pitchA,
        pitchB,
        labelA: "Pitch A",
        labelB: "Pitch B",
        selectedPersonas: personas,
      });
      setResultA(res.resultA);
      setResultB(res.resultB);
      setWinner(res.winner);
      setIdA(res.analysisIdA ?? null);
      setIdB(res.analysisIdB ?? null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "A/B başarısız.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="font-display text-base">Ürün + iki pitch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Ürün adı</Label>
              <Input value={productName} onChange={(e) => setProductName(e.target.value)} required />
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="space-y-2">
                <Label>Pitch A</Label>
                <Textarea
                  className="min-h-[140px]"
                  value={pitchA}
                  onChange={(e) => setPitchA(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Pitch B</Label>
                <Textarea
                  className="min-h-[140px]"
                  value={pitchB}
                  onChange={(e) => setPitchB(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {PERSONA_OPTIONS.slice(0, 4).map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => togglePersona(p.id)}
                  className={cn(
                    "rounded-xl border px-3 py-1.5 text-xs",
                    personas.includes(p.id)
                      ? "border-brand-400 bg-brand-50 text-brand-800"
                      : "border-slate-200 bg-white text-slate-600"
                  )}
                >
                  {p.label}
                </button>
              ))}
            </div>
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}
            <Button type="submit" disabled={loading || personas.length === 0}>
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Split className="h-4 w-4" />}
              A/B lab’ı çalıştır
            </Button>
          </CardContent>
        </Card>
      </form>

      {resultA && resultB && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant={winner === "tie" ? "neutral" : "success"}>
              Kazanan: {winner === "tie" ? "Berabere" : `Pitch ${winner}`}
            </Badge>
            {idA && idB && (
              <Link
                href={`/compare?before=${idA}&after=${idB}`}
                className="text-sm font-medium text-brand-700"
              >
                Detaylı karşılaştır →
              </Link>
            )}
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {[
              { label: "Pitch A", result: resultA, id: idA, win: winner === "A" },
              { label: "Pitch B", result: resultB, id: idB, win: winner === "B" },
            ].map((col) => (
              <Card
                key={col.label}
                className={cn(col.win && "ring-2 ring-lab-signal")}
              >
                <CardHeader>
                  <CardTitle className="font-display text-base">{col.label}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                  <ScoreRing score={col.result.overallScore} label="Genel" size="lg" />
                  <div className="grid w-full grid-cols-2 gap-2 text-center text-xs text-slate-600">
                    <span>Netlik {col.result.clarityScore}</span>
                    <span>İstek {col.result.adoptionScore}</span>
                    <span>Risk {col.result.onboardingRiskScore}</span>
                    <span>Uyım {col.result.targetFitScore}</span>
                  </div>
                  {col.id && (
                    <Link href={`/results/${col.id}`} className="text-sm text-brand-700">
                      Tam sonuç
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function AbPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
          <Link
            href="/analyze"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-brand-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Analize dön
          </Link>
          <h1 className="font-display text-3xl font-semibold text-lab-ink">A/B pitch lab</h1>
          <p className="mt-2 text-slate-500">
            Aynı personalarla iki anlatımı yan yana ölçün — kazananı skorla görün.
          </p>
          <div className="mt-8">
            <AuthGuard>
              <AbContent />
            </AuthGuard>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
