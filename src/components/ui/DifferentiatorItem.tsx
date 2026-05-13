"use client";

import {
  BadgeCheck,
  Clock,
  Hammer,
  MapPin,
  Settings2,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { EASE_OUT } from "@/lib/utils";
import type { Differentiator } from "@/lib/types";

const ICONS: Record<string, LucideIcon> = {
  BadgeCheck,
  Clock,
  Hammer,
  MapPin,
  Settings2,
};

export function DifferentiatorItem({
  item,
  index,
}: {
  item: Differentiator;
  index: number;
}) {
  const Icon = ICONS[item.iconName] ?? Clock;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: EASE_OUT, delay: index * 0.08 }}
      className="group relative flex gap-5 py-7 border-t border-[--color-border] first:border-t-0 transition-all duration-500 hover:pl-3"
    >
      {/* Accent rail that grows in from the left on hover */}
      <span
        aria-hidden
        className="absolute left-0 top-1/2 -translate-y-1/2 h-0 w-0.5 bg-[--color-accent] transition-all duration-500 group-hover:h-12"
      />
      <div className="shrink-0 grid place-items-center h-10 w-10 rounded-lg bg-[--color-accent-soft] text-[--color-accent] transition-all duration-500 group-hover:bg-[--color-accent] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(91,155,229,0.35)]">
        <Icon className="h-4 w-4 transition-transform duration-500 group-hover:rotate-[8deg]" strokeWidth={1.5} />
      </div>
      <div className="flex-1">
        <div className="flex items-baseline gap-3">
          <span className="display text-3xl md:text-4xl text-[--color-text-primary]">
            {item.stat}
          </span>
          <span className="text-[--color-text-primary] font-medium text-base">
            {item.title}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-[--color-text-muted]">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
