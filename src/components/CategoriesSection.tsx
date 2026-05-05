import Link from "next/link";
import { categories } from "@/data/categories";
import { PietraImage } from "./PietraImage";

export function CategoriesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-pietra-green">Varios ambientes</p>
          <h2 className="mt-2 text-3xl font-bold">Soluciones reales para cada proyecto</h2>
        </div>
        <Link href="/ambientes" className="text-sm font-bold text-pietra-green">Ver ambientes</Link>
      </div>
      <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link key={category.id} href={category.href} className="group overflow-hidden rounded-[1.5rem] bg-white shadow-sm">
            <div className="h-56 overflow-hidden"><PietraImage src={category.image} alt={category.name} className="transition duration-500 group-hover:scale-105" /></div>
            <div className="p-5">
              <h3 className="text-xl font-bold">{category.name}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
