"use client";

import { cn } from "@/lib/utils";

interface FineloMascotProps {
  character?: "green" | "bear" | "bull";
  mood?: "waving" | "thinking" | "happy" | "working";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function FineloMascot({ character = "green", mood = "happy", size = "md", className }: FineloMascotProps) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-48 h-48",
  };

  if (character === "bear") {
    return (
      <div className={cn(sizeClasses[size], "relative", className)}>
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Bear body */}
          <ellipse cx="60" cy="85" rx="35" ry="28" fill="#C4856B" />
          
          {/* Bear head */}
          <ellipse cx="60" cy="50" rx="32" ry="28" fill="#C4856B" />
          
          {/* Ears */}
          <circle cx="32" cy="28" r="10" fill="#C4856B" />
          <circle cx="32" cy="28" r="5" fill="#E8A07A" />
          <circle cx="88" cy="28" r="10" fill="#C4856B" />
          <circle cx="88" cy="28" r="5" fill="#E8A07A" />
          
          {/* Snout */}
          <ellipse cx="60" cy="58" rx="18" ry="14" fill="#E8A07A" />
          
          {/* Nose */}
          <ellipse cx="60" cy="54" rx="6" ry="4" fill="#5A4030" />
          
          {/* Eyes - white background */}
          <ellipse cx="45" cy="42" rx="10" ry="8" fill="white" />
          <ellipse cx="75" cy="42" rx="10" ry="8" fill="white" />
          
          {/* Eye pupils */}
          <ellipse cx="47" cy="44" rx="5" ry="6" fill="#5A4030" />
          <ellipse cx="77" cy="44" rx="5" ry="6" fill="#5A4030" />
          
          {/* Eye highlights */}
          <circle cx="45" cy="42" r="2" fill="white" />
          <circle cx="75" cy="42" r="2" fill="white" />
          
          {/* Eyebrows */}
          <path d="M36 34 L50 36" stroke="#5A4030" strokeWidth="3" strokeLinecap="round" />
          <path d="M70 36 L84 34" stroke="#5A4030" strokeWidth="3" strokeLinecap="round" />
          
          {/* Mouth */}
          {mood === "happy" ? (
            <path d="M52 64 Q60 70 68 64" stroke="#5A4030" strokeWidth="2" strokeLinecap="round" fill="none" />
          ) : (
            <ellipse cx="60" cy="65" rx="4" ry="2" fill="#5A4030" />
          )}
          
          {/* Arms */}
          {mood === "waving" ? (
            <>
              <ellipse cx="25" cy="75" rx="12" ry="8" fill="#C4856B" transform="rotate(-30 25 75)" />
              <ellipse cx="95" cy="55" rx="12" ry="8" fill="#C4856B" transform="rotate(45 95 55)" />
            </>
          ) : mood === "working" ? (
            <>
              <ellipse cx="30" cy="90" rx="10" ry="6" fill="#C4856B" transform="rotate(-20 30 90)" />
              <ellipse cx="90" cy="90" rx="10" ry="6" fill="#C4856B" transform="rotate(20 90 90)" />
            </>
          ) : (
            <>
              <ellipse cx="28" cy="80" rx="10" ry="6" fill="#C4856B" transform="rotate(-15 28 80)" />
              <ellipse cx="92" cy="80" rx="10" ry="6" fill="#C4856B" transform="rotate(15 92 80)" />
            </>
          )}
        </svg>
      </div>
    );
  }

  if (character === "bull") {
    return (
      <div className={cn(sizeClasses[size], "relative", className)}>
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Bull body */}
          <ellipse cx="60" cy="85" rx="32" ry="25" fill="#5B7FD6" />
          
          {/* Bull head */}
          <ellipse cx="60" cy="55" rx="30" ry="26" fill="#5B7FD6" />
          
          {/* Horns */}
          <path d="M25 35 Q15 20 20 10" stroke="#FFD699" strokeWidth="8" strokeLinecap="round" fill="none" />
          <path d="M95 35 Q105 20 100 10" stroke="#FFD699" strokeWidth="8" strokeLinecap="round" fill="none" />
          
          {/* Snout */}
          <ellipse cx="60" cy="65" rx="16" ry="12" fill="#7A9BE6" />
          
          {/* Nostrils */}
          <ellipse cx="52" cy="66" rx="3" ry="2" fill="#3D5A99" />
          <ellipse cx="68" cy="66" rx="3" ry="2" fill="#3D5A99" />
          
          {/* Eyes - white background */}
          <ellipse cx="45" cy="48" rx="9" ry="7" fill="white" />
          <ellipse cx="75" cy="48" rx="9" ry="7" fill="white" />
          
          {/* Eye pupils */}
          <ellipse cx="46" cy="49" rx="4" ry="5" fill="#2D3748" />
          <ellipse cx="76" cy="49" rx="4" ry="5" fill="#2D3748" />
          
          {/* Eye highlights */}
          <circle cx="44" cy="47" r="2" fill="white" />
          <circle cx="74" cy="47" r="2" fill="white" />
          
          {/* Eyebrows */}
          <path d="M38 40 L52 42" stroke="#3D5A99" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M68 42 L82 40" stroke="#3D5A99" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Mouth */}
          <path d="M52 72 Q60 78 68 72" stroke="#3D5A99" strokeWidth="2" strokeLinecap="round" fill="none" />
          
          {/* Ears */}
          <ellipse cx="30" cy="45" rx="6" ry="8" fill="#5B7FD6" />
          <ellipse cx="90" cy="45" rx="6" ry="8" fill="#5B7FD6" />
          
          {/* Arms */}
          <ellipse cx="30" cy="85" rx="10" ry="6" fill="#5B7FD6" transform="rotate(-15 30 85)" />
          <ellipse cx="90" cy="85" rx="10" ry="6" fill="#5B7FD6" transform="rotate(15 90 85)" />
        </svg>
      </div>
    );
  }

  // Green character (pickle/cucumber - default)
  return (
    <div className={cn(sizeClasses[size], "relative", className)}>
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Stem */}
        <rect x="55" y="5" width="10" height="12" rx="3" fill="#2D8F2D" />
        
        {/* Body - rounded rectangle shape */}
        <rect x="30" y="15" width="60" height="90" rx="28" fill="#58CC02" />
        
        {/* Body highlight */}
        <rect x="38" y="20" width="12" height="75" rx="6" fill="#6EE018" opacity="0.5" />
        
        {/* Eyes - white background */}
        <ellipse cx="45" cy="50" rx="12" ry="10" fill="white" />
        <ellipse cx="75" cy="50" rx="12" ry="10" fill="white" />
        
        {/* Eye pupils */}
        {mood === "thinking" ? (
          <>
            <ellipse cx="48" cy="50" rx="5" ry="6" fill="#2D3748" />
            <ellipse cx="78" cy="48" rx="5" ry="6" fill="#2D3748" />
          </>
        ) : (
          <>
            <ellipse cx="47" cy="52" rx="5" ry="6" fill="#2D3748" />
            <ellipse cx="77" cy="52" rx="5" ry="6" fill="#2D3748" />
          </>
        )}
        
        {/* Eye highlights */}
        <circle cx="45" cy="48" r="2.5" fill="white" />
        <circle cx="75" cy="48" r="2.5" fill="white" />
        
        {/* Eyebrows */}
        {mood === "thinking" ? (
          <>
            <path d="M35 38 L52 40" stroke="#2D8F2D" strokeWidth="3" strokeLinecap="round" />
            <path d="M68 42 L85 38" stroke="#2D8F2D" strokeWidth="3" strokeLinecap="round" />
          </>
        ) : (
          <>
            <path d="M35 40 L52 38" stroke="#2D8F2D" strokeWidth="3" strokeLinecap="round" />
            <path d="M68 38 L85 40" stroke="#2D8F2D" strokeWidth="3" strokeLinecap="round" />
          </>
        )}
        
        {/* Mouth */}
        {mood === "happy" || mood === "waving" ? (
          <path d="M45 72 Q60 85 75 72" stroke="#2D3748" strokeWidth="3" strokeLinecap="round" fill="none" />
        ) : mood === "thinking" ? (
          <ellipse cx="65" cy="75" rx="6" ry="4" fill="#2D3748" />
        ) : (
          <path d="M50 75 Q60 82 70 75" stroke="#2D3748" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        )}
        
        {/* Arms */}
        {mood === "waving" ? (
          <>
            {/* Left arm down */}
            <ellipse cx="18" cy="70" rx="14" ry="8" fill="#58CC02" />
            <ellipse cx="8" cy="75" rx="6" ry="10" fill="#58CC02" />
            {/* Right arm up waving */}
            <ellipse cx="102" cy="45" rx="14" ry="8" fill="#58CC02" transform="rotate(-45 102 45)" />
            <ellipse cx="115" cy="35" rx="6" ry="10" fill="#58CC02" transform="rotate(-30 115 35)" />
          </>
        ) : mood === "thinking" ? (
          <>
            {/* Left arm to chin */}
            <ellipse cx="22" cy="65" rx="12" ry="7" fill="#58CC02" />
            <ellipse cx="12" cy="58" rx="6" ry="9" fill="#58CC02" />
            {/* Right arm relaxed */}
            <ellipse cx="98" cy="70" rx="12" ry="7" fill="#58CC02" />
            <ellipse cx="108" cy="75" rx="6" ry="9" fill="#58CC02" />
          </>
        ) : (
          <>
            {/* Both arms out */}
            <ellipse cx="18" cy="60" rx="14" ry="8" fill="#58CC02" />
            <ellipse cx="6" cy="55" rx="6" ry="10" fill="#58CC02" />
            <ellipse cx="102" cy="60" rx="14" ry="8" fill="#58CC02" />
            <ellipse cx="114" cy="55" rx="6" ry="10" fill="#58CC02" />
          </>
        )}
      </svg>
    </div>
  );
}

