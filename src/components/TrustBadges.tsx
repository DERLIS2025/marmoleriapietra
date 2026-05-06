import { trustBadges } from "@/data/trustBadges";
import { MobileCarousel } from "./MobileCarousel";

export function TrustBadges() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-5 sm:px-5 lg:px-8 lg:py-6">
      <MobileCarousel className="md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
        {trustBadges.map((badge) => <div key={badge.title} className="flex w-[min(82vw,320px)] shrink-0 snap-start items-center gap-3 rounded-[1.2rem] border border-pietra-soft bg-white p-4 shadow-sm md:w-auto md:shrink">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-pietra-green/10 text-lg font-medium text-pietra-green">{badge.icon}</div>
          <div><h3 className="text-sm font-medium text-pietra-black">{badge.title}</h3><p className="mt-1 line-clamp-2 text-sm leading-5 text-neutral-600">{badge.text}</p></div>
        </div>)}
      </MobileCarousel>
    </section>
  );
}
