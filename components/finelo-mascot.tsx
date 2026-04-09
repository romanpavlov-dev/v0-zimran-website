"use client";

import { cn } from "@/lib/utils";

interface FineloMascotProps {
  character?: "green" | "red" | "bear" | "bull";
  mood?: "waving" | "thinking" | "happy" | "working" | "grumpy" | "confident";
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

  // Green Japanese Candlestick Character
  if (character === "green") {
    return (
      <div className={cn(sizeClasses[size], "relative", className)}>
        <svg viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Upper wick */}
          <rect x="45" y="0" width="10" height="20" fill="#2D8F2D" />
          
          {/* Main candlestick body - strict rectangle */}
          <rect x="25" y="20" width="50" height="100" fill="#58CC02" />
          
          {/* Body shading/highlight */}
          <rect x="30" y="25" width="8" height="90" fill="#6EE018" opacity="0.4" />
          
          {/* Eyes - white background */}
          <rect x="32" y="45" width="14" height="12" rx="2" fill="white" />
          <rect x="54" y="45" width="14" height="12" rx="2" fill="white" />
          
          {/* Eye pupils */}
          {mood === "thinking" ? (
            <>
              <circle cx="42" cy="52" r="4" fill="#2D3748" />
              <circle cx="64" cy="50" r="4" fill="#2D3748" />
            </>
          ) : mood === "confident" ? (
            <>
              <circle cx="40" cy="53" r="4" fill="#2D3748" />
              <circle cx="62" cy="53" r="4" fill="#2D3748" />
            </>
          ) : (
            <>
              <circle cx="40" cy="52" r="4" fill="#2D3748" />
              <circle cx="62" cy="52" r="4" fill="#2D3748" />
            </>
          )}
          
          {/* Eye highlights */}
          <circle cx="38" cy="50" r="1.5" fill="white" />
          <circle cx="60" cy="50" r="1.5" fill="white" />
          
          {/* Eyebrows - sassy/neutral expression */}
          {mood === "confident" ? (
            <>
              <rect x="32" y="40" width="14" height="2" fill="#2D8F2D" transform="rotate(-5 32 40)" />
              <rect x="54" y="40" width="14" height="2" fill="#2D8F2D" transform="rotate(5 68 40)" />
            </>
          ) : (
            <>
              <rect x="32" y="42" width="14" height="2" fill="#2D8F2D" />
              <rect x="54" y="42" width="14" height="2" fill="#2D8F2D" />
            </>
          )}
          
          {/* Mouth - subtle smile */}
          {mood === "happy" || mood === "waving" || mood === "confident" ? (
            <path d="M40 75 Q50 82 60 75" stroke="#2D3748" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          ) : mood === "thinking" ? (
            <ellipse cx="55" cy="78" rx="5" ry="3" fill="#2D3748" />
          ) : (
            <path d="M42 78 L58 78" stroke="#2D3748" strokeWidth="2" strokeLinecap="round" />
          )}
          
          {/* Arms - small rectangles sticking out */}
          {mood === "waving" ? (
            <>
              {/* Left arm down */}
              <rect x="5" y="55" width="22" height="8" fill="#58CC02" />
              <rect x="0" y="50" width="10" height="18" rx="3" fill="#58CC02" />
              {/* Right arm up waving */}
              <rect x="73" y="35" width="22" height="8" fill="#58CC02" transform="rotate(-45 73 35)" />
              <rect x="90" y="20" width="10" height="16" rx="3" fill="#58CC02" transform="rotate(-30 90 20)" />
            </>
          ) : mood === "confident" ? (
            <>
              {/* Arms out confidently */}
              <rect x="3" y="50" width="24" height="8" fill="#58CC02" />
              <rect x="0" y="45" width="8" height="18" rx="2" fill="#58CC02" />
              <rect x="73" y="50" width="24" height="8" fill="#58CC02" />
              <rect x="92" y="45" width="8" height="18" rx="2" fill="#58CC02" />
            </>
          ) : (
            <>
              {/* Arms at sides */}
              <rect x="5" y="55" width="22" height="8" fill="#58CC02" />
              <rect x="0" y="50" width="10" height="18" rx="3" fill="#58CC02" />
              <rect x="73" y="55" width="22" height="8" fill="#58CC02" />
              <rect x="90" y="50" width="10" height="18" rx="3" fill="#58CC02" />
            </>
          )}
        </svg>
      </div>
    );
  }

  // Red Japanese Candlestick Character
  if (character === "red") {
    return (
      <div className={cn(sizeClasses[size], "relative", className)}>
        <svg viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Upper wick */}
          <rect x="45" y="0" width="10" height="20" fill="#B33030" />
          
          {/* Main candlestick body - strict rectangle */}
          <rect x="25" y="20" width="50" height="100" fill="#E74C3C" />
          
          {/* Body shading */}
          <rect x="30" y="25" width="8" height="90" fill="#FF6B5B" opacity="0.4" />
          
          {/* Eyes - white background, angry shape */}
          <rect x="32" y="48" width="14" height="10" rx="2" fill="white" />
          <rect x="54" y="48" width="14" height="10" rx="2" fill="white" />
          
          {/* Eye pupils - looking fierce */}
          <circle cx="40" cy="54" r="4" fill="#2D3748" />
          <circle cx="62" cy="54" r="4" fill="#2D3748" />
          
          {/* Eye highlights */}
          <circle cx="38" cy="52" r="1.5" fill="white" />
          <circle cx="60" cy="52" r="1.5" fill="white" />
          
          {/* Angry eyebrows - slanted down toward center */}
          <rect x="30" y="42" width="16" height="3" fill="#B33030" transform="rotate(15 30 42)" />
          <rect x="54" y="45" width="16" height="3" fill="#B33030" transform="rotate(-15 70 45)" />
          
          {/* Grumpy mouth - frown */}
          <path d="M40 80 Q50 72 60 80" stroke="#2D3748" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          
          {/* Arms - crossed or holding receipt */}
          {mood === "grumpy" ? (
            <>
              {/* Arms crossed */}
              <rect x="8" y="60" width="20" height="8" fill="#E74C3C" transform="rotate(-10 8 60)" />
              <rect x="72" y="55" width="20" height="8" fill="#E74C3C" transform="rotate(10 92 55)" />
            </>
          ) : (
            <>
              {/* Arms at sides */}
              <rect x="5" y="55" width="22" height="8" fill="#E74C3C" />
              <rect x="0" y="50" width="10" height="18" rx="3" fill="#E74C3C" />
              <rect x="73" y="55" width="22" height="8" fill="#E74C3C" />
              <rect x="90" y="50" width="10" height="18" rx="3" fill="#E74C3C" />
            </>
          )}
        </svg>
      </div>
    );
  }

  // Brown Bear - flat illustrated style with droopy tired eyes
  if (character === "bear") {
    return (
      <div className={cn(sizeClasses[size], "relative", className)}>
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Body with red shirt */}
          <rect x="30" y="70" width="60" height="40" rx="8" fill="#E74C3C" />
          
          {/* Bear head - rounded square */}
          <rect x="25" y="15" width="70" height="60" rx="20" fill="#C4856B" />
          
          {/* Ears */}
          <circle cx="28" cy="22" r="12" fill="#C4856B" />
          <circle cx="28" cy="22" r="6" fill="#E8A07A" />
          <circle cx="92" cy="22" r="12" fill="#C4856B" />
          <circle cx="92" cy="22" r="6" fill="#E8A07A" />
          
          {/* Snout area */}
          <ellipse cx="60" cy="55" rx="20" ry="14" fill="#E8A07A" />
          
          {/* Nose */}
          <ellipse cx="60" cy="50" rx="6" ry="4" fill="#5A4030" />
          
          {/* Eyes - white, droopy tired look */}
          <ellipse cx="42" cy="40" rx="12" ry="8" fill="white" />
          <ellipse cx="78" cy="40" rx="12" ry="8" fill="white" />
          
          {/* Eye pupils - looking tired/droopy */}
          <ellipse cx="44" cy="42" rx="5" ry="6" fill="#5A4030" />
          <ellipse cx="80" cy="42" rx="5" ry="6" fill="#5A4030" />
          
          {/* Eye highlights */}
          <circle cx="42" cy="39" r="2" fill="white" />
          <circle cx="78" cy="39" r="2" fill="white" />
          
          {/* Droopy eyelids */}
          <path d="M32 36 Q42 32 52 36" fill="#C4856B" />
          <path d="M68 36 Q78 32 88 36" fill="#C4856B" />
          
          {/* Tired eyebrows */}
          <path d="M32 32 L48 35" stroke="#8B6B52" strokeWidth="3" strokeLinecap="round" />
          <path d="M72 35 L88 32" stroke="#8B6B52" strokeWidth="3" strokeLinecap="round" />
          
          {/* Mouth - small, neutral */}
          {mood === "thinking" ? (
            <ellipse cx="60" cy="62" rx="4" ry="2.5" fill="#5A4030" />
          ) : (
            <path d="M54 62 Q60 66 66 62" stroke="#5A4030" strokeWidth="2" strokeLinecap="round" fill="none" />
          )}
          
          {/* Arms coming from shirt */}
          <ellipse cx="22" cy="85" rx="10" ry="8" fill="#C4856B" />
          <ellipse cx="98" cy="85" rx="10" ry="8" fill="#C4856B" />
        </svg>
      </div>
    );
  }

  // Blue Bull with horns
  if (character === "bull") {
    return (
      <div className={cn(sizeClasses[size], "relative", className)}>
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Body */}
          <rect x="30" y="70" width="60" height="40" rx="8" fill="#3D7A3D" />
          
          {/* Bull head - rounded rectangle */}
          <rect x="25" y="20" width="70" height="55" rx="18" fill="#5B7FD6" />
          
          {/* Horns - curved outward */}
          <path d="M28 30 Q12 25 8 10" stroke="#FFD699" strokeWidth="10" strokeLinecap="round" fill="none" />
          <path d="M92 30 Q108 25 112 10" stroke="#FFD699" strokeWidth="10" strokeLinecap="round" fill="none" />
          
          {/* Snout */}
          <ellipse cx="60" cy="58" rx="18" ry="12" fill="#7A9BE6" />
          
          {/* Nostrils */}
          <ellipse cx="52" cy="60" rx="4" ry="3" fill="#3D5A99" />
          <ellipse cx="68" cy="60" rx="4" ry="3" fill="#3D5A99" />
          
          {/* Eyes - white */}
          <ellipse cx="42" cy="42" rx="11" ry="9" fill="white" />
          <ellipse cx="78" cy="42" rx="11" ry="9" fill="white" />
          
          {/* Eye pupils */}
          {mood === "thinking" ? (
            <>
              <circle cx="45" cy="44" r="5" fill="#2D3748" />
              <circle cx="82" cy="42" r="5" fill="#2D3748" />
            </>
          ) : (
            <>
              <circle cx="44" cy="44" r="5" fill="#2D3748" />
              <circle cx="80" cy="44" r="5" fill="#2D3748" />
            </>
          )}
          
          {/* Eye highlights */}
          <circle cx="41" cy="41" r="2" fill="white" />
          <circle cx="77" cy="41" r="2" fill="white" />
          
          {/* Eyebrows */}
          {mood === "thinking" ? (
            <>
              <path d="M32 34 Q42 30 50 35" stroke="#3D5A99" strokeWidth="3" strokeLinecap="round" fill="none" />
              <path d="M70 35 Q78 30 88 34" stroke="#3D5A99" strokeWidth="3" strokeLinecap="round" fill="none" />
            </>
          ) : (
            <>
              <path d="M34 35 L50 34" stroke="#3D5A99" strokeWidth="3" strokeLinecap="round" />
              <path d="M70 34 L86 35" stroke="#3D5A99" strokeWidth="3" strokeLinecap="round" />
            </>
          )}
          
          {/* Mouth */}
          <path d="M52 68 Q60 74 68 68" stroke="#3D5A99" strokeWidth="2" strokeLinecap="round" fill="none" />
          
          {/* Arms */}
          <ellipse cx="22" cy="88" rx="10" ry="8" fill="#5B7FD6" />
          <ellipse cx="98" cy="88" rx="10" ry="8" fill="#5B7FD6" />
        </svg>
      </div>
    );
  }

  return null;
}

