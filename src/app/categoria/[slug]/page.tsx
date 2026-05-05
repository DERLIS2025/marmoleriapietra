import { ProductCard } from "@/components/ProductCard";
import { categories } from "@/data/categories";
import { allProducts } from "@/data/products";

type CategoryPageProps = { params: Promise<{ slug: string }> };

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug) ?? { name: "Ambiente", description: "Selección de materiales y soluciones para cotizar." };
  const list = slug.includes("granito") ? allProducts.filter((product) => product.category === "Granito") : slug.includes("import") ? allProducts.filter((product) => product.category !== "Granito") : allProducts.slice(0, 8);
  return <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"><p className="text-xs font-bold uppercase tracking-[0.2em] text-pietra-green">Ambiente</p><h1 className="mt-3 text-4xl font-bold">{category.name}</h1><p className="mt-4 max-w-2xl leading-8 text-neutral-700">{category.description}</p><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{list.map((product) => <ProductCard key={product.id} product={product} />)}</div></main>;
}
