"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

/**
 * Counts up from 0 to the numeric portion of `value` when the element scrolls
 * into view. Preserves any suffix on the original string ("150+", "100%", "24h",
 * "12+ concelhos" → animates the leading number, keeps the rest as-is).
 */
export function AnimatedStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const match = value.match(/^(\d+)(.*)$/);
  const hasMatch = match !== null;
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;

  const [display, setDisplay] = useState(match ? `0${suffix}` : value);

  useEffect(() => {
    if (!inView || !hasMatch) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(`${Math.round(v)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, target, suffix, hasMatch]);

  return (
    <div
      ref={ref}
      className="group flex flex-col items-center gap-2 py-6 sm:py-2 px-6 text-center transition-transform duration-500 ease-[var(--ease-out)] hover:-translate-y-0.5"
    >
      <span className="display text-4xl md:text-5xl text-(color:--color-text-primary) tabular-nums transition-colors duration-300 group-hover:text-(color:--color-accent)">
        {display}
      </span>
      <span className="text-sm md:text-base text-(color:--color-text-muted)">
        {label}
      </span>
    </div>
  );
}
