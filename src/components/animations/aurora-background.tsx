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
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -inset-[10px] will-change-transform"
        >
          {/* Blob 1 */}
          <motion.div
            animate={{
              x: ["0%", "20%", "0%", "-20%", "0%"],
              y: ["0%", "20%", "0%", "-20%", "0%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 left-0 w-[50vw] h-[50vh] rounded-full bg-[var(--color-gradient-01-start)] opacity-60 blur-[160px]"
          />
          {/* Blob 2 */}
          <motion.div
            animate={{
              x: ["0%", "-30%", "0%", "30%", "0%"],
              y: ["0%", "-20%", "0%", "20%", "0%"],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/2 right-0 w-[60vw] h-[60vh] rounded-full bg-[var(--color-gradient-02-mid)] opacity-50 blur-[160px]"
          />
          {/* Blob 3 */}
          <motion.div
            animate={{
              x: ["0%", "40%", "0%", "-40%", "0%"],
              y: ["0%", "30%", "0%", "-30%", "0%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-0 left-1/4 w-[40vw] h-[40vh] rounded-full bg-[var(--color-gradient-03-end)] opacity-70 blur-[160px]"
          />
        </motion.div>
      </div>
      <div className="relative z-10 w-full h-full flex flex-col">
        {children}
      </div>
    </div>
  );
};
