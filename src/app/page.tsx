import { BestItems } from "@/components/BestItems";
import { BlogSection } from "@/components/BlogSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { CommercialSplitSection } from "@/components/CommercialSplitSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { Hero } from "@/components/Hero";
import { PopularProducts } from "@/components/PopularProducts";
import { PromoBanners } from "@/components/PromoBanners";
import { TrustBadges } from "@/components/TrustBadges";
import { TrustLogos } from "@/components/TrustLogos";
import BrushDivider from "@/components/BrushDivider";

export default function Home() {
  return (
    <main>
      <Hero />
      <BrushDivider />
      <TrustBadges />
      <CategoriesSection />
      <FeaturedProducts />
      <PromoBanners />
      <PopularProducts />
      <CommercialSplitSection />
      <BestItems />
      <TrustLogos />
      <BlogSection />
    </main>
  );
}