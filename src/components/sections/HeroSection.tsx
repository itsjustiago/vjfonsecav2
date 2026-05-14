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
        className="absolute inset-x-0 top-0 h-[55vh] -z-10 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,rgba(111,136,164,0.18),transparent_70%)]"
      />
      {/* Bottom fade to base — long, multi-stop curve so the smoke dissolves
          well before the next section's hard black starts */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[55vh] -z-10 bg-gradient-to-b from-transparent via-[--color-bg-base]/70 to-[--color-bg-base]"
      />

      <div className="container-x relative z-10 flex flex-col items-center text-center pt-28 pb-20 sm:pt-32 sm:pb-24">
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
          className="mb-8"
        >
          <span className="eyebrow-pill">{HERO.eyebrow}</span>
        </motion.div>

        {/* Headline — 2 lines, large, bold-ish DM Sans */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE_OUT, delay: 0.12 }}
          className="display font-normal text-[52px] leading-[1.02] sm:text-[60px] md:text-[64px] lg:text-[80px] text-balance max-w-4xl"
        >
          {HERO.headline[0]}
          <br />
          <span className="text-(color:--color-text-secondary) accent-serif">
            {HERO.headline[1]}
          </span>
        </motion.h1>

        {/* Lead — 2 short lines */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.3 }}
          className="mt-5 max-w-[300px] sm:max-w-2xl text-[14px] md:text-[15px] leading-relaxed text-(color:--color-text-muted)"
        >
          {HERO.subtextLines[0]}
          <br className="hidden sm:inline" />{" "}
          {HERO.subtextLines[1]}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.45 }}
          className="mt-8 flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-4 w-full sm:w-auto max-w-[280px] sm:max-w-none"
        >
          <LinkButton
            href="#contacto"
            size="md"
            className="w-full sm:w-auto sm:px-7 sm:py-3.5 sm:text-[15px]"
          >
            {HERO.ctaPrimary}
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
          </LinkButton>
          <LinkButton
            href="#portefolio"
            variant="outline"
            size="md"
            className="w-full sm:w-auto sm:px-7 sm:py-3.5 sm:text-[15px]"
          >
            {HERO.ctaSecondary}
          </LinkButton>
        </motion.div>

        {/* Scroll-down indicator with hairlines on each side */}
        <motion.a
          href="#produtos"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="hidden md:flex mt-20 w-full max-w-3xl items-center gap-5 text-[12px] tracking-[-0.005em] text-(color:--color-text-subtle) hover:text-(color:--color-text-muted) transition-colors group"
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
            className="grid place-items-center h-9 w-9 rounded-full border border-[--color-border-strong] bg-[--color-bg-elevated]/60 text-(color:--color-text-muted) backdrop-blur-md group-hover:text-white transition-colors"
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
