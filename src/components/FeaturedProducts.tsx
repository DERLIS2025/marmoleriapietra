import Link from "next/link";
import { categories } from "@/data/categories";
import { featuredProducts } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { PietraImage } from "./PietraImage";
import { SectionHeader } from "./SectionHeader";

export function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <SectionHeader centered eyebrow="Catálogo Pietra" title="Productos destacados" description="Materiales reales seleccionados para mesadas, revestimientos y piezas de alto impacto." />
      <div className="grid gap-5 lg:grid-cols-[0.78fr_1.6fr] lg:items-stretch">
        <div className="relative min-h-[360px] overflow-hidden rounded-[1.5rem] bg-pietra-soft shadow-card lg:min-h-0">
          <PietraImage src={categories[4].image} alt="Materiales importados Pietra" className="object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          <div className="absolute inset-x-4 bottom-4 rounded-3xl bg-white/90 p-5 backdrop-blur-sm sm:inset-x-5 sm:bottom-5">
            <p className="text-xs font-medium tracking-[0.16em] text-pietra-green">Materiales importados</p>
            <h3 className="mt-2 text-2xl font-semibold leading-tight">Superficies para proyectos premium</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-600">Mármoles, granitos, cuarzos y sinterizados seleccionados con asesoramiento técnico.</p>
            <Link href="/productos" className="mt-5 inline-flex min-h-11 items-center rounded-full bg-pietra-black px-5 text-sm font-medium text-white transition hover:bg-pietra-green">Ver catálogo</Link>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.slice(0, 8).map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
      </div>
    </section>
  );
}
