import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-accent] focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-bg-base] whitespace-nowrap";

const variants: Record<Variant, string> = {
  solid:
    "bg-[--color-accent] text-[#06121f] hover:bg-[--color-accent-hover] shadow-[0_8px_24px_-12px_rgba(91,155,229,0.6)]",
  outline:
    "border border-[--color-border-strong] text-[--color-text-primary] hover:border-[--color-accent] hover:text-[--color-accent] bg-transparent",
  ghost:
    "text-[--color-text-muted] hover:text-[--color-text-primary] bg-transparent",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[15px]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type LinkProps = CommonProps & { href: string } & Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    "href" | "className" | "children"
  >;

type ButtonProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button({
  variant = "solid",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  variant = "solid",
  size = "md",
  className,
  href,
  children,
  ...props
}: LinkProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (href.startsWith("#") || href.startsWith("/")) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
}
