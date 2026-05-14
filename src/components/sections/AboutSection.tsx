import Image from "next/image";
import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { DifferentiatorItem } from "@/components/ui/DifferentiatorItem";
import { ABOUT, DIFFERENTIATORS } from "@/lib/constants";

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative scroll-mt-24 py-24 sm:py-28 md:py-36 bg-[--color-bg-base] isolate"
    >
      {/* Ambient glows — clipped by their own wrapper so the section itself
          doesn't become a scroll container (that would break the sticky card). */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Metallic blue ambient glow — top-right behind the sticky card */}
        <div
          className="absolute top-20 -right-40 h-[520px] w-[520px] rounded-full opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(111,136,164,0.15), rgba(111,136,164,0.05) 38%, transparent 68%)",
            filter: "blur(40px)",
          }}
        />
        {/* Counter glow — bottom-left, smaller */}
        <div
          className="absolute -bottom-24 -left-32 h-[460px] w-[460px] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(111,136,164,0.13), rgba(111,136,164,0.04) 38%, transparent 68%)",
            filter: "blur(40px)",
          }}
        />
      </div>
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 space-y-12">
            <Reveal className="space-y-6">
              <span className="eyebrow-pill">{ABOUT.eyebrow}</span>
              <h2 className="display text-[44px] sm:text-5xl md:text-[56px] leading-[1.04] text-balance">
                {ABOUT.title}
              </h2>
              <div className="space-y-4 text-(color:--color-text-muted) text-base md:text-lg leading-relaxed max-w-2xl">
                {ABOUT.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>

            {/* Proof points — a structured credential list with hairline
                dividers. Scannable, distinct from the prose above it. */}
            <Reveal>
              <ul className="max-w-2xl border-t border-[--color-border]">
                {ABOUT.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3.5 py-3.5 border-b border-[--color-border]"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-(color:--color-accent)"
                      strokeWidth={2}
                    />
                    <span className="text-sm md:text-[15px] text-(color:--color-text-muted)">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={1} className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[--color-border]">
              <Image
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80"
                alt="Instalação de painéis metálicos em obra"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-28 rounded-2xl border border-[--color-border] bg-[--color-bg-surface] p-7 md:p-9">
              <div className="flex items-center justify-between mb-2">
                <span className="eyebrow">Diferenciadores</span>
                <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-(color:--color-text-subtle)">
                  04
                </span>
              </div>
              <div className="mt-4">
                {DIFFERENTIATORS.map((d, i) => (
                  <DifferentiatorItem key={d.id} item={d} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
