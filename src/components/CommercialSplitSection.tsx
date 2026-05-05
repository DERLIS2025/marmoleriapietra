import Link from "next/link";
import { featuredProject, projectBenefits } from "@/data/projects";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { PietraImage } from "./PietraImage";

export function CommercialSplitSection() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.35fr_1fr] lg:px-8">
      <div className="grid grid-cols-2 gap-5">
        {featuredProject.gallery.slice(0, 2).map((image, index) => <div key={image} className={`${index === 1 ? "mt-12" : ""} h-80 overflow-hidden rounded-[1.6rem]`}><PietraImage src={image} alt={`${featuredProject.title} vista ${index + 1}`} /></div>)}
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-pietra-green">Trabajos personalizados y a medida</p>
        <h2 className="mt-4 text-4xl font-bold leading-tight">{featuredProject.title}</h2>
        <p className="mt-5 leading-8 text-neutral-700">{featuredProject.description}</p>
        <ul className="mt-5 space-y-3 text-sm text-neutral-700">{projectBenefits.map((benefit) => <li key={benefit} className="flex gap-3"><span className="text-pietra-green">◆</span>{benefit}</li>)}</ul>
        <Link href={createWhatsAppLink(featuredProject.whatsappMessage)} className="mt-7 inline-flex rounded-full bg-pietra-black px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white hover:bg-pietra-green">Consultar por este proyecto</Link>
      </div>
    </section>
  );
}
