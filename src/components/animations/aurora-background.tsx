"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
}

export const AuroraBackground = ({
  className,
  children,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col h-full min-h-screen items-center justify-center bg-background text-foreground transition-bg overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 will-change-transform"
        >
          {/* Soft Sapphire Glow (Top) */}
          <div
            className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] rounded-full blur-[200px] pointer-events-none"
            style={{ backgroundColor: "rgba(37,99,235,0.18)" }}
          />
          
          {/* Deep Navy Glow (Bottom Left) */}
          <div
            className="absolute bottom-0 -left-[10%] w-[50vw] h-[50vh] rounded-full blur-[240px] pointer-events-none"
            style={{ backgroundColor: "rgba(29,78,216,0.15)" }}
          />
          
          {/* Blue Glow (Bottom Right) */}
          <div
            className="absolute bottom-0 -right-[10%] w-[40vw] h-[40vh] rounded-full blur-[180px] pointer-events-none"
            style={{ backgroundColor: "rgba(59,130,246,0.12)" }}
          />

          {/* Soft Cyan Highlight (Far Bottom Right) */}
          <div
            className="absolute -bottom-[20%] right-0 w-[30vw] h-[30vh] rounded-full blur-[260px] pointer-events-none"
            style={{ backgroundColor: "rgba(147,197,253,0.08)" }}
          />
        </motion.div>
      </div>
      <div className="relative z-10 w-full h-full flex flex-col">
        {children}
      </div>
    </div>
  );
};
