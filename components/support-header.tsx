"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export function SupportHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-card border-b border-border">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#1E6FFF]">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h10v2H4v-2z" fill="white" />
            </svg>
          </div>
          <span className="text-xl font-bold text-foreground">Finelo Support Center</span>
        </Link>
        
        <nav className="flex items-center gap-2">
          <Button variant="ghost" className="text-foreground hover:bg-muted" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" className="text-foreground hover:bg-muted" asChild>
            <Link href="#knowledge-base">Knowledge base</Link>
          </Button>
          <Button className="bg-[#1E6FFF] hover:bg-[#1E6FFF]/90 text-white rounded-full px-6">
            Submit a ticket
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-foreground hover:bg-muted">
                English <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Español</DropdownMenuItem>
              <DropdownMenuItem>Français</DropdownMenuItem>
              <DropdownMenuItem>Deutsch</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
}
