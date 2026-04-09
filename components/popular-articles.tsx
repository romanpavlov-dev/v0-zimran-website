"use client";

import Link from "next/link";
import { FileText, ChevronRight } from "lucide-react";

const popularArticles = [
  {
    title: "How do I unsubscribe?",
    category: "Subscription & Billing",
    categoryColor: "#FFB347",
    updatedAt: "Tue, 10 Feb at 4:00 PM",
    href: "/article/unsubscribe",
  },
  {
    title: "How can I apply for a refund?",
    category: "Subscription & Billing",
    categoryColor: "#FFB347",
    updatedAt: "Fri, 20 Feb at 2:42 PM",
    href: "/article/refund",
  },
  {
    title: "How do I log in?",
    category: "Get Started",
    categoryColor: "#58CC02",
    updatedAt: "Tue, 3 Feb at 6:08 PM",
    href: "/article/login",
  },
  {
    title: "What is Finelo?",
    category: "Get Started",
    categoryColor: "#58CC02",
    updatedAt: "Sun, 30 Nov, 2025 at 7:39 PM",
    href: "/article/what-is-finelo",
  },
  {
    title: "How to change my password?",
    category: "Manage Account",
    categoryColor: "#1CB0F6",
    updatedAt: "Mon, 15 Mar at 10:30 AM",
    href: "/article/change-password",
  },
  {
    title: "Why is my account locked?",
    category: "Troubleshooting",
    categoryColor: "#FF4B4B",
    updatedAt: "Wed, 25 Feb at 3:15 PM",
    href: "/article/account-locked",
  },
];

export function PopularArticles() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Most Popular Articles</h2>
          <Link 
            href="/articles" 
            className="text-[#1E6FFF] hover:underline font-medium flex items-center gap-1"
          >
            View all articles <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {popularArticles.map((article) => (
            <Link 
              key={article.title} 
              href={article.href}
              className="group flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#E8F1FF] shrink-0">
                <FileText className="w-5 h-5 text-[#1E6FFF]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground group-hover:text-[#1E6FFF] transition-colors truncate">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2 mt-1 flex-wrap">
                  <span 
                    className="text-xs font-medium px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: `${article.categoryColor}20`, color: article.categoryColor }}
                  >
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Modified on {article.updatedAt}
                  </span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-[#1E6FFF] group-hover:translate-x-1 transition-all shrink-0 mt-2" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
