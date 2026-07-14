"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Brain, Cpu, RefreshCw, BarChart } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Brain,
    title: "Business-First Thinking",
    description: "Every engagement begins with understanding business goals, operational challenges, and growth opportunities before recommending technology."
  },
  {
    icon: Cpu,
    title: "Practical AI Adoption",
    description: "Solutions are designed to integrate with existing operations, making AI accessible without disrupting the business."
  },
  {
    icon: RefreshCw,
    title: "End-to-End Transformation",
    description: "From strategy and implementation to optimization and continuous improvement, Arunex supports every stage of transformation."
  },
  {
    icon: BarChart,
    title: "Scalable Growth",
    description: "Solutions evolve alongside the business, supporting growth from emerging SMEs to enterprise-scale operations."
  }
];

export const WhyArunex = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const cardsY = useTransform(scrollYProgress, [0.6, 0.8], [0, -100]);
  const cardsOpacity = useTransform(scrollYProgress, [0.6, 0.8], [1, 0.1]);
  const statementOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const bgLightOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0.1, 0.3]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#030712] py-32 z-20 overflow-hidden">
      
      {/* Dynamic Background Light */}
      <motion.div 
        style={{ opacity: bgLightOpacity }} 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[var(--color-gradient-01-end)] blur-[150px] rounded-full pointer-events-none" 
      />

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-[700px] mx-auto mb-24">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-bold tracking-tight text-white mb-6">
              Business Transformation, Not Just Technology Implementation
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
              We focus on measurable business outcomes—productivity, efficiency, and better decision-making—rather than simply deploying software.
            </p>
          </div>
        </ScrollReveal>

        {/* 2x2 Feature Grid */}
        <motion.div style={{ y: cardsY, opacity: cardsOpacity }} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
          {features.map((feature, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <div className="group relative w-full rounded-[32px] bg-[#0A1224]/80 backdrop-blur-2xl border border-white/5 p-8 md:p-10 transition-all duration-300 hover:-translate-y-2 hover:bg-[#0A1224] overflow-hidden flex flex-col md:flex-row items-start gap-8">
                
                {/* Gradient Edge Lighting */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gradient-01-end)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px] pointer-events-none" />
                
                {/* Border Glow */}
                <div className="absolute inset-0 border border-white/0 rounded-[32px] pointer-events-none transition-all duration-300 group-hover:border-[var(--color-gradient-01-end)]/30 group-hover:scale-[1.01]" />

                <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-white/70 group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                </div>
                
                <div className="relative z-10 flex-1">
                  <h3 className="font-heading text-2xl font-semibold text-white mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 text-[17px] leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </motion.div>

        {/* Transition Out Statement */}
        <motion.div style={{ opacity: statementOpacity }} className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full text-center px-6 pointer-events-none">
          <h2 className="font-heading text-4xl md:text-[56px] leading-[1.1] font-bold tracking-tight text-white">
            Every business is different.<br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gradient-01-start)] to-[var(--color-gradient-01-end)]">
              Every transformation should be too.
            </span>
          </h2>
        </motion.div>

      </div>
    </section>
  );
};
