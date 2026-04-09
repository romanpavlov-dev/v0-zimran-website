"use client";

import Link from "next/link";
import { Rocket, CreditCard, Settings, HelpCircle, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { MiniMascot } from "@/components/finelo-mascot";

const categories = [
  {
    title: "Get Started",
    description: "New to Finelo? Learn the basics and start your journey.",
    icon: Rocket,
    articles: 12,
    color: "#58CC02",
    bgColor: "#DCFFDB",
    mascotVariant: "rocket" as const,
    href: "/category/get-started",
  },
  {
    title: "Subscription & Billing",
    description: "Manage your plan, payments, and invoices.",
    icon: CreditCard,
    articles: 8,
    color: "#FFB347",
    bgColor: "#FFF3E0",
    mascotVariant: "coin" as const,
    href: "/category/billing",
  },
  {
    title: "Manage Account",
    description: "Update your profile, security settings, and preferences.",
    icon: Settings,
    articles: 15,
    color: "#1CB0F6",
    bgColor: "#E3F6FF",
    mascotVariant: "settings" as const,
    href: "/category/account",
  },
  {
    title: "Troubleshooting",
    description: "Having issues? Find solutions to common problems.",
    icon: HelpCircle,
    articles: 20,
    color: "#FF4B4B",
    bgColor: "#FFE5E5",
    mascotVariant: "help" as const,
    href: "/category/troubleshooting",
  },
];

export function CategoryCards() {
  return (
    <section id="knowledge-base" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Knowledge Base</h2>
          <Link href="/articles" className="text-[#1E6FFF] hover:underline font-medium">
            View all articles
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link key={category.title} href={category.href}>
                <Card className="group relative p-6 h-full bg-card border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden">
                  <div className="flex items-start gap-4">
                    <div 
                      className="flex items-center justify-center w-14 h-14 rounded-2xl shrink-0"
                      style={{ backgroundColor: category.bgColor }}
                    >
                      <IconComponent className="w-7 h-7" style={{ color: category.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-[#1E6FFF] transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {category.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <span 
                          className="text-xs font-semibold px-2 py-1 rounded-full"
                          style={{ backgroundColor: category.bgColor, color: category.color }}
                        >
                          {category.articles} articles
                        </span>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-[#1E6FFF] group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Mini mascot in corner */}
                  <div className="absolute -bottom-2 -right-2 opacity-20 group-hover:opacity-40 transition-opacity">
                    <MiniMascot variant={category.mascotVariant} className="w-20 h-20" />
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
