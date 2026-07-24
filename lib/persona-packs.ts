/** Sector persona packs — pick a package to fill selectedPersonas in ~1 click. */

export const PERSONA_PACKS = [
  {
    id: "saas",
    label: "SaaS",
    description: "Büyüme odaklı B2B SaaS: şüpheci alıcı + aceleci PM + fiyat hassas.",
    personaIds: ["skeptical", "busy-professional", "price-sensitive", "first-timer"],
  },
  {
    id: "marketplace",
    label: "Marketplace",
    description: "İki taraflı pazar: ilk kez deneyen + fiyat hassas + şüpheci.",
    personaIds: ["first-timer", "price-sensitive", "skeptical", "non-technical"],
  },
  {
    id: "b2b",
    label: "B2B",
    description: "Kurumsal satış: yoğun profesyonel + şüpheci + teknik bilmeyen.",
    personaIds: ["busy-professional", "skeptical", "non-technical", "student"],
  },
] as const;

export type PersonaPackId = (typeof PERSONA_PACKS)[number]["id"];
