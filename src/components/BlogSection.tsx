import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import { PietraImage } from "./PietraImage";

export function BlogSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between"><h2 className="text-2xl font-bold">Inspiración para tu proyecto</h2><Link href="/productos" className="rounded-full bg-pietra-black px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white">Ver materiales</Link></div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {blogPosts.map((post) => <article key={post.slug} className="rounded-[1.4rem] bg-white p-3 shadow-sm"><div className="h-56 overflow-hidden rounded-[1.1rem]"><PietraImage src={post.image} alt={post.title} /></div><div className="p-3"><p className="text-xs text-neutral-500">{post.category} · {post.meta}</p><h3 className="mt-2 text-xl font-bold leading-tight">{post.title}</h3><Link href={post.slug.includes("piedra") ? "/piedra-traslucida" : "/productos"} className="mt-5 inline-flex border border-pietra-black px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em]">Leer más</Link></div></article>)}
      </div>
    </section>
  );
}
