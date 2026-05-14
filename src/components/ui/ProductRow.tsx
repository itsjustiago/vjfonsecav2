"use client";

import {
  ArrowUpRight,
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

export function ProductRow({
  product,
  index,
}: {
  product: ProductCategory;
  index: number;
}) {
  const Icon = ICONS[product.iconName] ?? Layers;
  const num = String(index + 1).padStart(2, "0");
  const total = String(PRODUCTS.length).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE_OUT, delay: index * 0.06 }}
      className={cn(
        "group flex flex-col md:grid md:grid-cols-12 md:gap-10 py-9 sm:py-10 md:py-14",
        "transition-colors duration-300 hover:bg-[--color-bg-surface]/30",
        "px-4 md:px-6 -mx-4 md:-mx-6 rounded-xl"
      )}
    >
      {/* Left rail — a large editorial index numeral + the product icon.
          The big dim numeral anchors each row; the icon is the secondary mark. */}
      <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-4 md:gap-5">
        <div className="flex items-baseline gap-1.5">
          <span className="display text-[46px] md:text-[40px] leading-[0.85] text-(color:--color-text-subtle) transition-colors duration-500 group-hover:text-(color:--color-accent)">
            {num}
          </span>
          <span className="font-mono text-[11px] tracking-[0.16em] text-(color:--color-text-subtle)/70">
            /{total}
          </span>
        </div>
        <div className="grid place-items-center h-10 w-10 md:h-11 md:w-11 rounded-xl bg-[--color-accent-soft] text-(color:--color-accent) ring-1 ring-inset ring-[--color-accent]/20 transition-all duration-500 ease-[var(--ease-out)] group-hover:scale-110 group-hover:ring-[--color-accent]/40 group-hover:shadow-[0_0_24px_rgba(111,136,164,0.25)]">
          <Icon className="h-5 w-5 transition-transform duration-500 group-hover:rotate-[-6deg]" strokeWidth={1.5} />
        </div>
      </div>

      {/* Centre — title + description. Tight internal grouping. */}
      <div className="md:col-span-6 mt-6 md:mt-0 space-y-2 md:space-y-3 relative">
        <h3 className="display text-[34px] md:text-[40px] leading-[1.04] text-(color:--color-text-primary) inline-flex items-center gap-3">
          <span className="transition-transform duration-500 ease-[var(--ease-out)] group-hover:translate-x-1">
            {product.title}
          </span>
          <ArrowUpRight
            className="h-5 w-5 md:h-6 md:w-6 text-(color:--color-accent) opacity-0 -translate-x-2 transition-all duration-500 ease-[var(--ease-out)] group-hover:opacity-100 group-hover:translate-x-0"
            strokeWidth={1.5}
            aria-hidden
          />
        </h3>
        <p className="text-(color:--color-text-muted) text-[15px] md:text-base leading-relaxed max-w-prose">
          {product.description}
        </p>
      </div>

      {/* Right — items as outline pills. Generous gap above on mobile so the
          spec group reads as distinct from the title block. */}
      <div className="md:col-span-4 mt-6 md:mt-2">
        <ul className="flex flex-wrap gap-2 md:justify-end">
          {product.items.map((item, i) => (
            <li
              key={item}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs transition-colors duration-300",
                i === 0
                  ? "border-[--color-border-strong] text-(color:--color-text-primary) group-hover:border-[--color-accent] group-hover:text-(color:--color-accent)"
                  : "border-[--color-border-strong] text-(color:--color-text-muted)"
              )}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
