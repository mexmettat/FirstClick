import type { AnalysisFormData, AnalyzeApiResponse } from "@/types/analysis";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? "http://127.0.0.1:8000";

export async function submitAnalysis(form: AnalysisFormData): Promise<AnalyzeApiResponse> {
  const response = await fetch(`${API_BASE}/api/v1/analyze`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  const json = (await response.json()) as AnalyzeApiResponse & { detail?: string };

  if (!response.ok) {
    return {
      success: false,
      source: "mock",
      error: json.error ?? json.detail ?? "Analiz sırasında bir hata oluştu.",
    };
  }

  return json;
}

export async function checkBackendHealth(): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE}/health`, { method: "GET" });
    return response.ok;
  } catch {
    return false;
  }
}
