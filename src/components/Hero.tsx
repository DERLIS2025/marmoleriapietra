import Link from "next/link";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { StoneVisual } from "./StoneVisual";

export function Hero() {
  return (
    <section className="bg-pietra-warm">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-pietra-green">MÁRMOL · GRANITO · CUARZO</p>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[0.98] text-pietra-black sm:text-6xl lg:text-7xl">Diseñamos espacios con piedra natural.</h1>
          <p className="mt-6 text-base leading-8 text-neutral-700 sm:text-lg">Mesadas, revestimientos y proyectos a medida para cocinas, baños, hogares y obras.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={createWhatsAppLink()} className="rounded-full bg-pietra-black px-7 py-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-white hover:bg-pietra-green">Solicitar presupuesto</Link>
            <Link href="/productos" className="rounded-full border border-pietra-black px-7 py-4 text-center text-xs font-bold uppercase tracking-[0.18em] hover:bg-white">Ver materiales</Link>
          </div>
        </div>
        <div className="relative min-h-[320px] lg:min-h-[520px]">
          <StoneVisual tone="from-white via-pietra-beige to-pietra-green" className="absolute inset-0 rounded-[2rem] shadow-soft" label="Cocina premium con piedra natural" />
          <div className="absolute bottom-6 left-6 right-6 rounded-[1.4rem] bg-white/82 p-5 backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-pietra-green">Proyectos a medida</p>
            <p className="mt-2 text-2xl font-semibold">Cocinas, baños y superficies listas para cotizar.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
