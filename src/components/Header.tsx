"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/data/navigation";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { Icon } from "./Icon";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-pietra-soft/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[4.5rem] lg:px-8">
        <Link href="/" className="text-xl font-semibold tracking-[0.22em] text-pietra-black sm:text-2xl">PIETRA</Link>
        <nav className="hidden items-center gap-5 text-[11px] font-medium tracking-[0.12em] text-neutral-700 lg:flex xl:gap-7">
          {navigation.map((item) => <Link key={item.href} href={item.href} className="transition hover:text-pietra-green">{item.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <button aria-label="Buscar" className="grid h-10 w-10 place-items-center rounded-full text-neutral-700 transition hover:bg-pietra-soft"><Icon name="search" className="h-4 w-4" /></button>
          <button aria-label="Favoritos" className="grid h-10 w-10 place-items-center rounded-full text-neutral-700 transition hover:bg-pietra-soft"><Icon name="heart" className="h-4 w-4" /></button>
          <Link aria-label="Presupuesto" href={createWhatsAppLink()} className="grid h-10 w-10 place-items-center rounded-full bg-pietra-black text-white transition hover:bg-pietra-green"><Icon name="bag" className="h-4 w-4" /></Link>
        </div>
        <button className="grid h-10 w-10 place-items-center rounded-full border border-pietra-soft lg:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menú"><Icon name={open ? "x" : "menu"} className="h-5 w-5" /></button>
      </div>
      {open ? (
        <div className="border-t border-pietra-soft bg-white px-4 py-3 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 text-sm font-medium text-pietra-black">
            {navigation.map((item) => <Link onClick={() => setOpen(false)} key={item.href} href={item.href} className="rounded-2xl px-3 py-3 transition hover:bg-pietra-warm">{item.label}</Link>)}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
