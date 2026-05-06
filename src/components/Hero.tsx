import Link from "next/link";
import { categories } from "@/data/categories";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { PietraImage } from "./PietraImage";

const mobileBenefits = ["Asesoramiento personalizado", "Fabricación a medida", "Instalación profesional"];

export function Hero() {
  const heroImage = categories[0].image;

  return (
    <section className="bg-pietra-warm">
      <div className="mx-auto grid max-w-7xl items-center gap-4 px-4 py-5 sm:px-5 md:gap-6 md:py-10 lg:grid-cols-[0.88fr_1.12fr] lg:px-8 lg:py-14">
        <div className="max-w-xl">
          <p className="text-xs font-medium tracking-[0.16em] text-pietra-green md:tracking-[0.18em]">Mármol · Granito · Cuarzo</p>
          <h1 className="mt-2.5 font-display text-[2.15rem] font-semibold leading-[1.06] text-pietra-black min-[390px]:text-[2.3rem] md:hidden">Mesadas y revestimientos en mármol, granito y cuarzo</h1>
          <h1 className="mt-3 hidden font-display text-5xl font-semibold leading-[1.04] text-pietra-black md:block lg:text-6xl">Lujo en cada detalle de granito.</h1>
          <p className="mt-3 max-w-lg text-[15px] leading-7 text-neutral-700 md:hidden">Fabricamos e instalamos superficies a medida para cocinas, baños, quinchos y proyectos especiales.</p>
          <p className="mt-4 hidden max-w-lg text-lg leading-8 text-neutral-700 md:block">Proveemos e instalamos mesadas, revestimientos y piezas a medida. Te ayudamos a elegir el material ideal para tu proyecto.</p>
          <div className="mt-5 grid grid-cols-1 gap-2.5 min-[390px]:grid-cols-2 md:mt-6 md:flex md:items-center md:gap-3">
            <Link href={createWhatsAppLink()} className="inline-flex min-h-12 items-center justify-center rounded-full bg-pietra-black px-5 text-sm font-medium text-white transition hover:bg-pietra-green">Solicitar cotización</Link>
            <Link href="/trabajos" className="inline-flex min-h-12 items-center justify-center rounded-full border border-pietra-black/20 bg-white/60 px-5 text-sm font-medium text-pietra-black transition hover:border-pietra-green hover:text-pietra-green">Ver trabajos</Link>
          </div>
        </div>
        <div className="relative aspect-[3/2] overflow-hidden rounded-[1.25rem] bg-white shadow-card md:aspect-auto md:h-[440px] md:rounded-[1.5rem] lg:h-[500px]">
          <PietraImage src={heroImage} alt="Cocina premium con mesada Pietra" loading="eager" className="object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent md:from-black/40 md:via-black/5" />
          <div className="absolute bottom-3 left-3 right-3 hidden rounded-2xl bg-white/92 p-4 shadow-card backdrop-blur-sm md:block sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-sm sm:p-5">
            <p className="text-[11px] font-medium tracking-[0.14em] text-pietra-green">Especialistas desde 2008</p>
            <p className="mt-1.5 text-base font-medium leading-snug text-pietra-black sm:text-xl">Mármol, granito y cuarzo para espacios únicos.</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 md:hidden">
          {mobileBenefits.map((benefit) => (
            <div key={benefit} className="rounded-2xl border border-pietra-soft bg-white/75 px-2.5 py-3 text-center text-[11px] font-medium leading-4 text-pietra-black shadow-sm">
              {benefit}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
