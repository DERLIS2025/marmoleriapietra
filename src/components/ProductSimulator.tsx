"use client";

import { useMemo, useState } from "react";
import { categories } from "@/data/categories";

type ProductSimulatorProduct = {
  name: string;
  image: string;
  slug?: string;
  category?: string;
};

type SimulatorView = {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  sceneHints: string[];
  surfaceLabel: string;
  surfaceClassName: string;
};

const WHATSAPP_NUMBER = "595984756158";

const simulatorViews: SimulatorView[] = [
  {
    id: "cocina",
    label: "Cocina",
    eyebrow: "Simulación en cocina",
    title: "Así podría verse en una cocina",
    description:
      "Vista referencial del material aplicado sobre una mesada o isla de cocina.",
    sceneHints: ["cocina"],
    surfaceLabel: "Mesada simulada",
    surfaceClassName:
      "left-[7%] top-[61%] h-[22%] w-[78%] -skew-x-[10deg] rotate-[-1deg] rounded-[18px]",
  },
  {
    id: "bano",
    label: "Baño",
    eyebrow: "Simulación en baño",
    title: "Así podría verse en un baño",
    description:
      "Referencia visual para vanitory, mesada de baño o superficie decorativa.",
    sceneHints: ["baño", "bano", "sanitario"],
    surfaceLabel: "Vanitory simulado",
    surfaceClassName:
      "left-[16%] top-[58%] h-[19%] w-[62%] skew-x-[7deg] rotate-[0deg] rounded-[16px]",
  },
  {
    id: "quincho",
    label: "Quincho",
    eyebrow: "Simulación en quincho",
    title: "Así podría verse en un quincho",
    description:
      "Ideal para imaginar barras, parrillas y superficies sociales con este material.",
    sceneHints: ["quincho", "exterior"],
    surfaceLabel: "Barra simulada",
    surfaceClassName:
      "left-[9%] top-[55%] h-[24%] w-[76%] -skew-x-[13deg] rotate-[-2deg] rounded-[18px]",
  },
  {
    id: "mesada",
    label: "Mesada",
    eyebrow: "Simulación de mesada",
    title: "Así podría verse como mesada",
    description:
      "Una vista rápida para evaluar presencia, tono y contraste del material.",
    sceneHints: ["cocina", "materiales importados", "mesada"],
    surfaceLabel: "Superficie simulada",
    surfaceClassName:
      "left-[5%] top-[58%] h-[25%] w-[82%] -skew-x-[8deg] rotate-[-1deg] rounded-[18px]",
  },
  {
    id: "revestimiento",
    label: "Revestimiento",
    eyebrow: "Simulación en pared",
    title: "Así podría verse como revestimiento",
    description:
      "Referencia visual para paredes, frentes decorativos y detalles especiales.",
    sceneHints: ["revestido", "pared", "granito"],
    surfaceLabel: "Revestimiento simulado",
    surfaceClassName:
      "left-[19%] top-[18%] h-[50%] w-[54%] rotate-[0deg] rounded-[22px]",
  },
];

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\\u0300-\\u036f]/g, "");
}

function getSceneImage(view: SimulatorView, product: ProductSimulatorProduct) {
  const match = categories.find((category) => {
    const haystack = normalize(`${category.name} ${category.slug}`);
    return view.sceneHints.some((hint) => haystack.includes(normalize(hint)));
  });

  return match?.image || product.image;
}

