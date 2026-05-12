import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS, CONTACT } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-[--color-border] bg-[--color-bg-contrast]">
      <div className="container-x py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5 space-y-5">
            <Logo variant="compact" />
            <p className="text-sm leading-relaxed text-[--color-text-muted] max-w-sm">
              Painéis e perfis metálicos para a construção. Setúbal, Palmela e
              região de Lisboa — desde há mais de 20 anos.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow mb-4">Navegar</div>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[--color-text-muted] hover:text-[--color-text-primary] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="eyebrow mb-4">Contacto</div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="h-3.5 w-3.5 text-[--color-accent]" strokeWidth={1.5} />
                <a
                  href={`tel:+351${CONTACT.phone}`}
                  className="text-[--color-text-muted] hover:text-[--color-text-primary]"
                >
                  {CONTACT.phoneDisplay}
                </a>
                <span className="text-[--color-text-subtle]">·</span>
                <a
                  href={`tel:+351${CONTACT.mobile}`}
                  className="text-[--color-text-muted] hover:text-[--color-text-primary]"
                >
                  {CONTACT.mobileDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-3.5 w-3.5 text-[--color-accent]" strokeWidth={1.5} />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-[--color-text-muted] hover:text-[--color-text-primary]"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-3.5 w-3.5 text-[--color-accent]" strokeWidth={1.5} />
                <span className="text-[--color-text-muted]">
                  {CONTACT.region}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="hr-fine mt-14" />
        <div className="mt-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-[--color-text-subtle]">
          <span>© {year} V.&amp;J. Fonseca · Todos os direitos reservados.</span>
          <span className="font-mono tracking-[0.18em] uppercase">
            Setúbal · Portugal
          </span>
        </div>
      </div>
    </footer>
  );
}
