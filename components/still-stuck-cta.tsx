"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FineloMascot } from "@/components/finelo-mascot";
import { BookOpen, MessageCircle } from "lucide-react";

export function StillStuckCTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#E8F1FF] to-[#F4F6FA]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-3xl mx-auto text-center md:text-left">
          <div className="shrink-0">
            <FineloMascot character="bear" mood="thinking" size="lg" />
          </div>
          
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Still stuck?
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              {"Don't worry, we're here to help! Browse our articles for more answers or submit a ticket and our friendly team will get back to you soon."}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button 
                asChild
                variant="outline" 
                className="rounded-full px-6 py-6 text-base font-semibold border-[#1E6FFF] text-[#1E6FFF] hover:bg-[#1E6FFF]/10"
              >
                <Link href="/articles">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Browse Articles
                </Link>
              </Button>
              <Button 
                asChild
                className="rounded-full px-6 py-6 text-base font-semibold bg-[#1E6FFF] hover:bg-[#1E6FFF]/90 text-white"
              >
                <Link href="/submit-ticket">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Submit a Ticket
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
