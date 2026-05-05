const categoryBase = "https://raw.githubusercontent.com/DERLIS2025/pietra-website/main/images/categorias";

export type Category = {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  href: string;
};

export const categories: Category[] = [
  {
    id: "cocinas",
    slug: "cocinas",
    name: "Cocinas",
    description: "Mesadas, islas y barras premium para cocinas funcionales y elegantes.",
    image: `${categoryBase}/cocina-6.jpg`,
    href: "/categoria/cocinas",
  },
  {
    id: "banos",
    slug: "banos",
    name: "Baños y Sanitarios",
    description: "Revestimientos, vanitories y piezas a medida para baños modernos.",
    image: `${categoryBase}/baño-3.jpg`,
    href: "/categoria/banos",
  },
  {
    id: "quinchos-exteriores",
    slug: "quinchos-exteriores",
    name: "Quinchos & Exteriores",
    description: "Superficies resistentes para quinchos, galerías y espacios sociales.",
    image: `${categoryBase}/quincho.jpg`,
    href: "/categoria/quinchos-exteriores",
  },
  {
    id: "granitos-exclusivos",
    slug: "granitos-exclusivos",
    name: "Granitos Exclusivos",
    description: "Granitos seleccionados por su resistencia, belleza natural y terminación premium.",
    image: `${categoryBase}/granito.jpg`,
    href: "/categoria/granitos-exclusivos",
  },
  {
    id: "materiales-importados",
    slug: "materiales-importados",
    name: "Materiales Importados",
    description: "Mármoles, sinterizados, cuarzos y piedras importadas para proyectos de alto nivel.",
    image: `${categoryBase}/marmol.jpg`,
    href: "/categoria/materiales-importados",
  },
  {
    id: "materiales-exclusivos",
    slug: "materiales-exclusivos",
    name: "Materiales Exclusivos",
    description: "Selección especial de materiales diferenciales, incluyendo piedra traslúcida.",
    image: `${categoryBase}/closets.jpg`,
    href: "/piedra-traslucida",
  },
];
