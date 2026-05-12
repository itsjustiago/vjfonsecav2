"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { EASE_OUT } from "@/lib/utils";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#06070a] isolate"
    >
      {/* Radial line pattern — fan of rays from top center */}
      <RadialRays />

      {/* Faint blueprint grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Top vignette + accent glow */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[60vh] -z-10 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,rgba(91,155,229,0.35),transparent_70%)]"
      />
      {/* Bottom fade to base */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 -z-10 bg-gradient-to-b from-transparent to-[--color-bg-base]"
      />

      <div className="container-x relative z-10 flex flex-col items-center text-center pt-24 pb-20">
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
          className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-[--color-border-strong] bg-[--color-bg-surface]/60 backdrop-blur-sm px-4 py-1.5"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[--color-accent] opacity-75 animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[--color-accent]" />
          </span>
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[--color-text-muted]">
            Serralharia Industrial
          </span>
          <span className="text-[--color-text-subtle]">·</span>
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[--color-text-subtle]">
            Setúbal · Est. 2003
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE_OUT, delay: 0.12 }}
          className="display text-[44px] leading-[0.95] sm:text-[64px] md:text-[88px] lg:text-[112px] text-balance max-w-5xl"
        >
          Aço que sustenta
          <br />
          <span className="text-[--color-text-muted]">
            o que se constrói.
          </span>
        </motion.h1>

        {/* Lead */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.3 }}
          className="mt-8 max-w-xl text-[15px] md:text-base leading-relaxed text-[--color-text-muted]"
        >
          Painéis, fachadas, vedações e perfis metálicos para a construção
          civil e industrial. Resposta técnica em 24&nbsp;horas.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
        >
          <LinkButton href="#contacto" size="lg">
            Pedir orçamento
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
          </LinkButton>
          <LinkButton href="#produtos" variant="outline" size="lg">
            Ver produtos
          </LinkButton>
        </motion.div>

        {/* Metrics strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: EASE_OUT, delay: 0.65 }}
          className="mt-20 grid grid-cols-3 gap-px bg-[--color-border] rounded-2xl overflow-hidden border border-[--color-border] max-w-2xl w-full"
        >
          {[
            { stat: "+20", label: "Anos no sector" },
            { stat: "11+", label: "Produtos especializados" },
            { stat: "24h", label: "Tempo de resposta" },
          ].map((m) => (
            <div
              key={m.label}
              className="bg-[--color-bg-base]/80 backdrop-blur-sm px-4 py-5 flex flex-col items-center gap-1"
            >
              <span className="display text-2xl md:text-3xl text-[--color-text-primary]">
                {m.stat}
              </span>
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[--color-text-subtle]">
                {m.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#produtos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[10px] tracking-[0.18em] uppercase text-[--color-text-subtle] hover:text-[--color-text-primary] transition-colors"
      >
        Explorar
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-3.5 w-3.5" strokeWidth={1.5} />
        </motion.span>
      </motion.a>
    </section>
  );
}

/** Radial fan of thin lines emanating from top center, fading downward */
function RadialRays() {
  const lines = 28;
  const spread = 140; // degrees of spread, centered on 270deg (downward)
  const startAngle = 270 - spread / 2;
  const step = spread / (lines - 1);

  return (
    <svg
      aria-hidden
      className="absolute inset-x-0 -top-[10%] -z-10 h-[140%] w-full"
      viewBox="0 0 1440 1400"
      preserveAspectRatio="xMidYMin slice"
    >
      <defs>
        <linearGradient id="rayFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5B9BE5" stopOpacity="0.55" />
          <stop offset="35%" stopColor="#5B9BE5" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#5B9BE5" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="rayMask" cx="50%" cy="0%" r="80%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="70%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="fadeMask">
          <rect width="1440" height="1400" fill="url(#rayMask)" />
        </mask>
      </defs>
      <g
        mask="url(#fadeMask)"
        stroke="url(#rayFade)"
        strokeWidth="1"
        fill="none"
      >
        {Array.from({ length: lines }).map((_, i) => {
          const angle = ((startAngle + i * step) * Math.PI) / 180;
          const cx = 720;
          const cy = 0;
          const length = 1600;
          const x2 = cx + Math.cos(angle) * length;
          const y2 = cy - Math.sin(angle) * length;
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={x2}
              y2={y2}
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
      </g>
    </svg>
  );
}
