import Link from "next/link";
import type { Product } from "@/data/products";
import { createProductWhatsAppLink } from "@/lib/whatsapp";
import { Icon } from "./Icon";
import { PietraImage } from "./PietraImage";

type ProductCardProps = { product: Product; compact?: boolean; showRating?: boolean };

export function ProductCard({ product, compact = false, showRating = false }: ProductCardProps) {
  return (
    <article className="group rounded-[1.6rem] border border-pietra-soft bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <Link href={`/producto/${product.slug}`} className="block">
        <div className="relative overflow-hidden rounded-[1.25rem] bg-pietra-soft">
          {product.badge ? <span className="absolute left-3 top-3 z-10 rounded-full bg-pietra-black px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">{product.badge}</span> : null}
          <div className={compact ? "h-28" : "h-48"}>
            <PietraImage src={product.image} alt={product.name} />
          </div>
        </div>
      </Link>
      <div className={compact ? "pt-3" : "px-1 pt-4"}>
        <p className="text-[11px] uppercase tracking-[0.18em] text-pietra-green">{product.category}</p>
        {showRating ? <div className="mt-2 flex text-pietra-beige">{Array.from({ length: 5 }).map((_, index) => <Icon key={index} name="star" className="h-3.5 w-3.5" />)}</div> : null}
        <Link href={`/producto/${product.slug}`} className="mt-1 block font-semibold text-pietra-black hover:text-pietra-green">{product.name}</Link>
        <p className="mt-2 line-clamp-2 text-xs leading-5 text-neutral-500">{product.shortDescription}</p>
        <div className="mt-3 flex items-center justify-between gap-3">
          <span className="text-sm font-bold">Consultar precio</span>
          <div className="flex gap-2">
            <a href={createProductWhatsAppLink(product.name)} aria-label={`Cotizar ${product.name}`} className="grid h-9 w-9 place-items-center rounded-full bg-pietra-green text-white transition hover:bg-pietra-black"><Icon name="whatsapp" className="h-4 w-4" /></a>
            <button aria-label="Agregar a favoritos" className="grid h-9 w-9 place-items-center rounded-full bg-pietra-warm transition hover:bg-pietra-soft"><Icon name="heart" className="h-4 w-4" /></button>
          </div>
        </div>
      </div>
    </article>
  );
}
