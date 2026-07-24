"use client";

import { Fragment } from "react";
import { Download, Loader2, MessageCircle, Send, Video } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ScoreRing } from "@/components/ui/score-ring";
import { cn } from "@/lib/utils";
import { generatePDF } from "@/lib/pdf";
import { askPersonaFollowup } from "@/lib/api";
import { useAuth } from "@/lib/supabase/auth-context";
import { DecisionSummary } from "@/components/results/decision-summary";
import { ExportShareActions } from "@/components/results/export-share-actions";
import { RagEvidencePanel } from "@/components/results/rag-evidence-panel";
import { SessionTimeline } from "@/components/results/session-timeline";
import type { AnalysisFormData, AnalysisResult, PersonaAnalysis, RagSource } from "@/types/analysis";
import {
  AlertTriangle,
  HelpCircle,
  Lightbulb,
  MessageSquareQuote,
  Target,
  TrendingDown,
  User,
} from "lucide-react";

interface ResultsDashboardProps {
  result: AnalysisResult;
  productName?: string;
  formData?: AnalysisFormData | null;
  source?: "openai" | "mock";
  ragSources?: RagSource[];
  analysisId?: string | null;
  readOnly?: boolean;
}

function likelihoodVariant(likelihood: string): "success" | "warning" | "danger" {
  if (likelihood === "Yüksek") return "success";
  if (likelihood === "Orta") return "warning";
  return "danger";
}

