"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/data/navigation";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { Icon } from "./Icon";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-pietra-soft bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-black tracking-[0.24em] text-pietra-black">PIETRA</Link>
        <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.16em] lg:flex">
          {navigation.map((item) => <Link key={item.href} href={item.href} className="transition hover:text-pietra-green">{item.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <button aria-label="Buscar" className="rounded-full p-2 hover:bg-pietra-soft"><Icon name="search" /></button>
          <button aria-label="Favoritos" className="rounded-full p-2 hover:bg-pietra-soft"><Icon name="heart" /></button>
          <Link aria-label="Presupuesto" href={createWhatsAppLink()} className="rounded-full bg-pietra-black p-2 text-white hover:bg-pietra-green"><Icon name="bag" /></Link>
        </div>
        <button className="rounded-full border border-pietra-soft p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menú"><Icon name={open ? "x" : "menu"} /></button>
      </div>
      {open ? <div className="border-t border-pietra-soft bg-white px-4 py-4 lg:hidden">
        <nav className="mx-auto flex max-w-7xl flex-col gap-3 text-sm font-semibold uppercase tracking-[0.14em]">
          {navigation.map((item) => <Link onClick={() => setOpen(false)} key={item.href} href={item.href} className="rounded-2xl px-3 py-3 hover:bg-pietra-warm">{item.label}</Link>)}
        </nav>
      </div> : null}
    </header>
  );
}
