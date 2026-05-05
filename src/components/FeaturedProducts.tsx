import Link from "next/link";
import { featuredProducts } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { StoneVisual } from "./StoneVisual";

export function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h2 className="text-center text-2xl font-bold">Productos destacados</h2>
      <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.6fr]">
        <div className="relative min-h-[560px] overflow-hidden rounded-[1.8rem] bg-pietra-soft shadow-sm">
          <StoneVisual tone="from-pietra-beige via-white to-pietra-green" className="absolute inset-0" />
          <div className="absolute inset-x-6 bottom-6 rounded-[1.4rem] bg-white/88 p-6 backdrop-blur">
            <h3 className="text-3xl font-bold">Espacios premium</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-700">Transformá tu cocina, baño o ambiente con piedra natural a medida.</p>
            <Link href="/trabajos" className="mt-5 inline-flex rounded-full bg-pietra-black px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white hover:bg-pietra-green">Ver proyectos</Link>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
      </div>
    </section>
  );
}
