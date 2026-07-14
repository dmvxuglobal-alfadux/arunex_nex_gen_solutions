"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Clock, LineChart, Target, Zap, Network, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const challenges = [
  {
    icon: Clock,
    title: "Manual Work Slows Everything Down",
    description: "Your team spends valuable time repeating tasks that could be automated."
  },
  {
    icon: LineChart,
    title: "Important Decisions Lack Clear Data",
    description: "Business leaders often rely on fragmented reports instead of real-time insights."
  },
  {
    icon: Target,
    title: "Sales Opportunities Get Lost",
    description: "Without connected systems, follow-ups become inconsistent and revenue slips away."
  },
  {
    icon: Zap,
    title: "Customer Expectations Keep Rising",
    description: "Clients expect faster responses, better service, and seamless experiences."
  },
  {
    icon: Network,
    title: "Teams Work in Silos",
    description: "Departments use disconnected tools that reduce productivity and visibility."
  },
  {
    icon: ArrowUpRight,
    title: "Growth Creates Operational Complexity",
    description: "As businesses expand, manual processes become difficult to manage efficiently."
  }
];

export const BusinessReality = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create a scroll-linked transition for the full-width statement
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const statementOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const cardsOpacity = useTransform(scrollYProgress, [0.6, 0.8], [1, 0.3]);
  const statementY = useTransform(scrollYProgress, [0.6, 0.8], [40, 0]);

  return (
    <section ref={containerRef} className="relative w-full bg-gradient-to-b from-[#030712] via-[#050B1A] to-[#030712] py-32 z-20">
      <div className="container mx-auto px-6 max-w-[1440px]">
        
        {/* Heading */}
        <ScrollReveal>
          <div className="text-center max-w-[700px] mx-auto mb-20">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-bold tracking-tight text-white mb-6">
              Growing a Business Shouldn't Mean Growing Complexity.
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
              Many growing businesses struggle because their systems, data, and teams become disconnected.
            </p>
          </div>
        </ScrollReveal>

        {/* Challenge Cards Grid */}
        <motion.div style={{ opacity: cardsOpacity }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {challenges.map((challenge, i) => (
            <ScrollReveal key={i} delay={0.12 * i}>
              <div className="group relative rounded-[24px] bg-white/[0.02] border border-white/5 p-8 overflow-hidden transition-all duration-250 hover:-translate-y-1 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:border-white/10">
                {/* Subtle Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-250 pointer-events-none" />
                
                {/* Border Animation */}
                <div className="absolute inset-0 border border-white/0 rounded-[24px] pointer-events-none transition-all duration-250 group-hover:border-[var(--color-gradient-01-end)]/30 group-hover:scale-[1.01]" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[var(--color-gradient-01-end)]/40 transition-colors duration-250">
                    <challenge.icon className="w-5 h-5 text-white/70 group-hover:text-white group-hover:scale-110 group-hover:-translate-y-0.5 transition-all duration-250" />
                  </div>
                  <h3 className="text-[20px] font-semibold text-white mb-3 tracking-tight">
                    {challenge.title}
                  </h3>
                  <p className="text-[15px] text-white/50 leading-relaxed font-light">
                    {challenge.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </motion.div>

        {/* Full-width Transition Statement */}
        <motion.div style={{ opacity: statementOpacity, y: statementY }} className="w-full text-center pb-20">
          <h2 className="font-heading text-3xl md:text-5xl lg:text-[64px] leading-[1.1] font-bold tracking-tight">
            <span className="text-white/60">The businesses that grow fastest aren't working harder.</span><br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gradient-01-start)] via-[var(--color-gradient-01-mid1)] to-[var(--color-gradient-01-end)] animate-shimmer">They're working smarter.</span>
          </h2>
        </motion.div>

      </div>
    </section>
  );
};
