"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-[80px] transition-all duration-500",
        isScrolled
          ? "bg-[#030712]/70 backdrop-blur-md border-b border-white/[0.04] shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group magnetic">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-gradient-01-start)] to-[var(--color-gradient-01-end)] flex items-center justify-center shadow-[0_0_20px_rgba(103,232,249,0.5)]">
            <div className="w-3 h-3 bg-white rounded-[4px] group-hover:scale-125 transition-transform duration-500 ease-out" />
          </div>
          <span className="font-heading font-semibold text-xl tracking-tight text-white group-hover:text-white/80 transition-colors duration-300">
            Arunex
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "Solutions", "Industries", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[15px] font-medium text-white/70 hover:text-white transition-colors duration-300 relative group py-2"
            >
              {item}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <Button className="rounded-2xl h-[52px] px-7 text-[15px] font-medium bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#3B82F6] text-white hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-250 border-0">
            Book an AI Strategy Session
          </Button>
        </div>
      </div>
    </motion.header>
  );
};
