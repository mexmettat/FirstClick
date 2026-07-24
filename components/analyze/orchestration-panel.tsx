"use client";

import { CheckCircle2, Circle, Loader2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export type OrchestrationLogItem = {
  id: string;
  message: string;
  tone?: "default" | "rag" | "persona" | "synthesis" | "done";
};

interface OrchestrationPanelProps {
  activeMessage: string | null;
  logs: OrchestrationLogItem[];
  personaProgress?: { index: number; total: number; name: string } | null;
}

export function OrchestrationPanel({
  activeMessage,
  logs,
  personaProgress,
}: OrchestrationPanelProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm shadow-brand-500/5">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lab-ink text-lab-signal">
          <Sparkles className="h-5 w-5 animate-pulse" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-brand-700">
            Agent orkestrasyonu
          </p>
          <p className="mt-1 text-sm font-medium text-lab-ink">
            {activeMessage ?? "Laboratuvar çalışıyor…"}
          </p>
          {personaProgress && (
            <p className="mt-1 text-xs text-slate-500">
              Persona {personaProgress.index}/{personaProgress.total}: {personaProgress.name}
            </p>
          )}
        </div>
        <Loader2 className="h-5 w-5 shrink-0 animate-spin text-brand-600" />
      </div>

      <ul className="mt-4 max-h-48 space-y-2 overflow-y-auto border-t border-slate-100 pt-3">
        {logs.length === 0 ? (
          <li className="text-xs text-slate-400">Adımlar burada görünecek…</li>
        ) : (
          logs.map((log) => (
            <li key={log.id} className="flex items-start gap-2 text-xs text-slate-600">
              {log.tone === "done" ? (
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
              ) : (
                <Circle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-300" />
              )}
              <span
                className={cn(
                  log.tone === "rag" && "font-mono text-[11px] text-brand-800",
                  log.tone === "persona" && "text-lab-ink",
                  log.tone === "synthesis" && "text-violet-800"
                )}
              >
                {log.message}
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
