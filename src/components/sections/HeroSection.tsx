"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mouse } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { EASE_OUT } from "@/lib/utils";
import { HERO } from "@/lib/constants";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#06070a] isolate"
    >
      {/* Smoke / mist background image */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${BASE_PATH}/hero-smoke.png')` }}
      />
      {/* Darken overlay for text legibility */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_55%_at_50%_50%,rgba(6,7,10,0.55),rgba(6,7,10,0.85))]"
      />
      {/* Subtle accent glow on top */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[55vh] -z-10 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,rgba(91,155,229,0.18),transparent_70%)]"
      />
      {/* Bottom fade to base — long, multi-stop curve so the smoke dissolves
          well before the next section's hard black starts */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[55vh] -z-10 bg-gradient-to-b from-transparent via-[--color-bg-base]/70 to-[--color-bg-base]"
      />

      <div className="container-x relative z-10 flex flex-col items-center text-center pt-32 pb-24">
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
          className="mb-10"
        >
          <span className="eyebrow-pill">{HERO.eyebrow}</span>
        </motion.div>

        {/* Headline — 2 lines, large, bold-ish DM Sans */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE_OUT, delay: 0.12 }}
          className="display font-normal text-[36px] leading-[1.05] sm:text-[48px] md:text-[64px] lg:text-[80px] text-balance max-w-4xl"
        >
          {HERO.headline[0]}
          <br />
          <span className="text-[--color-text-muted] accent-serif">
            {HERO.headline[1]}
          </span>
        </motion.h1>

        {/* Lead — 2 short lines */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.3 }}
          className="mt-8 max-w-2xl text-[14px] md:text-[15px] leading-relaxed text-[--color-text-subtle]"
        >
          {HERO.subtextLines[0]}
          <br />
          {HERO.subtextLines[1]}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
        >
          <LinkButton href="#contacto" size="lg">
            {HERO.ctaPrimary}
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
          </LinkButton>
          <LinkButton href="#portefolio" variant="outline" size="lg">
            {HERO.ctaSecondary}
          </LinkButton>
        </motion.div>

        {/* Scroll-down indicator with hairlines on each side */}
        <motion.a
          href="#produtos"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="hidden md:flex mt-20 w-full max-w-3xl items-center gap-5 text-[12px] tracking-[-0.005em] text-[--color-text-subtle] hover:text-[--color-text-muted] transition-colors group"
        >
          <span className="shrink-0">{HERO.scrollHint.left}</span>
          <span
            aria-hidden
            className="flex-1 h-px bg-gradient-to-r from-[--color-border] via-[--color-border] to-transparent"
          />
          <motion.span
            aria-hidden
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="grid place-items-center h-9 w-9 rounded-full border border-[--color-border-strong] bg-[--color-bg-elevated]/60 text-[--color-text-muted] backdrop-blur-md group-hover:text-white transition-colors"
          >
            <Mouse className="h-4 w-4" strokeWidth={1.5} />
          </motion.span>
          <span
            aria-hidden
            className="flex-1 h-px bg-gradient-to-l from-[--color-border] via-[--color-border] to-transparent"
          />
          <span className="shrink-0">{HERO.scrollHint.right}</span>
        </motion.a>
      </div>
    </section>
  );
}
