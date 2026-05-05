import Link from "next/link";
import { categories } from "@/data/categories";
import { PietraImage } from "./PietraImage";

const banners = [
  { title: "Diseñá tu cocina ideal", text: "Mesadas a medida para proyectos modernos.", cta: "Consultar", href: "/contacto", image: categories[0].image },
  { title: "Renová tu baño con piedra natural", text: "Revestimientos elegantes, resistentes y duraderos.", cta: "Ver opciones", href: "/categoria/banos", image: categories[1].image },
];

export function PromoBanners() {
  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:px-8">
      {banners.map((banner) => (
        <div key={banner.title} className="relative min-h-64 overflow-hidden rounded-[1.6rem] bg-pietra-soft p-8">
          <PietraImage src={banner.image} alt={banner.title} />
          <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/70 to-white/5" />
          <div className="absolute inset-0 p-8"><div className="max-w-sm"><h3 className="text-3xl font-bold leading-tight">{banner.title}</h3><p className="mt-3 text-sm text-neutral-700">{banner.text}</p><Link href={banner.href} className="mt-6 inline-flex rounded-full border border-pietra-black px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] hover:bg-pietra-black hover:text-white">{banner.cta}</Link></div></div>
        </div>
      ))}
    </section>
  );
}
