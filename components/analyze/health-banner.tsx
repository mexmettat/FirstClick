"use client";

import { useEffect, useState } from "react";
import { AlertTriangle, Wifi } from "lucide-react";
import { checkBackendHealth, type HealthStatus } from "@/lib/api";

export function HealthBanner() {
  const [health, setHealth] = useState<HealthStatus | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const status = await checkBackendHealth();
      if (!cancelled) setHealth(status);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (!health) return null;

  if (!health.ok) {
    return (
      <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
        <Wifi className="mt-0.5 h-4 w-4 shrink-0" />
        <div>
          <p className="font-medium">API’ye ulaşılamıyor</p>
          <p className="mt-0.5 text-red-700/90">
            Backend kapalı olabilir. Analiz çalışmaz — `make run-backend` ile başlatın.
          </p>
        </div>
      </div>
    );
  }

  if (health.mode === "mock") {
    return (
      <div className="mb-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
        <div>
          <p className="font-medium">Demo / mock mod</p>
          <p className="mt-0.5 text-amber-800/90">
            OpenAI anahtarı yok — sonuçlar örnek şablonlardan üretilir. Gerçek persona analizi için
            anahtar ekleyin.
          </p>
        </div>
      </div>
    );
  }

  return null;
}
