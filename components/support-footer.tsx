"use client";

import Link from "next/link";
import { FineloMascot } from "@/components/finelo-mascot";

export function SupportFooter() {
  return (
    <footer className="bg-[#0A1628] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <FineloMascot mood="happy" size="sm" />
            <div>
              <Link href="/" className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#1E6FFF]">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                    <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h10v2H4v-2z" fill="white" />
                  </svg>
                </div>
                <span className="text-lg font-bold">Finelo</span>
              </Link>
              <p className="text-white/60 text-sm mt-1">Making finance fun and easy!</p>
            </div>
          </div>
          
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link href="/privacy" className="text-white/70 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/70 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="https://finelo.com" className="text-white/70 hover:text-white transition-colors">
              Visit Finelo.com
            </Link>
          </nav>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Finelo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
