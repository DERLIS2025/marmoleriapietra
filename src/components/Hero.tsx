import Link from "next/link";
import { categories } from "@/data/categories";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { PietraImage } from "./PietraImage";

export function Hero() {
  const heroImage = categories[0].image;

  return (
    <section className="bg-pietra-warm">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 py-6 sm:px-5 md:py-10 lg:grid-cols-[0.88fr_1.12fr] lg:px-8 lg:py-14">
        <div className="max-w-xl">
          <p className="text-xs font-medium tracking-[0.18em] text-pietra-green">Mármol · Granito · Cuarzo</p>
          <h1 className="mt-3 font-display text-[2.35rem] font-semibold leading-[1.04] text-pietra-black sm:text-5xl lg:text-6xl">Lujo en cada detalle de granito.</h1>
          <p className="mt-4 max-w-lg text-[15px] leading-7 text-neutral-700 sm:text-lg sm:leading-8">Proveemos e instalamos mesadas, revestimientos y piezas a medida. Te ayudamos a elegir el material ideal para tu proyecto.</p>
          <div className="mt-6 grid gap-3 sm:flex sm:items-center">
            <Link href={createWhatsAppLink()} className="inline-flex min-h-12 items-center justify-center rounded-full bg-pietra-black px-6 text-sm font-medium text-white transition hover:bg-pietra-green">Solicitar cotización</Link>
            <Link href="/trabajos" className="inline-flex min-h-12 items-center justify-center rounded-full border border-pietra-black/20 bg-white/60 px-6 text-sm font-medium text-pietra-black transition hover:border-pietra-green hover:text-pietra-green">Ver trabajos</Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-white shadow-card sm:h-[440px] sm:aspect-auto lg:h-[500px]">
          <PietraImage src={heroImage} alt="Cocina premium con mesada Pietra" loading="eager" className="object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-white/92 p-4 shadow-card backdrop-blur-sm sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-sm sm:p-5">
            <p className="text-[11px] font-medium tracking-[0.14em] text-pietra-green">Especialistas desde 2008</p>
            <p className="mt-1.5 text-base font-medium leading-snug text-pietra-black sm:text-xl">Mármol, granito y cuarzo para espacios únicos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
