"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Camera,
  Download,
  Eye,
  MessageCircle,
  Pencil,
  RotateCcw,
  RotateCw,
  Trash2,
  Upload,
} from "lucide-react";

type ProductForRoomVisualizer = {
  slug: string;
  name: string;
  image: string;
  category: string;
  description?: string;
};

type Point = {
  x: number;
  y: number;
};

type Zone = {
  id: string;
  label: string;
};

type Polygon = {
  id: string;
  zoneId: string;
  zoneLabel: string;
  points: Point[];
};

type UploadedImage = {
  src: string;
  width: number;
  height: number;
};

const WHATSAPP_NUMBER = "595984756158";
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const MAX_WIDTH = 1200;
const MAX_HEIGHT = 800;

const zones: Zone[] = [
  { id: "mesada-principal", label: "Mesada principal" },
  { id: "isla-barra", label: "Isla / Barra" },
  { id: "backsplash", label: "Backsplash" },
  { id: "pared", label: "Pared" },
  { id: "piso", label: "Piso" },
];

function distance(a: Point, b: Point) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function resizeImage(file: File): Promise<UploadedImage> {
  return new Promise((resolve, reject) => {
    if (file.size > MAX_FILE_SIZE) {
      reject(new Error("La imagen supera el límite de 10MB."));
      return;
    }

    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      reject(new Error("Solo se permiten imágenes JPG, PNG o WebP."));
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const image = new Image();

      image.onload = () => {
        const ratio = Math.min(
          MAX_WIDTH / image.width,
          MAX_HEIGHT / image.height,
          1
        );

        const width = Math.round(image.width * ratio);
        const height = Math.round(image.height * ratio);

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("No se pudo preparar la imagen."));
          return;
        }

        ctx.drawImage(image, 0, 0, width, height);

        resolve({
          src: canvas.toDataURL("image/jpeg", 0.9),
          width,
          height,
        });
      };

      image.onerror = () => reject(new Error("No se pudo leer la imagen."));
      image.src = String(reader.result);
    };

    reader.onerror = () => reject(new Error("No se pudo cargar el archivo."));
    reader.readAsDataURL(file);
  });
}

function createImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "anonymous";

    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("No se pudo cargar una imagen."));

    image.src = src;
  });
}

function getCanvasPoint(
  event: React.MouseEvent<HTMLCanvasElement>,
  canvas: HTMLCanvasElement
): Point {
  const rect = canvas.getBoundingClientRect();

  return {
    x: ((event.clientX - rect.left) / rect.width) * canvas.width,
    y: ((event.clientY - rect.top) / rect.height) * canvas.height,
  };
}

function getTouchCanvasPoint(
  event: React.TouchEvent<HTMLCanvasElement>,
  canvas: HTMLCanvasElement
): Point {
  const touch = event.touches[0] ?? event.changedTouches[0];
  const rect = canvas.getBoundingClientRect();

  return {
    x: ((touch.clientX - rect.left) / rect.width) * canvas.width,
    y: ((touch.clientY - rect.top) / rect.height) * canvas.height,
  };
}

