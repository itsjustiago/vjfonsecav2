"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { EASE_OUT } from "@/lib/utils";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[--color-bg-contrast]"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=2200&q=80"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[--color-bg-base]/60 via-[--color-bg-base]/55 to-[--color-bg-base]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(91,155,229,0.18),transparent_50%)]" />
      </div>

      {/* Top meta strip */}
      <div className="container-x absolute top-24 md:top-28 left-1/2 -translate-x-1/2 z-10 flex flex-wrap items-center gap-4 md:gap-6 text-[11px] tracking-[0.18em] uppercase text-[--color-text-muted]">
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
          className="inline-flex items-center gap-2 text-[--color-accent]"
        >
          <span className="h-px w-6 bg-[--color-accent]" />
          Serralharia Industrial · Setúbal
        </motion.span>
        <span className="hidden md:inline text-[--color-text-subtle]">
          Est. 2003
        </span>
      </div>

      {/* Headline & CTAs */}
      <div className="container-x relative z-10 pb-20 md:pb-28 pt-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE_OUT, delay: 0.1 }}
            className="md:col-span-9"
          >
            <h1 className="display text-[44px] leading-[0.95] sm:text-[64px] md:text-[88px] lg:text-[120px] text-balance">
              Aço que sustenta
              <br />
              <span className="text-[--color-text-muted]">o que se constrói.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.35 }}
            className="md:col-span-3 md:pb-3 max-w-md"
          >
            <p className="text-[--color-text-muted] text-[15px] leading-relaxed">
              Painéis, fachadas, vedações e perfis metálicos para a construção
              civil e industrial. Resposta técnica em 24&nbsp;h.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.55 }}
          className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5"
        >
          <LinkButton href="#contacto" size="lg">
            Pedir orçamento
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
          </LinkButton>
          <LinkButton href="#produtos" variant="outline" size="lg">
            Ver produtos
          </LinkButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#produtos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
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
