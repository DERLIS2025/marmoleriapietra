"use client";

import { useMemo, useState } from "react";
import { popularProducts } from "@/data/products";
import { Icon } from "./Icon";
import { ProductCard } from "./ProductCard";
import { SectionHeader } from "./SectionHeader";

const groupSizes = [5, 5, 4];

function buildGroups() {
  let start = 0;
  return groupSizes.map((size) => {
    const group = popularProducts.slice(start, start + size);
    start += size;
    return group;
  });
}

export function PopularProducts() {
  const groups = useMemo(buildGroups, []);
  const [activeGroup, setActiveGroup] = useState(0);

  const goToGroup = (index: number) => setActiveGroup((index + groups.length) % groups.length);

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <SectionHeader
        eyebrow="Más consultados"
        title="Productos populares"
        description="Organizados en grupos para comparar materiales sin una tira interminable."
        action={
          <div className="flex items-center gap-2">
            <button onClick={() => goToGroup(activeGroup - 1)} aria-label="Grupo anterior" className="grid h-10 w-10 place-items-center rounded-full border border-pietra-soft bg-white text-pietra-black transition hover:border-pietra-green hover:text-pietra-green"><Icon name="arrow" className="h-4 w-4 rotate-180" /></button>
            <button onClick={() => goToGroup(activeGroup + 1)} aria-label="Grupo siguiente" className="grid h-10 w-10 place-items-center rounded-full border border-pietra-soft bg-white text-pietra-black transition hover:border-pietra-green hover:text-pietra-green"><Icon name="arrow" className="h-4 w-4" /></button>
          </div>
        }
      />
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${activeGroup * 100}%)` }}>
          {groups.map((group, index) => (
            <div key={index} className="w-full shrink-0">
              <div className="no-scrollbar -mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-5">
                {group.map((product) => <div key={product.id} className="min-w-[78%] snap-start sm:min-w-0"><ProductCard product={product} showRating /></div>)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 flex items-center justify-center gap-2">
        {groups.map((group, index) => (
          <button key={index} onClick={() => goToGroup(index)} aria-label={`Ver grupo ${index + 1}`} className={`h-2 rounded-full transition-all ${activeGroup === index ? "w-8 bg-pietra-green" : "w-2 bg-pietra-beige/50"}`}>
            <span className="sr-only">Grupo {index + 1}: {group.length} productos</span>
          </button>
        ))}
      </div>
    </section>
  );
}
