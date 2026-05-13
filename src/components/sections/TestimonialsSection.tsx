import { Star } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { TESTIMONIALS, TESTIMONIALS_SECTION, STATS } from "@/lib/constants";
import type { Testimonial } from "@/lib/types";

export function TestimonialsSection() {
  // Duplicate the list so the marquee loops seamlessly when translated by -50%.
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      id="testemunhos"
      className="relative scroll-mt-24 py-24 md:py-32 bg-[--color-bg-base] overflow-hidden"
    >
      <div className="container-x">
        <div className="mb-14 md:mb-20">
          <SectionHeader
            eyebrow={TESTIMONIALS_SECTION.eyebrow}
            title={
              <>
                {TESTIMONIALS_SECTION.title[0]}
                <br />
                <span className="text-[--color-text-muted] accent-serif">
                  {TESTIMONIALS_SECTION.title[1]}
                </span>
              </>
            }
            lead={TESTIMONIALS_SECTION.lead}
          />
        </div>
      </div>

      {/* Marquee — full-bleed, fades on the edges */}
      <Reveal>
        <div
          className="relative"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          }}
        >
          <div className="marquee-track gap-5 md:gap-6 py-2">
            {loop.map((t, i) => (
              <TestimonialCard key={`${t.id}-${i}`} t={t} />
            ))}
          </div>
        </div>
      </Reveal>

      {/* Stats row */}
      <div className="container-x mt-16 md:mt-20">
        <Reveal>
          <div className="rounded-2xl border border-[--color-border] bg-[--color-bg-surface] p-8 md:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[--color-border]">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center gap-2 py-6 sm:py-2 px-6 text-center"
                >
                  <span className="display text-4xl md:text-5xl text-[--color-text-primary]">
                    {s.value}
                  </span>
                  <span className="text-sm md:text-base text-[--color-text-muted]">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  const initials = t.name
    .split(/\s+/)
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <article
      className="shrink-0 w-[88vw] max-w-[420px] md:w-[440px] rounded-2xl border border-[--color-border] bg-[--color-bg-surface] p-7 flex flex-col gap-5"
      aria-roledescription="testimonial"
    >
      <header className="flex items-center gap-3.5">
        <div
          aria-hidden
          className="grid place-items-center h-11 w-11 rounded-full bg-[--color-bg-elevated] border border-[--color-border-strong] text-[--color-text-primary] text-sm font-semibold tracking-tight"
        >
          {initials}
        </div>
        <div className="min-w-0">
          <div className="text-[17px] font-semibold text-[--color-text-primary] leading-tight truncate">
            {t.name}
          </div>
          <div className="text-[13px] text-[--color-text-muted] truncate">
            {t.role}
          </div>
        </div>
      </header>

      <div className="h-px bg-[--color-border]" />

      <p className="text-[15px] leading-relaxed text-[--color-text-muted] min-h-[120px]">
        “{t.quote}”
      </p>

      <div className="mt-auto flex items-center gap-2 pt-1">
        <span className="text-sm text-[--color-text-primary] font-medium">
          {t.rating.toFixed(1)}
        </span>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-3.5 w-3.5"
              fill={i < t.rating ? "#F5C518" : "transparent"}
              stroke={i < t.rating ? "#F5C518" : "var(--color-text-subtle)"}
              strokeWidth={1.5}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
