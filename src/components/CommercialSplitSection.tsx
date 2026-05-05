import Link from "next/link";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { StoneVisual } from "./StoneVisual";

export function CommercialSplitSection() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.35fr_1fr] lg:px-8">
      <div className="grid grid-cols-2 gap-5"><StoneVisual tone="from-pietra-warm via-white to-pietra-beige" className="h-80 rounded-[1.6rem]" /><StoneVisual tone="from-pietra-green via-pietra-beige to-white" className="mt-12 h-80 rounded-[1.6rem]" /></div>
      <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-pietra-green">Hasta 40% más valor visual para tus espacios</p><h2 className="mt-4 text-4xl font-bold leading-tight">Tu proyecto puede verse más elegante, moderno y funcional.</h2><p className="mt-5 leading-8 text-neutral-700">Fabricamos piezas a medida en mármol, granito y cuarzo para hogares, empresas, arquitectos y constructoras.</p><Link href={createWhatsAppLink("Hola, quiero hablar con un asesor de Marmolería Pietra.")} className="mt-7 inline-flex rounded-full bg-pietra-black px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white hover:bg-pietra-green">Hablar con un asesor</Link></div>
    </section>
  );
}
