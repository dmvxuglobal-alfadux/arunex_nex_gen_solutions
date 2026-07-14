"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Search, ActivitySquare, Map, Cog, LineChart, TrendingUp, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const stages = [
  {
    icon: Search,
    title: "1. Discover",
    description: "Understand the business. Goals. Challenges. Processes."
  },
  {
    icon: ActivitySquare,
    title: "2. Assess",
    description: "Evaluate AI readiness. Identify opportunities. Prioritize improvements."
  },
  {
    icon: Map,
    title: "3. Strategize",
    description: "Create a practical transformation roadmap. Business-first. Technology-second."
  },
  {
    icon: Cog,
    title: "4. Implement",
    description: "Deploy solutions. Integrate existing systems. Train teams."
  },
  {
    icon: LineChart,
    title: "5. Optimize",
    description: "Measure performance. Improve continuously. Refine workflows."
  },
  {
    icon: TrendingUp,
    title: "6. Scale",
    description: "Expand AI adoption. Support sustainable growth."
  }
];

export const TransformationFramework = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const quoteOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
  const quoteY = useTransform(scrollYProgress, [0.7, 0.9], [40, 0]);
  const timelineOpacity = useTransform(scrollYProgress, [0.7, 0.9], [1, 0]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#030712] py-32 z-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[500px] bg-[var(--color-gradient-01-end)]/5 blur-[120px] rounded-full pointer-events-none transition-opacity duration-1000" />
      
      <div className="container mx-auto px-6 max-w-[1440px]">
        
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-[700px] mb-20">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-bold tracking-tight text-white mb-6">
              Our Business Transformation Framework
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
              We partner with businesses to identify opportunities, implement practical AI solutions, and continuously optimize performance.
            </p>
          </div>
        </ScrollReveal>

        <motion.div style={{ opacity: timelineOpacity }} className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-20 items-center mb-32">
          
          {/* Timeline */}
          <div className="relative">
            {/* Horizontal Line Desktop */}
            <div className="hidden md:block absolute top-[28px] left-0 w-full h-[2px] bg-white/5" />
            
            {/* Vertical Line Mobile */}
            <div className="md:hidden absolute top-0 left-[28px] w-[2px] h-full bg-white/5" />

            <div className="flex flex-col md:flex-row gap-8 md:gap-4 relative z-10">
              {stages.map((stage, i) => (
                <ScrollReveal key={i} delay={0.12 * i} className="flex-1">
                  <div 
                    className="relative flex md:flex-col gap-6 md:gap-4 group cursor-pointer"
                    onMouseEnter={() => setHoveredStage(i)}
                    onMouseLeave={() => setHoveredStage(null)}
                  >
                    {/* Node */}
                    <div className={cn(
                      "w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-250 bg-[#0A1224]",
                      hoveredStage === i 
                        ? "border-[var(--color-gradient-01-end)]/50 shadow-[0_0_20px_rgba(59,130,246,0.2)] scale-110" 
                        : "border-white/10"
                    )}>
                      <stage.icon className={cn(
                        "w-6 h-6 transition-all duration-250",
                        hoveredStage === i ? "text-[var(--color-gradient-01-end)] rotate-6" : "text-white/60"
                      )} />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col pt-2 md:pt-4">
                      <h3 className="text-lg font-semibold text-white mb-2 whitespace-nowrap">
                        {stage.title}
                      </h3>
                      <div className={cn(
                        "text-sm text-white/50 font-light leading-relaxed transition-all duration-250",
                        hoveredStage === i ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 md:absolute md:top-full md:mt-2 md:w-[150px]"
                      )}>
                        {stage.description}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Visual Support (Abstract Nodes) */}
          <ScrollReveal direction="right" delay={0.4} className="hidden lg:flex flex-col items-center justify-center">
             <div className="relative w-full aspect-square max-w-[300px] border border-white/5 bg-white/[0.02] rounded-full flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0%,transparent_70%)]" />
                
                {['Business', 'AI', 'Automation', 'Analytics', 'Growth'].map((label, i) => (
                  <motion.div 
                    key={label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (i * 0.15) }}
                    className="flex flex-col items-center z-10"
                  >
                    <div className="text-xs font-mono text-[var(--color-gradient-01-end)] tracking-widest uppercase mb-1 bg-[#0A1224] px-3 py-1 rounded-full border border-[var(--color-gradient-01-end)]/30">
                      {label}
                    </div>
                    {i < 4 && (
                      <ArrowRight className="w-4 h-4 text-white/20 rotate-90 my-1" />
                    )}
                  </motion.div>
                ))}
             </div>
          </ScrollReveal>

        </motion.div>

        {/* Transition Quote */}
        <motion.div style={{ opacity: quoteOpacity, y: quoteY }} className="w-full text-center pb-20">
          <p className="font-heading text-3xl md:text-5xl leading-[1.2] font-medium tracking-tight text-white/90">
            "Technology alone doesn't transform businesses.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gradient-01-start)] to-[var(--color-gradient-01-end)]">Strategy does.</span>"
          </p>
        </motion.div>

      </div>
    </section>
  );
};
