import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection, WhyNotAiSection, LabPillars } from "@/components/landing/hero-section";
import { LabScoreStrip } from "@/components/landing/lab-score-strip";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <LabScoreStrip />
        <WhyNotAiSection />
        <LabPillars />
      </main>
      <SiteFooter />
    </div>
  );
}
