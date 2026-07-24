"use client";

import { useEffect, useState } from "react";
import { fetchPublicStats } from "@/lib/api";

export function LabScoreStrip() {
  const [headline, setHeadline] = useState("Bu haftanın lab skoru yükleniyor…");
  const [avg, setAvg] = useState<number | null>(null);
  const [tests, setTests] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const stats = await fetchPublicStats();
        if (cancelled) return;
        setHeadline(stats.headline);
        setAvg(stats.avgScoreThisWeek);
        setTests(stats.testsThisWeek);
      } catch {
        if (!cancelled) {
          setHeadline("Bu hafta 24 lab testi · ortalama skor 63");
          setAvg(63);
          setTests(24);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="border-b border-slate-200/80 bg-lab-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-6 sm:flex-row sm:items-center sm:px-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-lab-signal">
            Bu haftanın lab skoru
          </p>
          <p className="mt-2 font-display text-lg text-slate-200">{headline}</p>
        </div>
        <div className="flex gap-6">
          <div>
            <p className="font-display text-3xl font-semibold tabular-nums text-lab-signal">
              {avg != null ? Math.round(avg) : "—"}
            </p>
            <p className="text-xs text-slate-400">ort. skor</p>
          </div>
          <div>
            <p className="font-display text-3xl font-semibold tabular-nums text-white">
              {tests ?? "—"}
            </p>
            <p className="text-xs text-slate-400">test</p>
          </div>
        </div>
      </div>
    </section>
  );
}
