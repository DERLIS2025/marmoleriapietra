import Link from "next/link";
import { bestItems } from "@/data/products";
import { createProductWhatsAppLink } from "@/lib/whatsapp";
import { Icon } from "./Icon";
import { PietraImage } from "./PietraImage";

export function BestItems() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="text-center text-2xl font-bold">Descubrí lo mejor para tu proyecto</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {bestItems.map((item) => (
          <article key={item.slug} className="flex gap-4 rounded-[1.2rem] border border-pietra-soft bg-white p-4 shadow-sm">
            <Link href={`/producto/${item.slug}`} className="h-24 w-28 shrink-0 overflow-hidden rounded-2xl"><PietraImage src={item.image} alt={item.name} /></Link>
            <div className="min-w-0 flex-1"><p className="text-[11px] uppercase tracking-[0.18em] text-pietra-green">{item.category}</p><Link href={`/producto/${item.slug}`} className="mt-1 block font-semibold">{item.name}</Link><p className="mt-1 text-sm font-bold">Cotizar por WhatsApp</p><div className="mt-3 flex gap-2"><a href={createProductWhatsAppLink(item.name)} className="grid h-8 w-8 place-items-center rounded-full bg-pietra-soft"><Icon name="bag" className="h-4 w-4" /></a><button className="grid h-8 w-8 place-items-center rounded-full bg-pietra-soft"><Icon name="heart" className="h-4 w-4" /></button></div></div>
          </article>
        ))}
      </div>
    </section>
  );
}
