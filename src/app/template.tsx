"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { motionTokens } from "@/lib/motion-tokens";

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ 
        duration: motionTokens.duration.pageTransition, 
        ease: motionTokens.ease.standard 
      }}
    >
      {children}
    </motion.div>
  );
}
