"use client";

import {
  DoorOpen,
  Grid3x3,
  Layers,
  PanelTop,
  Shield,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn, EASE_OUT } from "@/lib/utils";
import type { ProductCategory } from "@/lib/types";
import { PRODUCTS } from "@/lib/constants";

const ICONS: Record<string, LucideIcon> = {
  DoorOpen,
  Grid3x3,
  Layers,
  PanelTop,
  Shield,
  Wrench,
};

export function ProductCard({
  product,
  index,
}: {
  product: ProductCategory;
  index: number;
}) {
  const Icon = ICONS[product.iconName] ?? Layers;
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE_OUT, delay: index * 0.08 }}
      className={cn(
        "lift group relative flex flex-col gap-7 rounded-2xl border border-[--color-border]",
        "bg-[--color-bg-surface] p-7 md:p-9 overflow-hidden"
      )}
    >
      <div
        aria-hidden
        className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-[--color-accent-glow] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      />
      <div className="relative flex items-start justify-between">
        <div className="grid place-items-center h-12 w-12 rounded-xl bg-[--color-accent-soft] text-[--color-accent] ring-1 ring-inset ring-[--color-accent]/20">
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </div>
        <span className="font-mono text-[11px] tracking-[0.18em] text-[--color-text-subtle]">
          {String(index + 1).padStart(2, "0")} / {String(PRODUCTS.length).padStart(2, "0")}
        </span>
      </div>

      <div className="relative space-y-3">
        <h3 className="display text-2xl md:text-[28px] text-[--color-text-primary]">
          {product.title}
        </h3>
        <p className="text-[--color-text-muted] text-[15px] leading-relaxed">
          {product.description}
        </p>
      </div>

      <ul className="relative mt-auto pt-6 border-t border-[--color-border] space-y-2.5">
        {product.items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 text-sm text-[--color-text-primary]/85"
          >
            <span className="h-1 w-1 rounded-full bg-[--color-accent]" />
            {item}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
