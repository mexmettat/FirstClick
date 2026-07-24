"use client";

import { AlertTriangle, ArrowRight, TrendingDown, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { CompareResult } from "@/types/analysis";
import { cn } from "@/lib/utils";

interface CompareDeltaSummaryProps {
  result: CompareResult;
  beforeScore?: number | null;
  afterScore?: number | null;
}

export function CompareDeltaSummary({ result, beforeScore, afterScore }: CompareDeltaSummaryProps) {
  const overall = result.scoreDeltas.find((d) => d.key === "overallScore");
  const delta = overall?.delta ?? 0;
  const before = beforeScore ?? overall?.before ?? 0;
  const after = afterScore ?? overall?.after ?? 0;

  const improvedLead = result.improved.find((item) => item && item !== "—");
  const remainingRisk =
    result.unchangedRisks.find((item) => item && item !== "—") ??
    result.regressed.find((item) => item && item !== "—");

  const deltaLabel =
    delta > 0 ? `+${delta} genel skor` : delta < 0 ? `${delta} genel skor` : "Skor aynı kaldı";

  return (
    <Card className="overflow-hidden border-lab-ink/15 bg-gradient-to-br from-lab-chalk via-white to-brand-50/30">
      <CardContent className="p-6 sm:p-8">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-700">Delta özeti</p>
        <div className="mt-4 flex flex-wrap items-end gap-4">
          <div>
            <p className="text-sm text-slate-500">v1 → v2</p>
            <p className="mt-1 flex items-baseline gap-3 font-display text-4xl font-semibold tabular-nums text-lab-ink">
              <span>{before}</span>
              <ArrowRight className="h-6 w-6 text-slate-400" />
              <span className="text-brand-700">{after}</span>
            </p>
          </div>
          <Badge
            variant={delta > 0 ? "success" : delta < 0 ? "danger" : "neutral"}
            className="inline-flex items-center gap-1 px-3 py-1 text-sm"
          >
            {delta > 0 ? <TrendingUp className="h-4 w-4" /> : delta < 0 ? <TrendingDown className="h-4 w-4" /> : null}
            {deltaLabel}
          </Badge>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/80 px-4 py-3">
            <p className="text-xs font-medium uppercase tracking-wide text-emerald-800">Düzeldi</p>
            <p className="mt-2 text-sm leading-relaxed text-emerald-950">
              {improvedLead ?? "Belirgin iyileşme tespit edilmedi."}
            </p>
          </div>
          <div className="rounded-xl border border-amber-200/80 bg-amber-50/80 px-4 py-3">
            <p className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-amber-900">
              <AlertTriangle className="h-3.5 w-3.5" />
              Hâlâ risk
            </p>
            <p className="mt-2 text-sm leading-relaxed text-amber-950">
              {remainingRisk ?? "Kritik kör nokta kalmadı — bir sonraki sprintte ince ayar yapın."}
            </p>
          </div>
        </div>

        <p className={cn("mt-5 text-sm leading-relaxed text-slate-600")}>{result.narrative}</p>
      </CardContent>
    </Card>
  );
}
