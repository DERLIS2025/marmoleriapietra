"use client";

import { useRef } from "react";
import { allProducts, type Product } from "@/data/products";
import { Icon } from "./Icon";
import { ProductCard } from "./ProductCard";
import { SectionHeader } from "./SectionHeader";

type PopularProductGroup = {
  id: string;
  title: string;
  subtitle: string;
  productIds: string[];
};

const popularProductGroups: PopularProductGroup[] = [
  {
    id: "granitos",
    title: "Granitos más consultados",
    subtitle: "Opciones resistentes y versátiles para mesadas, cocinas y quinchos.",
    productIds: ["granito-verde-ubatuba", "granito-negro-san-gabriel", "granito-gris-corumba", "granito-blanco-dallas", "granito-blanco-itaunas"],
  },
  {
    id: "cuarzos",
    title: "Cuarzos más elegidos",
    subtitle: "Superficies modernas, uniformes y fáciles de combinar en proyectos actuales.",
    productIds: ["cuarzo-blanco-estelar", "cuarzo-beige", "cuarzo-gris", "cuarzo-negro", "cuarzo-verde-claro"],
  },
  {
    id: "especiales",
    title: "Mármoles y materiales especiales",
    subtitle: "Materiales premium para revestimientos, detalles exclusivos y espacios de alto impacto.",
    productIds: ["neolith-calacatta", "marron-emperador", "marmol-travertino", "piedra-traslucida"],
  },
];

function getProductsByIds(productIds: string[]) {
  return productIds
    .map((id) => allProducts.find((product) => product.id === id))
    .filter((product): product is Product => Boolean(product));
}

export function PopularProducts() {
  const carouselRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollGroup = (groupId: string, direction: "previous" | "next") => {
    const carousel = carouselRefs.current[groupId];
    if (!carousel) return;

    carousel.scrollBy({
      left: direction === "next" ? carousel.clientWidth * 0.88 : -carousel.clientWidth * 0.88,
      behavior: "smooth",
    });
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-7 sm:px-5 lg:px-8 lg:py-10">
      <SectionHeader
        eyebrow="Más consultados"
        title="Productos populares"
        description="Materiales agrupados por tipo para comparar opciones sin saturación visual."
      />
      <div className="space-y-6 lg:space-y-10">
        {popularProductGroups.map((group) => {
          const products = getProductsByIds(group.productIds);

          return (
            <section key={group.id} className="rounded-[1.45rem] border border-pietra-soft bg-white/60 p-3.5 shadow-sm sm:p-5 lg:p-6">
              <div className="mb-4 flex items-end justify-between gap-4 sm:mb-5">
                <div className="max-w-2xl">
                  <h3 className="text-lg font-semibold leading-tight text-pietra-black sm:text-2xl">{group.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-neutral-600 sm:mt-2">{group.subtitle}</p>
                </div>
                <div className="hidden shrink-0 items-center gap-2 sm:flex">
                  <button onClick={() => scrollGroup(group.id, "previous")} aria-label={`Ver productos anteriores de ${group.title}`} className="grid h-10 w-10 place-items-center rounded-full border border-pietra-soft bg-white text-pietra-black transition hover:border-pietra-green hover:text-pietra-green"><Icon name="arrow" className="h-4 w-4 rotate-180" /></button>
                  <button onClick={() => scrollGroup(group.id, "next")} aria-label={`Ver más productos de ${group.title}`} className="grid h-10 w-10 place-items-center rounded-full border border-pietra-soft bg-white text-pietra-black transition hover:border-pietra-green hover:text-pietra-green"><Icon name="arrow" className="h-4 w-4" /></button>
                </div>
              </div>
              <div
                ref={(node) => { carouselRefs.current[group.id] = node; }}
                className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1 sm:gap-6 lg:gap-7"
              >
                {products.map((product) => (
                  <div key={product.id} className="w-[min(78vw,285px)] shrink-0 snap-start sm:w-[calc((100%_-_24px)/2)] md:w-[calc((100%_-_48px)/3)] lg:w-[calc((100%_-_84px)/4)]">
                    <ProductCard product={product} showRating />
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between gap-3 sm:hidden">
                <p className="text-xs text-neutral-500">Deslizá para ver más</p>
                <div className="flex items-center gap-2">
                  <button onClick={() => scrollGroup(group.id, "previous")} aria-label={`Ver productos anteriores de ${group.title}`} className="grid h-10 w-10 place-items-center rounded-full border border-pietra-soft bg-white text-pietra-black"><Icon name="arrow" className="h-4 w-4 rotate-180" /></button>
                  <button onClick={() => scrollGroup(group.id, "next")} aria-label={`Ver más productos de ${group.title}`} className="grid h-10 w-10 place-items-center rounded-full border border-pietra-soft bg-white text-pietra-black"><Icon name="arrow" className="h-4 w-4" /></button>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