function createWhatsappLink(productName: string, environment: string) {
  const message = `Hola, quiero ver cómo quedaría ${productName} en mi ${environment}. ¿Me pueden asesorar y cotizar?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function ProductSimulator({
  product,
}: {
  product: ProductSimulatorProduct;
}) {
  const [activeId, setActiveId] = useState(simulatorViews[0].id);

  const activeView = useMemo(
    () => simulatorViews.find((view) => view.id === activeId) ?? simulatorViews[0],
    [activeId]
  );

  const sceneImage = getSceneImage(activeView, product);
  const whatsappLink = createWhatsappLink(product.name, activeView.label.toLowerCase());

  return (
    <section className="mx-auto max-w-7xl px-5 pb-12 pt-8 sm:px-6 lg:px-8 lg:pb-18 lg:pt-12">
      <div className="rounded-[30px] bg-white p-4 shadow-[0_18px_55px_rgba(20,20,20,0.07)] ring-1 ring-black/5 sm:p-6 lg:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pietra-green">
              Simulador visual
            </p>

            <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-pietra-black sm:text-3xl lg:text-4xl">
              Probá este material en diferentes espacios
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-pietra-muted sm:text-base">
              Seleccioná un ambiente y visualizá de forma referencial cómo podría
              verse {product.name} aplicado en una superficie.
            </p>

            <div className="no-scrollbar mt-5 flex gap-2 overflow-x-auto pb-1">
              {simulatorViews.map((view) => {
                const isActive = view.id === activeId;

                return (
                  <button
                    key={view.id}
                    type="button"
                    onClick={() => setActiveId(view.id)}
                    className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition sm:px-5 ${
                      isActive
                        ? "bg-[#5A7C6C] text-white shadow-[0_10px_24px_rgba(90,124,108,0.25)]"
                        : "border border-black/10 bg-white text-pietra-black hover:border-[#5A7C6C] hover:text-[#5A7C6C]"
                    }`}
                  >
                    {view.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="hidden rounded-[24px] bg-[#f7f7f2] p-5 ring-1 ring-black/5 lg:block">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pietra-green">
              {activeView.eyebrow}
            </p>
            <h3 className="mt-3 text-2xl font-semibold leading-tight text-pietra-black">
              {activeView.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-pietra-muted">
              {activeView.description}
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="relative h-[270px] overflow-hidden rounded-[26px] bg-pietra-soft shadow-[0_18px_45px_rgba(20,20,20,0.10)] sm:h-[360px] lg:h-[520px]">
            <img
              src={sceneImage}
              alt={`${activeView.label} base`}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/26 via-transparent to-white/5" />

            <div
              className={`absolute overflow-hidden border border-white/20 shadow-[0_12px_34px_rgba(0,0,0,0.28)] ${activeView.surfaceClassName}`}
              aria-label={activeView.surfaceLabel}
            >
              <div
                className="h-full w-full scale-125 bg-cover bg-center opacity-95"
                style={{
                  backgroundImage: `url(${product.image})`,
                  mixBlendMode: "multiply",
                }}
              />
              <div className="absolute inset-0 bg-white/8" />
              <div className="absolute inset-x-0 top-0 h-[28%] bg-white/20 blur-md" />
            </div>

            <div className="absolute left-4 top-4 rounded-full bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
              {product.name}
            </div>

            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-black/52 p-4 text-white backdrop-blur-md sm:hidden">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#BFD6CB]">
                {activeView.eyebrow}
              </p>
              <h3 className="mt-2 text-xl font-semibold leading-tight">
                {activeView.title}
              </h3>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-[26px] bg-[#f7f7f2] p-5 ring-1 ring-black/5 sm:p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pietra-green">
                Resultado referencial
              </p>

              <h3 className="mt-3 text-2xl font-semibold leading-tight text-pietra-black sm:text-3xl">
                {activeView.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-pietra-muted sm:text-base">
                {activeView.description}
              </p>

              <div className="mt-5 rounded-2xl bg-white p-4 text-sm leading-6 text-pietra-muted ring-1 ring-black/5">
                <strong className="font-semibold text-pietra-black">
                  Material aplicado:
                </strong>{" "}
                {product.name}
              </div>
            </div>

            <div className="mt-6">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-pietra-black px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#5A7C6C]"
              >
                Quiero cotizar este ambiente
              </a>

              <p className="mt-4 text-xs leading-5 text-pietra-muted">
                La simulación es referencial. El resultado final puede variar
                según iluminación, medidas, terminación y lote del material.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
