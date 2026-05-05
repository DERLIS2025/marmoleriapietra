import { createWhatsAppLink } from "@/lib/whatsapp";
import { Icon } from "./Icon";

export function WhatsAppButton() { return <a href={createWhatsAppLink()} aria-label="Solicitar presupuesto por WhatsApp" className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-pietra-green text-white shadow-soft transition hover:scale-105 hover:bg-pietra-black"><Icon name="whatsapp" /></a>; }
