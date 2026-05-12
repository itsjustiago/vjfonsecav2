"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { cn, EASE_OUT } from "@/lib/utils";
import type { PortfolioProject } from "@/lib/types";

export function PortfolioCard({
  project,
  index,
  aspect = "tall",
}: {
  project: PortfolioProject;
  index: number;
  aspect?: "tall" | "wide" | "square" | "hero";
}) {
  const aspectClass = {
    tall: "aspect-[3/4]",
    wide: "aspect-[16/10]",
    square: "aspect-square",
    hero: "aspect-[21/9]",
  }[aspect];

  return (
    <motion.figure
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: EASE_OUT, delay: (index % 4) * 0.06 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-[--color-border] bg-[--color-bg-surface]",
        aspectClass
      )}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-out)] group-hover:scale-[1.04]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"
      />
      <figcaption className="absolute inset-x-0 bottom-0 p-5 md:p-6 flex flex-col gap-1.5">
        <div className="flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase text-[--color-accent]">
          <span>{project.tag}</span>
          <span className="h-px w-3 bg-[--color-accent]/60" />
          <span className="text-white/70">{project.year}</span>
        </div>
        <h3 className="display text-xl md:text-2xl text-white">
          {project.title}
        </h3>
        <div className="flex items-center gap-1.5 text-xs text-white/70">
          <MapPin className="h-3 w-3" strokeWidth={1.5} />
          {project.location}
        </div>
      </figcaption>
    </motion.figure>
  );
}
