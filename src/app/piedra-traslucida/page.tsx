import type { Metadata } from "next";
import Link from "next/link";
import { PietraImage } from "@/components/PietraImage";
import { allProducts } from "@/data/products";
import { createProductWhatsAppLink } from "@/lib/whatsapp";

const piedra = allProducts.find((product) => product.slug === "piedra-traslucida") ?? allProducts[0];

export const metadata: Metadata = {
  title: "Piedra Traslúcida Paraguay | Marmolería Pietra",
  description: "Piedra traslúcida con efecto retroiluminado en Paraguay. Ónix y alabastro natural para muros, barras, baños de lujo y proyectos comerciales.",
  keywords: ["piedra traslúcida Paraguay", "ónix retroiluminado", "marmolería en Paraguay", "revestimientos de piedra"],
};

const benefits = [
  "Efecto retroiluminado único e irrepetible",
  "Cada pieza es exclusiva con vetas naturales irrepetibles",
  "Ideal para crear ambientes de lujo y sofisticación",
  "Resistente y duradero con mantenimiento adecuado",
  "Disponible en tonos cálidos y fríos",
];

const applications = [
  ["Muros Retroiluminados", "Paredes espectaculares con iluminación LED integrada para recepciones, lobbyes y espacios comerciales."],
  ["Barras y Mostradores", "Islas, barras de cocina y mostradores comerciales convertidos en piezas centrales luminosas."],
  ["Baños de Lujo", "Lavabos, paredes de ducha y paneles decorativos para baños con elegancia de spa privado."],
  ["Lámparas y Decoración", "Mesas, lámparas, elementos decorativos y esculturas que aprovechan la translucidez natural."],
  ["Revestimientos Especiales", "Columnas, nichos, cielorrasos y elementos arquitectónicos con luminosidad natural."],
  ["Proyectos Comerciales", "Hotelería, restaurantes, boutiques y espacios corporativos con alto impacto visual."],
];

export default function PiedraTraslucidaPage() {
  return <main><section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-pietra-green">Material exclusivo</p><h1 className="mt-4 text-5xl font-bold leading-tight lg:text-7xl">Piedra Traslúcida</h1><p className="mt-6 text-lg leading-8 text-neutral-700">La magia de la luz natural a través de la piedra. Efectos retroiluminados únicos que transforman cualquier espacio en una obra de arte.</p><Link href={createProductWhatsAppLink(piedra.name)} className="mt-8 inline-flex rounded-full bg-pietra-black px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white hover:bg-pietra-green">Consultar ahora</Link></div><div className="h-[520px] overflow-hidden rounded-[2rem] shadow-soft"><PietraImage src={piedra.image} alt="Piedra traslúcida retroiluminada" /></div></section><section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-pietra-green">La belleza de la luz natural</p><h2 className="mt-3 text-4xl font-bold">Un material único para proyectos memorables.</h2><p className="mt-5 leading-8 text-neutral-700">La Piedra Traslúcida es uno de los materiales más exclusivos de nuestra colección. Compuesta principalmente por ónix y alabastro natural, posee la cualidad única de permitir el paso de la luz.</p><p className="mt-4 leading-8 text-neutral-700">Cada losa es única en el mundo, con vetas y patrones naturales que se transforman en auténticas obras de arte cuando son iluminadas desde atrás.</p></div><div className="rounded-[1.6rem] bg-white p-6 shadow-sm"><h3 className="text-xl font-bold">Especificaciones técnicas</h3><dl className="mt-5 space-y-4 text-sm"><div className="flex justify-between gap-4"><dt>Material</dt><dd className="font-bold">Ónix / Alabastro Natural</dd></div><div className="flex justify-between gap-4"><dt>Origen</dt><dd className="font-bold">Importado (Italia, España, Irán)</dd></div><div className="flex justify-between gap-4"><dt>Espesor recomendado</dt><dd className="font-bold">2-3 cm retroiluminado</dd></div><div className="flex justify-between gap-4"><dt>Acabados</dt><dd className="font-bold">Pulido, Mate, Leather</dd></div><div className="flex justify-between gap-4"><dt>Aplicación</dt><dd className="font-bold">Interior</dd></div></dl></div></section><section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"><div className="grid gap-4 md:grid-cols-5">{benefits.map((benefit) => <div key={benefit} className="rounded-[1.2rem] bg-white p-5 text-sm font-semibold shadow-sm">◆ {benefit}</div>)}</div></section><section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"><p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-pietra-green">Posibilidades</p><h2 className="mt-3 text-center text-3xl font-bold">Usos y aplicaciones</h2><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{applications.map(([title, text]) => <article key={title} className="rounded-[1.4rem] bg-white p-6 shadow-sm"><span className="text-2xl text-pietra-green">◈</span><h3 className="mt-4 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-neutral-600">{text}</p></article>)}</div></section><section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8"><div className="rounded-[2rem] bg-pietra-black p-8 text-white md:p-12"><h2 className="text-3xl font-bold">¿Listo para iluminar tu espacio?</h2><p className="mt-4 max-w-2xl text-white/70">Contactanos hoy mismo y descubrí cómo la Piedra Traslúcida puede transformar tu proyecto en algo verdaderamente único.</p><Link href={createProductWhatsAppLink(piedra.name)} className="mt-7 inline-flex rounded-full bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-pietra-black">Solicitar cotización</Link></div></section></main>;
}
