import Link from "next/link";
import { featuredProject, projectBenefits } from "@/data/projects";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { MobileCarousel } from "./MobileCarousel";
import { PietraImage } from "./PietraImage";

export function CommercialSplitSection() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-6 px-4 py-7 sm:px-5 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-12">
      <MobileCarousel className="sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:gap-5">
        {featuredProject.gallery.slice(0, 2).map((image, index) => (
          <div key={image} className={`${index === 1 ? "sm:mt-12" : ""} aspect-[4/3] w-[min(82vw,320px)] shrink-0 snap-start overflow-hidden rounded-[1.35rem] bg-pietra-soft shadow-sm sm:h-80 sm:w-auto sm:shrink sm:aspect-auto lg:h-[360px]`}>
            <PietraImage src={image} alt={`${featuredProject.title} vista ${index + 1}`} />
          </div>
        ))}
      </MobileCarousel>
      <div className="rounded-[1.5rem] bg-white p-5 shadow-card sm:p-8">
        <p className="text-xs font-medium tracking-[0.16em] text-pietra-green">Proyecto destacado</p>
        <h2 className="mt-3 text-2xl font-semibold leading-tight text-pietra-black sm:text-4xl">{featuredProject.title}</h2>
        <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">{featuredProject.description}</p>
        <ul className="mt-5 grid gap-3 text-sm text-neutral-700 sm:grid-cols-2 lg:grid-cols-1">
          {projectBenefits.map((benefit) => <li key={benefit} className="flex gap-3"><span className="mt-1 text-pietra-green">◆</span><span>{benefit}</span></li>)}
        </ul>
        <Link href={createWhatsAppLink(featuredProject.whatsappMessage)} className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-pietra-black px-6 text-sm font-medium text-white transition hover:bg-pietra-green sm:w-auto">Consultar por este proyecto</Link>
      </div>
    </section>
  );
}
