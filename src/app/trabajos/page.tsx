import type { Metadata } from "next";
import { CommercialSplitSection } from "@/components/CommercialSplitSection";
import { PietraImage } from "@/components/PietraImage";
import { projects } from "@/data/projects";
import { createProjectWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Trabajos Pietra | Cocinas, baños y quinchos en Paraguay",
  description: "Galería real de trabajos de Marmolería Pietra: cocinas, baños, quinchos y proyectos personalizados a medida.",
};

const groups = ["Cocinas", "Baños", "Quinchos"] as const;

export default function WorksPage() {
  return <main><section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"><p className="text-xs font-medium tracking-[0.16em] text-pietra-green">Nuestros trabajos</p><h1 className="mt-3 text-3xl font-semibold sm:text-4xl">Proyectos personalizados y a medida</h1><p className="mt-4 max-w-2xl leading-8 text-neutral-700">Ponemos empeño para que cada trabajo realizado se convierta en una creación única.</p></section><CommercialSplitSection />{groups.map((group) => <section key={group} className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"><h2 className="text-2xl font-semibold">{group}</h2><div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{projects.filter((project) => project.category === group).map((project) => <article key={project.id} className="overflow-hidden rounded-[1.4rem] bg-white shadow-sm"><div className="h-72"><PietraImage src={project.image} alt={project.title} /></div><div className="p-5"><h3 className="font-medium">{project.title}</h3><p className="mt-2 text-sm leading-6 text-neutral-600">{project.description}</p><a href={createProjectWhatsAppLink(project.title)} className="mt-4 inline-flex text-sm font-medium text-pietra-green">Consultar similar</a></div></article>)}</div></section>)}</main>;
}
