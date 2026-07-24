"use client";

import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { Mic, Send, Users } from "lucide-react";
import { AuthGuard } from "@/components/auth/auth-guard";
import { PresenceAnswerConfirm } from "@/components/presence/presence-answer-confirm";
import { PresenceCallControls } from "@/components/presence/presence-call-controls";
import { PresenceSelfView } from "@/components/presence/presence-self-view";
import {
  TalkingHeadAvatar,
  type TalkingHeadAvatarHandle,
} from "@/components/presence/talking-head-avatar";
import { askPersonaFollowup, fetchPublicDemo, getAnalysis } from "@/lib/api";
import {
  buildTalkPersonas,
  getAvatarConfigForPersona,
  personaOpeningLine,
  type PersonaAvatarConfig,
} from "@/lib/persona-avatars";
import { createSpeechEndDetector } from "@/lib/presence/speech-end-detector";
import { safeText, stripCitationTags } from "@/lib/presence/safe-text";
import { usePresenceWebcam } from "@/lib/presence/use-presence-webcam";
import { useAuth } from "@/lib/supabase/auth-context";
import type { AnalysisFormData, AnalysisResult, PersonaAnalysis } from "@/types/analysis";

type ConversationPhase =
  | "idle"
  | "booting"
  | "persona_speaking"
  | "listening"
  | "processing";

const SILENCE_MS = 5000;

