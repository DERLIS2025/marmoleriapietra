import Link from "next/link";
import { navigation } from "@/data/navigation";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-[#080909] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div><h3 className="font-bold">Contacto</h3><div className="mt-5 space-y-3 text-sm text-white/70"><p>Dirección: Asunción, Paraguay</p><p>Email: info@pietra.com</p><p>WhatsApp: +595 984 756 158</p></div><div className="mt-5 flex gap-2">{["f", "ig", "x", "in"].map((social) => <span key={social} className="grid h-9 w-9 place-items-center border border-white/20 text-xs uppercase">{social}</span>)}</div></div>
        <div><h3 className="font-bold">Links rápidos</h3><ul className="mt-5 space-y-3 text-sm text-white/70">{navigation.slice(1).map((item) => <li key={item.href}><Link href={item.href} className="hover:text-white">— {item.label}</Link></li>)}</ul></div>
        <div><h3 className="font-bold">Servicios</h3><ul className="mt-5 space-y-3 text-sm text-white/70">{["Cocinas", "Baños", "Quinchos", "Mesadas", "Revestimientos", "Proyectos a medida"].map((service) => <li key={service}>— {service}</li>)}</ul></div>
        <div><h3 className="font-bold">Consulta por email</h3><p className="mt-5 text-sm leading-6 text-white/70">Especialistas en mármol, granito y cuarzo. Diseñando espacios únicos desde 2008.</p><form className="mt-5 flex gap-2"><input type="email" placeholder="Email" className="min-w-0 flex-1 border border-white/20 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/40" /><button className="bg-white px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-pietra-black">Enviar</button></form><a href={createWhatsAppLink()} className="mt-4 inline-flex text-sm font-bold text-pietra-beige">Consultar por WhatsApp</a></div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/45">Desarrollado por eQuantum | © 2026 Marmolería Pietra. Todos los derechos reservados.</div>
    </footer>
  );
}
