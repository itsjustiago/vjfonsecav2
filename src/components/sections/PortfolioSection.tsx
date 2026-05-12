import { SectionHeader } from "@/components/ui/SectionHeader";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { PORTFOLIO } from "@/lib/constants";

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
            eyebrow="Obras"
            title={
              <>
                Aplicado em obra,
                <br />
                <span className="text-[--color-text-muted]">
                  validado pelo tempo.
                </span>
              </>
            }
            lead="Uma seleção recente de coberturas, fachadas e vedações executadas em parceria com empreiteiros da região."
          />
          <div className="hidden md:block text-right font-mono text-[11px] tracking-[0.18em] uppercase text-[--color-text-subtle]">
            12 projetos
            <br />
            2022 — 2024
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
