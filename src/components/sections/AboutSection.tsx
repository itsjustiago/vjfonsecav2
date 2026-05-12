import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { DifferentiatorItem } from "@/components/ui/DifferentiatorItem";
import { ABOUT, DIFFERENTIATORS } from "@/lib/constants";

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative scroll-mt-24 py-24 md:py-32 bg-[--color-bg-base]"
    >
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 space-y-10">
            <Reveal className="space-y-6">
              <span className="eyebrow inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[--color-accent]" />
                {ABOUT.eyebrow}
              </span>
              <h2 className="display text-4xl sm:text-5xl md:text-[56px] text-balance">
                {ABOUT.title}
              </h2>
              <div className="space-y-5 text-[--color-text-muted] text-base md:text-lg leading-relaxed max-w-2xl">
                {ABOUT.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
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
                <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[--color-text-subtle]">
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
