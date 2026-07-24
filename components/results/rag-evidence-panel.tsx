"use client";

import {
  BookOpen,
  Database,
  FileText,
  Globe,
  History,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { RagSource } from "@/types/analysis";
import { cn } from "@/lib/utils";

function isKnowledgeSource(src: RagSource): boolean {
  return (
    src.scope === "global" ||
    src.sourceType === "knowledge" ||
    src.citation.startsWith("kb:")
  );
}

function sourceMeta(src: RagSource) {
  if (isKnowledgeSource(src)) {
    return {
      group: "kb" as const,
      label: "FirstClick uzmanlık",
      icon: Sparkles,
      tone: "border-lab-signal/40 bg-lab-signal/5",
    };
  }
  if (src.sourceType === "web" || src.citation.startsWith("web:")) {
    return {
      group: "user" as const,
      label: "Web / landing",
      icon: Globe,
      tone: "border-brand-200 bg-brand-50/40",
    };
  }
  if (src.sourceType === "analysis" || src.citation.startsWith("past:")) {
    return {
      group: "user" as const,
      label: "Geçmiş analiz",
      icon: History,
      tone: "border-violet-200 bg-violet-50/40",
    };
  }
  return {
    group: "user" as const,
    label: "Ürün dosyası",
    icon: FileText,
    tone: "border-slate-200 bg-white",
  };
}

function categoryLabel(category?: string | null) {
  if (!category) return null;
  const map: Record<string, string> = {
    foundation: "Temel",
    "ux-product": "UX / Ürün",
    sector: "Sektör",
    "persona-research": "Persona",
    "growth-trust": "Growth / Güven",
  };
  return map[category] ?? category;
}

function SourceRow({ src }: { src: RagSource }) {
  const meta = sourceMeta(src);
  const Icon = meta.icon;
  const cat = categoryLabel(src.category);

  return (
    <li
      className={cn(
        "rounded-xl border-l-4 p-4 transition-shadow hover:shadow-sm",
        meta.tone
      )}
    >
      <div className="flex flex-wrap items-start gap-2">
        <Icon className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <code className="rounded-md bg-white/80 px-2 py-0.5 font-mono text-xs text-lab-ink ring-1 ring-slate-200">
              {src.citation}
            </code>
            <Badge variant="neutral" className="text-[10px]">
              {meta.label}
            </Badge>
            {cat && (
              <Badge variant="neutral" className="text-[10px]">
                {cat}
              </Badge>
            )}
          </div>
          {src.title && (
            <p className="mt-1.5 text-sm font-medium text-lab-ink">{src.title}</p>
          )}
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{src.excerpt}</p>
        </div>
      </div>
    </li>
  );
}

interface RagEvidencePanelProps {
  ragSources?: RagSource[];
  source?: "openai" | "mock";
}

export function RagEvidencePanel({ ragSources = [], source }: RagEvidencePanelProps) {
  const kb = ragSources.filter(isKnowledgeSource);
  const user = ragSources.filter((s) => !isKnowledgeSource(s));

  if (ragSources.length === 0) {
    return (
      <Card id="rag-evidence" className="scroll-mt-24 border-dashed border-slate-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <BookOpen className="h-5 w-5 text-slate-400" />
            AI kanıtı — RAG kaynakları
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-500">
            {source === "mock"
              ? "Demo analizi: gerçek retrieval yapılmadı. Canlı analizde burada kullanılan uzmanlık ve ürün kaynakları listelenir."
              : "Bu analizde eşleşen corpus parçası bulunamadı; sonuçlar yalnızca pitch metnine dayandı."}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      id="rag-evidence"
      className="scroll-mt-24 overflow-hidden border-brand-200/60 shadow-sm"
    >
      <CardHeader className="border-b border-slate-100 bg-gradient-to-r from-brand-50/90 via-lab-chalk to-lab-signal/10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <CardTitle className="flex items-center gap-2 font-display text-lg">
              <BookOpen className="h-5 w-5 text-brand-700" />
              AI kanıtı — kullanılan RAG kaynakları
            </CardTitle>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
              Model bu analizde aşağıdaki parçaları okudu. Skorlar ve bulgular bu bağlama dayanır;
              persona metinlerindeki{" "}
              <code className="rounded bg-white/70 px-1 text-xs">[kb:…]</code> /{" "}
              <code className="rounded bg-white/70 px-1 text-xs">[doc:…]</code> etiketleri bu
              kaynaklara karşılık gelir.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2">
            <Badge variant="success" className="gap-1">
              <Sparkles className="h-3 w-3" />
              KB {kb.length}
            </Badge>
            <Badge variant="neutral" className="gap-1">
              <Database className="h-3 w-3" />
              Corpus {user.length}
            </Badge>
            <Badge variant="neutral">{ragSources.length} parça</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-8 p-6">
        {kb.length > 0 && (
          <section>
            <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
              <Sparkles className="h-4 w-4 text-lab-signal" />
              FirstClick uzmanlık bilgisi
            </h4>
            <ul className="space-y-3">
              {kb.map((src, i) => (
                <SourceRow key={`kb-${src.citation}-${i}`} src={src} />
              ))}
            </ul>
          </section>
        )}
        {user.length > 0 && (
          <section>
            <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
              <Database className="h-4 w-4 text-brand-600" />
              Ürün corpus&apos;unuz
            </h4>
            <ul className="space-y-3">
              {user.map((src, i) => (
                <SourceRow key={`user-${src.citation}-${i}`} src={src} />
              ))}
            </ul>
          </section>
        )}
      </CardContent>
    </Card>
  );
}
