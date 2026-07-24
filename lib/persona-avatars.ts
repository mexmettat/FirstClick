import { PERSONA_OPTIONS } from "@/lib/constants";
import { stripCitationTags } from "@/lib/presence/safe-text";
import type { AnalysisResult, PersonaAnalysis } from "@/types/analysis";

export type PersonaId =
  | "non-technical"
  | "student"
  | "busy-professional"
  | "price-sensitive"
  | "skeptical"
  | "first-timer";

/** OpenAI gpt-4o-mini-tts voices — gender-matched per persona. */
export type TtsVoice =
  | "coral"
  | "shimmer"
  | "cedar"
  | "sage"
  | "ash"
  | "marin"
  | "onyx"
  | "nova"
  | "echo"
  | "alloy"
  | "fable";

export type PersonaAvatarConfig = {
  id: PersonaId;
  label: string;
  glbUrl: string;
  /** Talk-room backdrop image behind the 3D avatar. */
  backgroundUrl: string;
  body: "F" | "M";
  mood: "neutral" | "happy" | "sad" | "angry";
  ttsVoice: TtsVoice;
  /** Style instructions for gpt-4o-mini-tts (Turkish delivery). */
  accent: string;
  /** Speech rate 0.8–1.4; slightly above 1 avoids slow “Siri” feel. */
  ttsSpeed: number;
  tagline: string;
};

/** Free TalkingHead-compatible GLBs (met4citizen/TalkingHead, MIT). */
export const PERSONA_AVATARS: Record<PersonaId, PersonaAvatarConfig> = {
  "non-technical": {
    id: "non-technical",
    label: "Teknik bilmeyen kullanıcı",
    glbUrl: "/avatars/non-technical.glb",
    backgroundUrl: "/avatars/backgrounds/non-technical.jpg",
    body: "F",
    mood: "happy",
    ttsVoice: "coral",
    ttsSpeed: 1.12,
    accent:
      "Kadın sesi. Sıcak, samimi, günlük konuşma temposunda Türkiye Türkçesi. " +
      "Robotik veya aşırı yavaş okuma yok; doğal sohbet gibi konuş.",
    tagline: "Basit anlatım ve net fayda arıyorum.",
  },
  student: {
    id: "student",
    label: "Üniversite öğrencisi",
    glbUrl: "/avatars/student.glb",
    backgroundUrl: "/avatars/backgrounds/student.jpg",
    body: "F",
    mood: "happy",
    ttsVoice: "shimmer",
    ttsSpeed: 1.18,
    accent:
      "Genç kadın sesi. Enerjik, meraklı, biraz hızlı ama anlaşılır İstanbul Türkçesi. " +
      "Arkadaşça ve canlı konuş; resmi spiker tonu kullanma.",
    tagline: "Bütçe dostu ve hızlı değer arıyorum.",
  },
  "busy-professional": {
    id: "busy-professional",
    label: "Yoğun çalışan profesyonel",
    glbUrl: "/avatars/busy-professional.glb",
    backgroundUrl: "/avatars/backgrounds/busy-professional.jpg",
    body: "F",
    mood: "neutral",
    ttsVoice: "marin",
    ttsSpeed: 1.2,
    accent:
      "Kadın sesi. Net, kısa, iş odaklı Türkiye Türkçesi. " +
      "Tempo dinamik; gereksiz uzatma yok, kararlı ve profesyonel konuş.",
    tagline: "Zamanım kısıtlı — hemen sonuç istiyorum.",
  },
  "price-sensitive": {
    id: "price-sensitive",
    label: "Fiyat hassasiyeti olan kullanıcı",
    glbUrl: "/avatars/price-sensitive.glb",
    backgroundUrl: "/avatars/backgrounds/price-sensitive.jpg",
    body: "F",
    mood: "neutral",
    ttsVoice: "sage",
    ttsSpeed: 1.14,
    accent:
      "Kadın sesi. Pratik, net, karşılaştırmacı bir ton. " +
      "Günlük Türkiye Türkçesi; sakin ama sıkıcı veya yavaş değil.",
    tagline: "Fiyat ve limitler net olmalı.",
  },
  skeptical: {
    id: "skeptical",
    label: "Şüpheci kullanıcı",
    glbUrl: "/avatars/skeptical.glb",
    backgroundUrl: "/avatars/backgrounds/skeptical.jpg",
    body: "M",
    mood: "neutral",
    ttsVoice: "ash",
    ttsSpeed: 1.1,
    accent:
      "Erkek sesi. Temkinli, düşünceli ama doğal konuşma hızında. " +
      "Türkiye Türkçesi; şüpheci ama robotik veya monoton olma.",
    tagline: "Vaat değil kanıt görmek istiyorum.",
  },
  "first-timer": {
    id: "first-timer",
    label: "İlk kez deneyen kullanıcı",
    glbUrl: "/avatars/first-timer.glb",
    backgroundUrl: "/avatars/backgrounds/first-timer.jpg",
    body: "M",
    mood: "happy",
    ttsVoice: "cedar",
    ttsSpeed: 1.12,
    accent:
      "Erkek sesi. Destekleyici, rehber gibi, yumuşak ama canlı. " +
      "Türkiye Türkçesi; adım adım anlatırken doğal ve anlaşılır konuş.",
    tagline: "Yeni başlıyorum — adım adım anlatın.",
  },
};

export function isPersonaId(value: string): value is PersonaId {
  return value in PERSONA_AVATARS;
}

export function resolvePersonaIdFromName(name: string): PersonaId | null {
  const byLabel = PERSONA_OPTIONS.find((p) => p.label === name);
  if (byLabel) return byLabel.id as PersonaId;
  return isPersonaId(name) ? name : null;
}

export function getAvatarConfigForPersona(name: string): PersonaAvatarConfig {
  const id = resolvePersonaIdFromName(name);
  if (id) return PERSONA_AVATARS[id];
  return PERSONA_AVATARS["non-technical"];
}

export function personaOpeningLine(persona: PersonaAnalysis, productName?: string): string {
  const name = productName ? `${productName} için` : "Bu ürün için";
  const impression = stripCitationTags(persona.firstImpression);
  const understood = stripCitationTags(persona.understood);
  const confusion = stripCitationTags(persona.confusion);
  return (
    `Merhaba, ben ${persona.name}. ${name} ilk izlenimim: ${impression} ` +
    `Anladığım: ${understood} Kafamı karıştıran: ${confusion}`
  );
}

/** Always return 6 talk-room personas; fill gaps from avatar taglines when analysis omitted some. */
export function buildTalkPersonas(result: AnalysisResult): PersonaAnalysis[] {
  return PERSONA_OPTIONS.map((opt) => {
    const fromResult = result.personas.find((p) => p.name === opt.label);
    if (fromResult) return fromResult;

    const cfg = PERSONA_AVATARS[opt.id as PersonaId];
    return {
      name: opt.label,
      firstImpression: cfg.tagline,
      understood: "Ürünün temel vaadini genel hatlarıyla kavradım.",
      confusion: "Detaylar ve güven sinyalleri henüz net değil.",
      likelihood: "Orta" as const,
      dropOffReason: "Rehberlik ve net adımlar olmazsa vazgeçebilirim.",
      suggestion: "Basit onboarding ve net fayda cümlesi ekleyin.",
    };
  });
}
