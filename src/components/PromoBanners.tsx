import Link from "next/link";

const banners = [
  { title: "Diseñá tu cocina ideal", text: "Mesadas a medida para proyectos modernos.", cta: "Consultar", href: "/contacto", tone: "from-pietra-beige/70 via-white to-pietra-green/25" },
  { title: "Renová tu baño con piedra natural", text: "Revestimientos elegantes, resistentes y duraderos.", cta: "Ver opciones", href: "/categoria/revestimientos", tone: "from-pietra-green/20 via-white to-stone-300" },
];

export function PromoBanners() {
  return <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:px-8">{banners.map((banner) => <div key={banner.title} className={`relative overflow-hidden rounded-[1.6rem] bg-gradient-to-br ${banner.tone} p-8 min-h-56`}><div className="absolute -right-10 top-0 h-full w-1/2 rounded-l-full bg-white/30 blur-xl" /><div className="relative max-w-sm"><h3 className="text-3xl font-bold leading-tight">{banner.title}</h3><p className="mt-3 text-sm text-neutral-700">{banner.text}</p><Link href={banner.href} className="mt-6 inline-flex rounded-full border border-pietra-black px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] hover:bg-pietra-black hover:text-white">{banner.cta}</Link></div></div>)}</section>;
}
