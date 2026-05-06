import Link from "next/link";
import { categories } from "@/data/categories";
import { featuredProducts } from "@/data/products";
import { MobileCarousel } from "./MobileCarousel";
import { ProductCard } from "./ProductCard";
import { PietraImage } from "./PietraImage";
import { SectionHeader } from "./SectionHeader";

export function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-7 sm:px-5 lg:px-8 lg:py-10">
      <SectionHeader centered eyebrow="Catálogo Pietra" title="Productos destacados" description="Materiales reales seleccionados para mesadas, revestimientos y piezas de alto impacto." />
      <div className="grid gap-5 lg:grid-cols-[0.78fr_1.6fr] lg:items-stretch">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-pietra-soft shadow-card sm:min-h-[360px] sm:aspect-auto lg:min-h-0">
          <PietraImage src={categories[4].image} alt="Materiales importados Pietra" className="object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/92 p-4 backdrop-blur-sm sm:inset-x-5 sm:bottom-5 sm:rounded-3xl sm:p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BFD6CB] sm:text-xs">Materiales importados</p>
            <h3 className="mt-2 text-xl font-semibold leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] sm:text-2xl">Superficies para proyectos premium</h3>
            <p className="mt-3 max-w-[340px] text-sm font-medium leading-6 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
              Mármoles, granitos, cuarzos y sinterizados seleccionados con asesoramiento técnico.
            </p>
            <Link href="/productos" className="mt-4 inline-flex min-h-11 items-center rounded-full bg-pietra-black px-5 text-sm font-medium text-white transition hover:bg-pietra-green sm:mt-5">Ver catálogo</Link>
          </div>
        </div>
        <MobileCarousel className="md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 xl:grid-cols-4">
          {featuredProducts.slice(0, 8).map((product) => <div key={product.slug} className="w-[min(76vw,285px)] shrink-0 snap-start md:w-auto md:shrink"><ProductCard product={product} /></div>)}
        </MobileCarousel>
      </div>
    </section>
  );
}
