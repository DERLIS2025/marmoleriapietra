import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/data/navigation";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-[#080909] text-white">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-10 sm:px-5 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:px-8 lg:py-12">
        <div className="rounded-2xl border border-white/10 p-5 md:border-0 md:p-0"><Image src="/images/logo/pietra-logo-blanco.jpeg" alt="Marmolería Pietra" width={160} height={72} className="mb-6 h-auto w-36 object-contain sm:w-40" /><h3 className="text-base font-medium">Contacto</h3><div className="mt-4 space-y-2 text-sm leading-6 text-white/70"><p>Dirección: Asunción, Paraguay</p><p>Email: info@pietra.com</p><p>WhatsApp: +595 984 756 158</p></div><div className="mt-5 flex gap-2">{["f", "ig", "x", "in"].map((social) => <span key={social} className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-xs uppercase text-white/70">{social}</span>)}</div></div>
        <div className="rounded-2xl border border-white/10 p-5 md:border-0 md:p-0"><h3 className="text-base font-medium">Links rápidos</h3><ul className="mt-4 space-y-2.5 text-sm leading-6 text-white/70">{navigation.slice(1).map((item) => <li key={item.href}><Link href={item.href} className="hover:text-white">{item.label}</Link></li>)}</ul></div>
        <div className="rounded-2xl border border-white/10 p-5 md:border-0 md:p-0"><h3 className="text-base font-medium">Servicios</h3><ul className="mt-4 space-y-2.5 text-sm leading-6 text-white/70">{["Cocinas", "Baños", "Quinchos", "Mesadas", "Revestimientos", "Proyectos a medida"].map((service) => <li key={service}>{service}</li>)}</ul></div>
        <div className="rounded-2xl border border-white/10 p-5 md:border-0 md:p-0"><h3 className="text-base font-medium">Consulta por email</h3><p className="mt-4 text-sm leading-6 text-white/70">Especialistas en mármol, granito y cuarzo. Diseñando espacios únicos desde 2008.</p><form className="mt-5 grid gap-3 sm:flex"><input type="email" placeholder="Email" className="min-w-0 flex-1 rounded-full border border-white/15 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/35" /><button className="min-h-11 rounded-full bg-white px-5 py-3 text-sm font-medium text-pietra-black">Enviar</button></form><a href={createWhatsAppLink()} className="mt-4 inline-flex text-sm font-medium text-pietra-beige">Consultar por WhatsApp</a></div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs leading-5 text-white/45">Desarrollado por eQuantum · © 2026 Marmolería Pietra.</div>
    </footer>
  );
}
