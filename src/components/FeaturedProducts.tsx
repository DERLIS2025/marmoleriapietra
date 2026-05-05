import Link from "next/link";
import { categories } from "@/data/categories";
import { featuredProducts } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { PietraImage } from "./PietraImage";

export function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h2 className="text-center text-2xl font-bold">Productos destacados</h2>
      <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.6fr]">
        <div className="relative min-h-[560px] overflow-hidden rounded-[1.8rem] bg-pietra-soft shadow-sm">
          <PietraImage src={categories[4].image} alt="Materiales importados Pietra" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          <div className="absolute inset-x-6 bottom-6 rounded-[1.4rem] bg-white/88 p-6 backdrop-blur">
            <h3 className="text-3xl font-bold">Materiales importados</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-700">Mármoles, granitos, cuarzos y sinterizados seleccionados para proyectos premium.</p>
            <Link href="/productos" className="mt-5 inline-flex rounded-full bg-pietra-black px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white hover:bg-pietra-green">Ver catálogo</Link>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.slice(0, 8).map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
      </div>
    </section>
  );
}
