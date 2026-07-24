"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight, FileUp, Loader2, Plus, Sparkles, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HealthBanner } from "@/components/analyze/health-banner";
import {
  OrchestrationPanel,
  type OrchestrationLogItem,
} from "@/components/analyze/orchestration-panel";
import { DEFAULT_PERSONA_IDS, PERSONA_OPTIONS, STORAGE_KEYS } from "@/lib/constants";
import { PERSONA_PACKS } from "@/lib/persona-packs";
import {
  createCustomPersona,
  createProduct,
  deleteCustomPersona,
  deleteDocument,
  ingestWebUrl,
  listCustomPersonas,
  listDocuments,
  listProducts,
  submitAnalysisStream,
  uploadDocument,
  type CustomPersonaItem,
  type DocumentItem,
  type OrchestrationEvent,
  type ProductItem,
} from "@/lib/api";
import type { AnalysisFormData } from "@/types/analysis";
import { cn } from "@/lib/utils";
import { useAuth } from "@/lib/supabase/auth-context";

const STEPS = [
  { id: 1, label: "Ürün" },
  { id: 2, label: "Kaynaklar" },
  { id: 3, label: "Personalar" },
] as const;

const SAMPLE_FORM: AnalysisFormData = {
  productName: "TaskFlow",
  productDescription:
    "Küçük ekipler için görev ve sprint yönetimi. Tek ekranda backlog, öncelik ve günlük check-in.",
  targetAudience: "5–20 kişilik startup ekipleri, remote çalışan PM’ler",
  coreFeatures: "Kanban panosu, tek tıkla sprint, Slack bildirimleri, ücretsiz 14 gün deneme",
  differentiator: "Kurulum 2 dakikada bitiyor; Jira kadar ağır değil, Notion kadar dağınık değil",
  selectedPersonas: [...DEFAULT_PERSONA_IDS],
  productId: null,
};

function pushLog(
  setter: React.Dispatch<React.SetStateAction<OrchestrationLogItem[]>>,
  message: string,
  tone: OrchestrationLogItem["tone"] = "default"
) {
  setter((prev) => [...prev, { id: `${Date.now()}-${prev.length}`, message, tone }]);
}

function handleOrchestrationEvent(
  event: OrchestrationEvent,
  setters: {
    setOrchestrationMessage: (msg: string) => void;
    setOrchestrationLogs: React.Dispatch<React.SetStateAction<OrchestrationLogItem[]>>;
    setPersonaProgress: (p: { index: number; total: number; name: string } | null) => void;
  }
) {
  const { setOrchestrationMessage, setOrchestrationLogs, setPersonaProgress } = setters;
  switch (event.type) {
    case "stage":
      setOrchestrationMessage(event.message);
      pushLog(setOrchestrationLogs, event.message);
      break;
    case "rag":
      setOrchestrationMessage(
        event.count > 0
          ? `RAG: ${event.count} kaynak çekildi`
          : "RAG: ürün corpus'u boş, genel bilgi bankası kullanılıyor"
      );
      if (event.titles.length > 0) {
        pushLog(setOrchestrationLogs, `RAG: ${event.titles.slice(0, 4).join(", ")}`, "rag");
      } else {
        pushLog(setOrchestrationLogs, "RAG: global bilgi bankası hazır", "rag");
      }
      break;
    case "persona":
      if (event.status === "running") {
        setPersonaProgress({ index: event.index, total: event.total, name: event.name });
        setOrchestrationMessage(`Persona ${event.index}/${event.total} simüle ediliyor…`);
        pushLog(setOrchestrationLogs, `Persona ${event.index}/${event.total}: ${event.name}`, "persona");
      } else {
        pushLog(
          setOrchestrationLogs,
          event.ok === false
            ? `Persona ${event.index}: yanıt alınamadı`
            : `Persona ${event.index}: tamamlandı`,
          event.ok === false ? "default" : "done"
        );
      }
      break;
    case "synthesis":
      if (event.status === "running") {
        setPersonaProgress(null);
        setOrchestrationMessage("Sentez ajanı skorları birleştiriyor…");
        pushLog(setOrchestrationLogs, "Sentez ajanı çalışıyor…", "synthesis");
      } else {
        pushLog(setOrchestrationLogs, "Sentez tamamlandı", "done");
      }
      break;
    default:
      break;
  }
}

