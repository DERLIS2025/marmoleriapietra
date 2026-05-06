"use client";

import { useMemo, useState } from "react";
import { categories } from "@/data/categories";

type ProductVisualizerProduct = {
  name: string;
  image: string;
  slug?: string;
  category?: string;
};

type VisualizerItem = {
  id: string;
  label: string;
  title: string;
  description: string;
  bullets: string[];
  cta: string;
  categoryHints: string[];
};

const WHATSAPP_NUMBER = "595984756158";

const visualizerItems: VisualizerItem[] = [
  {
    id: "cocina",
    label: "Cocina",
    title: "Cocina con superficie en",
    description:
      "Ideal para mesadas, islas y barras de cocina con alta resistencia y presencia visual.",
    bullets: ["Mesadas", "Islas", "Barras"],
    cta: "Cotizar para mi cocina",
    categoryHints: ["cocina"],
  },
  {
    id: "bano",
    label: "Baño",
    title: "Baño con terminación en",
    description:
      "Una opción elegante para vanitorys, revestimientos y superficies de uso diario.",
    bullets: ["Vanitorys", "Revestimientos", "Mesadas de baño"],
    cta: "Cotizar para mi baño",
    categoryHints: ["baño", "bano", "sanitario"],
  },
  {
    id: "quincho",
    label: "Quincho",
    title: "Quincho con superficie en",
    description:
      "Pensado para barras, parrillas y espacios sociales que necesitan resistencia y fácil mantenimiento.",
    bullets: ["Barras", "Parrillas", "Mesadas de apoyo"],
    cta: "Cotizar para mi quincho",
    categoryHints: ["quincho", "exterior"],
  },
  {
    id: "mesada",
    label: "Mesada",
    title: "Mesada en",
    description:
      "Una aplicación práctica y duradera para proyectos residenciales, comerciales y obras a medida.",
    bullets: ["Cocina", "Lavadero", "Área de trabajo"],
    cta: "Cotizar mesada",
    categoryHints: ["cocina", "materiales importados", "mesada"],
  },
  {
    id: "revestimiento",
    label: "Revestimiento",
    title: "Revestimiento con",
    description:
      "Aplicación visual para paredes, detalles decorativos y espacios que buscan una terminación diferente.",
    bullets: ["Paredes", "Detalles decorativos", "Frentes especiales"],
    cta: "Cotizar revestimiento",
    categoryHints: ["revestido", "pared", "granito"],
  },
];

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getImageForItem(item: VisualizerItem, product: ProductVisualizerProduct) {
  const match = categories.find((category) => {
    const haystack = normalize(`${category.name} ${category.slug}`);
    return item.categoryHints.some((hint) => haystack.includes(normalize(hint)));
  });

  return match?.image || product.image;
}

function createWhatsappLink(productName: string, environment: string) {
  const message = `Hola, quiero cotizar ${productName} para ${environment}. ¿Me pueden asesorar?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function ProductVisualizer({
  product,
}: {
  product: ProductVisualizerProduct;
}) {
  const [activeId, setActiveId] = useState(visualizerItems[0].id);

  const activeItem = useMemo(
    () => visualizerItems.find((item) => item.id === activeId) ?? visualizerItems[0],
    [activeId]
  );

  const activeImage = getImageForItem(activeItem, product);
  const whatsappLink = createWhatsappLink(product.name, activeItem.label.toLowerCase());

  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-20 lg:pt-14">
      <div className="rounded-[32px] bg-white p-5 shadow-[0_18px_55px_rgba(20,20,20,0.07)] ring-1 ring-black/5 sm:p-7 lg:p-9">
        <div className="mb-6 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pietra-green">
            Visualizador de ambientes
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-pietra-black sm:text-3xl lg:text-4xl">
            Visualizá este material en tu espacio
          </h2>
          <p className="mt-3 text-sm leading-6 text-pietra-muted sm:text-base">
            Explorá cómo puede aplicarse {product.name} en cocinas, baños,
            quinchos, mesadas y revestimientos.
          </p>
        </div>

        <div className="no-scrollbar mb-6 flex gap-2 overflow-x-auto pb-1">
          {visualizerItems.map((item) => {
            const isActive = item.id === activeId;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                className={`shrink-0 rounded-full px-5 py-3 text-sm font-semibold transition ${
                  isActive
                    ? "bg-[#5A7C6C] text-white shadow-[0_10px_24px_rgba(90,124,108,0.25)]"
                    : "border border-black/10 bg-white text-pietra-black hover:border-[#5A7C6C] hover:text-[#5A7C6C]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-[28px] bg-pietra-soft">
            <img
              src={activeImage}
              alt={`${activeItem.label} con ${product.name}`}
              className="aspect-[4/3] h-full w-full object-cover lg:aspect-[16/11]"
            />

            <div className="absolute left-4 top-4 rounded-full bg-black/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
              {product.name}
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-[28px] bg-[#f7f7f2] p-6 ring-1 ring-black/5 sm:p-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pietra-green">
                Aplicación sugerida
              </p>

              <h3 className="mt-3 text-2xl font-semibold leading-tight text-pietra-black sm:text-3xl">
                {activeItem.title} {product.name}
              </h3>

              <p className="mt-4 text-sm leading-7 text-pietra-muted sm:text-base">
                {activeItem.description}
              </p>

              <div className="mt-6 rounded-2xl bg-white p-5 ring-1 ring-black/5">
                <p className="text-sm font-semibold text-pietra-black">
                  Ideal para:
                </p>

                <ul className="mt-3 space-y-2 text-sm text-pietra-muted">
                  {activeItem.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="text-pietra-green">—</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-pietra-black px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#5A7C6C] sm:w-auto"
              >
                {activeItem.cta}
              </a>

              <p className="mt-4 text-xs leading-5 text-pietra-muted">
                Las imágenes son referenciales. Te asesoramos según medidas,
                iluminación y tipo de proyecto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
