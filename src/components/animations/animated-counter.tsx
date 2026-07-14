"use client";
import React, { useEffect, useState, useRef } from "react";
import { useInView, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const AnimatedCounter = ({
  from = 0,
  to,
  duration = 2,
  suffix = "",
  prefix = "",
  className,
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      const rawPercentage = Math.min(progress / (duration * 1000), 1);
      // Ease out cubic
      const percentage = 1 - Math.pow(1 - rawPercentage, 3);
      
      setCount(Math.floor(from + (to - from) * percentage));

      if (progress < duration * 1000) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [from, to, duration, isInView]);

  return (
    <motion.div ref={ref} className={cn("", className)}>
      {prefix}{count}{suffix}
    </motion.div>
  );
};