// Mini mascot for category cards
export function MiniMascot({ variant, className }: { variant: "rocket" | "coin" | "settings" | "help"; className?: string }) {
  const colors = {
    rocket: "#58CC02",  // Green
    coin: "#FFB347",    // Orange/Gold
    settings: "#5B7FD6", // Blue (bull)
    help: "#C4856B",    // Brown (bear)
  };

  return (
    <div className={cn("w-10 h-10", className)}>
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Simple cute character based on variant */}
        {variant === "rocket" || variant === "coin" ? (
          // Green character mini
          <>
            <rect x="10" y="5" width="20" height="32" rx="10" fill={colors[variant]} />
            <ellipse cx="16" cy="18" rx="4" ry="3" fill="white" />
            <ellipse cx="24" cy="18" rx="4" ry="3" fill="white" />
            <circle cx="17" cy="19" r="2" fill="#2D3748" />
            <circle cx="25" cy="19" r="2" fill="#2D3748" />
            <path d="M16 26 Q20 30 24 26" stroke="#2D3748" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </>
        ) : variant === "settings" ? (
          // Bull mini
          <>
            <ellipse cx="20" cy="24" rx="12" ry="10" fill={colors[variant]} />
            <path d="M10 14 Q6 8 8 4" stroke="#FFD699" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M30 14 Q34 8 32 4" stroke="#FFD699" strokeWidth="3" strokeLinecap="round" fill="none" />
            <ellipse cx="15" cy="20" rx="3" ry="2.5" fill="white" />
            <ellipse cx="25" cy="20" rx="3" ry="2.5" fill="white" />
            <circle cx="15" cy="21" r="1.5" fill="#2D3748" />
            <circle cx="25" cy="21" r="1.5" fill="#2D3748" />
            <path d="M16 28 Q20 31 24 28" stroke="#3D5A99" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </>
        ) : (
          // Bear mini
          <>
            <ellipse cx="20" cy="24" rx="12" ry="10" fill={colors[variant]} />
            <circle cx="10" cy="12" r="4" fill={colors[variant]} />
            <circle cx="30" cy="12" r="4" fill={colors[variant]} />
            <ellipse cx="20" cy="26" rx="6" ry="4" fill="#E8A07A" />
            <ellipse cx="15" cy="20" rx="3" ry="2.5" fill="white" />
            <ellipse cx="25" cy="20" rx="3" ry="2.5" fill="white" />
            <circle cx="15" cy="21" r="1.5" fill="#5A4030" />
            <circle cx="25" cy="21" r="1.5" fill="#5A4030" />
            <ellipse cx="20" cy="24" rx="2" ry="1.5" fill="#5A4030" />
          </>
        )}
      </svg>
    </div>
  );
}
