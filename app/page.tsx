"use client";

import { useRef } from "react";
import { SupportHeader } from "@/components/support-header";
import { HeroSection } from "@/components/hero-section";
import { CategoryCards } from "@/components/category-cards";
import { PopularArticles } from "@/components/popular-articles";
import { StillStuckCTA } from "@/components/still-stuck-cta";
import { CommunitySection } from "@/components/community-section";
import { SupportFooter } from "@/components/support-footer";
import { FinnChatWidget } from "@/components/finn-chat-widget";

export default function SupportCenterPage() {
  const chatWidgetRef = useRef<{ open: () => void }>(null);

  const handleAskFinn = () => {
    // Find and click the chat widget button
    const chatButton = document.querySelector('[data-finn-chat-button]') as HTMLButtonElement;
    if (chatButton) {
      chatButton.click();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SupportHeader />
      <main className="flex-1">
        <HeroSection />
        <CategoryCards />
        <PopularArticles />
        <StillStuckCTA onAskFinn={handleAskFinn} />
        <CommunitySection />
      </main>
      <SupportFooter />
      <FinnChatWidget />
    </div>
  );
}
