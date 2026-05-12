import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  href = "#top",
  variant = "default",
}: {
  className?: string;
  href?: string;
  variant?: "default" | "compact";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2.5 leading-none",
        className
      )}
      aria-label="V.&J. Fonseca — Página inicial"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 text-[--color-accent] transition-transform duration-500 group-hover:rotate-90"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden
      >
        <rect x="3" y="3" width="26" height="26" rx="1" />
        <path d="M3 11h26M3 21h26M11 3v26M21 3v26" />
      </svg>
      <span className="font-display text-[15px] tracking-tight text-[--color-text-primary]">
        <span className="font-medium">V.&amp;J.</span>{" "}
        <span className="font-normal">Fonseca</span>
      </span>
      {variant === "default" && (
        <span className="hidden md:inline-block ml-1 text-[10px] tracking-[0.18em] uppercase text-[--color-text-subtle] pl-2 border-l border-[--color-border]">
          Serralharia
        </span>
      )}
    </Link>
  );
}
