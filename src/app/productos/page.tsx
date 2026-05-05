import { ProductCard } from "@/components/ProductCard";
import { allProducts } from "@/data/products";

export default function ProductsPage() {
  return <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"><p className="text-xs font-bold uppercase tracking-[0.2em] text-pietra-green">Materiales y productos</p><h1 className="mt-3 text-4xl font-bold">Productos para cotizar</h1><p className="mt-4 max-w-2xl leading-8 text-neutral-700">Explorá opciones mock editables de Marmolería Pietra para mesadas, revestimientos, baños, cocinas y proyectos a medida.</p><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{allProducts.map((product) => <ProductCard key={`${product.slug}-${product.category}`} product={product} />)}</div></main>;
}
