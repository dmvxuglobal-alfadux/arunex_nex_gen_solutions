"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Activity, Factory, ShoppingBag, Briefcase, GraduationCap, Building2, Truck, HardHat, Home, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const industries = [
  { icon: Activity, title: "Healthcare", desc: "Improve operational efficiency and patient experience." },
  { icon: Factory, title: "Manufacturing", desc: "Optimize production workflows and operational visibility." },
  { icon: ShoppingBag, title: "Retail", desc: "Deliver smarter customer engagement and inventory intelligence." },
  { icon: Briefcase, title: "Professional Services", desc: "Increase productivity through AI-assisted operations." },
  { icon: GraduationCap, title: "Education", desc: "Modernize learning and administrative processes." },
  { icon: Building2, title: "Financial Services", desc: "Improve reporting, compliance, and decision-making." },
  { icon: Truck, title: "Logistics", desc: "Increase visibility across supply chains and operations." },
  { icon: HardHat, title: "Construction", desc: "Digitize project management and field operations." },
  { icon: Home, title: "Real Estate", desc: "Automate lead management and improve customer engagement." }
];

export const Industries = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const gridY = useTransform(scrollYProgress, [0.7, 0.9], [0, 100]);
  const gridOpacity = useTransform(scrollYProgress, [0.7, 0.9], [1, 0]);
  const statementOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#030712] py-32 z-20 overflow-hidden">
      
      {/* Animated Background Network */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="white" />
              <path d="M 50 0 L 50 100 M 0 50 L 100 50 M 50 50 L 100 100 M 50 50 L 0 0" stroke="white" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-[700px] mx-auto mb-20">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-bold tracking-tight text-white mb-6">
              Designed for Businesses Across Industries
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
              Every industry faces unique operational challenges. We tailor transformation strategies to meet your exact sector requirements.
            </p>
          </div>
        </ScrollReveal>

        {/* 3x3 Grid */}
        <motion.div style={{ y: gridY, opacity: gridOpacity }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-40 relative">
          
          {/* Subtle glow reacting to grid */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[var(--color-gradient-01-end)]/10 blur-[120px] rounded-full pointer-events-none" />

          {industries.map((item, i) => (
            <ScrollReveal key={i} delay={0.05 * i}>
              <div className="group relative w-full h-full rounded-[24px] bg-white/[0.02] border border-white/5 p-8 transition-all duration-300 hover:bg-white/[0.04] overflow-hidden cursor-pointer">
                
                {/* Gradient Border on Hover */}
                <div className="absolute inset-0 border border-white/0 rounded-[24px] pointer-events-none transition-all duration-300 group-hover:border-[var(--color-gradient-01-end)]/40" />

                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--color-gradient-01-start)]/50">
                    <item.icon className="w-6 h-6 text-white/70 group-hover:text-[var(--color-gradient-01-end)] transition-colors" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/0 group-hover:text-white/40 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                </div>
                
                <div className="relative z-10">
                  <h3 className="font-heading text-xl font-semibold text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-[15px] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </motion.div>

        {/* Transition Out Statement */}
        <motion.div style={{ opacity: statementOpacity }} className="w-full text-center px-6 pointer-events-none pb-20">
          <h2 className="font-heading text-3xl md:text-5xl lg:text-[56px] leading-[1.2] font-bold tracking-tight text-white max-w-[1000px] mx-auto">
            Transformation is stronger when <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gradient-01-start)] to-[var(--color-gradient-01-end)]">technology, talent, and learning</span> work together.
          </h2>
        </motion.div>

      </div>
    </section>
  );
};
