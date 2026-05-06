"use client";

import { useMemo, useRef, useState, type CSSProperties } from "react";
import {
  Camera,
  Download,
  MessageCircle,
  SlidersHorizontal,
  Upload,
  Wand2,
} from "lucide-react";
import { categories } from "@/data/categories";

type ProductForRoomVisualizer = {
  slug: string;
  name: string;
  image: string;
  category: string;
  description?: string;
};

type SceneView = {
  id: string;
  label: string;
  title: string;
  description: string;
  sceneHints: string[];
  surfaceClassName: string;
};

type SurfacePreset = {
  id: string;
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
  rotate: number;
  skew: number;
};

type Adjustment = {
  x: number;
  y: number;
  w: number;
  h: number;
  rotate: number;
  skew: number;
  opacity: number;
};

const WHATSAPP_NUMBER = "595984756158";
const MAX_FILE_SIZE = 10 * 1024 * 1024;

const sceneViews: SceneView[] = [
  {
    id: "cocina",
    label: "Cocina",
    title: "Probá el material en una cocina",
    description:
      "Visualizá de forma rápida cómo podría verse este material aplicado sobre una mesada o isla.",
    sceneHints: ["cocina"],
    surfaceClassName:
      "left-[7%] top-[60%] h-[22%] w-[79%] -skew-x-[10deg] rotate-[-1deg] rounded-[18px]",
  },
  {
    id: "bano",
    label: "Baño",
    title: "Probá el material en un baño",
    description:
      "Referencia visual para vanitorys, revestimientos y superficies de uso diario.",
    sceneHints: ["baño", "bano", "sanitario"],
    surfaceClassName:
      "left-[15%] top-[58%] h-[18%] w-[64%] skew-x-[7deg] rounded-[16px]",
  },
  {
    id: "quincho",
    label: "Quincho",
    title: "Probá el material en un quincho",
    description:
      "Ideal para imaginar barras, parrillas y superficies sociales con terminación resistente.",
    sceneHints: ["quincho", "exterior"],
    surfaceClassName:
      "left-[8%] top-[55%] h-[24%] w-[78%] -skew-x-[13deg] rotate-[-2deg] rounded-[18px]",
  },
  {
    id: "revestimiento",
    label: "Revestimiento",
    title: "Probá el material como revestimiento",
    description:
      "Vista referencial para paredes, frentes decorativos y detalles especiales.",
    sceneHints: ["revestido", "pared", "granito"],
    surfaceClassName:
      "left-[20%] top-[20%] h-[50%] w-[55%] rounded-[22px]",
  },
];

const surfacePresets: SurfacePreset[] = [
  {
    id: "mesada",
    label: "Mesada",
    x: 8,
    y: 58,
    w: 80,
    h: 22,
    rotate: -2,
    skew: -8,
  },
  {
    id: "isla",
    label: "Isla / Barra",
    x: 13,
    y: 54,
    w: 72,
    h: 24,
    rotate: -2,
    skew: -10,
  },
  {
    id: "pared",
    label: "Pared",
    x: 20,
    y: 18,
    w: 58,
    h: 48,
    rotate: 0,
    skew: 0,
  },
  {
    id: "backsplash",
    label: "Backsplash",
    x: 16,
    y: 38,
    w: 70,
    h: 18,
    rotate: 0,
    skew: -4,
  },
  {
    id: "piso",
    label: "Piso",
    x: 5,
    y: 68,
    w: 88,
    h: 24,
    rotate: -1,
    skew: -12,
  },
];

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getSceneImage(view: SceneView) {
  const match = categories.find((category) => {
    const haystack = normalize(`${category.name} ${category.slug}`);
    return view.sceneHints.some((hint) => haystack.includes(normalize(hint)));
  });

  return match?.image || categories[0]?.image || "";
}

