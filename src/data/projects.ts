const cocinaBase = "https://raw.githubusercontent.com/DERLIS2025/pietra-website/main/images/trabajos/cocina";
const banoBase = "https://raw.githubusercontent.com/DERLIS2025/pietra-website/main/images/trabajos/ba%C3%B1os";
const quinchoBase = "https://raw.githubusercontent.com/DERLIS2025/pietra-website/main/images/trabajos/quinchos";

export type Project = {
  id: string;
  title: string;
  category: "Cocinas" | "Baños" | "Quinchos" | "Destacado";
  image: string;
  gallery: string[];
  description: string;
  whatsappMessage: string;
};

export const projectBenefits = [
  "Materiales de primera calidad importados",
  "Acabados profesionales garantizados",
  "Asesoramiento técnico especializado",
  "Instalación y logística incluida",
];

export const featuredProject: Project = {
  id: "isla-cocina-efecto-cascada",
  title: "Isla de Cocina con Caída de Mesada al Piso (Efecto Cascada)",
  category: "Destacado",
  image: `${cocinaBase}/1-trabajo-cocina.jpg`,
  gallery: [`${cocinaBase}/1-trabajo-cocina.jpg`, `${cocinaBase}/2-trabajo-cocina.jpg`, `${cocinaBase}/3-trabajo-cocina.jpg`, `${cocinaBase}/4-trabajo-cocina.jpg`],
  description: "Ponemos empeño para que cada trabajo realizado se convierta en una creación única.",
  whatsappMessage: "Hola, quiero consultar por un trabajo similar a Isla de Cocina con Caída de Mesada al Piso (Efecto Cascada).",
};

export const projects: Project[] = [
  featuredProject,
  ...Array.from({ length: 11 }, (_, index) => ({
    id: `cocina-${index + 1}`,
    title: `Cocina ${index + 1}`,
    category: "Cocinas" as const,
    image: `${cocinaBase}/${index + 1}-trabajo-cocina.jpg`,
    gallery: [`${cocinaBase}/${index + 1}-trabajo-cocina.jpg`],
    description: "Proyecto de cocina a medida con materiales seleccionados y terminaciones profesionales.",
    whatsappMessage: `Hola, quiero consultar por un trabajo similar a Cocina ${index + 1}.`,
  })),
  ...Array.from({ length: 12 }, (_, index) => ({
    id: `bano-${index + 1}`,
    title: `Baño ${index + 1}`,
    category: "Baños" as const,
    image: `${banoBase}/${index + 1}-trabajo-ba%C3%B1o.jpg`,
    gallery: [`${banoBase}/${index + 1}-trabajo-ba%C3%B1o.jpg`],
    description: "Proyecto de baño o sanitario con revestimientos y piezas a medida en piedra.",
    whatsappMessage: `Hola, quiero consultar por un trabajo similar a Baño ${index + 1}.`,
  })),
  ...["IMG-20260224-WA0014.jpg", "IMG-20260224-WA0055.jpg", "IMG-20260224-WA0056.jpg", "IMG-20260224-WA0088%20-%20copia.jpg", "IMG-20260224-WA0089.jpg", "IMG-20260224-WA0090.jpg"].map((file, index) => ({
    id: `quincho-${index + 1}`,
    title: `Quincho ${index + 1}`,
    category: "Quinchos" as const,
    image: `${quinchoBase}/${file}`,
    gallery: [`${quinchoBase}/${file}`],
    description: "Proyecto de quincho o exterior con superficies resistentes para uso social.",
    whatsappMessage: `Hola, quiero consultar por un trabajo similar a Quincho ${index + 1}.`,
  })),
];
