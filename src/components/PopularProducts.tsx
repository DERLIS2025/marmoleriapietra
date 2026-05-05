import { popularProducts } from "@/data/products";
import { Icon } from "./Icon";
import { ProductCard } from "./ProductCard";

export function PopularProducts() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between"><h2 className="text-2xl font-bold">Productos populares</h2><div className="hidden gap-2 sm:flex"><button className="grid h-9 w-9 place-items-center border border-pietra-soft"><Icon name="arrow" className="h-4 w-4 rotate-180" /></button><button className="grid h-9 w-9 place-items-center border border-pietra-soft"><Icon name="arrow" className="h-4 w-4" /></button></div></div>
      <div className="mt-6 flex snap-x gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-4 xl:grid-cols-6">
        {popularProducts.map((product) => <div key={product.slug} className="min-w-[240px] snap-start"><ProductCard product={product} showRating /></div>)}
      </div>
    </section>
  );
}
