import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-5 max-w-3xl",
        align === "center" && "items-center text-center mx-auto",
        className
      )}
    >
      {eyebrow && <span className="eyebrow-pill">{eyebrow}</span>}
      <h2 className="display text-[44px] sm:text-5xl md:text-6xl leading-[1.04] text-balance">
        {title}
      </h2>
      {lead && (
        <p className="text-(color:--color-text-muted) text-base md:text-lg leading-relaxed max-w-prose">
          {lead}
        </p>
      )}
    </Reveal>
  );
}
