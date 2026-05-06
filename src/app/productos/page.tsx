import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { allProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Materiales Pietra | Mármol, granito, cuarzo y piedra traslúcida en Paraguay",
  description: "Catálogo real de Marmolería Pietra: granitos, cuarzos, mármoles, Neolith y piedra traslúcida para mesadas y revestimientos en Paraguay.",
};

export default function ProductsPage() {
  return <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"><p className="text-xs font-medium tracking-[0.16em] text-pietra-green">Nuestro catálogo</p><h1 className="mt-3 text-3xl font-semibold sm:text-4xl">Materiales reales para cotizar</h1><p className="mt-4 max-w-2xl leading-8 text-neutral-700">Granitos, cuarzos, mármoles, Neolith y piedra traslúcida disponibles para mesadas, revestimientos, cocinas, baños, quinchos y proyectos especiales.</p><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{allProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div></main>;
}