export default function RoomVisualizer({
  product,
  allProducts,
}: {
  product: ProductForRoomVisualizer;
  allProducts: ProductForRoomVisualizer[];
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const backgroundImageRef = useRef<HTMLImageElement | null>(null);
  const textureImageRef = useRef<HTMLImageElement | null>(null);

  const [uploadedImage, setUploadedImage] = useState<UploadedImage | null>(null);
  const [selectedMaterial, setSelectedMaterial] =
    useState<ProductForRoomVisualizer>(product);
  const [activeZoneId, setActiveZoneId] = useState(zones[0].id);
  const [opacity, setOpacity] = useState(72);
  const [mode, setMode] = useState<"draw" | "view">("draw");
  const [polygons, setPolygons] = useState<Polygon[]>([]);
  const [draftPoints, setDraftPoints] = useState<Point[]>([]);
  const [undoStack, setUndoStack] = useState<Polygon[][]>([]);
  const [redoStack, setRedoStack] = useState<Polygon[][]>([]);
  const [message, setMessage] = useState("");
  const [showTip, setShowTip] = useState(true);

  const activeZone = useMemo(
    () => zones.find((zone) => zone.id === activeZoneId) ?? zones[0],
    [activeZoneId]
  );

  const pushHistory = useCallback(
    (current: Polygon[]) => {
      setUndoStack((stack) => [...stack, current]);
      setRedoStack([]);
    },
    []
  );

  const drawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const backgroundImage = backgroundImageRef.current;
    const textureImage = textureImageRef.current;

    if (!canvas || !backgroundImage) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    if (textureImage) {
      const patternCanvas = document.createElement("canvas");
      patternCanvas.width = 260;
      patternCanvas.height = 260;

      const patternCtx = patternCanvas.getContext("2d");

      if (patternCtx) {
        patternCtx.drawImage(textureImage, 0, 0, 260, 260);

        const pattern = ctx.createPattern(patternCanvas, "repeat");

        if (pattern) {
          polygons.forEach((polygon) => {
            if (polygon.points.length < 3) return;

            ctx.save();
            ctx.beginPath();

            polygon.points.forEach((point, index) => {
              if (index === 0) ctx.moveTo(point.x, point.y);
              else ctx.lineTo(point.x, point.y);
            });

            ctx.closePath();
            ctx.clip();

            ctx.globalAlpha = opacity / 100;
            ctx.fillStyle = pattern;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.globalAlpha = 1;
            ctx.fillStyle = "rgba(255,255,255,0.10)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.restore();

            ctx.save();
            ctx.beginPath();

            polygon.points.forEach((point, index) => {
              if (index === 0) ctx.moveTo(point.x, point.y);
              else ctx.lineTo(point.x, point.y);
            });

            ctx.closePath();
            ctx.strokeStyle = "#5A7C6C";
            ctx.lineWidth = 4;
            ctx.stroke();

            const labelPoint = polygon.points[0];
            ctx.fillStyle = "rgba(0,0,0,0.62)";
            ctx.roundRect(labelPoint.x, labelPoint.y - 34, 170, 28, 14);
            ctx.fill();

            ctx.fillStyle = "#ffffff";
            ctx.font = "bold 13px Inter, Arial";
            ctx.fillText(polygon.zoneLabel, labelPoint.x + 12, labelPoint.y - 15);

            ctx.restore();
          });
        }
      }
    }

    if (mode === "draw" && draftPoints.length > 0) {
      ctx.save();

      ctx.strokeStyle = "#5A7C6C";
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 8]);

      ctx.beginPath();
      draftPoints.forEach((point, index) => {
        if (index === 0) ctx.moveTo(point.x, point.y);
        else ctx.lineTo(point.x, point.y);
      });
      ctx.stroke();

      draftPoints.forEach((point, index) => {
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.arc(point.x, point.y, index === 0 ? 8 : 6, 0, Math.PI * 2);
        ctx.fillStyle = index === 0 ? "#D94A38" : "#5A7C6C";
        ctx.fill();

        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 11px Inter, Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(String(index + 1), point.x, point.y);
      });

      ctx.restore();
    }
  }, [draftPoints, mode, opacity, polygons]);

  useEffect(() => {
    if (!uploadedImage) return;

    createImage(uploadedImage.src)
      .then((image) => {
        backgroundImageRef.current = image;

        const canvas = canvasRef.current;
        if (canvas) {
          canvas.width = uploadedImage.width;
          canvas.height = uploadedImage.height;
        }

        drawCanvas();
      })
      .catch(() => setMessage("No se pudo cargar la foto."));
  }, [drawCanvas, uploadedImage]);

  useEffect(() => {
    createImage(selectedMaterial.image)
      .then((image) => {
        textureImageRef.current = image;
        drawCanvas();
      })
      .catch(() => setMessage("No se pudo cargar la textura del material."));
  }, [drawCanvas, selectedMaterial]);

  useEffect(() => {
    drawCanvas();
  }, [drawCanvas]);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const image = await resizeImage(file);
      setUploadedImage(image);
      setPolygons([]);
      setDraftPoints([]);
      setUndoStack([]);
      setRedoStack([]);
      setMessage("");
      setShowTip(true);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "No se pudo cargar la imagen.");
    }
  };

  const closeDraft = () => {
    if (draftPoints.length < 3) {
      setMessage("Marcá al menos 3 puntos para cerrar una zona.");
      return;
    }

    const nextPolygon: Polygon = {
      id: `${activeZone.id}-${Date.now()}`,
      zoneId: activeZone.id,
      zoneLabel: activeZone.label,
      points: draftPoints,
    };

    pushHistory(polygons);
    setPolygons((current) => [...current, nextPolygon]);
    setDraftPoints([]);
    setMessage("");
  };

  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!uploadedImage || mode === "view") return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const point = getCanvasPoint(event, canvas);

    if (draftPoints.length >= 3 && distance(point, draftPoints[0]) < 18) {
      closeDraft();
      return;
    }

    setDraftPoints((points) => [...points, point]);
  };

  const handleCanvasDoubleClick = () => {
    if (!uploadedImage || mode === "view") return;
    closeDraft();
  };

  const handleCanvasTouchEnd = (event: React.TouchEvent<HTMLCanvasElement>) => {
    if (!uploadedImage || mode === "view") return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    event.preventDefault();

    const point = getTouchCanvasPoint(event, canvas);

    if (draftPoints.length >= 3 && distance(point, draftPoints[0]) < 22) {
      closeDraft();
      return;
    }

    setDraftPoints((points) => [...points, point]);
  };

  const undo = () => {
    if (draftPoints.length > 0) {
      setDraftPoints((points) => points.slice(0, -1));
      return;
    }

    const previous = undoStack.at(-1);
    if (!previous) return;

    setRedoStack((stack) => [...stack, polygons]);
    setUndoStack((stack) => stack.slice(0, -1));
    setPolygons(previous);
  };

  const redo = () => {
    const next = redoStack.at(-1);
    if (!next) return;

    setUndoStack((stack) => [...stack, polygons]);
    setRedoStack((stack) => stack.slice(0, -1));
    setPolygons(next);
  };

  const deleteActiveZone = () => {
    const next = polygons.filter((polygon) => polygon.zoneId !== activeZone.id);

    if (next.length === polygons.length && draftPoints.length === 0) return;

    pushHistory(polygons);
    setPolygons(next);
    setDraftPoints([]);
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = `pietra-visualizacion-${selectedMaterial.slug}.png`;
    link.click();
  };

  const shareWhatsApp = () => {
    const text = `Hola, quiero cotizar ${selectedMaterial.name}. Ya preparé una visualización referencial de mi espacio. ¿Me pueden asesorar?`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_18px_55px_rgba(20,20,20,0.08)] ring-1 ring-black/5">
      <div className="bg-[#5A7C6C] px-5 py-5 text-white sm:px-7 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/75">
          Room Visualizer
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          Probá en tu espacio real
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-white/85">
          Subí una foto de tu cocina, baño o quincho, marcá la superficie y aplicá el material.
        </p>
      </div>

      <div className="grid gap-0 lg:grid-cols-[360px_1fr]">
        <aside className="space-y-5 border-b border-black/10 bg-[#f7f7f2] p-5 sm:p-6 lg:border-b-0 lg:border-r">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pietra-green">
              1. Tu espacio
            </p>

            <label className="mt-3 flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-dashed border-black/20 bg-white px-4 py-4 text-sm font-semibold text-pietra-black transition hover:border-[#5A7C6C] hover:text-[#5A7C6C]">
              <Upload className="h-4 w-4" />
              Seleccionar foto
              <input
                type="file"
                accept="image/png,image/jpeg,image/webp"
                className="hidden"
                onChange={handleUpload}
              />
            </label>

            {message ? (
              <p className="mt-3 rounded-xl bg-red-50 px-3 py-2 text-xs text-red-700">
                {message}
              </p>
            ) : null}
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pietra-green">
              2. ¿Dónde lo querés?
            </p>

            <div className="mt-3 grid grid-cols-2 gap-2">
              {zones.map((zone) => {
                const isActive = zone.id === activeZoneId;

                return (
                  <button
                    key={zone.id}
                    type="button"
                    onClick={() => {
                      setActiveZoneId(zone.id);
                      setDraftPoints([]);
                    }}
                    className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
                      isActive
                        ? "bg-[#5A7C6C] text-white"
                        : "border border-black/10 bg-white text-pietra-black"
                    }`}
                  >
                    {zone.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pietra-green">
              3. Material
            </p>

            <div className="mt-3 max-h-[220px] space-y-2 overflow-y-auto pr-1">
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
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pietra-green">
              4. Ajustes
            </p>

            <div className="mt-3 rounded-2xl bg-white p-4">
              <div className="flex items-center justify-between text-sm">
                <span>Opacidad</span>
                <span className="font-semibold">{opacity}%</span>
              </div>

              <input
                type="range"
                min="30"
                max="100"
                value={opacity}
                onChange={(event) => setOpacity(Number(event.target.value))}
                className="mt-3 w-full accent-[#5A7C6C]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setMode((current) => (current === "draw" ? "view" : "draw"))}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-4 py-3 text-xs font-semibold"
            >
              {mode === "draw" ? <Eye className="h-4 w-4" /> : <Pencil className="h-4 w-4" />}
              {mode === "draw" ? "Vista" : "Dibujar"}
            </button>

            <button
              type="button"
              onClick={deleteActiveZone}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-4 py-3 text-xs font-semibold"
            >
              <Trash2 className="h-4 w-4" />
              Borrar
            </button>

            <button
              type="button"
              onClick={undo}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-4 py-3 text-xs font-semibold"
            >
              <RotateCcw className="h-4 w-4" />
              Deshacer
            </button>

            <button
              type="button"
              onClick={redo}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-4 py-3 text-xs font-semibold"
            >
              <RotateCw className="h-4 w-4" />
              Rehacer
            </button>
          </div>

          <div className="grid gap-2">
            <button
              type="button"
              onClick={downloadImage}
              disabled={!uploadedImage}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-pietra-black px-5 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Download className="h-4 w-4" />
              Descargar imagen
            </button>

            <button
              type="button"
              onClick={shareWhatsApp}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#5A7C6C] px-5 py-3 text-sm font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" />
              Compartir por WhatsApp
            </button>
          </div>
        </aside>

        <div className="bg-white p-4 sm:p-6 lg:p-8">
          <div className="relative overflow-hidden rounded-[26px] bg-[#f1f1ea]">
            {!uploadedImage ? (
              <div className="grid min-h-[360px] place-items-center px-6 py-16 text-center sm:min-h-[520px]">
                <div>
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-white shadow-sm">
                    <Camera className="h-7 w-7 text-[#5A7C6C]" />
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold text-pietra-black">
                    Subí una foto de tu espacio
                  </h3>

                  <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-pietra-muted">
                    Luego marcá los bordes de la mesada, pared o piso para aplicar la textura del material.
                  </p>
                </div>
              </div>
            ) : (
              <>
                {showTip ? (
                  <div className="absolute left-4 right-4 top-4 z-10 rounded-2xl bg-black/65 p-4 text-sm leading-6 text-white backdrop-blur-md sm:left-6 sm:right-auto sm:max-w-md">
                    Hacé clic en los bordes de la superficie. Con 3 o más puntos, hacé doble clic o tocá cerca del primer punto para cerrar la zona.
                    <button
                      type="button"
                      onClick={() => setShowTip(false)}
                      className="ml-3 font-semibold text-[#BFD6CB]"
                    >
                      Entendido
                    </button>
                  </div>
                ) : null}

                <canvas
                  ref={canvasRef}
                  onClick={handleCanvasClick}
                  onDoubleClick={handleCanvasDoubleClick}
                  onTouchEnd={handleCanvasTouchEnd}
                  className="block max-h-[78vh] w-full touch-none cursor-crosshair object-contain"
                />
              </>
            )}
          </div>

          <p className="mt-4 text-xs leading-5 text-pietra-muted">
            La simulación es referencial. El resultado final puede variar según iluminación, medidas, terminación, lote del material y condiciones de instalación.
          </p>
        </div>
      </div>
    </div>
  );
}
