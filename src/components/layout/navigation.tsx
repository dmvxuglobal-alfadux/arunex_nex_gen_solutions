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
          ? "bg-[#050505]/60 backdrop-blur-2xl border-b border-white/[0.04]"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group magnetic">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-gradient-01-start)] to-[var(--color-gradient-01-end)] flex items-center justify-center shadow-[0_0_20px_rgba(94,234,212,0.5)]">
            <div className="w-3 h-3 bg-white rounded-[4px] group-hover:scale-125 transition-transform duration-500 ease-out" />
          </div>
          <span className="font-heading font-semibold text-xl tracking-tight text-white group-hover:text-white/80 transition-colors duration-300">
            Arunex
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {["Platform", "Solutions", "Customers", "Company"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-muted hover:text-white transition-colors duration-300 relative group py-2"
            >
              {item}
              <span className="absolute left-0 bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full opacity-50" />
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex text-white hover:bg-white/10 rounded-full h-10 px-5">
            Sign In
          </Button>
          <Button className="rounded-full h-10 px-6 text-sm">
            Get Started
          </Button>
        </div>
      </div>
    </motion.header>
  );
};
