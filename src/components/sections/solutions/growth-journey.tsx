"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Rocket, TrendingUp, Maximize, Building2, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const stages = [
  {
    icon: Rocket,
    title: "Starting Business",
    challenge: "Manual processes, disconnected tools.",
    outcome: "Establishing digital foundations.",
    recommendation: "AI Business Starter"
  },
  {
    icon: TrendingUp,
    title: "Growing Business",
    challenge: "Sales friction, disjointed marketing.",
    outcome: "Intelligent automation and scaling.",
    recommendation: "AI Growth Accelerator"
  },
  {
    icon: Maximize,
    title: "Scaling Business",
    challenge: "Data silos, operational complexity.",
    outcome: "Cross-department integration.",
    recommendation: "CEO Intelligence Suite"
  },
  {
    icon: Building2,
    title: "Enterprise Business",
    challenge: "Legacy systems, lack of agility.",
    outcome: "Enterprise-wide AI transformation.",
    recommendation: "Digital Enterprise"
  }
];

export const GrowthJourney = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const timelineOpacity = useTransform(scrollYProgress, [0.6, 0.8], [1, 0.3]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#030712] py-32 z-20 overflow-hidden border-t border-white/[0.02]">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[500px] bg-[var(--color-gradient-01-end)]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-[700px] mx-auto mb-24">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-bold tracking-tight text-white mb-6">
              The Business Growth Journey
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
              Identify where your business currently stands, and discover the transformation solutions built specifically for your stage of growth.
            </p>
          </div>
        </ScrollReveal>

        <motion.div style={{ opacity: timelineOpacity }} className="relative mb-20">
          
          {/* Horizontal Line Desktop */}
          <div className="hidden lg:block absolute top-[120px] left-[5%] w-[90%] h-[2px] bg-white/5" />
          
          {/* Vertical Line Mobile */}
          <div className="lg:hidden absolute top-[20px] left-[40px] w-[2px] h-[calc(100%-40px)] bg-white/5" />

          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-6 relative z-10">
            {stages.map((stage, i) => (
              <ScrollReveal key={i} delay={0.1 * i} className="flex-1">
                <div 
                  className="group relative flex flex-col items-start lg:items-center cursor-pointer pl-24 lg:pl-0"
                  onMouseEnter={() => setHoveredStage(i)}
                  onMouseLeave={() => setHoveredStage(null)}
                >
                  
                  {/* Connecting line active state (Desktop) */}
                  {i < stages.length - 1 && (
                    <div className={cn(
                      "hidden lg:block absolute top-[120px] left-[50%] w-full h-[2px] pointer-events-none transition-all duration-500 z-[-1]",
                      hoveredStage === i ? "bg-[var(--color-gradient-01-end)]/50" : "bg-transparent"
                    )} />
                  )}

                  {/* Node Card Container */}
                  <div className={cn(
                    "w-full lg:w-full p-6 lg:p-8 rounded-[24px] bg-white/[0.02] border border-white/5 backdrop-blur-xl transition-all duration-300 relative",
                    "lg:mt-0 lg:mb-8",
                    hoveredStage === i ? "bg-[#0A1224] border-[var(--color-gradient-01-end)]/30 shadow-[0_0_30px_rgba(59,130,246,0.15)] -translate-y-2 lg:-translate-y-4" : "hover:bg-white/[0.04]"
                  )}>
                    
                    {/* Node Icon Absolute (Mobile) or Relative (Desktop) */}
                    <div className={cn(
                      "absolute lg:static left-[-72px] top-1/2 -translate-y-1/2 lg:translate-y-0 lg:mx-auto w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 bg-[#0A1224] border lg:mb-6",
                      hoveredStage === i ? "border-[var(--color-gradient-01-end)]/50 text-[var(--color-gradient-01-end)] scale-110" : "border-white/10 text-white/50"
                    )}>
                      <stage.icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-4 lg:text-center tracking-tight">
                      {stage.title}
                    </h3>
                    
                    <div className="space-y-4 text-[14px]">
                      <div>
                        <div className="text-white/30 font-mono text-[11px] uppercase tracking-wider mb-1">Challenge</div>
                        <div className="text-white/70 font-light">{stage.challenge}</div>
                      </div>
                      <div>
                        <div className="text-[var(--color-gradient-01-end)]/70 font-mono text-[11px] uppercase tracking-wider mb-1">Outcome</div>
                        <div className="text-white font-medium">{stage.outcome}</div>
                      </div>
                    </div>

                    {/* Recommendation Badge */}
                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between lg:justify-center lg:gap-2">
                      <span className="text-[13px] font-semibold text-white/80 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                        {stage.recommendation}
                      </span>
                      <ArrowRight className={cn(
                        "w-4 h-4 text-white/40 transition-transform duration-300 lg:hidden",
                        hoveredStage === i && "translate-x-1 text-white"
                      )} />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
