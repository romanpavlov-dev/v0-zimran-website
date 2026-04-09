import { SupportHeader } from "@/components/support-header";
import { HeroSection } from "@/components/hero-section";
import { CategoryCards } from "@/components/category-cards";
import { PopularArticles } from "@/components/popular-articles";
import { StillStuckCTA } from "@/components/still-stuck-cta";
import { SupportFooter } from "@/components/support-footer";

export default function SupportCenterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SupportHeader />
      <main className="flex-1">
        <HeroSection />
        <CategoryCards />
        <PopularArticles />
        <StillStuckCTA />
      </main>
      <SupportFooter />
    </div>
  );
}
