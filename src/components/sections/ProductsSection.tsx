import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/ui/ProductCard";
import { PRODUCTS } from "@/lib/constants";

export function ProductsSection() {
  return (
    <section
      id="produtos"
      className="relative scroll-mt-24 py-24 md:py-32 bg-[--color-bg-base]"
    >
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 md:mb-20">
          <SectionHeader
            eyebrow="Catálogo"
            title={
              <>
                Quatro famílias.
                <br />
                <span className="text-[--color-text-muted]">
                  Um padrão de qualidade.
                </span>
              </>
            }
            lead="Especialistas em painéis metálicos para coberturas, fachadas, vedações e perfis estruturais — soluções completas para qualquer obra."
          />
          <div className="hidden md:block text-right font-mono text-[11px] tracking-[0.18em] uppercase text-[--color-text-subtle]">
            04 categorias
            <br />
            11+ produtos
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
