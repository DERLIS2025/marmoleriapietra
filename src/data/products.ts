export type Product = {
  slug: string;
  name: string;
  category: string;
  price: string;
  badge?: string;
  rating?: number;
  tone: string;
  description: string;
};

export const featuredProducts: Product[] = [
  { slug: "mesada-granito-negro", name: "Mesada de granito negro", category: "Mesadas", price: "Consultar", badge: "Más pedido", tone: "from-zinc-950 via-stone-700 to-zinc-300", description: "Superficie resistente con terminación pulida para cocinas modernas." },
  { slug: "mesada-marmol-blanco", name: "Mesada de mármol blanco", category: "Mármol", price: "Consultar", badge: "Premium", tone: "from-white via-stone-100 to-stone-300", description: "Vetas suaves y presencia elegante para ambientes luminosos." },
  { slug: "revestimiento-bano", name: "Revestimiento para baño", category: "Baños", price: "Consultar", badge: "Nuevo", tone: "from-stone-200 via-slate-100 to-pietra-green/40", description: "Placas a medida para baños cálidos, resistentes y fáciles de mantener." },
  { slug: "isla-cocina-cuarzo", name: "Isla de cocina en cuarzo", category: "Cuarzo", price: "Consultar", tone: "from-pietra-warm via-white to-pietra-beige", description: "Islas funcionales con gran protagonismo visual." },
  { slug: "escalera-marmol", name: "Escalera en mármol", category: "Escaleras", price: "Consultar", badge: "Premium", tone: "from-neutral-100 via-stone-300 to-neutral-500", description: "Peldaños precisos para obras residenciales y comerciales." },
  { slug: "bacha-integrada", name: "Bacha integrada", category: "Cocinas", price: "Consultar", tone: "from-stone-50 via-stone-200 to-stone-400", description: "Diseño continuo y minimalista para mesadas de alto impacto." },
  { slug: "mesa-personalizada", name: "Mesa personalizada", category: "Muebles", price: "Consultar", badge: "A medida", tone: "from-pietra-beige via-stone-300 to-zinc-600", description: "Piezas exclusivas para hogares, oficinas y espacios comerciales." },
  { slug: "revestimiento-exterior", name: "Revestimiento exterior", category: "Exteriores", price: "Consultar", tone: "from-stone-500 via-stone-300 to-pietra-green", description: "Texturas naturales para fachadas y galerías." },
];

export const popularProducts: Product[] = [
  { slug: "granito-negro-absoluto", name: "Granito negro absoluto", category: "Granito", price: "Consultar precio", rating: 5, tone: "from-black via-zinc-800 to-zinc-500", description: "Intenso, sobrio y de gran durabilidad." },
  { slug: "cuarzo-blanco", name: "Cuarzo blanco", category: "Cuarzo", price: "Consultar precio", rating: 5, tone: "from-white via-stone-100 to-pietra-beige", description: "Ideal para cocinas claras y superficies higiénicas." },
  { slug: "marmol-travertino", name: "Mármol travertino", category: "Mármol", price: "Consultar precio", rating: 5, tone: "from-amber-100 via-pietra-beige to-stone-400", description: "Textura clásica para ambientes cálidos." },
  { slug: "granito-gris", name: "Granito gris", category: "Granito", price: "Consultar precio", rating: 4, tone: "from-zinc-200 via-zinc-400 to-zinc-700", description: "Versátil para interiores, quinchos y obras." },
  { slug: "revestimiento-pared", name: "Revestimiento de pared", category: "Revestimientos", price: "Consultar precio", rating: 5, tone: "from-pietra-soft via-white to-pietra-green/50", description: "Paneles elegantes para destacar muros." },
  { slug: "mesada-quincho", name: "Mesada para quincho", category: "Mesadas", price: "Consultar precio", rating: 5, tone: "from-stone-700 via-stone-400 to-pietra-beige", description: "Resistente para uso social e intensivo." },
];

export const bestItems: Product[] = [
  { slug: "granito-negro", name: "Granito negro", category: "Material", price: "Consultar", tone: "from-black via-zinc-700 to-zinc-400", description: "Elegancia oscura para mesadas y barras." },
  { slug: "marmol-blanco", name: "Mármol blanco", category: "Material", price: "Consultar", tone: "from-white via-stone-100 to-stone-300", description: "Vetas naturales para proyectos premium." },
  { slug: "cuarzo-claro", name: "Cuarzo claro", category: "Material", price: "Consultar", tone: "from-white via-pietra-warm to-pietra-beige", description: "Limpio, moderno y fácil de combinar." },
  { slug: "revestimiento-premium", name: "Revestimiento premium", category: "Ambientes", price: "Consultar", tone: "from-stone-100 via-pietra-green/30 to-stone-500", description: "Terminaciones continuas para muros destacados." },
  { slug: "mesada-cocina", name: "Mesada de cocina", category: "Producto", price: "Consultar", tone: "from-pietra-beige via-white to-zinc-300", description: "Diseño a medida con instalación profesional." },
  { slug: "proyecto-medida", name: "Proyecto a medida", category: "Servicio", price: "Consultar", tone: "from-pietra-green via-pietra-beige to-pietra-warm", description: "Acompañamiento para hogares, empresas y obras." },
];

export const allProducts = [...featuredProducts, ...popularProducts, ...bestItems];
