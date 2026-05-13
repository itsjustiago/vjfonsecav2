import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductRow } from "@/components/ui/ProductRow";
import { PRODUCTS, PRODUCTS_SECTION } from "@/lib/constants";

export function ProductsSection() {
  return (
    <section
      id="produtos"
      className="relative scroll-mt-24 py-24 md:py-32 bg-[--color-bg-base] overflow-hidden isolate"
    >
      {/* Metallic blue ambient glow — top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 h-[640px] w-[640px] rounded-full -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(120,165,210,0.16), rgba(91,155,229,0.05) 38%, transparent 68%)",
          filter: "blur(40px)",
        }}
      />
      {/* Counter glow — bottom-left, smaller */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full -z-10 opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(120,165,210,0.14), rgba(91,155,229,0.04) 38%, transparent 68%)",
          filter: "blur(40px)",
        }}
      />
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 md:mb-20">
          <SectionHeader
            eyebrow={PRODUCTS_SECTION.eyebrow}
            title={
              <>
                {PRODUCTS_SECTION.title[0]}
                <br />
                <span className="text-[--color-text-muted] accent-serif">
                  {PRODUCTS_SECTION.title[1]}
                </span>
              </>
            }
            lead={PRODUCTS_SECTION.lead}
          />
          <div className="hidden md:block text-right font-mono text-[11px] tracking-[0.18em] uppercase text-[--color-text-subtle]">
            Atelier próprio
            <br />
            Cabanas de Torres
          </div>
        </div>

        <div className="border-y border-[--color-border] divide-y divide-[--color-border]">
          {PRODUCTS.map((p, i) => (
            <ProductRow key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
