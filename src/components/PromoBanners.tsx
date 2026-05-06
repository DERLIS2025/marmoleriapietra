import Link from "next/link";
import { categories } from "@/data/categories";
import { PietraImage } from "./PietraImage";

const banners = [
  { title: "Diseñá tu cocina ideal", text: "Mesadas a medida para proyectos modernos.", cta: "Consultar", href: "/contacto", image: categories[0].image },
  { title: "Renová tu baño con piedra natural", text: "Revestimientos elegantes, resistentes y duraderos.", cta: "Ver opciones", href: "/categoria/banos", image: categories[1].image },
];

export function PromoBanners() {
  return (
    <section className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-8">
      {banners.map((banner) => (
        <div key={banner.title} className="relative min-h-56 overflow-hidden rounded-[1.45rem] bg-pietra-soft shadow-sm">
          <PietraImage src={banner.image} alt={banner.title} />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-white/10" />
          <div className="absolute inset-0 flex items-center p-6 sm:p-8">
            <div className="max-w-sm">
              <h3 className="text-2xl font-semibold leading-tight text-pietra-black sm:text-3xl">{banner.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-700">{banner.text}</p>
              <Link href={banner.href} className="mt-5 inline-flex min-h-11 items-center rounded-full border border-pietra-black/20 bg-white/70 px-5 text-sm font-medium text-pietra-black transition hover:border-pietra-green hover:text-pietra-green">{banner.cta}</Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
