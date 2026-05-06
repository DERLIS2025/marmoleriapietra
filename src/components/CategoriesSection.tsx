import Link from "next/link";
import { categories } from "@/data/categories";
import { MobileCarousel } from "./MobileCarousel";
import { PietraImage } from "./PietraImage";
import { SectionHeader } from "./SectionHeader";

export function CategoriesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-7 sm:px-5 lg:px-8 lg:py-10">
      <SectionHeader
        eyebrow="Ambientes"
        title="Soluciones reales para cada proyecto"
        description="Cocinas, baños, quinchos y materiales seleccionados con una experiencia de compra visual y simple."
        action={<Link href="/ambientes" className="text-sm font-medium text-pietra-green hover:text-pietra-black">Ver ambientes</Link>}
      />
      <MobileCarousel className="md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 lg:gap-5">
        {categories.map((category) => (
          <Link key={category.id} href={category.href} className="group flex w-[min(82vw,320px)] shrink-0 snap-start flex-col overflow-hidden rounded-[1.35rem] border border-pietra-soft bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-card md:w-auto md:shrink">
            <div className="aspect-[4/3] overflow-hidden md:aspect-auto md:h-48 lg:h-52"><PietraImage src={category.image} alt={category.name} className="transition duration-500 group-hover:scale-[1.03]" /></div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-medium text-pietra-black">{category.name}</h3>
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-neutral-600">{category.description}</p>
            </div>
          </Link>
        ))}
      </MobileCarousel>
    </section>
  );
}
