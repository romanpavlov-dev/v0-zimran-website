"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type MascotSize = "sm" | "md" | "lg" | "xl";
type MascotType = "bear" | "bulls" | "greenCandle";

interface FineloMascotProps {
  type: MascotType;
  size?: MascotSize;
  className?: string;
}

const sizeMap: Record<MascotType, Record<MascotSize, { width: number; height: number }>> = {
  bear: {
    sm: { width: 100, height: 80 },
    md: { width: 160, height: 128 },
    lg: { width: 240, height: 192 },
    xl: { width: 360, height: 288 },
  },
  bulls: {
    sm: { width: 80, height: 48 },
    md: { width: 140, height: 84 },
    lg: { width: 200, height: 120 },
    xl: { width: 280, height: 168 },
  },
  greenCandle: {
    sm: { width: 80, height: 80 },
    md: { width: 140, height: 140 },
    lg: { width: 200, height: 200 },
    xl: { width: 300, height: 300 },
  },
};

const srcMap: Record<MascotType, string> = {
  bear: "/images/mascots/bear.png",
  bulls: "/images/mascots/bulls.png",
  greenCandle: "/images/mascots/green-candle.png",
};

const altMap: Record<MascotType, string> = {
  bear: "Finelo Bear mascot at computer",
  bulls: "Finelo Bull and Candlestick mascots",
  greenCandle: "Finelo Green Candlestick mascot with buy/sell buttons",
};

export function FineloMascot({ type, size = "md", className = "" }: FineloMascotProps) {
  const dimensions = sizeMap[type][size];
  const src = srcMap[type];
  const alt = altMap[type];

  return (
    <div 
      className={cn("relative flex-shrink-0", className)} 
      style={{ width: dimensions.width, height: dimensions.height }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}

// Shorthand components for convenience
export function BearMascot({ size = "md", className = "" }: Omit<FineloMascotProps, "type">) {
  return <FineloMascot type="bear" size={size} className={className} />;
}

export function BullsMascot({ size = "md", className = "" }: Omit<FineloMascotProps, "type">) {
  return <FineloMascot type="bulls" size={size} className={className} />;
}
