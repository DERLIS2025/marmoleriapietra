"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { categories } from "@/data/categories";

const AUTO_DELAY = 3600;

export function CategoriesSection() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleCategories = useMemo(
    () =>
      categories.filter(
        (category) =>
          category.name !== "Materiales Exclusivos" &&
          category.slug !== "materiales-exclusivos"
      ),
    []
  );

  const scrollToIndex = (index: number) => {
    const container = carouselRef.current;
    const firstCard = container?.querySelector<HTMLElement>("[data-category-card]");

    if (!container || !firstCard) return;

    const gap = 24;
    const cardWidth = firstCard.offsetWidth + gap;
    const nextIndex = Math.max(0, Math.min(index, visibleCategories.length - 1));

    container.scrollTo({
      left: nextIndex * cardWidth,
      behavior: "smooth",
    });

    setActiveIndex(nextIndex);
  };

  const goToNext = () => {
    const nextIndex = (activeIndex + 1) % visibleCategories.length;
    scrollToIndex(nextIndex);
  };

  const goToPrev = () => {
    const prevIndex =
      activeIndex === 0 ? visibleCategories.length - 1 : activeIndex - 1;
    scrollToIndex(prevIndex);
  };

  useEffect(() => {
    if (visibleCategories.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => {
        const next = (current + 1) % visibleCategories.length;

        const container = carouselRef.current;
        const firstCard =
          container?.querySelector<HTMLElement>("[data-category-card]");

        if (container && firstCard) {
          const gap = 24;
          const cardWidth = firstCard.offsetWidth + gap;

          container.scrollTo({
            left: next * cardWidth,
            behavior: "smooth",
          });
        }

        return next;
      });
    }, AUTO_DELAY);

    return () => window.clearInterval(interval);
  }, [visibleCategories.length]);

  return (
    <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-pietra-green">
            Soluciones reales
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-pietra-black sm:text-3xl">
            Para cada tipo de proyecto
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-pietra-muted sm:text-base">
            Explorá ambientes, superficies y aplicaciones diseñadas para cocinas,
            baños, quinchos y proyectos especiales.
          </p>
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={goToPrev}
            className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white text-lg text-pietra-black transition hover:border-pietra-green hover:text-pietra-green"
            aria-label="Anterior"
          >
            ←
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white text-lg text-pietra-black transition hover:border-pietra-green hover:text-pietra-green"
            aria-label="Siguiente"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 sm:gap-5 lg:gap-6"
      >
        {visibleCategories.map((category) => (
          <Link
            key={category.slug}
            href={category.href ?? `/categoria/${category.slug}`}
            data-category-card
            className="group min-w-[82vw] snap-start overflow-hidden rounded-[28px] bg-white shadow-[0_14px_36px_rgba(20,20,20,0.08)] ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(20,20,20,0.12)] sm:min-w-[48%] lg:min-w-[31.5%]"
          >
            <div className="relative h-56 overflow-hidden bg-pietra-soft sm:h-60 lg:h-64">
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
            </div>

            <div className="p-5 sm:p-6">
              <h3 className="text-xl font-semibold leading-tight text-pietra-black">
                {category.name}
              </h3>
              <p className="mt-3 line-clamp-2 text-sm leading-6 text-pietra-muted sm:text-base">
                {category.description}
              </p>
              <span className="mt-5 inline-flex text-sm font-semibold text-pietra-green">
                Ver soluciones →
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {visibleCategories.map((category, index) => (
          <button
            key={category.slug}
            type="button"
            onClick={() => scrollToIndex(index)}
            className={`h-2 rounded-full transition-all ${
              activeIndex === index
                ? "w-8 bg-pietra-green"
                : "w-2 bg-pietra-green/25"
            }`}
            aria-label={`Ir a ${category.name}`}
          />
        ))}
      </div>
    </section>
  );
}

export default CategoriesSection;
