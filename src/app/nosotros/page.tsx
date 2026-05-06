import type { Metadata } from "next";
import Link from "next/link";
import { PietraImage } from "@/components/PietraImage";
import { categories } from "@/data/categories";
import { createWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Nosotros | Marmolería Pietra Paraguay",
  description: "Desde 2008 transformamos espacios con mármol, granito y cuarzo. Conocé la historia, filosofía y diferenciales de Marmolería Pietra.",
};

const timeline = [
  ["2008", "Los Inicios", "Fundación de Marmolería Pietra como un pequeño taller familiar en Asunción, con la visión de traer los mejores materiales del mundo a Paraguay."],
  ["2012", "Primera Expansión", "Ampliación de instalaciones e importación directa desde canteras de Brasil e Italia. Incorporación de maquinaria de última generación."],
  ["2016", "Proyectos de Lujo", "Realización de proyectos emblemáticos en residencias y edificios de prestigio. Consolidación como referente en acabados premium."],
  ["2020", "Innovación y Tecnología", "Implementación de tecnología CNC para cortes de precisión. Incorporación de nuevos materiales como Neolith y cuarzos de ingeniería."],
  ["2024", "Presente y Futuro", "Seguimos creciendo con el mismo compromiso de siempre: transformar espacios con la belleza eterna de la piedra natural."],
];

const values = [
  ["Excelencia", "Cada corte, cada pulido y cada instalación se ejecuta con precisión y atención al detalle."],
  ["Autenticidad", "Trabajamos con piedras y superficies seleccionadas, respetando la identidad única de cada losa."],
  ["Compromiso", "Acompañamos desde la selección del material hasta la instalación final."],
];

export default function NosotrosPage() {
  return <main><section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8"><div><p className="text-xs font-medium tracking-[0.16em] text-pietra-green">Nuestra historia</p><h1 className="mt-3 text-4xl font-semibold sm:text-5xl leading-tight">Más de 15 años de excelencia.</h1><p className="mt-5 leading-8 text-neutral-700">Desde 2008 transformamos espacios con la belleza eterna del mármol y granito. Cada proyecto es una obra de arte única, diseñada para perdurar generaciones.</p></div><div className="h-[420px] overflow-hidden rounded-[2rem] shadow-soft"><PietraImage src={categories[4].image} alt="Taller Marmolería Pietra" /></div></section><section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"><h2 className="text-3xl font-semibold">Nuestro camino</h2><div className="mt-8 grid gap-5 md:grid-cols-5">{timeline.map(([year, title, text]) => <article key={year} className="rounded-[1.4rem] bg-white p-5 shadow-sm"><p className="text-2xl font-semibold text-pietra-green">{year}</p><h3 className="mt-3 font-medium">{title}</h3><p className="mt-3 text-sm leading-6 text-neutral-600">{text}</p></article>)}</div></section><section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8"><div><p className="text-xs font-medium tracking-[0.16em] text-pietra-green">Artesanos de la piedra natural</p><h2 className="mt-3 text-3xl font-semibold sm:text-4xl">En Pietra no solo trabajamos con piedra, la honramos.</h2><p className="mt-5 leading-8 text-neutral-700">Trabajamos directamente con canteras de Brasil, Italia y España para traer materiales exclusivos. Nuestro equipo combina técnicas tradicionales con tecnología de vanguardia.</p></div><div className="grid gap-5 sm:grid-cols-3">{values.map(([title, text]) => <article key={title} className="rounded-[1.4rem] bg-white p-6 shadow-sm"><span className="text-2xl text-pietra-green">◆</span><h3 className="mt-4 font-medium">{title}</h3><p className="mt-3 text-sm leading-6 text-neutral-600">{text}</p></article>)}</div></section><section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8"><div className="rounded-[2rem] bg-pietra-black p-8 text-white md:p-12"><h2 className="text-3xl font-semibold">¿Listo para transformar tu espacio?</h2><p className="mt-4 max-w-2xl text-white/70">Contactanos hoy mismo y descubrí cómo podemos hacer realidad tu proyecto con la belleza eterna de la piedra natural.</p><Link href={createWhatsAppLink()} className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-pietra-black">Solicitar cotización</Link></div></section></main>;
}
