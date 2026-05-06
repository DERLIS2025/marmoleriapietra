const catalogBase = "https://raw.githubusercontent.com/DERLIS2025/pietra-website/main/images/catalogo";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: "Granito" | "Sinterizado" | "Cuarzo" | "Mármol" | "Especial";
  shortDescription: string;
  description: string;
  image: string;
  gallery: string[];
  badge?: string;
  featured: boolean;
  popular: boolean;
  whatsappMessage: string;
  applications: string[];
  finish?: string;
  seoTitle: string;
  seoDescription: string;
};

type ProductSeed = Omit<Product, "image" | "gallery" | "whatsappMessage" | "seoTitle" | "seoDescription"> & { file: string };

const descriptions = {
  granito: "Material resistente y versátil para mesadas, cocinas, quinchos, revestimientos y superficies de uso diario.",
  cuarzo: "Superficie de ingeniería de estética uniforme, ideal para proyectos modernos que buscan color, higiene y fácil mantenimiento.",
  marmol: "Piedra natural elegante y atemporal para ambientes interiores, baños, revestimientos y detalles premium.",
};

const productSeeds: ProductSeed[] = [
  { id: "granito-verde-ubatuba", slug: "granito-verde-ubatuba", name: "Verde Ubatuba", category: "Granito", shortDescription: "Granito oscuro con reflejos verdes para espacios sobrios y premium.", description: descriptions.granito, file: "granito-verde-ubatuba.jpg", badge: "Granito", featured: true, popular: true, applications: ["Mesadas de cocina", "Quinchos", "Barras", "Revestimientos"], finish: "Pulido" },
  { id: "granito-negro-san-gabriel", slug: "granito-negro-san-gabriel", name: "Negro San Gabriel", category: "Granito", shortDescription: "Granito negro elegante, muy elegido para cocinas contemporáneas.", description: descriptions.granito, file: "granito-negro-san-gabriel.jpg", badge: "Más pedido", featured: true, popular: true, applications: ["Mesadas", "Islas", "Barras", "Escaleras"], finish: "Pulido" },
  { id: "granito-cafe-imperial", slug: "granito-cafe-imperial", name: "Café Imperial", category: "Granito", shortDescription: "Tono cálido e intenso para proyectos con personalidad.", description: descriptions.granito, file: "granito-cafe-imperial.jpg", featured: true, popular: false, applications: ["Cocinas", "Baños", "Mesas", "Revestimientos"], finish: "Pulido" },
  { id: "granito-gris-corumba", slug: "granito-gris-corumba", name: "Gris Corumba", category: "Granito", shortDescription: "Granito gris funcional para obras, quinchos y mesadas resistentes.", description: descriptions.granito, file: "granito-gris-corumba.jpg", featured: false, popular: true, applications: ["Quinchos", "Mesadas", "Exteriores", "Lavaderos"], finish: "Pulido" },
  { id: "granito-blanco-dallas", slug: "granito-blanco-dallas", name: "Blanco Dallas", category: "Granito", shortDescription: "Base clara con movimiento natural para cocinas luminosas.", description: descriptions.granito, file: "granito-blanco-dallas.jpg", featured: true, popular: true, applications: ["Cocinas", "Islas", "Baños", "Revestimientos"], finish: "Pulido" },
  { id: "granito-blanco-itaunas", slug: "granito-blanco-itaunas", name: "Blanco Itaúnas", category: "Granito", shortDescription: "Granito blanco natural para espacios limpios y modernos.", description: descriptions.granito, file: "granito-blanco-itaunas.jpg", featured: false, popular: true, applications: ["Mesadas", "Baños", "Cocinas", "Muebles"], finish: "Pulido" },
  { id: "granito-blanco-di-capri", slug: "granito-blanco-di-capri", name: "Blanco Di Capri", category: "Granito", shortDescription: "Granito claro de estética premium para proyectos elegantes.", description: descriptions.granito, file: "granito-blanco-di-capri.jpg", badge: "Premium", featured: true, popular: false, applications: ["Mesadas", "Islas", "Baños", "Revestimientos"], finish: "Pulido" },
  { id: "neolith-calacatta", slug: "neolith-calacatta", name: "Neolith Calacatta", category: "Sinterizado", shortDescription: "Sinterizado importado con inspiración Calacatta para alto diseño.", description: "Material sinterizado importado, resistente y de estética sofisticada para superficies premium.", file: "neolith-calacatta.jpg", badge: "Importado", featured: true, popular: true, applications: ["Cocinas premium", "Islas", "Revestimientos", "Baños"], finish: "Pulido / Satinado" },
  { id: "cuarzo-blanco-estelar", slug: "cuarzo-blanco-estelar", name: "Cuarzo Blanco Estelar", category: "Cuarzo", shortDescription: "Cuarzo claro y luminoso para mesadas modernas.", description: descriptions.cuarzo, file: "cuarzo-blanco-estelar.jpg", badge: "Cuarzo", featured: true, popular: true, applications: ["Mesadas de cocina", "Islas", "Baños", "Muebles"], finish: "Pulido" },
  { id: "cuarzo-rojo", slug: "cuarzo-rojo", name: "Cuarzo Rojo", category: "Cuarzo", shortDescription: "Color protagonista para barras, detalles y proyectos comerciales.", description: descriptions.cuarzo, file: "cuarzo-rojo.jpg", featured: false, popular: false, applications: ["Barras", "Locales", "Muebles", "Detalles decorativos"], finish: "Pulido" },
  { id: "cuarzo-beige", slug: "cuarzo-beige", name: "Cuarzo Beige", category: "Cuarzo", shortDescription: "Tono neutro y cálido para ambientes atemporales.", description: descriptions.cuarzo, file: "cuarzo-beige.jpg", featured: false, popular: true, applications: ["Cocinas", "Baños", "Mesadas", "Revestimientos"], finish: "Pulido" },
  { id: "cuarzo-gris", slug: "cuarzo-gris", name: "Cuarzo Gris", category: "Cuarzo", shortDescription: "Cuarzo sobrio para interiores modernos y de fácil combinación.", description: descriptions.cuarzo, file: "cuarzo-gris.jpg", featured: false, popular: true, applications: ["Mesadas", "Islas", "Baños", "Oficinas"], finish: "Pulido" },
  { id: "cuarzo-negro", slug: "cuarzo-negro", name: "Cuarzo Negro", category: "Cuarzo", shortDescription: "Superficie oscura para diseños elegantes y contemporáneos.", description: descriptions.cuarzo, file: "cuarzo-negro.jpg", featured: true, popular: true, applications: ["Cocinas", "Barras", "Locales", "Muebles"], finish: "Pulido" },
  { id: "cuarzo-verde-claro", slug: "cuarzo-verde-claro", name: "Cuarzo Verde Claro", category: "Cuarzo", shortDescription: "Color suave para proyectos distintivos y frescos.", description: descriptions.cuarzo, file: "cuarzo-verde-claro.jpg", featured: false, popular: true, applications: ["Baños", "Muebles", "Detalles", "Revestimientos"], finish: "Pulido" },
  { id: "marron-emperador", slug: "marron-emperador", name: "Marrón Emperador", category: "Mármol", shortDescription: "Mármol cálido e intenso para ambientes de lujo.", description: descriptions.marmol, file: "marron-emperador.jpg", badge: "Mármol", featured: true, popular: true, applications: ["Baños", "Revestimientos", "Mesas", "Detalles"], finish: "Pulido" },
  { id: "marmol-travertino", slug: "marmol-travertino", name: "Mármol Travertino", category: "Mármol", shortDescription: "Textura clásica y natural para proyectos cálidos.", description: descriptions.marmol, file: "marmol-travertino.jpg", featured: false, popular: true, applications: ["Revestimientos", "Baños", "Escaleras", "Fachadas interiores"], finish: "Pulido / Mate" },
  { id: "marmol-blanco", slug: "marmol-blanco", name: "Mármol Blanco", category: "Mármol", shortDescription: "Elegancia clara y vetas naturales para espacios premium.", description: descriptions.marmol, file: "marmol-blanco.jpg", badge: "Premium", featured: true, popular: false, applications: ["Baños", "Mesadas", "Revestimientos", "Muebles"], finish: "Pulido" },
  { id: "piedra-traslucida", slug: "piedra-traslucida", name: "Piedra Traslúcida", category: "Especial", shortDescription: "Material exclusivo con efecto retroiluminado para ambientes únicos.", description: "La Piedra Traslúcida permite el paso de la luz y crea efectos visuales únicos. Cada pieza tiene vetas naturales irrepetibles y está pensada para proyectos de alto impacto.", file: "piedra-traslucida.jpg", badge: "Especial de la Casa", featured: true, popular: true, applications: ["Muros retroiluminados", "Barras", "Baños de lujo", "Recepciones", "Decoración"], finish: "Pulido, Mate, Leather" },
];

export const products: Product[] = productSeeds.map((product) => ({
  ...product,
  image: `${catalogBase}/${product.file}`,
  gallery: [`${catalogBase}/${product.file}`],
  whatsappMessage: `Hola, quiero cotizar ${product.name} para mi proyecto.`,
  seoTitle: `${product.name} | Marmolería Pietra Paraguay`,
  seoDescription: `Cotizá ${product.name} en Marmolería Pietra. ${product.shortDescription}`,
}));

export const featuredProducts = products.filter((product) => product.featured);
export const popularProducts = products.filter((product) => product.popular);
export const bestItems = products.slice(0, 6);
export const allProducts = products;
