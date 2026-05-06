import Link from "next/link";
import { bestItems } from "@/data/products";
import { createProductWhatsAppLink } from "@/lib/whatsapp";
import { Icon } from "./Icon";
import { PietraImage } from "./PietraImage";
import { SectionHeader } from "./SectionHeader";

export function BestItems() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <SectionHeader centered eyebrow="Selección rápida" title="Descubrí lo mejor para tu proyecto" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {bestItems.map((item) => (
          <article key={item.slug} className="flex gap-4 rounded-[1.25rem] border border-pietra-soft bg-white p-3 shadow-sm transition hover:shadow-card">
            <Link href={`/producto/${item.slug}`} className="h-28 w-28 shrink-0 overflow-hidden rounded-[1rem] bg-pietra-soft sm:h-32 sm:w-32"><PietraImage src={item.image} alt={item.name} /></Link>
            <div className="flex min-w-0 flex-1 flex-col py-1">
              <p className="text-[11px] font-medium tracking-[0.14em] text-pietra-green">{item.category}</p>
              <Link href={`/producto/${item.slug}`} className="mt-1.5 line-clamp-2 font-medium leading-snug text-pietra-black transition hover:text-pietra-green">{item.name}</Link>
              <p className="mt-2 text-xs leading-5 text-neutral-500">{item.finish ?? "Terminación a consultar"}</p>
              <div className="mt-auto flex items-center justify-between pt-3">
                <span className="text-xs font-medium text-neutral-700">Cotizar</span>
                <div className="flex gap-1.5"><a href={createProductWhatsAppLink(item.name)} className="grid h-8 w-8 place-items-center rounded-full bg-pietra-warm text-pietra-black transition hover:bg-pietra-green hover:text-white"><Icon name="bag" className="h-4 w-4" /></a><button className="grid h-8 w-8 place-items-center rounded-full bg-pietra-warm text-pietra-black transition hover:bg-pietra-soft"><Icon name="heart" className="h-4 w-4" /></button></div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
