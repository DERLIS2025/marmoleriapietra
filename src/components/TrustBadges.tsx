import { trustBadges } from "@/data/trustBadges";

export function TrustBadges() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-4 md:grid-cols-3">
        {trustBadges.map((badge) => <div key={badge.title} className="flex items-center gap-5 rounded-[1.4rem] border border-pietra-soft bg-white p-6 text-center shadow-sm md:text-left">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-pietra-green/12 text-2xl font-black text-pietra-green">{badge.icon}</div>
          <div><h3 className="font-bold uppercase tracking-[0.12em] text-pietra-black text-sm">{badge.title}</h3><p className="mt-2 text-sm leading-6 text-neutral-600">{badge.text}</p></div>
        </div>)}
      </div>
    </section>
  );
}
