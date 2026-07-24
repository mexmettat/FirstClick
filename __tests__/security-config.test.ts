import { describe, expect, it } from "vitest";
import nextConfig from "../next.config.mjs";

describe("frontend security headers", () => {
  it("registers baseline headers for all routes", async () => {
    const rules = await nextConfig.headers();
    expect(rules.length).toBeGreaterThan(0);
    const global = rules[0];
    expect(global.source).toBe("/(.*)");
    const names = global.headers.map((h: { key: string }) => h.key);
    expect(names).toContain("X-Frame-Options");
    expect(names).toContain("X-Content-Type-Options");
    expect(names).toContain("Referrer-Policy");
  });
});
