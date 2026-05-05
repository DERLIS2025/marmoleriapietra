import { trustBadges } from "@/data/trustBadges";

export function TrustBadges() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid gap-3 md:grid-cols-3">
        {trustBadges.map((badge) => <div key={badge.title} className="flex items-center gap-4 rounded-[1.2rem] border border-pietra-soft bg-white p-5 shadow-sm">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-pietra-green/10 text-xl font-medium text-pietra-green">{badge.icon}</div>
          <div><h3 className="text-sm font-medium text-pietra-black">{badge.title}</h3><p className="mt-1 text-sm leading-5 text-neutral-600">{badge.text}</p></div>
        </div>)}
      </div>
    </section>
  );
}
