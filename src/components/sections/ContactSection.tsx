import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";
import { CONTACT, CONTACT_SECTION } from "@/lib/constants";

export function ContactSection() {
  return (
    <section
      id="contacto"
      className="relative scroll-mt-24 py-24 sm:py-28 md:py-36 bg-[--color-bg-contrast] border-t border-[--color-border] overflow-hidden"
    >
      {/* Metallic blue ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-1/4 h-[520px] w-[520px] rounded-full opacity-65"
        style={{
          background:
            "radial-gradient(circle, rgba(111,136,164,0.18), rgba(111,136,164,0.06) 38%, transparent 68%)",
          filter: "blur(40px)",
        }}
      />

      <div className="container-x relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal className="space-y-6 mb-12">
              <span className="eyebrow-pill">
                {CONTACT_SECTION.eyebrow}
              </span>
              <h2 className="display text-[44px] sm:text-5xl md:text-[56px] leading-[1.04] text-balance">
                {CONTACT_SECTION.title}
              </h2>
              <p className="text-(color:--color-text-muted) text-base md:text-lg leading-relaxed max-w-xl">
                {CONTACT_SECTION.subtitle}
              </p>
            </Reveal>

            <Reveal delay={1}>
              <ContactForm />
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={2} className="rounded-2xl border border-[--color-border] bg-[--color-bg-surface] p-7 md:p-9 space-y-7">
              <div>
                <div className="eyebrow mb-1.5">Contacto direto</div>
                <p className="text-sm text-(color:--color-text-muted)">
                  É a mesma família a atender o telefone, a ir a obra medir e
                  a soldar a peça. Sem central de chamadas.
                </p>
              </div>

              <div className="h-px bg-[--color-border]" />

              <ContactRow
                icon={Phone}
                label="Atelier · fixo"
                value={CONTACT.phoneDisplay}
                href={`tel:+351${CONTACT.phone}`}
              />
              <ContactRow
                icon={Phone}
                label="Sr. Fonseca · móvel"
                value={CONTACT.mobileDisplay}
                href={`tel:+351${CONTACT.mobile}`}
              />
              <ContactRow
                icon={Mail}
                label="Email · orçamentos"
                value={CONTACT.email}
                href={`mailto:${CONTACT.email}`}
              />
              <ContactRow
                icon={MapPin}
                label="Atelier"
                value={CONTACT.address}
              />
              <ContactRow
                icon={Clock}
                label="Horário"
                value={CONTACT.hours}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="shrink-0 mt-0.5 grid place-items-center h-9 w-9 rounded-lg bg-[--color-accent-soft] text-(color:--color-accent)">
        <Icon className="h-4 w-4" strokeWidth={1.5} />
      </div>
      <div>
        <div className="text-[11px] tracking-[0.18em] uppercase text-(color:--color-text-subtle)">
          {label}
        </div>
        <div className="text-[15px] text-(color:--color-text-primary) mt-0.5">
          {value}
        </div>
      </div>
    </div>
  );
  return href ? (
    <a
      href={href}
      className="block -mx-2 px-2 py-1 rounded-lg hover:bg-[--color-bg-elevated] transition-colors"
    >
      {content}
    </a>
  ) : (
    <div className="-mx-2 px-2 py-1">{content}</div>
  );
}
