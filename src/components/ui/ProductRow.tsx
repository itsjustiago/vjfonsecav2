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
  const counter = `${String(index + 1).padStart(2, "0")} / ${String(
    PRODUCTS.length
  ).padStart(2, "0")}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE_OUT, delay: index * 0.06 }}
      className={cn(
        "group grid grid-cols-12 gap-6 md:gap-10 py-10 md:py-14",
        "transition-colors duration-300 hover:bg-[--color-bg-surface]/30",
        "px-4 md:px-6 -mx-4 md:-mx-6 rounded-xl"
      )}
    >
      {/* Left rail — counter + icon */}
      <div className="col-span-12 md:col-span-2 flex md:flex-col items-center md:items-start justify-between md:justify-start md:gap-6 gap-4">
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[--color-text-subtle] transition-colors duration-300 group-hover:text-[--color-accent]">
          {counter}
        </span>
        <div className="grid place-items-center h-11 w-11 rounded-xl bg-[--color-accent-soft] text-[--color-accent] ring-1 ring-inset ring-[--color-accent]/20 transition-all duration-500 ease-[var(--ease-out)] group-hover:scale-110 group-hover:ring-[--color-accent]/40 group-hover:shadow-[0_0_24px_rgba(91,155,229,0.25)]">
          <Icon className="h-5 w-5 transition-transform duration-500 group-hover:rotate-[-6deg]" strokeWidth={1.5} />
        </div>
      </div>

      {/* Centre — title + description */}
      <div className="col-span-12 md:col-span-6 space-y-3 relative">
        <h3 className="display text-[28px] md:text-[40px] leading-[1.05] text-[--color-text-primary] inline-flex items-center gap-3">
          <span className="transition-transform duration-500 ease-[var(--ease-out)] group-hover:translate-x-1">
            {product.title}
          </span>
          <ArrowUpRight
            className="h-5 w-5 md:h-6 md:w-6 text-[--color-accent] opacity-0 -translate-x-2 transition-all duration-500 ease-[var(--ease-out)] group-hover:opacity-100 group-hover:translate-x-0"
            strokeWidth={1.5}
            aria-hidden
          />
        </h3>
        <p className="text-[--color-text-muted] text-[15px] md:text-base leading-relaxed max-w-prose">
          {product.description}
        </p>
      </div>

      {/* Right — items as outline pills */}
      <div className="col-span-12 md:col-span-4 md:pt-2">
        <ul className="flex flex-wrap gap-2 md:justify-end">
          {product.items.map((item, i) => (
            <li
              key={item}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs transition-colors duration-300",
                i === 0
                  ? "border-[--color-border-strong] text-[--color-text-primary] group-hover:border-[--color-accent] group-hover:text-[--color-accent]"
                  : "border-[--color-border-strong] text-[--color-text-muted]"
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
