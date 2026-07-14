"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main className={cn("relative w-full overflow-hidden bg-[#030712]", className)} {...props}>
      {/* Layer 1: Base is set by bg-[#030712] */}

      {/* Layer 2: Radial Gradients (Subtle glows) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.08)_0%,transparent_70%)] blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.06)_0%,transparent_70%)] blur-[100px]" />
        <div className="absolute top-[30%] left-[30%] w-[40%] h-[40%] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.05)_0%,transparent_70%)] blur-[120px]" />
      </div>

      {/* Layer 3: Aurora Lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.25] mix-blend-screen filter blur-[220px]">
          <motion.div
            initial={{ opacity: 0, x: "-10%", y: "-10%" }}
            animate={{
              opacity: 1,
              x: ["-10%", "10%", "-5%", "-10%"],
              y: ["-10%", "5%", "10%", "-10%"],
            }}
            transition={{
              opacity: { duration: 2 },
              x: { duration: 35, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 45, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] rounded-full bg-[#102A43]"
          />
          <motion.div
            initial={{ opacity: 0, x: "20%", y: "10%" }}
            animate={{
              opacity: 1,
              x: ["20%", "-10%", "15%", "20%"],
              y: ["10%", "20%", "-5%", "10%"],
            }}
            transition={{
              opacity: { duration: 2 },
              x: { duration: 40, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 30, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute top-[10%] right-[-10%] w-[70%] h-[70%] rounded-full bg-[#1E3A8A]"
          />
          <motion.div
            initial={{ opacity: 0, x: "0%", y: "30%" }}
            animate={{
              opacity: 1,
              x: ["0%", "20%", "-10%", "0%"],
              y: ["30%", "0%", "15%", "30%"],
            }}
            transition={{
              opacity: { duration: 2 },
              x: { duration: 45, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 35, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute bottom-[-20%] left-[10%] w-[50%] h-[50%] rounded-full bg-[#2563EB]"
          />
        </div>
      </div>

      {/* Layer 4: Tiny Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-5"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.05, 0.08, 0.05],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Layer 5: Noise Texture */}
      <div 
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.025]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </main>
  );
};
