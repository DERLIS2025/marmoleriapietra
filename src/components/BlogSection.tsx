import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import { MobileCarousel } from "./MobileCarousel";
import { PietraImage } from "./PietraImage";
import { SectionHeader } from "./SectionHeader";

export function BlogSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-7 sm:px-5 lg:px-8 lg:py-12">
      <SectionHeader title="Inspiración para tu proyecto" description="Guías breves para elegir mejor entre mármol, granito, cuarzo y piedra traslúcida." action={<Link href="/productos" className="text-sm font-medium text-pietra-green hover:text-pietra-black">Ver materiales</Link>} />
      <MobileCarousel className="md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:gap-5">
        {blogPosts.map((post) => (
          <article key={post.slug} className="group w-[min(84vw,330px)] shrink-0 snap-start overflow-hidden rounded-[1.35rem] border border-pietra-soft bg-white shadow-sm transition hover:shadow-card md:w-auto md:shrink">
            <div className="aspect-[4/3] overflow-hidden md:aspect-auto md:h-52"><PietraImage src={post.image} alt={post.title} className="transition duration-500 group-hover:scale-[1.03]" /></div>
            <div className="p-5">
              <p className="text-xs font-medium text-pietra-green">{post.category} · {post.meta}</p>
              <h3 className="mt-2 min-h-[3.25rem] text-lg font-medium leading-tight text-pietra-black">{post.title}</h3>
              <Link href={post.slug.includes("piedra") ? "/piedra-traslucida" : "/productos"} className="mt-5 inline-flex text-sm font-medium text-pietra-green transition hover:text-pietra-black">Leer más →</Link>
            </div>
          </article>
        ))}
      </MobileCarousel>
    </section>
  );
}