function createWhatsappLink(materialName: string, mode: string) {
  const message = `Hola, quiero cotizar ${materialName}. Probé una visualización referencial en ${mode}. ¿Me pueden asesorar?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("No se pudo cargar la imagen."));
    image.src = src;
  });
}

export default function RoomVisualizer({
  product,
  allProducts,
}: {
  product: ProductForRoomVisualizer;
  allProducts: ProductForRoomVisualizer[];
}) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [mode, setMode] = useState<"express" | "photo">("express");
  const [activeSceneId, setActiveSceneId] = useState(sceneViews[0].id);
  const [selectedMaterial, setSelectedMaterial] =
    useState<ProductForRoomVisualizer>(product);
  const [uploadedPhoto, setUploadedPhoto] = useState<string | null>(null);
  const [activeSurfaceId, setActiveSurfaceId] = useState(surfacePresets[0].id);
  const [showAdjustments, setShowAdjustments] = useState(false);
  const [message, setMessage] = useState("");

  const [adjustment, setAdjustment] = useState<Adjustment>({
    ...surfacePresets[0],
    opacity: 78,
  });

  const activeScene = useMemo(
    () => sceneViews.find((scene) => scene.id === activeSceneId) ?? sceneViews[0],
    [activeSceneId]
  );

  const activeSurface = useMemo(
    () =>
      surfacePresets.find((surface) => surface.id === activeSurfaceId) ??
      surfacePresets[0],
    [activeSurfaceId]
  );

  const sceneImage = getSceneImage(activeScene);

  const surfaceStyle: CSSProperties = {
    left: `${adjustment.x}%`,
    top: `${adjustment.y}%`,
    width: `${adjustment.w}%`,
    height: `${adjustment.h}%`,
    transform: `rotate(${adjustment.rotate}deg) skewX(${adjustment.skew}deg)`,
    opacity: adjustment.opacity / 100,
  };

  const handleSurfaceChange = (surface: SurfacePreset) => {
    setActiveSurfaceId(surface.id);
    setAdjustment({
      ...surface,
      opacity: adjustment.opacity,
    });
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      setMessage("La imagen supera el límite de 10MB.");
      return;
    }

    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      setMessage("Solo se permiten imágenes JPG, PNG o WebP.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setUploadedPhoto(String(reader.result));
      setMode("photo");
      setMessage("");
    };

    reader.onerror = () => {
      setMessage("No se pudo cargar la imagen.");
    };

    reader.readAsDataURL(file);
  };

  const downloadPhotoPreview = async () => {
    if (!uploadedPhoto) return;

    try {
      const base = await loadImage(uploadedPhoto);
      const texture = await loadImage(selectedMaterial.image);

      const canvas = document.createElement("canvas");
      const maxWidth = 1200;
      const ratio = Math.min(maxWidth / base.width, 1);

      canvas.width = Math.round(base.width * ratio);
      canvas.height = Math.round(base.height * ratio);

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.drawImage(base, 0, 0, canvas.width, canvas.height);

      const patternCanvas = document.createElement("canvas");
      patternCanvas.width = 280;
      patternCanvas.height = 280;

      const patternCtx = patternCanvas.getContext("2d");
      if (!patternCtx) return;

      patternCtx.drawImage(texture, 0, 0, 280, 280);
      const pattern = ctx.createPattern(patternCanvas, "repeat");
      if (!pattern) return;

      const x = (adjustment.x / 100) * canvas.width;
      const y = (adjustment.y / 100) * canvas.height;
      const w = (adjustment.w / 100) * canvas.width;
      const h = (adjustment.h / 100) * canvas.height;

      ctx.save();
      ctx.globalAlpha = adjustment.opacity / 100;
      ctx.translate(x + w / 2, y + h / 2);
      ctx.rotate((adjustment.rotate * Math.PI) / 180);
      ctx.transform(1, 0, Math.tan((adjustment.skew * Math.PI) / 180), 1, 0, 0);
      ctx.fillStyle = pattern;
      ctx.fillRect(-w / 2, -h / 2, w, h);
      ctx.globalAlpha = 1;
      ctx.fillStyle = "rgba(255,255,255,0.10)";
      ctx.fillRect(-w / 2, -h / 2, w, h);
      ctx.restore();

      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = `pietra-${selectedMaterial.slug}-visualizacion.png`;
      link.click();
    } catch {
      setMessage("No se pudo descargar la visualización.");
    }
  };

  const previewImage = mode === "express" ? sceneImage : uploadedPhoto;

  return (
    <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_18px_55px_rgba(20,20,20,0.08)] ring-1 ring-black/5">
      <div className="grid gap-0 lg:grid-cols-[1fr_380px]">
        <div className="p-5 sm:p-7 lg:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-pietra-green">
                Visualizador Pietra
              </p>
              <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-pietra-black sm:text-3xl lg:text-4xl">
                Probá este material en segundos
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-pietra-muted sm:text-base">
                Usá una escena de ejemplo o subí una foto de tu espacio para ver
                una aplicación referencial de {selectedMaterial.name}.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 rounded-full bg-[#f1f1ea] p-1">
              <button
                type="button"
                onClick={() => setMode("express")}
                className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                  mode === "express"
                    ? "bg-[#5A7C6C] text-white"
                    : "text-pietra-black"
                }`}
              >
                Express
              </button>

              <button
                type="button"
                onClick={() => {
                  setMode("photo");
                  if (!uploadedPhoto) fileInputRef.current?.click();
                }}
                className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                  mode === "photo"
                    ? "bg-[#5A7C6C] text-white"
                    : "text-pietra-black"
                }`}
              >
                Mi foto
              </button>
            </div>
          </div>

          <div className="no-scrollbar mt-6 flex gap-2 overflow-x-auto pb-1">
            {(mode === "express" ? sceneViews : surfacePresets).map((item) => {
              const isActive =
                mode === "express"
                  ? item.id === activeSceneId
                  : item.id === activeSurfaceId;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    if (mode === "express") {
                      setActiveSceneId(item.id);
                    } else {
                      handleSurfaceChange(item as SurfacePreset);
                    }
                  }}
                  className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition sm:px-5 ${
                    isActive
                      ? "bg-[#5A7C6C] text-white shadow-[0_10px_24px_rgba(90,124,108,0.25)]"
                      : "border border-black/10 bg-white text-pietra-black hover:border-[#5A7C6C] hover:text-[#5A7C6C]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="relative mt-6 overflow-hidden rounded-[28px] bg-[#f1f1ea] shadow-[0_18px_45px_rgba(20,20,20,0.10)]">
            {previewImage ? (
              <>
                <img
                  src={previewImage}
                  alt="Visualización Pietra"
                  className="h-[280px] w-full object-cover sm:h-[430px] lg:h-[560px]"
                />

                {mode === "express" ? (
                  <div
                    className={`absolute overflow-hidden border border-white/20 shadow-[0_12px_34px_rgba(0,0,0,0.28)] ${activeScene.surfaceClassName}`}
                  >
                    <div
                      className="h-full w-full scale-125 bg-cover bg-center opacity-95"
                      style={{
                        backgroundImage: `url(${selectedMaterial.image})`,
                        mixBlendMode: "multiply",
                      }}
                    />
                    <div className="absolute inset-0 bg-white/10" />
                    <div className="absolute inset-x-0 top-0 h-[28%] bg-white/20 blur-md" />
                  </div>
                ) : uploadedPhoto ? (
                  <div
                    className="absolute overflow-hidden rounded-[18px] border border-white/20 shadow-[0_12px_34px_rgba(0,0,0,0.28)]"
                    style={surfaceStyle}
                  >
                    <div
                      className="h-full w-full scale-125 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${selectedMaterial.image})`,
                        mixBlendMode: "multiply",
                      }}
                    />
                    <div className="absolute inset-0 bg-white/10" />
                    <div className="absolute inset-x-0 top-0 h-[28%] bg-white/20 blur-md" />
                  </div>
                ) : null}

                <div className="absolute left-4 top-4 rounded-full bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  {selectedMaterial.name}
                </div>

                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-black/56 p-4 text-white backdrop-blur-md sm:right-auto sm:max-w-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#BFD6CB]">
                    {mode === "express" ? activeScene.label : activeSurface.label}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold leading-tight sm:text-2xl">
                    {mode === "express"
                      ? activeScene.title
                      : `Aplicación referencial sobre ${activeSurface.label.toLowerCase()}`}
                  </h3>
                </div>
              </>
            ) : (
              <div className="grid min-h-[340px] place-items-center px-6 py-14 text-center sm:min-h-[460px]">
                <div>
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-white shadow-sm">
                    <Camera className="h-7 w-7 text-[#5A7C6C]" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-pietra-black">
                    Subí una foto de tu espacio
                  </h3>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-pietra-muted">
                    La textura se aplicará de forma inmediata y luego podrás
                    ajustar la zona con controles simples.
                  </p>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="mt-5 rounded-full bg-pietra-black px-6 py-3 text-sm font-semibold text-white"
                  >
                    Subir mi foto
                  </button>
                </div>
              </div>
            )}
          </div>

          {mode === "photo" && uploadedPhoto ? (
            <div className="mt-5 rounded-[24px] bg-[#f7f7f2] p-4 ring-1 ring-black/5">
              <button
                type="button"
                onClick={() => setShowAdjustments((current) => !current)}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-pietra-black ring-1 ring-black/10"
              >
                <SlidersHorizontal className="h-4 w-4" />
                {showAdjustments ? "Ocultar ajustes" : "Ajustar aplicación"}
              </button>

              {showAdjustments ? (
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["x", "Horizontal", 0, 80],
                    ["y", "Vertical", 0, 80],
                    ["w", "Ancho", 20, 100],
                    ["h", "Alto", 8, 60],
                    ["rotate", "Rotación", -20, 20],
                    ["skew", "Perspectiva", -25, 25],
                    ["opacity", "Opacidad", 30, 100],
                  ].map(([key, label, min, max]) => (
                    <label key={String(key)} className="text-sm text-pietra-muted">
                      <span className="flex justify-between">
                        <span>{label}</span>
                        <strong className="text-pietra-black">
                          {Math.round(adjustment[key as keyof Adjustment])}
                        </strong>
                      </span>
                      <input
                        type="range"
                        min={Number(min)}
                        max={Number(max)}
                        value={adjustment[key as keyof Adjustment]}
                        onChange={(event) =>
                          setAdjustment((current) => ({
                            ...current,
                            [key]: Number(event.target.value),
                          }))
                        }
                        className="mt-2 w-full accent-[#5A7C6C]"
                      />
                    </label>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}

          {message ? (
            <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
              {message}
            </p>
          ) : null}

          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/webp"
            className="hidden"
            onChange={handleUpload}
          />
        </div>

        <aside className="border-t border-black/10 bg-[#f7f7f2] p-5 sm:p-7 lg:border-l lg:border-t-0 lg:p-8">
          <div className="sticky top-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pietra-green">
              Material
            </p>
            <h3 className="mt-3 text-2xl font-semibold leading-tight text-pietra-black">
              {selectedMaterial.name}
            </h3>
            <p className="mt-3 text-sm leading-6 text-pietra-muted">
              Cambiá de material y compará rápidamente el resultado visual.
            </p>

            <div className="mt-5 max-h-[280px] space-y-2 overflow-y-auto pr-1">
              {allProducts.map((item) => {
                const isActive = item.slug === selectedMaterial.slug;

                return (
                  <button
                    key={item.slug}
                    type="button"
                    onClick={() => setSelectedMaterial(item)}
                    className={`flex w-full items-center gap-3 rounded-2xl p-2 text-left transition ${
                      isActive
                        ? "bg-[#5A7C6C] text-white"
                        : "bg-white text-pietra-black hover:bg-black/5"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-12 w-12 rounded-xl object-cover"
                    />
                    <span>
                      <span className="block text-xs font-semibold">
                        {item.name}
                      </span>
                      <span
                        className={`block text-[11px] ${
                          isActive ? "text-white/75" : "text-pietra-muted"
                        }`}
                      >
                        {item.category}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 grid gap-3">
              {mode === "photo" && uploadedPhoto ? (
                <button
                  type="button"
                  onClick={downloadPhotoPreview}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-pietra-black px-5 py-3 text-sm font-semibold text-white"
                >
                  <Download className="h-4 w-4" />
                  Descargar visualización
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-pietra-black px-5 py-3 text-sm font-semibold text-white"
                >
                  <Upload className="h-4 w-4" />
                  Subir mi foto
                </button>
              )}

              <a
                href={createWhatsappLink(
                  selectedMaterial.name,
                  mode === "express" ? activeScene.label : "mi espacio"
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#5A7C6C] px-5 py-3 text-sm font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" />
                Consultar por WhatsApp
              </a>
            </div>

            <div className="mt-6 rounded-2xl bg-white p-4 text-xs leading-5 text-pietra-muted ring-1 ring-black/5">
              <div className="mb-2 flex items-center gap-2 font-semibold text-pietra-black">
                <Wand2 className="h-4 w-4 text-[#5A7C6C]" />
                Visualización referencial
              </div>
              El resultado puede variar según iluminación, medidas, acabado, lote
              del material y condiciones de instalación.
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