function CitedText({ value }: { value: string }) {
  const parts = value.split(/(\[(?:doc|web|past|kb):[^\]]+\])/g);
  return (
    <p className="mt-1 text-slate-700">
      {parts.map((part, i) =>
        /^\[(?:doc|web|past|kb):/.test(part) ? (
          <Badge key={i} variant="neutral" className="mx-0.5 align-middle font-mono text-[10px]">
            {part}
          </Badge>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </p>
  );
}

export function ResultsDashboard({
  result,
  productName,
  formData,
  source,
  ragSources,
  analysisId,
  readOnly = false,
}: ResultsDashboardProps) {
  const { getAccessToken } = useAuth();
  const [activePersona, setActivePersona] = useState(result.personas[0]?.name ?? "");
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
  const [answerCitations, setAnswerCitations] = useState<string[]>([]);
  const [asking, setAsking] = useState(false);
  const [askError, setAskError] = useState<string | null>(null);

  const downloadPDF = () => {
    generatePDF(result, productName, source, {
      ragSources,
      analysisId,
    });
  };

  function selectPersona(name: string) {
    setActivePersona(name);
    setMessages([]);
    setAnswerCitations([]);
    setAskError(null);
  }

  async function handleFollowup(e: React.FormEvent) {
    e.preventDefault();
    if (!question.trim() || !activePersona) return;
    const q = question.trim();
    setAsking(true);
    setAskError(null);
    try {
      const token = await getAccessToken();
      if (!token) throw new Error("Giriş gerekli.");
      const persona = result.personas.find((p) => p.name === activePersona);
      const res = await askPersonaFollowup(token, {
        analysisId,
        productId: formData?.productId,
        personaName: activePersona,
        question: q,
        productName: formData?.productName ?? productName,
        productDescription: formData?.productDescription,
        priorPersona: persona as unknown as Record<string, unknown>,
        history: messages,
      });
      setMessages((prev) => [...prev, { role: "user", content: q }, { role: "assistant", content: res.answer }]);
      setAnswerCitations(res.citations ?? []);
      setQuestion("");
    } catch (err) {
      setAskError(err instanceof Error ? err.message : "Sorulamadı.");
    } finally {
      setAsking(false);
    }
  }

  return (
    <div className="space-y-10">
      {analysisId && !readOnly && (
        <Card className="overflow-hidden border-brand-300 bg-gradient-to-r from-brand-50 via-white to-cyan-50 shadow-md">
          <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-lg">
                <Video className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                  Canlı persona danışmanı
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold text-lab-ink">
                  3D avatar ile yüz yüze konuşun
                </h3>
                <p className="mt-1 max-w-xl text-sm text-slate-600">
                  {analysisId === "demo-public"
                    ? "Demo modunda avatarı deneyin — sesli soru-cevap için giriş yapmanız gerekir."
                    : "Persona ilk izlenimini sesli anlatır; mikrofon veya yazı ile soru sorabilirsiniz."}
                </p>
              </div>
            </div>
            <Link
              href={`/results/${analysisId}/talk?persona=${encodeURIComponent(activePersona)}`}
              className="shrink-0"
            >
              <Button size="lg" className="w-full gap-2 sm:w-auto">
                <Video className="h-4 w-4" />
                Canlı danışmana git
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}

      <DecisionSummary
        result={result}
        productName={productName}
        analysisId={analysisId}
        productId={formData?.productId}
      />

      <div className="flex flex-wrap items-center gap-3">
        <Button onClick={downloadPDF} variant="outline">
          <Download className="mr-2 h-4 w-4" />
          PDF indir
        </Button>
        <ExportShareActions
          result={result}
          productName={productName}
          analysisId={analysisId}
        />
        {!readOnly && (
          <>
        <ExportShareActions
          result={result}
          productName={productName}
          analysisId={analysisId}
        />
          </>
        )}
        {source && (
          <Badge variant={source === "openai" ? "success" : "neutral"}>
            {source === "openai" ? "AI Analizi" : "Demo Analizi"}
          </Badge>
        )}
        {ragSources && ragSources.length > 0 && (
          <a href="#rag-evidence" className="text-xs text-slate-500 hover:text-brand-700">
            {ragSources.length} kaynak kullanıldı (detay altta)
          </a>
        )}
      </div>

      <div id="detay" className="space-y-8 scroll-mt-24">

      <Card className="overflow-hidden">
        <CardHeader className="border-b border-slate-100 bg-gradient-to-r from-brand-50/80 to-lab-chalk">
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-brand-600" />
            FirstClick Skorları
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 sm:p-8">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between">
            <ScoreRing score={result.overallScore} label="Genel Skor" size="lg" />
            <div className="grid w-full max-w-xl flex-1 gap-5 sm:grid-cols-2">
              <ScoreRing score={result.clarityScore} label="Anlaşılabilirlik" size="sm" />
              <ScoreRing score={result.adoptionScore} label="Kullanma İsteği" size="sm" />
              <ScoreRing
                score={result.onboardingRiskScore}
                label="Onboarding Riski"
                size="sm"
                invert
              />
              <ScoreRing score={result.targetFitScore} label="Hedef Kitle Uyumu" size="sm" />
            </div>
          </div>

          <div className="mt-8 space-y-4 border-t border-slate-100 pt-8">
            <Progress value={result.clarityScore} label="Anlaşılabilirlik" />
            <Progress value={result.adoptionScore} label="Kullanma isteği" />
            <Progress value={result.onboardingRiskScore} label="Onboarding riski" invert />
            <Progress value={result.targetFitScore} label="Hedef kitle uyumu" />
          </div>
        </CardContent>
      </Card>

      <section>
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-900">
          <User className="h-5 w-5 text-brand-600" />
          Persona Simülasyonları
        </h3>
        <div className="grid gap-4 lg:grid-cols-2">
          {result.personas.map((persona) => (
            <PersonaCard key={persona.name} persona={persona} />
          ))}
        </div>
      </section>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <MessageCircle className="h-5 w-5 text-brand-600" />
            Personaya sor (çok turlu)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {analysisId && !readOnly && (
            <Link
              href={`/results/${analysisId}/talk?persona=${encodeURIComponent(activePersona)}`}
              className="inline-flex"
            >
              <Button type="button" variant="outline" className="gap-2">
                <Video className="h-4 w-4" />
                Personayla konuş (3D avatar)
              </Button>
            </Link>
          )}
          <p className="text-sm text-slate-500">
            Örn: “Fiyat 5$ olsaydı kullanır mıydın?” — cevap corpus + önceki tepkiye dayanır. Sohbet
            devam eder.
          </p>
          <div className="flex flex-wrap gap-2">
            {result.personas.map((p) => (
              <button
                key={p.name}
                type="button"
                onClick={() => selectPersona(p.name)}
                className={cn(
                  "rounded-xl border px-3 py-1.5 text-sm transition-colors",
                  activePersona === p.name
                    ? "border-brand-400 bg-brand-50 text-brand-800"
                    : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                )}
              >
                {p.name}
              </button>
            ))}
          </div>
          {messages.length > 0 && (
            <div className="max-h-72 space-y-3 overflow-y-auto rounded-xl border border-slate-200 bg-lab-chalk/50 p-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    "rounded-xl px-3 py-2 text-sm",
                    m.role === "user"
                      ? "ml-8 bg-lab-ink text-white"
                      : "mr-8 border border-slate-200 bg-white text-slate-700"
                  )}
                >
                  {m.role === "assistant" ? (
                    <>
                      <p className="mb-1 text-[10px] font-medium uppercase tracking-wide text-slate-400">
                        {activePersona}
                      </p>
                      <CitedText value={m.content} />
                    </>
                  ) : (
                    m.content
                  )}
                </div>
              ))}
            </div>
          )}
          <form onSubmit={handleFollowup} className="flex flex-col gap-3 sm:flex-row">
            <Input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Personaya sorunuzu yazın…"
              className="flex-1"
            />
            <Button type="submit" disabled={asking || !question.trim()}>
              {asking ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              Sor
            </Button>
          </form>
          {askError && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {askError}
            </div>
          )}
          {answerCitations.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {answerCitations.map((c) => (
                <Badge key={c} variant="neutral" className="font-mono text-[10px]">
                  {c}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <InsightList
          title="En Büyük 5 Kör Nokta"
          icon={AlertTriangle}
          items={result.blindSpots}
          iconColor="text-amber-600"
        />
        <InsightList
          title="Vazgeçme Noktaları"
          icon={TrendingDown}
          items={result.dropOffPoints}
          iconColor="text-rose-600"
        />
      </div>

      <InsightList
        title="Öncelikli Aksiyon Planı"
        icon={Lightbulb}
        items={result.actionPlan}
        iconColor="text-brand-600"
        numbered
      />

      <Card className="print:mb-8 print:break-inside-avoid">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <MessageSquareQuote className="h-5 w-5 text-brand-600" />
            Daha İyi Ürün Anlatımı Önerisi
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed text-slate-600">{result.improvedPitch}</p>
        </CardContent>
      </Card>

      <InsightList
        title="Jüri / Yatırımcının Sorabileceği 5 Soru"
        icon={HelpCircle}
        items={result.toughQuestions}
        iconColor="text-brand-700"
        numbered
      />

      <RagEvidencePanel ragSources={ragSources} source={source} />
      </div>
    </div>
  );
}

function PersonaCard({ persona }: { persona: PersonaAnalysis }) {
  const behavior =
    persona.likelihood === "Düşük"
      ? "tereddütlü"
      : persona.likelihood === "Orta"
        ? "temkinli"
        : "açık";

  return (
    <Card className="transition-shadow hover:shadow-md print:mb-8 print:break-inside-avoid">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between gap-2">
          <div>
            <CardTitle className="font-display text-base">{persona.name}</CardTitle>
            <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">davranış · {behavior}</p>
          </div>
          <Badge variant={likelihoodVariant(persona.likelihood)}>
            Kullanma: {persona.likelihood}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        <PersonaField label="İlk izlenim" value={persona.firstImpression} />
        <PersonaField label="Anladığı şey" value={persona.understood} />
        <PersonaField
          label="Kafasının karıştığı nokta"
          value={persona.confusion}
          highlight="warning"
        />
        <PersonaField label="Vazgeçme sebebi" value={persona.dropOffReason} highlight="danger" />
        <PersonaField label="Geliştirme önerisi" value={persona.suggestion} highlight="success" />
        {persona.dropOffTimeline && persona.dropOffTimeline.length > 0 && (
          <SessionTimeline steps={persona.dropOffTimeline} />
        )}
        {persona.citations && persona.citations.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-1">
            {persona.citations.map((c) => (
              <Badge key={c} variant="neutral" className="font-mono text-[10px]">
                {c}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function PersonaField({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: "warning" | "danger" | "success";
}) {
  const bg =
    highlight === "warning"
      ? "bg-amber-50"
      : highlight === "danger"
        ? "bg-red-50"
        : highlight === "success"
          ? "bg-emerald-50"
          : "bg-slate-50";

  return (
    <div className={cn("rounded-lg p-3", bg)}>
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</p>
      <CitedText value={value} />
    </div>
  );
}

function InsightList({
  title,
  icon: Icon,
  items,
  iconColor,
  numbered = false,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  items: string[];
  iconColor: string;
  numbered?: boolean;
}) {
  return (
    <Card className="print:mb-8 print:break-inside-avoid">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Icon className={cn("h-5 w-5", iconColor)} />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-slate-600">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-500">
                {numbered ? i + 1 : "•"}
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