export function AnalysisForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { getAccessToken } = useAuth();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orchestrationMessage, setOrchestrationMessage] = useState<string | null>(null);
  const [orchestrationLogs, setOrchestrationLogs] = useState<OrchestrationLogItem[]>([]);
  const [personaProgress, setPersonaProgress] = useState<{
    index: number;
    total: number;
    name: string;
  } | null>(null);
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [documents, setDocuments] = useState<DocumentItem[]>([]);
  const [customPersonas, setCustomPersonas] = useState<CustomPersonaItem[]>([]);
  const [uploading, setUploading] = useState(false);
  const [webUrl, setWebUrl] = useState("");
  const [ingestingUrl, setIngestingUrl] = useState(false);
  const [newPersonaName, setNewPersonaName] = useState("");
  const [newPersonaTraits, setNewPersonaTraits] = useState("");

  const [form, setForm] = useState<AnalysisFormData>({
    productName: "",
    productDescription: "",
    targetAudience: "",
    coreFeatures: "",
    differentiator: "",
    selectedPersonas: [...DEFAULT_PERSONA_IDS],
    productId: null,
  });

  const refreshProducts = useCallback(async () => {
    const token = await getAccessToken();
    if (!token) return;
    try {
      setProducts(await listProducts(token));
    } catch {
      /* ignore */
    }
  }, [getAccessToken]);

  const refreshDocuments = useCallback(
    async (productId: string | null | undefined) => {
      const token = await getAccessToken();
      if (!token || !productId) {
        setDocuments([]);
        return;
      }
      try {
        setDocuments(await listDocuments(token, productId));
      } catch {
        setDocuments([]);
      }
    },
    [getAccessToken]
  );

  const refreshCustomPersonas = useCallback(async () => {
    const token = await getAccessToken();
    if (!token) return;
    try {
      setCustomPersonas(await listCustomPersonas(token));
    } catch {
      setCustomPersonas([]);
    }
  }, [getAccessToken]);

  useEffect(() => {
    refreshProducts();
    refreshCustomPersonas();
  }, [refreshProducts, refreshCustomPersonas]);

  useEffect(() => {
    refreshDocuments(form.productId);
  }, [form.productId, refreshDocuments]);

  useEffect(() => {
    const productId = searchParams.get("productId");
    if (!productId || products.length === 0) return;
    const selected = products.find((p) => p.id === productId);
    if (!selected) return;
    setForm((prev) => ({
      ...prev,
      productId: selected.id,
      productName: selected.name,
      productDescription: selected.description || prev.productDescription,
    }));
    if (searchParams.get("retest") === "1") setStep(1);
  }, [searchParams, products]);

  function togglePersona(id: string) {
    setForm((prev) => {
      const selected = prev.selectedPersonas.includes(id)
        ? prev.selectedPersonas.filter((p) => p !== id)
        : [...prev.selectedPersonas, id];
      return { ...prev, selectedPersonas: selected };
    });
  }

  function updateField<K extends keyof AnalysisFormData>(key: K, value: AnalysisFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function loadSample() {
    setForm({ ...SAMPLE_FORM });
    setStep(1);
    setError(null);
  }

  async function ensureProduct(): Promise<string> {
    if (form.productId) return form.productId;
    if (!form.productName.trim()) {
      throw new Error("Önce ürün adı girin.");
    }
    const token = await getAccessToken();
    if (!token) throw new Error("Oturum gerekli.");
    const created = await createProduct(token, form.productName, form.productDescription);
    setProducts((prev) => [created, ...prev]);
    updateField("productId", created.id);
    return created.id;
  }

  async function handleUpload(fileList: FileList | null) {
    // Snapshot immediately — FileList is live; clearing the input empties it.
    const file = fileList?.[0];
    if (!file) return;
    setUploading(true);
    setError(null);
    try {
      const productId = await ensureProduct();
      const token = await getAccessToken();
      if (!token) throw new Error("Oturum gerekli.");
      await uploadDocument(token, productId, file);
      await refreshDocuments(productId);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : typeof err === "string"
            ? err
            : "Yükleme başarısız.";
      setError(message === "[object Object]" ? "Doküman yüklenemedi. Dosya formatını ve giriş durumunu kontrol edin." : message);
    } finally {
      setUploading(false);
    }
  }

  async function handleIngestUrl() {
    if (!webUrl.trim()) return;
    setIngestingUrl(true);
    setError(null);
    try {
      const productId = await ensureProduct();
      const token = await getAccessToken();
      if (!token) throw new Error("Oturum gerekli.");
      await ingestWebUrl(token, productId, webUrl.trim());
      setWebUrl("");
      await refreshDocuments(productId);
    } catch (err) {
      setError(err instanceof Error ? err.message : "URL eklenemedi.");
    } finally {
      setIngestingUrl(false);
    }
  }

  async function handleDeleteDoc(id: string) {
    const token = await getAccessToken();
    if (!token) return;
    try {
      await deleteDocument(token, id);
      await refreshDocuments(form.productId);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Silinemedi.");
    }
  }

  async function handleCreateCustomPersona() {
    if (!newPersonaName.trim()) return;
    const token = await getAccessToken();
    if (!token) {
      setError("Oturum gerekli.");
      return;
    }
    try {
      const created = await createCustomPersona(token, newPersonaName.trim(), newPersonaTraits.trim());
      setCustomPersonas((prev) => [created, ...prev]);
      togglePersona(`custom:${created.id}`);
      setNewPersonaName("");
      setNewPersonaTraits("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Persona oluşturulamadı.");
    }
  }

  async function handleDeleteCustomPersona(id: string) {
    const token = await getAccessToken();
    if (!token) return;
    try {
      await deleteCustomPersona(token, id);
      setCustomPersonas((prev) => prev.filter((p) => p.id !== id));
      setForm((prev) => ({
        ...prev,
        selectedPersonas: prev.selectedPersonas.filter((p) => p !== `custom:${id}`),
      }));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Silinemedi.");
    }
  }

  function canGoNext(): boolean {
    if (step === 1) {
      return Boolean(form.productName.trim() && form.productDescription.trim());
    }
    return true;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (step < 3) {
      if (!canGoNext()) {
        setError("Ürün adı ve açıklaması zorunludur.");
        return;
      }
      setError(null);
      if (step === 1) {
        try {
          await ensureProduct();
        } catch (err) {
          setError(err instanceof Error ? err.message : "Ürün kaydedilemedi.");
          return;
        }
      }
      setStep((s) => Math.min(3, s + 1));
      return;
    }

    setError(null);
    if (!form.productName.trim() || !form.productDescription.trim()) {
      setError("Ürün adı ve açıklaması zorunludur.");
      setStep(1);
      return;
    }
    if (form.selectedPersonas.length === 0) {
      setError("En az bir kullanıcı profili seçmelisiniz.");
      return;
    }

    setLoading(true);
    setOrchestrationMessage("Laboratuvar başlıyor…");
    setOrchestrationLogs([]);
    setPersonaProgress(null);
    try {
      const token = await getAccessToken();
      if (!token) throw new Error("Analiz için giriş yapmalısınız.");
      const productId = await ensureProduct();
      const payload = { ...form, productId };
      const json = await submitAnalysisStream(payload, token, (event) => {
        handleOrchestrationEvent(event, {
          setOrchestrationMessage,
          setOrchestrationLogs,
          setPersonaProgress,
        });
      });
      if (!json.success || !json.data) {
        throw new Error(json.error ?? "Analiz sırasında bir hata oluştu.");
      }

      sessionStorage.setItem(STORAGE_KEYS.formData, JSON.stringify(payload));
      sessionStorage.setItem(STORAGE_KEYS.analysisResult, JSON.stringify(json.data));
      sessionStorage.setItem("firstclick-analysis-source", json.source ?? "mock");
      sessionStorage.setItem(STORAGE_KEYS.ragSources, JSON.stringify(json.ragSources ?? []));
      if (json.analysisId) {
        sessionStorage.setItem(STORAGE_KEYS.analysisId, json.analysisId);
        router.push(`/results/${json.analysisId}`);
      } else {
        router.push("/results");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Beklenmeyen bir hata oluştu.");
    } finally {
      setLoading(false);
      setPersonaProgress(null);
    }
  }

  const sourceKindLabel = useMemo(
    () => (kind?: string) => {
      if (kind === "web") return "site / landing";
      if (kind === "screenshot") return "ekran görüntüsü";
      return "ürün dosyası";
    },
    []
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <HealthBanner />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {STEPS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setStep(s.id)}
              className={cn(
                "rounded-xl px-3 py-1.5 text-sm font-medium transition-colors",
                step === s.id
                  ? "bg-lab-ink text-white"
                  : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-lab-chalk"
              )}
            >
              {s.id}. {s.label}
            </button>
          ))}
        </div>
        <Button type="button" variant="outline" size="sm" onClick={loadSample}>
          Örnek ürünle dene
        </Button>
      </div>

      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>1 · Ürün</CardTitle>
            <CardDescription>
              Pitch’inizi yazın. Kaynak eklerken ürün otomatik kaydedilir.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="productSelect">Kayıtlı ürün</Label>
              <select
                id="productSelect"
                className="flex h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                value={form.productId ?? ""}
                onChange={(e) => {
                  const id = e.target.value || null;
                  const selected = products.find((p) => p.id === id);
                  updateField("productId", id);
                  if (selected) {
                    updateField("productName", selected.name);
                    if (selected.description) {
                      updateField("productDescription", selected.description);
                    }
                  }
                }}
              >
                <option value="">Yeni ürün</option>
                {products.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="productName">Ürün adı *</Label>
              <Input
                id="productName"
                placeholder="Örn: TaskFlow"
                value={form.productName}
                onChange={(e) => updateField("productName", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="productDescription">Ürün açıklaması *</Label>
              <Textarea
                id="productDescription"
                placeholder="Ürününüz ne yapıyor? Hangi problemi çözüyor?"
                value={form.productDescription}
                onChange={(e) => updateField("productDescription", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="targetAudience">Hedef kitle</Label>
              <Textarea
                id="targetAudience"
                placeholder="Kimler kullanacak?"
                className="min-h-[80px]"
                value={form.targetAudience}
                onChange={(e) => updateField("targetAudience", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="coreFeatures">Temel özellikler</Label>
              <Textarea
                id="coreFeatures"
                placeholder="Özellikleri listeleyin"
                className="min-h-[80px]"
                value={form.coreFeatures}
                onChange={(e) => updateField("coreFeatures", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="differentiator">Rakiplerden farkı</Label>
              <Textarea
                id="differentiator"
                placeholder="Sizi farklı kılan nedir?"
                className="min-h-[80px]"
                value={form.differentiator}
                onChange={(e) => updateField("differentiator", e.target.value)}
              />
            </div>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>2 · Kaynaklar</CardTitle>
            <CardDescription>
              Dosya, ekran görüntüsü veya site URL’si — persona’lar buradan bağlam alır.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2 text-xs text-slate-500 sm:grid-cols-4">
              <p className="rounded-lg bg-lab-chalk px-3 py-2">Dosya / ekran görüntüsü</p>
              <p className="rounded-lg bg-lab-chalk px-3 py-2">Site / landing URL</p>
              <p className="rounded-lg bg-lab-chalk px-3 py-2">Geçmiş testler</p>
              <p className="rounded-lg bg-lab-ink px-3 py-2 text-lab-signal">
                FirstClick uzmanlık bilgisi (otomatik)
              </p>
            </div>
            <p className="text-xs text-slate-500">
              Persona’lar hem sizin ürün kaynaklarınıza hem FirstClick’in global UX/conversion bilgi
              tabanına bakar — genel ChatGPT yorumu değil.
            </p>
            <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-slate-300 bg-lab-chalk/80 px-4 py-8 text-center transition-colors hover:border-brand-500 hover:bg-brand-50/40">
              <FileUp className="h-6 w-6 text-brand-600" />
              <span className="text-sm font-medium text-slate-700">
                {uploading ? "Yükleniyor…" : "Dosya veya ekran görüntüsü yükle"}
              </span>
              <span className="text-xs text-slate-500">PDF · MD · TXT · PNG · JPG · WEBP · max 8MB</span>
              <input
                type="file"
                className="hidden"
                accept=".pdf,.md,.txt,.markdown,.png,.jpg,.jpeg,.webp,text/plain,application/pdf,image/*"
                disabled={uploading}
                onChange={(e) => {
                  void handleUpload(e.target.files);
                  e.target.value = "";
                }}
              />
            </label>
            <div className="space-y-2">
              <Label htmlFor="webUrl">Site veya landing URL’si</Label>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Input
                  id="webUrl"
                  type="url"
                  placeholder="https://urun-sitesi.com"
                  value={webUrl}
                  onChange={(e) => setWebUrl(e.target.value)}
                  disabled={ingestingUrl}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleIngestUrl}
                  disabled={ingestingUrl || !webUrl.trim()}
                >
                  {ingestingUrl ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                  Sayfayı ekle
                </Button>
              </div>
            </div>
            {documents.length > 0 && (
              <ul className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white">
                {documents.map((doc) => (
                  <li key={doc.id} className="flex items-center justify-between gap-3 px-4 py-3 text-sm">
                    <div className="min-w-0">
                      <p className="truncate text-slate-700">{doc.title}</p>
                      <p className="text-xs text-slate-500">
                        {sourceKindLabel(doc.sourceKind)}
                        {doc.sourceUrl ? ` · ${doc.sourceUrl}` : ""}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleDeleteDoc(doc.id)}
                      className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-600"
                      aria-label="Sil"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      )}

      {step === 3 && (
        <Card>
          <CardHeader>
            <CardTitle>3 · Personalar</CardTitle>
            <CardDescription>
              Hazır tipler + kendi persona’nız. En az birini seçin.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {PERSONA_PACKS.map((pack) => (
                <button
                  key={pack.id}
                  type="button"
                  onClick={() =>
                    setForm((prev) => ({ ...prev, selectedPersonas: [...pack.personaIds] }))
                  }
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-left text-xs hover:border-brand-400 hover:bg-brand-50"
                >
                  <span className="font-medium text-lab-ink">{pack.label}</span>
                  <span className="mt-0.5 block text-slate-500">{pack.description}</span>
                </button>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {PERSONA_OPTIONS.map((persona) => {
                const selected = form.selectedPersonas.includes(persona.id);
                return (
                  <button
                    key={persona.id}
                    type="button"
                    onClick={() => togglePersona(persona.id)}
                    className={cn(
                      "rounded-xl border p-4 text-left transition-all duration-200",
                      selected
                        ? "border-brand-400 bg-brand-50 shadow-sm shadow-brand-500/10"
                        : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                    )}
                  >
                    <p className="text-sm font-medium text-slate-900">{persona.label}</p>
                    <p className="mt-1 text-xs text-slate-500">{persona.description}</p>
                  </button>
                );
              })}
            </div>

            <div className="rounded-xl border border-slate-200 bg-lab-chalk/60 p-4">
              <p className="text-sm font-medium text-lab-ink">Özel persona ekle</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <Input
                  placeholder="Ad (örn: CTO)"
                  value={newPersonaName}
                  onChange={(e) => setNewPersonaName(e.target.value)}
                />
                <Input
                  placeholder="Özellikler / endişeler"
                  value={newPersonaTraits}
                  onChange={(e) => setNewPersonaTraits(e.target.value)}
                />
              </div>
              <Button type="button" variant="outline" size="sm" className="mt-3" onClick={handleCreateCustomPersona}>
                <Plus className="h-4 w-4" />
                Ekle
              </Button>
              {customPersonas.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {customPersonas.map((p) => {
                    const id = `custom:${p.id}`;
                    const selected = form.selectedPersonas.includes(id);
                    return (
                      <li
                        key={p.id}
                        className={cn(
                          "flex items-center justify-between gap-2 rounded-xl border px-3 py-2 text-sm",
                          selected ? "border-brand-400 bg-brand-50" : "border-slate-200 bg-white"
                        )}
                      >
                        <button type="button" className="min-w-0 flex-1 text-left" onClick={() => togglePersona(id)}>
                          <p className="font-medium text-slate-800">{p.name}</p>
                          {p.traits ? <p className="truncate text-xs text-slate-500">{p.traits}</p> : null}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteCustomPersona(p.id)}
                          className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-600"
                          aria-label="Sil"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {loading && (
        <OrchestrationPanel
          activeMessage={orchestrationMessage}
          logs={orchestrationLogs}
          personaProgress={personaProgress}
        />
      )}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <Button
          type="button"
          variant="ghost"
          disabled={step === 1 || loading}
          onClick={() => setStep((s) => Math.max(1, s - 1))}
        >
          <ChevronLeft className="h-4 w-4" />
          Geri
        </Button>
        <Button type="submit" size="lg" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Analiz ediliyor…
            </>
          ) : step < 3 ? (
            <>
              Devam
              <ChevronRight className="h-4 w-4" />
            </>
          ) : (
            <>
              <Sparkles className="h-4 w-4" />
              Analizi Başlat
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
