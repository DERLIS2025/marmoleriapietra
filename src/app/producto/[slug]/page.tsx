import type { Metadata } from "next";
import Link from "next/link";
import { PietraImage } from "@/components/PietraImage";
import { allProducts } from "@/data/products";
import { createProductWhatsAppLink } from "@/lib/whatsapp";

type ProductPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = allProducts.find((item) => item.slug === slug);
  return {
    title: product?.seoTitle ?? "Material Pietra | Marmolería en Paraguay",
    description: product?.seoDescription ?? "Cotizá materiales premium en Marmolería Pietra Paraguay.",
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = allProducts.find((item) => item.slug === slug) ?? allProducts[0];
  return <main className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8"><div className="min-h-[420px] overflow-hidden rounded-[2rem] shadow-soft"><PietraImage src={product.image} alt={product.name} /></div><section><p className="text-xs font-bold uppercase tracking-[0.2em] text-pietra-green">{product.category}</p><h1 className="mt-4 text-5xl font-bold leading-tight">{product.name}</h1><p className="mt-5 text-xl font-bold">Cotizar por WhatsApp</p><p className="mt-5 leading-8 text-neutral-700">{product.description}</p><div className="mt-6 grid gap-4 sm:grid-cols-2"><div className="rounded-2xl bg-white p-5"><h2 className="font-bold">Usos sugeridos</h2><ul className="mt-3 space-y-2 text-sm text-neutral-600">{product.applications.map((item) => <li key={item}>— {item}</li>)}</ul></div><div className="rounded-2xl bg-white p-5"><h2 className="font-bold">Terminación</h2><p className="mt-3 text-sm text-neutral-600">{product.finish ?? "Consultar según proyecto"}</p></div></div><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href={createProductWhatsAppLink(product.name)} className="rounded-full bg-pietra-black px-7 py-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-white hover:bg-pietra-green">Cotizar material</Link><Link href="/productos" className="rounded-full border border-pietra-black px-7 py-4 text-center text-xs font-bold uppercase tracking-[0.16em]">Volver a catálogo</Link></div></section></main>;
}
