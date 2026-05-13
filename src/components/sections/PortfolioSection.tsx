import { SectionHeader } from "@/components/ui/SectionHeader";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { PORTFOLIO, PORTFOLIO_SECTION } from "@/lib/constants";

// Editorial bento layout: define an aspect per slot, looped across the gallery
const ASPECTS = [
  "tall",
  "wide",
  "tall",
  "square",
  "wide",
  "tall",
  "square",
  "hero",
  "tall",
  "wide",
  "tall",
  "hero",
] as const;

export function PortfolioSection() {
  return (
    <section
      id="portefolio"
      className="relative scroll-mt-24 py-24 md:py-32 bg-[--color-bg-surface] border-y border-[--color-border]"
    >
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 md:mb-20">
          <SectionHeader
            eyebrow={PORTFOLIO_SECTION.eyebrow}
            title={
              <>
                {PORTFOLIO_SECTION.title[0]}
                <br />
                <span className="text-[--color-text-muted] accent-serif">
                  {PORTFOLIO_SECTION.title[1]}
                </span>
              </>
            }
            lead={PORTFOLIO_SECTION.lead}
          />
          <div className="hidden md:block text-right font-mono text-[11px] tracking-[0.18em] uppercase text-[--color-text-subtle]">
            {PORTFOLIO.length} projetos
            <br />
            2021 — 2024
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-auto gap-3 md:gap-5">
          {PORTFOLIO.map((project, i) => {
            const aspect = ASPECTS[i % ASPECTS.length];
            // Make hero items span 2 columns
            const span =
              aspect === "hero" || aspect === "wide"
                ? "col-span-2"
                : "col-span-1";
            return (
              <div key={project.id} className={span}>
                <PortfolioCard
                  project={project}
                  index={i}
                  aspect={aspect}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