function formatCallDuration(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function phaseLabel(phase: ConversationPhase, confirmOpen: boolean): string {
  if (confirmOpen && phase === "listening") {
    return "Onay — gönder veya konuşmaya devam et";
  }
  switch (phase) {
    case "idle":
      return "Katılmak için hazır";
    case "booting":
      return "Odaya bağlanılıyor…";
    case "persona_speaking":
      return "Persona konuşuyor";
    case "listening":
      return "Sıra sizde — sorunuzu söyleyin";
    case "processing":
      return "Persona yanıt hazırlıyor…";
    default:
      return "";
  }
}

function PersonaTalkContent() {
  const params = useParams<{ id: string }>();
  const searchParams = useSearchParams();
  const { getAccessToken } = useAuth();

  const [loadingAnalysis, setLoadingAnalysis] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [formData, setFormData] = useState<AnalysisFormData | null>(null);
  const [analysisId, setAnalysisId] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const initialPersona = searchParams.get("persona") ?? "";
  const [activePersonaName, setActivePersonaName] = useState("");
  const [avatarConfig, setAvatarConfig] = useState<PersonaAvatarConfig | null>(null);

  const [phase, setPhase] = useState<ConversationPhase>("idle");
  const [avatarReady, setAvatarReady] = useState(false);
  const [conversationStarted, setConversationStarted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [liveTranscript, setLiveTranscript] = useState("");
  const [manualQuestion, setManualQuestion] = useState("");
  const [showManualInput, setShowManualInput] = useState(false);
  const [micError, setMicError] = useState<string | null>(null);
  const [callSeconds, setCallSeconds] = useState(0);
  const [answerConfirmOpen, setAnswerConfirmOpen] = useState(false);
  const [pendingQuestion, setPendingQuestion] = useState("");
  const [lastReply, setLastReply] = useState("");
  const [history, setHistory] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
  const [processing, setProcessing] = useState(false);

  const avatarRef = useRef<TalkingHeadAvatarHandle | null>(null);
  const detectorRef = useRef<ReturnType<typeof createSpeechEndDetector> | null>(null);
  const phaseRef = useRef<ConversationPhase>("idle");
  const processingRef = useRef(false);

  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        if (params.id === "demo-public") {
          const demo = await fetchPublicDemo();
          if (cancelled) return;
          const analysis = demo.data;
          setResult(analysis);
          setFormData(demo.formData);
          setAnalysisId("demo-public");
          const token = await getAccessToken();
          setAccessToken(token);

          const personas = buildTalkPersonas(analysis);
          const preferred =
            personas.find((p) => p.name === initialPersona)?.name ??
            personas[0]?.name ??
            "";
          setActivePersonaName(preferred);
          setAvatarConfig(getAvatarConfigForPersona(preferred));
          return;
        }

        const token = await getAccessToken();
        if (!token) throw new Error("Oturum gerekli.");
        const detail = await getAnalysis(params.id, token);
        if (cancelled) return;
        if (!detail.result) throw new Error("Analiz sonucu boş.");
        const analysis = detail.result as AnalysisResult;
        setResult(analysis);
        setFormData(detail.formData);
        setAnalysisId(detail.id);
        setAccessToken(token);

        const personas = buildTalkPersonas(analysis);
        const preferred =
          personas.find((p) => p.name === initialPersona)?.name ??
          personas[0]?.name ??
          "";
        setActivePersonaName(preferred);
        setAvatarConfig(getAvatarConfigForPersona(preferred));
      } catch (err) {
        if (!cancelled) {
          setLoadError(err instanceof Error ? err.message : "Analiz yüklenemedi.");
        }
      } finally {
        if (!cancelled) setLoadingAnalysis(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [getAccessToken, initialPersona, params.id]);

  const talkPersonas = useMemo(
    () => (result ? buildTalkPersonas(result) : []),
    [result]
  );

  const activePersona = useMemo(
    () => talkPersonas.find((p) => p.name === activePersonaName) ?? null,
    [talkPersonas, activePersonaName]
  );

  const productName = formData?.productName ?? "Ürün";
  const leaveHref = params.id === "demo-public" ? "/demo" : `/results/${params.id}`;

  const webcamEnabled = conversationStarted || avatarReady;
  const { videoRef, ready: cameraReady, error: cameraError } = usePresenceWebcam({
    enabled: webcamEnabled,
  });

  useEffect(() => {
    if (!conversationStarted) {
      setCallSeconds(0);
      return;
    }
    const id = window.setInterval(() => setCallSeconds((v) => v + 1), 1000);
    return () => window.clearInterval(id);
  }, [conversationStarted]);

  const stopListening = useCallback(() => {
    detectorRef.current?.stop();
  }, []);

  const speakPersona = useCallback(async (text: string) => {
    let handle = avatarRef.current;
    if (!handle?.isReady()) {
      const ok = await handle?.waitUntilReady?.(8000);
      handle = avatarRef.current;
      if (!ok && !handle?.isReady()) {
        throw new Error("Avatar henüz hazır değil.");
      }
    }
    setPhase("persona_speaking");
    await avatarRef.current!.speak(text);
  }, []);

  const submitQuestion = useCallback(
    async (text: string) => {
      if (processingRef.current || phaseRef.current !== "listening") return;
      if (!activePersona) return;

      processingRef.current = true;
      setAnswerConfirmOpen(false);
      setPendingQuestion("");
      setPhase("processing");
      stopListening();
      setLiveTranscript(text);
      setProcessing(true);
      setMicError(null);

      try {
        if (!accessToken) {
          throw new Error("Sesli soru-cevap için giriş yapın. Şimdilik sadece açılış konuşmasını dinleyebilirsiniz.");
        }
        const res = await askPersonaFollowup(accessToken, {
          analysisId,
          productId: formData?.productId,
          personaName: activePersona.name,
          question: text,
          productName: formData?.productName,
          productDescription: formData?.productDescription,
          priorPersona: activePersona as unknown as Record<string, unknown>,
          history,
        });

        const answer = stripCitationTags(safeText(res.answer, "Yanıt alınamadı."));
        setLastReply(answer);
        setHistory((prev) => [
          ...prev,
          { role: "user", content: text },
          { role: "assistant", content: answer },
        ]);
        await speakPersona(answer);
        startListeningRef.current();
      } catch (error) {
        setMicError(error instanceof Error ? error.message : "Soru gönderilemedi.");
        if (avatarRef.current?.isReady()) {
          await speakPersona("Üzgünüm, yanıt veremedim. Tekrar dener misiniz?");
          startListeningRef.current();
        } else {
          setPhase("idle");
        }
      } finally {
        setProcessing(false);
        processingRef.current = false;
      }
    },
    [
      accessToken,
      activePersona,
      analysisId,
      formData?.productDescription,
      formData?.productId,
      formData?.productName,
      history,
      speakPersona,
      stopListening,
    ]
  );

  const startListeningRef = useRef<() => void>(() => {});

  const startListening = useCallback(() => {
    stopListening();
    setLiveTranscript("");
    setAnswerConfirmOpen(false);
    setPendingQuestion("");
    setMicError(null);
    setPhase("listening");

    detectorRef.current = createSpeechEndDetector({
      silenceMs: SILENCE_MS,
      minChars: 6,
      lang: "tr-TR",
      requireConfirmation: true,
      onTranscript: (t) => setLiveTranscript(t),
      onSilenceDetected: (t) => {
        if (processingRef.current || phaseRef.current !== "listening") return;
        setPendingQuestion(t);
        setAnswerConfirmOpen(true);
      },
      onSpeechResumed: () => {
        setAnswerConfirmOpen(false);
        setPendingQuestion("");
      },
      onError: (message) => setMicError(message),
      onSpeechEnd: (t) => {
        void submitQuestion(t);
      },
    });

    detectorRef.current.start();
  }, [stopListening, submitQuestion]);

  startListeningRef.current = startListening;

  const runOpening = useCallback(async () => {
    if (!activePersona) return;
    const opening = personaOpeningLine(activePersona, productName);
    await speakPersona(opening);
    startListening();
  }, [activePersona, productName, speakPersona, startListening]);

  const beginConversation = useCallback(async () => {
    if (conversationStarted || !activePersona) return;
    setMicError(null);

    // next/dynamic previously broke refs; trust React ready flag + handle if present
    if (!avatarReady && !avatarRef.current?.isReady()) {
      const ok = await avatarRef.current?.waitUntilReady?.(12000);
      if (!ok && !avatarReady) {
        setPhase("idle");
        setMicError("Avatar hâlâ yükleniyor. Birkaç saniye bekleyip tekrar deneyin.");
        return;
      }
    }

    setPhase("booting");
    setHistory([]);
    setLastReply("");
    setConversationStarted(true);

    await new Promise<void>((resolve) => {
      window.setTimeout(resolve, 350);
    });

    try {
      await runOpening();
    } catch (error) {
      setMicError(error instanceof Error ? error.message : "Oturum başlatılamadı.");
      setPhase("idle");
      setConversationStarted(false);
    }
  }, [activePersona, avatarReady, conversationStarted, runOpening]);

  useEffect(() => {
    return () => {
      stopListening();
      avatarRef.current?.stop();
    };
  }, [stopListening]);

  function selectPersona(persona: PersonaAnalysis) {
    if (conversationStarted) return;
    setActivePersonaName(persona.name);
    setAvatarConfig(getAvatarConfigForPersona(persona.name));
    setAvatarReady(false);
  }

  async function handleManualSubmit() {
    const text = manualQuestion.trim();
    if (!text) return;
    setAnswerConfirmOpen(false);
    setPendingQuestion("");
    processingRef.current = true;
    stopListening();
    setPhase("processing");
    setProcessing(true);
    try {
      await submitQuestion(text);
      setManualQuestion("");
      setShowManualInput(false);
    } finally {
      setProcessing(false);
      processingRef.current = false;
    }
  }

  function handleConfirmSubmit() {
    if (processingRef.current || phase !== "listening") return;
    const text =
      pendingQuestion.trim() ||
      detectorRef.current?.getTranscript().trim() ||
      liveTranscript.trim();
    if (text.length < 6) return;
    detectorRef.current?.submitNow();
  }

  function handleConfirmContinue() {
    setAnswerConfirmOpen(false);
    setPendingQuestion("");
    detectorRef.current?.resumeListening();
  }

  async function handleReplayOpening() {
    if (!activePersona) return;
    stopListening();
    const line = lastReply || personaOpeningLine(activePersona, productName);
    await speakPersona(line);
    if (conversationStarted) startListening();
  }

  const personaActive = isSpeaking || phase === "persona_speaking";
  const userActive = phase === "listening" && liveTranscript.trim().length > 0;
  const captionText = stripCitationTags(
    phase === "processing"
      ? "Persona yanıt hazırlıyor…"
      : phase === "listening"
        ? liveTranscript || "Sorunuzu söyleyin — kelimeler burada görünür."
        : lastReply ||
            activePersona?.firstImpression ||
            "Odaya katılarak persona ile konuşmaya başlayın."
  );

  if (loadingAnalysis) {
    return (
      <main className="presence-room flex min-h-screen items-center justify-center bg-[#1a1a1a] text-slate-300">
        Analiz yükleniyor…
      </main>
    );
  }

  if (loadError || !result || !avatarConfig || !activePersona) {
    return (
      <main className="presence-room flex min-h-screen flex-col items-center justify-center gap-4 bg-[#1a1a1a] px-4 text-center text-slate-200">
        <p>{loadError ?? "Persona bulunamadı."}</p>
        <Link href={leaveHref} className="text-blue-300 underline">
          Sonuçlara dön
        </Link>
      </main>
    );
  }

  return (
    <main className="presence-room fixed inset-0 flex flex-col bg-[#1a1a1a] text-slate-100">
      <header className="presence-header z-30 flex shrink-0 items-center justify-between gap-3 border-b border-white/10 bg-[#111111]/95 px-4 py-3 backdrop-blur-md sm:px-6">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
            <p className="presence-header-title truncate text-sm font-semibold">
              {productName} · Persona Odası
            </p>
          </div>
          <p className="presence-header-subtitle mt-0.5 truncate text-xs">
            {avatarConfig.tagline}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-2 text-xs">
          {conversationStarted && (
            <span className="presence-header-chip presence-header-chip-timer rounded-full px-2.5 py-1 font-mono">
              {formatCallDuration(callSeconds)}
            </span>
          )}
          <Link
            href={leaveHref}
            className="presence-header-link inline-flex items-center gap-1.5 rounded-full px-2.5 py-1"
          >
            ← Çıkış
          </Link>
        </div>
      </header>

      {!conversationStarted && (
        <div className="z-20 shrink-0 border-b border-white/10 bg-[#141414]/90 px-4 py-3">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Persona seçin
          </p>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {talkPersonas.map((persona) => {
              const cfg = getAvatarConfigForPersona(persona.name);
              const selected = persona.name === activePersonaName;
              return (
                <button
                  key={persona.name}
                  type="button"
                  onClick={() => selectPersona(persona)}
                  className={`shrink-0 rounded-xl border px-3 py-2 text-left transition ${
                    selected
                      ? "border-[#0b5cff]/60 bg-[#0b5cff]/15"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <span className="block text-xs font-semibold text-white">{cfg.label}</span>
                  <span className="mt-0.5 block max-w-[160px] truncate text-[10px] text-slate-400">
                    {cfg.tagline}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="relative min-h-0 flex-1">
        <div
          className={`absolute inset-3 overflow-hidden rounded-2xl border-2 bg-[#0d0d0d] transition-colors duration-200 sm:inset-4 ${
            personaActive
              ? "border-[#0b5cff]/70 shadow-[0_0_0_1px_rgba(11,92,255,0.35)]"
              : userActive
                ? "border-emerald-400/50"
                : "border-white/10"
          }`}
        >
          <TalkingHeadAvatar
            key={avatarConfig.id}
            ref={avatarRef}
            persona={avatarConfig}
            token={accessToken}
            variant="tile"
            className="relative z-0 h-full"
            onReady={() => setAvatarReady(true)}
            onSpeakingChange={setIsSpeaking}
            onError={(message) => setMicError(message)}
          />

          <div className="pointer-events-none absolute inset-x-0 top-0 bg-gradient-to-b from-black/55 to-transparent px-4 pb-8 pt-4">
            <div className="flex items-center gap-2">
              <Users size={14} className="text-slate-300" />
              <span className="text-sm font-medium text-white">{activePersona.name}</span>
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wide text-slate-300">
                Persona
              </span>
              {personaActive && (
                <span className="rounded-full bg-[#0b5cff]/25 px-2 py-0.5 text-[10px] font-medium text-blue-200">
                  Konuşuyor
                </span>
              )}
            </div>
          </div>

          <PresenceSelfView
            videoRef={videoRef}
            cameraReady={cameraReady}
            cameraError={cameraError}
            active={userActive}
            listening={phase === "listening"}
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/85 via-black/55 to-transparent px-4 pb-4 pt-16 sm:px-6">
            {conversationStarted ? (
              <>
                <p className="presence-caption-label mb-1 text-[11px] font-semibold uppercase tracking-wider">
                  {phase === "listening" ? "Canlı altyazı" : "Persona yanıtı"}
                </p>
                <p className="presence-caption-text max-w-[min(100%,720px)] text-sm leading-relaxed sm:text-base">
                  {captionText}
                </p>
              </>
            ) : null}
          </div>

          {!conversationStarted && (
            <div className="pointer-events-none absolute inset-x-0 top-16 z-20 flex justify-center px-4 sm:top-20">
              <div className="rounded-full border border-white/10 bg-black/45 px-4 py-2 text-center text-sm text-slate-200 backdrop-blur-sm">
                {avatarReady
                  ? `${activePersona.name} hazır — alttan odaya katılın`
                  : "3D avatar yükleniyor…"}
              </div>
            </div>
          )}

          {phase === "booting" && conversationStarted && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/45">
              <div className="rounded-2xl border border-white/10 bg-[#141414]/95 px-6 py-4 text-center">
                <p className="text-sm text-slate-200">Odaya bağlanılıyor…</p>
              </div>
            </div>
          )}

          {micError && (
            <div className="absolute left-4 right-4 top-16 z-30 rounded-xl border border-amber-400/30 bg-amber-500/15 px-4 py-3 text-sm text-amber-100 sm:left-6 sm:max-w-md">
              {micError}
            </div>
          )}
        </div>
      </div>

      <div
        className={`presence-phase-bar shrink-0 border-t border-white/10 bg-[#111111]/95 px-4 py-2 text-center text-xs ${
          conversationStarted ? "" : "hidden sm:block"
        }`}
      >
        <span className="presence-phase-bar-text inline-flex items-center gap-2">
          {phase === "listening" && <Mic size={12} className="animate-pulse text-emerald-400" />}
          {phaseLabel(phase, answerConfirmOpen)}
        </span>
      </div>

      <PresenceCallControls
        conversationStarted={conversationStarted}
        avatarReady={avatarReady}
        loading={processing}
        isSpeaking={isSpeaking}
        phase={phase}
        showManualInput={showManualInput}
        leaveHref={leaveHref}
        onJoin={() => {
          setMicError(null);
          void beginConversation();
        }}
        onReplayOpening={() => void handleReplayOpening()}
        onToggleManualInput={() => setShowManualInput((v) => !v)}
      />

      <PresenceAnswerConfirm
        open={answerConfirmOpen && phase === "listening" && conversationStarted}
        transcript={pendingQuestion || liveTranscript}
        onSubmit={handleConfirmSubmit}
        onContinue={handleConfirmContinue}
      />

      {showManualInput && conversationStarted && (
        <div className="absolute inset-x-0 bottom-[88px] z-30 mx-auto max-w-2xl px-4 sm:bottom-[92px]">
          <div className="rounded-2xl border border-white/10 bg-[#141414]/98 p-4 shadow-2xl">
            <label
              className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400"
              htmlFor="presence-manual-question"
            >
              Sorunuzu yazın
            </label>
            <textarea
              id="presence-manual-question"
              value={manualQuestion}
              onChange={(e) => setManualQuestion(e.target.value)}
              placeholder="Örn: Fiyatlandırma neden net değil?"
              className="min-h-28 w-full rounded-xl border border-white/10 bg-[#0d0d0d] p-3 text-base leading-relaxed text-slate-100"
              spellCheck
            />
            <div className="mt-3 flex gap-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0b5cff] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0a4fe0] disabled:opacity-50"
                disabled={processing || !manualQuestion.trim()}
                onClick={() => void handleManualSubmit()}
              >
                <Send size={16} />
                Gönder
              </button>
              <button
                type="button"
                className="rounded-xl border border-white/15 px-4 py-2.5 text-sm text-slate-300 hover:bg-white/5"
                onClick={() => setShowManualInput(false)}
              >
                İptal
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function PersonaTalkPageGate() {
  const params = useParams<{ id: string }>();
  const isDemo = params.id === "demo-public";

  const content = (
    <Suspense
      fallback={
        <main className="presence-room flex min-h-screen items-center justify-center bg-[#1a1a1a] text-slate-300">
          Yükleniyor…
        </main>
      }
    >
      <PersonaTalkContent />
    </Suspense>
  );

  if (isDemo) return content;
  return <AuthGuard>{content}</AuthGuard>;
}

export default function PersonaTalkPage() {
  return <PersonaTalkPageGate />;
}
