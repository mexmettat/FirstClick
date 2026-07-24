import { describe, expect, it } from "vitest";
import { DEMO_FORM, DEMO_RAG_SOURCES, getLocalDemoPayload } from "@/lib/demo-fixture";

describe("demo fixture", () => {
  it("ships a complete offline demo payload", () => {
    const payload = getLocalDemoPayload();
    expect(payload.success).toBe(true);
    expect(payload.data.overallScore).toBeGreaterThan(0);
    expect(payload.ragSources.length).toBeGreaterThan(0);
  });

  it("includes knowledge-base citations for RAG panel", () => {
    const kb = DEMO_RAG_SOURCES.filter((s) => s.citation.startsWith("kb:"));
    expect(kb.length).toBeGreaterThanOrEqual(2);
  });

  it("has required form fields for analyze flow", () => {
    expect(DEMO_FORM.productName.length).toBeGreaterThan(0);
    expect(DEMO_FORM.selectedPersonas.length).toBeGreaterThan(0);
  });
});
