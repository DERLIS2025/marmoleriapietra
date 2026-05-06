"use client";

import { Camera, ImageIcon, MessageCircle, Sparkles } from "lucide-react";

type ProductForRoomVisualizer = {
  slug: string;
  name: string;
  image: string;
  category: string;
  description?: string;
};

const WHATSAPP_NUMBER = "595984756158";

function createWhatsappLink(productName: string) {
  const message = `Hola, quiero visualizar ${productName} en mi cocina/baño/quincho. ¿Puedo enviarles una foto para que me asesoren?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function RoomVisualizer({
  product,
}: {
  product: ProductForRoomVisualizer;
}) {
  return (
    <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_18px_55px_rgba(20,20,20,0.08)] ring-1 ring-black/5">
      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="bg-[#5A7C6C] p-6 text-white sm:p-8 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/75">
            Visualizador Pietra
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Visualizá este material en tu espacio
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-white/85">
            Inspirado en la lógica de los visualizadores premium: elegí un
            ambiente, aplicá el material y tomá una decisión con más seguridad.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href={createWhatsappLink(product.name)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-4 text-sm font-semibold text-pietra-black transition hover:bg-white/90"
            >
              <Camera className="h-4 w-4" />
              Enviar foto por WhatsApp
            </a>

            <a
              href={createWhatsappLink(product.name)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-5 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <ImageIcon className="h-4 w-4" />
              Pedir visualización
            </a>
          </div>

          <p className="mt-5 text-xs leading-5 text-white/70">
            En la próxima etapa, esta sección podrá conectarse a un visualizador
            real tipo Roomvo para subir fotos y aplicar materiales directamente.
          </p>
        </div>

        <div className="p-6 sm:p-8 lg:p-10">
          <div className="relative overflow-hidden rounded-[28px] bg-[#f7f7f2]">
            <img
              src={product.image}
              alt={product.name}
              className="h-[260px] w-full object-cover sm:h-[360px] lg:h-[420px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-black/50 p-5 text-white backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#BFD6CB]">
                Material seleccionado
              </p>

              <h3 className="mt-2 text-2xl font-semibold leading-tight">
                {product.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/80">
                Usá este material como punto de partida para visualizarlo en
                mesadas, islas, baños, quinchos o revestimientos.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-[#f7f7f2] p-4">
              <Sparkles className="h-5 w-5 text-[#5A7C6C]" />
              <p className="mt-3 text-sm font-semibold text-pietra-black">
                Compará materiales
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f7f2] p-4">
              <ImageIcon className="h-5 w-5 text-[#5A7C6C]" />
              <p className="mt-3 text-sm font-semibold text-pietra-black">
                Visualizá espacios
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f7f2] p-4">
              <MessageCircle className="h-5 w-5 text-[#5A7C6C]" />
              <p className="mt-3 text-sm font-semibold text-pietra-black">
                Cotizá por WhatsApp
              </p>
            </div>
          </div>

          <p className="mt-5 text-xs leading-5 text-pietra-muted">
            Las visualizaciones son referenciales. El resultado final puede
            variar según iluminación, medidas, terminación, lote del material y
            condiciones de instalación.
          </p>
        </div>
      </div>
    </div>
  );
}