// Character Group - all characters together
export function CharacterGroup({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-end justify-center gap-2", className)}>
      {/* Green candlestick with pencil */}
      <div className="relative">
        <svg viewBox="0 0 60 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-20">
          {/* Pencil in hand */}
          <rect x="2" y="30" width="6" height="40" fill="#58CC02" transform="rotate(-15 2 30)" />
          <polygon points="2,75 5,85 8,75" fill="#FFD699" transform="rotate(-15 5 75)" />
          
          {/* Upper wick */}
          <rect x="25" y="0" width="6" height="12" fill="#2D8F2D" />
          {/* Body */}
          <rect x="15" y="12" width="30" height="65" fill="#58CC02" />
          {/* Eyes */}
          <rect x="20" y="28" width="8" height="7" rx="1" fill="white" />
          <rect x="32" y="28" width="8" height="7" rx="1" fill="white" />
          <circle cx="25" cy="32" r="2.5" fill="#2D3748" />
          <circle cx="37" cy="32" r="2.5" fill="#2D3748" />
          {/* Mouth */}
          <path d="M24 48 Q30 53 36 48" stroke="#2D3748" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          {/* Arm */}
          <rect x="43" y="35" width="14" height="5" fill="#58CC02" />
        </svg>
      </div>
      
      {/* Blue Bull - center, larger */}
      <div className="relative -mx-1">
        <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-28">
          {/* Body with green shirt */}
          <rect x="20" y="60" width="40" height="35" rx="6" fill="#3D7A3D" />
          {/* Head */}
          <rect x="15" y="18" width="50" height="45" rx="14" fill="#5B7FD6" />
          {/* Horns */}
          <path d="M18 25 Q8 20 5 8" stroke="#FFD699" strokeWidth="7" strokeLinecap="round" fill="none" />
          <path d="M62 25 Q72 20 75 8" stroke="#FFD699" strokeWidth="7" strokeLinecap="round" fill="none" />
          {/* Snout */}
          <ellipse cx="40" cy="48" rx="12" ry="8" fill="#7A9BE6" />
          {/* Nostrils */}
          <ellipse cx="35" cy="49" rx="2.5" ry="2" fill="#3D5A99" />
          <ellipse cx="45" cy="49" rx="2.5" ry="2" fill="#3D5A99" />
          {/* Eyes */}
          <ellipse cx="30" cy="35" rx="7" ry="6" fill="white" />
          <ellipse cx="50" cy="35" rx="7" ry="6" fill="white" />
          <circle cx="31" cy="36" r="3" fill="#2D3748" />
          <circle cx="51" cy="36" r="3" fill="#2D3748" />
          {/* Mouth */}
          <path d="M35 55 Q40 59 45 55" stroke="#3D5A99" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
      </div>
      
      {/* Red candlestick - grumpy */}
      <div className="relative">
        <svg viewBox="0 0 60 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-20">
          {/* Upper wick */}
          <rect x="25" y="0" width="6" height="12" fill="#B33030" />
          {/* Body */}
          <rect x="15" y="12" width="30" height="65" fill="#E74C3C" />
          {/* Eyes */}
          <rect x="20" y="30" width="8" height="6" rx="1" fill="white" />
          <rect x="32" y="30" width="8" height="6" rx="1" fill="white" />
          <circle cx="25" cy="34" r="2.5" fill="#2D3748" />
          <circle cx="37" cy="34" r="2.5" fill="#2D3748" />
          {/* Angry eyebrows */}
          <rect x="19" y="26" width="10" height="2" fill="#B33030" transform="rotate(12 19 26)" />
          <rect x="31" y="27" width="10" height="2" fill="#B33030" transform="rotate(-12 41 27)" />
          {/* Grumpy mouth */}
          <path d="M24 50 Q30 45 36 50" stroke="#2D3748" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          {/* Arms */}
          <rect x="43" y="35" width="12" height="5" fill="#E74C3C" />
          <rect x="1" y="35" width="16" height="5" fill="#E74C3C" />
        </svg>
      </div>
    </div>
  );
}

