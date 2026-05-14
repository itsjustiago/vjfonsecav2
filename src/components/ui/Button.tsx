import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 ease-[var(--ease-out)] will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-bg-base] whitespace-nowrap [&_svg]:transition-transform [&_svg]:duration-300 [&_svg]:ease-[var(--ease-out)] group-hover:[&_svg]:translate-x-0.5";

const variants: Record<Variant, string> = {
  solid:
    "bg-[--color-bg-elevated]/70 text-white border border-white/20 hover:border-white/40 hover:bg-[--color-bg-elevated] backdrop-blur-md shadow-[0_10px_30px_-12px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)] hover:shadow-[0_18px_44px_-14px_rgba(0,0,0,0.9),0_0_30px_-8px_var(--color-accent-glow),inset_0_1px_0_rgba(255,255,255,0.12)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
  outline:
    "bg-transparent text-white border border-white/15 hover:border-white/35 hover:bg-white/5 backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
  ghost:
    "text-(color:--color-text-muted) hover:text-(color:--color-text-primary) bg-transparent active:scale-[0.98]",
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
