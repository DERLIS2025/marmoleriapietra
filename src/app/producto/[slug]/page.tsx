import Link from "next/link";
import { StoneVisual } from "@/components/StoneVisual";
import { allProducts } from "@/data/products";
import { createProductWhatsAppLink } from "@/lib/whatsapp";

type ProductPageProps = { params: Promise<{ slug: string }> };

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = allProducts.find((item) => item.slug === slug) ?? allProducts[0];
  return <main className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8"><StoneVisual tone={product.tone} className="min-h-[420px] rounded-[2rem] shadow-soft" /><section><p className="text-xs font-bold uppercase tracking-[0.2em] text-pietra-green">{product.category}</p><h1 className="mt-4 text-5xl font-bold leading-tight">{product.name}</h1><p className="mt-5 text-xl font-bold">{product.price}</p><p className="mt-5 leading-8 text-neutral-700">{product.description} Consultá disponibilidad, medidas, bordes, espesores e instalación con nuestro equipo.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href={createProductWhatsAppLink(product.name)} className="rounded-full bg-pietra-black px-7 py-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-white hover:bg-pietra-green">Consultar por WhatsApp</Link><Link href="/productos" className="rounded-full border border-pietra-black px-7 py-4 text-center text-xs font-bold uppercase tracking-[0.16em]">Volver a productos</Link></div></section></main>;
}
