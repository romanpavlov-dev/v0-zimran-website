"use client";

import { cn } from "@/lib/utils";

interface FineloMascotProps {
  mood?: "waving" | "thinking" | "cheering" | "reading" | "happy";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function FineloMascot({ mood = "waving", size = "md", className }: FineloMascotProps) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-48 h-48",
  };

  return (
    <div className={cn(sizeClasses[size], "relative", className)}>
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Body */}
        <ellipse cx="60" cy="75" rx="35" ry="30" fill="#1E6FFF" />
        
        {/* Belly */}
        <ellipse cx="60" cy="80" rx="22" ry="18" fill="#E8F1FF" />
        
        {/* Head */}
        <circle cx="60" cy="45" r="30" fill="#1E6FFF" />
        
        {/* Face (white area) */}
        <ellipse cx="60" cy="50" rx="22" ry="20" fill="#E8F1FF" />
        
        {/* Left ear */}
        <ellipse cx="38" cy="22" rx="10" ry="14" fill="#1E6FFF" />
        <ellipse cx="38" cy="22" rx="5" ry="8" fill="#FFB347" />
        
        {/* Right ear */}
        <ellipse cx="82" cy="22" rx="10" ry="14" fill="#1E6FFF" />
        <ellipse cx="82" cy="22" rx="5" ry="8" fill="#FFB347" />
        
        {/* Eyes */}
        {mood === "cheering" ? (
          <>
            <path d="M48 45 Q52 40 56 45" stroke="#0A1628" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M64 45 Q68 40 72 45" stroke="#0A1628" strokeWidth="3" strokeLinecap="round" fill="none" />
          </>
        ) : (
          <>
            <ellipse cx="50" cy="45" rx="5" ry="6" fill="#0A1628" />
            <ellipse cx="70" cy="45" rx="5" ry="6" fill="#0A1628" />
            <circle cx="48" cy="43" r="2" fill="white" />
            <circle cx="68" cy="43" r="2" fill="white" />
          </>
        )}
        
        {/* Eyebrows for thinking */}
        {mood === "thinking" && (
          <>
            <path d="M45 38 L55 36" stroke="#0A1628" strokeWidth="2" strokeLinecap="round" />
            <path d="M65 36 L75 38" stroke="#0A1628" strokeWidth="2" strokeLinecap="round" />
          </>
        )}
        
        {/* Nose */}
        <ellipse cx="60" cy="52" rx="4" ry="3" fill="#FFB347" />
        
        {/* Mouth based on mood */}
        {mood === "waving" || mood === "happy" ? (
          <path d="M52 60 Q60 68 68 60" stroke="#0A1628" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        ) : mood === "cheering" ? (
          <ellipse cx="60" cy="62" rx="8" ry="6" fill="#0A1628" />
        ) : mood === "thinking" ? (
          <circle cx="68" cy="62" r="3" fill="#0A1628" />
        ) : (
          <path d="M54 60 Q60 65 66 60" stroke="#0A1628" strokeWidth="2" strokeLinecap="round" fill="none" />
        )}
        
        {/* Blush */}
        <ellipse cx="40" cy="55" rx="5" ry="3" fill="#FFB6C1" opacity="0.6" />
        <ellipse cx="80" cy="55" rx="5" ry="3" fill="#FFB6C1" opacity="0.6" />
        
        {/* Left arm/wing */}
        {mood === "waving" ? (
          <path d="M25 70 Q15 55 25 45" stroke="#1E6FFF" strokeWidth="12" strokeLinecap="round" fill="none" />
        ) : mood === "cheering" ? (
          <>
            <path d="M25 70 Q10 50 20 35" stroke="#1E6FFF" strokeWidth="12" strokeLinecap="round" fill="none" />
            <path d="M95 70 Q110 50 100 35" stroke="#1E6FFF" strokeWidth="12" strokeLinecap="round" fill="none" />
          </>
        ) : mood === "thinking" ? (
          <path d="M30 85 Q25 80 30 75" stroke="#1E6FFF" strokeWidth="10" strokeLinecap="round" fill="none" />
        ) : (
          <path d="M30 85 Q20 85 25 75" stroke="#1E6FFF" strokeWidth="10" strokeLinecap="round" fill="none" />
        )}
        
        {/* Right arm/wing */}
        {mood !== "cheering" && (
          <path d="M90 85 Q100 85 95 75" stroke="#1E6FFF" strokeWidth="10" strokeLinecap="round" fill="none" />
        )}
        
        {/* Feet */}
        <ellipse cx="48" cy="102" rx="10" ry="5" fill="#FFB347" />
        <ellipse cx="72" cy="102" rx="10" ry="5" fill="#FFB347" />
        
        {/* Thought bubble for thinking */}
        {mood === "thinking" && (
          <>
            <circle cx="95" cy="25" r="3" fill="#E8ECF4" />
            <circle cx="100" cy="18" r="4" fill="#E8ECF4" />
            <circle cx="108" cy="10" r="6" fill="#E8ECF4" />
          </>
        )}
      </svg>
    </div>
  );
}

// Mini mascot for category cards
export function MiniMascot({ variant, className }: { variant: "rocket" | "coin" | "settings" | "help"; className?: string }) {
  const colors = {
    rocket: "#58CC02",
    coin: "#FFB347",
    settings: "#1CB0F6",
    help: "#FF4B4B",
  };

  return (
    <div className={cn("w-12 h-12", className)}>
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Small cute owl */}
        <circle cx="24" cy="28" r="16" fill={colors[variant]} />
        <ellipse cx="24" cy="32" rx="10" ry="8" fill="#E8F1FF" />
        <circle cx="24" cy="22" r="14" fill={colors[variant]} />
        <ellipse cx="24" cy="24" rx="10" ry="9" fill="#E8F1FF" />
        
        {/* Eyes */}
        <circle cx="20" cy="23" r="3" fill="#0A1628" />
        <circle cx="28" cy="23" r="3" fill="#0A1628" />
        <circle cx="19" cy="22" r="1" fill="white" />
        <circle cx="27" cy="22" r="1" fill="white" />
        
        {/* Beak */}
        <ellipse cx="24" cy="27" rx="2" ry="1.5" fill="#FFB347" />
        
        {/* Ears */}
        <path d="M12 14 Q14 8 18 12" fill={colors[variant]} />
        <path d="M36 14 Q34 8 30 12" fill={colors[variant]} />
      </svg>
    </div>
  );
}
