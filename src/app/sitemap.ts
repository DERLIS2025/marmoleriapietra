import type { MetadataRoute } from "next";
import { allProducts } from "@/data/products";
import { categories } from "@/data/categories";

const baseUrl = "https://marmoleriapietra.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/productos", "/ambientes", "/trabajos", "/piedra-traslucida", "/nosotros", "/contacto"];
  return [
    ...staticRoutes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date("2026-03-17"), changeFrequency: "weekly" as const, priority: route === "" ? 1 : 0.8 })),
    ...allProducts.map((product) => ({ url: `${baseUrl}/producto/${product.slug}`, lastModified: new Date("2026-03-17"), changeFrequency: "monthly" as const, priority: 0.7 })),
    ...categories.map((category) => ({ url: `${baseUrl}${category.href}`, lastModified: new Date("2026-03-17"), changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
