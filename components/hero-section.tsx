"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { FineloMascot } from "@/components/finelo-mascot";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#0F2847] to-[#1E6FFF] py-16 md:py-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#1E6FFF]/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#1E6FFF]/15 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
              Hi! How can we help you today?
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-xl">
              Search our knowledge base or browse categories to find the answers you need.
            </p>
            
            {/* Search bar */}
            <div className="relative max-w-2xl mx-auto md:mx-0">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for answers..."
                  className="w-full h-14 pl-14 pr-6 rounded-full bg-white text-foreground placeholder:text-muted-foreground shadow-xl border-0 focus:outline-none focus:ring-4 focus:ring-[#1E6FFF]/30 text-lg"
                />
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="text-white/60 text-sm">Popular:</span>
                {["unsubscribe", "refund", "login", "billing"].map((term) => (
                  <button
                    key={term}
                    onClick={() => setSearchQuery(term)}
                    className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm hover:bg-white/20 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Green Candlestick mascot with buy/sell buttons */}
          <div className="hidden md:block">
            <FineloMascot type="greenCandle" size="xl" className="animate-bounce-slow" />
          </div>
        </div>
      </div>
      
      {/* Curved bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60V30C240 50 480 60 720 50C960 40 1200 20 1440 30V60H0Z" fill="#F4F6FA" />
        </svg>
      </div>
    </section>
  );
}
