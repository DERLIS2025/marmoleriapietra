import Link from "next/link";
import type { Product } from "@/data/products";
import { createProductWhatsAppLink } from "@/lib/whatsapp";
import { Icon } from "./Icon";
import { PietraImage } from "./PietraImage";

type ProductCardProps = { product: Product; compact?: boolean; showRating?: boolean };

export function ProductCard({ product, compact = false, showRating = false }: ProductCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[1.35rem] border border-pietra-soft bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-card">
      <Link href={`/producto/${product.slug}`} className="block">
        <div className="relative overflow-hidden rounded-[1.05rem] bg-pietra-soft">
          {product.badge ? <span className="absolute left-3 top-3 z-10 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium text-pietra-black shadow-sm backdrop-blur">{product.badge}</span> : null}
          <div className={compact ? "h-32 sm:h-28" : "h-52 sm:h-48 lg:h-44"}>
            <PietraImage src={product.image} alt={product.name} className="transition duration-500 group-hover:scale-[1.03]" />
          </div>
        </div>
      </Link>
      <div className="flex flex-1 flex-col px-1 pt-3.5">
        <p className="text-[11px] font-medium tracking-[0.14em] text-pietra-green">{product.category}</p>
        {showRating ? <div className="mt-2 flex text-pietra-beige">{Array.from({ length: 5 }).map((_, index) => <Icon key={index} name="star" className="h-3.5 w-3.5" />)}</div> : null}
        <Link href={`/producto/${product.slug}`} className="mt-2 line-clamp-2 min-h-[2.75rem] text-base font-medium leading-snug text-pietra-black transition hover:text-pietra-green">{product.name}</Link>
        <p className="mt-2 line-clamp-2 min-h-[2.5rem] text-sm leading-5 text-neutral-500">{product.shortDescription}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <span className="text-sm font-medium text-neutral-700">Consultar precio</span>
          <div className="flex gap-2">
            <a href={createProductWhatsAppLink(product.name)} aria-label={`Cotizar ${product.name}`} className="grid h-10 w-10 place-items-center rounded-full bg-pietra-green text-white transition hover:bg-pietra-black"><Icon name="whatsapp" className="h-4 w-4" /></a>
            <button aria-label="Agregar a favoritos" className="grid h-10 w-10 place-items-center rounded-full bg-pietra-warm text-pietra-black transition hover:bg-pietra-soft"><Icon name="heart" className="h-4 w-4" /></button>
          </div>
        </div>
      </div>
    </article>
  );
}