// Mini mascot for category cards
export function MiniMascot({ variant, className }: { variant: "getStarted" | "billing" | "account" | "troubleshoot"; className?: string }) {
  return (
    <div className={cn("w-12 h-12", className)}>
      {variant === "getStarted" && (
        // Bear at desk
        <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Desk */}
          <rect x="5" y="38" width="40" height="4" rx="1" fill="#8B7355" />
          {/* Monitor */}
          <rect x="15" y="25" width="20" height="14" rx="2" fill="#E8ECF4" />
          <rect x="22" y="39" width="6" height="4" fill="#CBD5E0" />
          {/* Bear */}
          <rect x="30" y="18" width="18" height="16" rx="5" fill="#C4856B" />
          <circle cx="32" cy="15" r="3" fill="#C4856B" />
          <circle cx="46" cy="15" r="3" fill="#C4856B" />
          <ellipse cx="36" cy="23" rx="2.5" ry="2" fill="white" />
          <ellipse cx="42" cy="23" rx="2.5" ry="2" fill="white" />
          <circle cx="37" cy="24" r="1.2" fill="#5A4030" />
          <circle cx="43" cy="24" r="1.2" fill="#5A4030" />
        </svg>
      )}
      {variant === "billing" && (
        // Red candlestick with receipt
        <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Receipt */}
          <rect x="5" y="15" width="14" height="22" fill="white" rx="1" />
          <rect x="7" y="18" width="10" height="1.5" fill="#E2E8F0" />
          <rect x="7" y="22" width="8" height="1.5" fill="#E2E8F0" />
          <rect x="7" y="26" width="10" height="1.5" fill="#E2E8F0" />
          {/* Candlestick wick */}
          <rect x="32" y="5" width="4" height="8" fill="#B33030" />
          {/* Candlestick body */}
          <rect x="25" y="13" width="18" height="32" fill="#E74C3C" />
          {/* Eyes */}
          <rect x="28" y="22" width="5" height="4" rx="1" fill="white" />
          <rect x="35" y="22" width="5" height="4" rx="1" fill="white" />
          <circle cx="31" cy="25" r="1.5" fill="#2D3748" />
          <circle cx="38" cy="25" r="1.5" fill="#2D3748" />
          {/* Angry brows */}
          <rect x="27" y="19" width="6" height="1.5" fill="#B33030" transform="rotate(10 27 19)" />
          <rect x="35" y="20" width="6" height="1.5" fill="#B33030" transform="rotate(-10 41 20)" />
          {/* Grumpy mouth */}
          <path d="M30 32 Q34 29 38 32" stroke="#2D3748" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        </svg>
      )}
      {variant === "account" && (
        // Green candlestick
        <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Wick */}
          <rect x="22" y="5" width="4" height="8" fill="#2D8F2D" />
          {/* Body */}
          <rect x="15" y="13" width="18" height="32" fill="#58CC02" />
          {/* Eyes */}
          <rect x="18" y="22" width="5" height="4" rx="1" fill="white" />
          <rect x="25" y="22" width="5" height="4" rx="1" fill="white" />
          <circle cx="21" cy="25" r="1.5" fill="#2D3748" />
          <circle cx="28" cy="25" r="1.5" fill="#2D3748" />
          {/* Smile */}
          <path d="M20 32 Q24 36 28 32" stroke="#2D3748" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          {/* Arms */}
          <rect x="31" y="24" width="10" height="4" fill="#58CC02" />
          <rect x="7" y="24" width="10" height="4" fill="#58CC02" />
        </svg>
      )}
      {variant === "troubleshoot" && (
        // Blue bull thinking
        <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Thought bubble */}
          <circle cx="8" cy="12" r="3" fill="#E2E8F0" />
          <circle cx="12" cy="8" r="4" fill="#E2E8F0" />
          <circle cx="18" cy="5" r="5" fill="#E2E8F0" />
          {/* Head */}
          <rect x="18" y="18" width="28" height="25" rx="8" fill="#5B7FD6" />
          {/* Horns */}
          <path d="M20 22 Q12 18 10 10" stroke="#FFD699" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M44 22 Q52 18 54 10" stroke="#FFD699" strokeWidth="4" strokeLinecap="round" fill="none" />
          {/* Snout */}
          <ellipse cx="32" cy="35" rx="8" ry="5" fill="#7A9BE6" />
          {/* Eyes */}
          <ellipse cx="26" cy="28" rx="4" ry="3" fill="white" />
          <ellipse cx="38" cy="28" rx="4" ry="3" fill="white" />
          <circle cx="27" cy="29" r="2" fill="#2D3748" />
          <circle cx="39" cy="29" r="2" fill="#2D3748" />
          {/* Thinking eyebrows */}
          <path d="M22 24 Q26 22 30 25" stroke="#3D5A99" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
      )}
    </div>
  );
}
