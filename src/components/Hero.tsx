import Link from "next/link";
import { categories } from "@/data/categories";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { PietraImage } from "./PietraImage";

export function Hero() {
  const heroImage = categories[0].image;

  return (
    <section className="bg-pietra-warm">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-pietra-green">MÁRMOL · GRANITO · CUARZO</p>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[0.98] text-pietra-black sm:text-6xl lg:text-7xl">Lujo en cada detalle de granito.</h1>
          <p className="mt-6 text-base leading-8 text-neutral-700 sm:text-lg">Proveemos e instalamos todo tipo de mesadas. Consultá cuál opción se adecua mejor a tu proyecto.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={createWhatsAppLink()} className="rounded-full bg-pietra-black px-7 py-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-white hover:bg-pietra-green">Solicitar cotización</Link>
            <Link href="/trabajos" className="rounded-full border border-pietra-black px-7 py-4 text-center text-xs font-bold uppercase tracking-[0.18em] hover:bg-white">Ver trabajos</Link>
          </div>
        </div>
        <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] shadow-soft lg:min-h-[520px]">
          <PietraImage src={heroImage} alt="Cocina premium con mesada Pietra" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 rounded-[1.4rem] bg-white/86 p-5 backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-pietra-green">Especialistas desde 2008</p>
            <p className="mt-2 text-2xl font-semibold">Mármol, granito y cuarzo para espacios únicos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
