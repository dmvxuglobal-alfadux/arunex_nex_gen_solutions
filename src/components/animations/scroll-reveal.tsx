"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  className?: string;
}

export const ScrollReveal = ({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.7,
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getVariants = () => {
    switch (direction) {
      case "up":
        return {
          hidden: { opacity: 0, y: 30, scale: 0.98 },
          visible: { opacity: 1, y: 0, scale: 1 },
        };
      case "down":
        return {
          hidden: { opacity: 0, y: -30, scale: 0.98 },
          visible: { opacity: 1, y: 0, scale: 1 },
        };
      case "left":
        return {
          hidden: { opacity: 0, x: 30, scale: 0.98 },
          visible: { opacity: 1, x: 0, scale: 1 },
        };
      case "right":
        return {
          hidden: { opacity: 0, x: -30, scale: 0.98 },
          visible: { opacity: 1, x: 0, scale: 1 },
        };
      case "none":
        return {
          hidden: { opacity: 0, scale: 0.98 },
          visible: { opacity: 1, scale: 1 },
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={getVariants()}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
