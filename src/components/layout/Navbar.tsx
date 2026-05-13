"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { LinkButton } from "@/components/ui/Button";
import { NAV_LINKS, CONTACT } from "@/lib/constants";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const sectionIds = [
  "produtos",
  "portefolio",
  "sobre",
  "testemunhos",
  "contacto",
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "backdrop-blur-xl bg-[--color-bg-base]/75 border-b border-[--color-border]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Logo />

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative px-4 py-2 text-sm font-medium transition-colors duration-300",
                  isActive
                    ? "text-[--color-text-primary]"
                    : "text-[--color-text-muted] hover:text-[--color-text-primary]"
                )}
              >
                {link.label}
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-4 right-4 -bottom-0.5 h-px bg-[--color-accent] origin-left transition-transform duration-500 ease-[var(--ease-out)]",
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:+351${CONTACT.mobile}`}
            className="inline-flex items-center gap-2 text-sm text-[--color-text-muted] hover:text-[--color-text-primary] transition-colors"
          >
            <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
            {CONTACT.mobileDisplay}
          </a>
          <LinkButton href="#contacto" size="md">
            Orçamento
          </LinkButton>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-[--color-border] text-[--color-text-primary]"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "md:hidden overflow-hidden border-t border-[--color-border] bg-[--color-bg-base]/95 backdrop-blur-xl transition-[max-height,opacity] duration-500",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container-x py-6 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base text-[--color-text-primary] border-b border-[--color-border] last:border-b-0"
            >
              {link.label}
            </Link>
          ))}
          <LinkButton
            href="#contacto"
            size="lg"
            className="mt-4 self-start"
            onClick={() => setOpen(false)}
          >
            Pedir orçamento
          </LinkButton>
        </nav>
      </div>
    </header>
  );
}
