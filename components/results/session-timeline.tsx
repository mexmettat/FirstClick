"use client";

import { cn } from "@/lib/utils";
import type { DropOffStep } from "@/types/analysis";

const FRICTION_COLOR = {
  low: "bg-emerald-500",
  med: "bg-amber-500",
  high: "bg-rose-500",
};

export function SessionTimeline({ steps }: { steps: DropOffStep[] }) {
  if (!steps.length) return null;

  return (
    <div className="mt-3">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
        Session replay · nerede takıldı
      </p>
      <ol className="mt-3 space-y-0">
        {steps.map((s, i) => (
          <li key={`${s.step}-${i}`} className="relative flex gap-3 pb-4 last:pb-0">
            {i < steps.length - 1 && (
              <span className="absolute left-[7px] top-4 h-full w-px bg-slate-200" />
            )}
            <span
              className={cn(
                "relative z-10 mt-1 h-3.5 w-3.5 shrink-0 rounded-full ring-2 ring-white",
                FRICTION_COLOR[s.friction] || FRICTION_COLOR.med
              )}
            />
            <div>
              <p className="text-sm font-medium text-lab-ink">{s.step}</p>
              <p className="text-xs leading-relaxed text-slate-600">{s.moment}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
