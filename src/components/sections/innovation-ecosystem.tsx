"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const ecosystemNodes = [
  { id: "vxu", title: "VXU Global", desc: "International education and career pathways." },
  { id: "fs", title: "Future Skills", desc: "Preparing professionals for emerging technologies." },
  { id: "alfa", title: "AlfaDux", desc: "Executive education and leadership development." },
  { id: "acad", title: "Arunex Academy", desc: "Practical AI, analytics, and automation capability building." },
  { id: "gen", title: "Arunex Gen Solutions", desc: "Business transformation consulting and implementation." },
  { id: "proj", title: "Global Client Projects", desc: "Real-world transformation initiatives." },
  { id: "growth", title: "Business Growth", desc: "Measurable operational and strategic outcomes." },
  { id: "career", title: "Career Outcomes", desc: "Experience-driven talent development." }
];

export const InnovationEcosystem = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const bgLightOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.4, 0.2]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#030712] py-40 z-20 overflow-hidden">
      
      {/* Background Radial Glow */}
      <motion.div 
        style={{ opacity: bgLightOpacity }} 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[600px] bg-[var(--color-gradient-01-end)] blur-[200px] rounded-full pointer-events-none" 
      />

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-[800px] mx-auto mb-32">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-bold tracking-tight text-white mb-6">
              An Ecosystem Designed for Continuous Innovation
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
              Arunex is more than a consulting company. We operate within a connected ecosystem that develops talent, delivers innovation, and creates long-term business value.
            </p>
          </div>
        </ScrollReveal>

        {/* Ecosystem Visualization */}
        <div className="relative w-full mb-40">
          
          {/* Desktop Horizontal Line */}
          <div className="hidden lg:block absolute top-[80px] left-0 w-full h-[1px] bg-white/10 pointer-events-none">
             {/* Animated Energy Pulse (CSS animation defined in globals or inline) */}
             <div className="absolute top-[-1px] left-0 w-[100px] h-[3px] bg-[var(--color-gradient-01-end)] rounded-full blur-[2px] animate-[pulse-horizontal_8s_ease-in-out_infinite]" style={{ boxShadow: '0 0 20px 2px rgba(59,130,246,0.8)' }} />
          </div>

          {/* Mobile Vertical Line */}
          <div className="lg:hidden absolute top-0 left-[80px] w-[1px] h-full bg-white/10 pointer-events-none">
             <div className="absolute top-0 left-[-1px] w-[3px] h-[100px] bg-[var(--color-gradient-01-end)] rounded-full blur-[2px] animate-[pulse-vertical_8s_ease-in-out_infinite]" style={{ boxShadow: '0 0 20px 2px rgba(59,130,246,0.8)' }} />
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-4 relative z-10">
            {ecosystemNodes.map((node, i) => (
              <ScrollReveal key={i} delay={0.1 * i} className="flex-1 flex flex-row lg:flex-col items-center lg:items-center gap-6 lg:gap-8 group relative" >
                
                {/* Connecting Line Brightener on Hover (Desktop) */}
                {i < ecosystemNodes.length - 1 && (
                  <div className={cn(
                    "hidden lg:block absolute top-[80px] left-[50%] w-full h-[2px] pointer-events-none transition-colors duration-500 z-[-1]",
                    hoveredNode === i ? "bg-[var(--color-gradient-01-end)]/50" : "bg-transparent"
                  )} />
                )}

                {/* Node Circle */}
                <div 
                  onMouseEnter={() => setHoveredNode(i)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className="w-[160px] h-[160px] rounded-full bg-[#0A1224]/80 backdrop-blur-xl border border-white/10 flex items-center justify-center text-center p-4 cursor-pointer transition-all duration-300 group-hover:border-[var(--color-gradient-01-end)]/50 group-hover:bg-[#0A1224] group-hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] group-hover:scale-105 shrink-0 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gradient-01-end)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-full" />
                  <span className="font-heading font-semibold text-white/90 text-[15px] group-hover:text-white relative z-10">
                    {node.title}
                  </span>
                </div>

                {/* Node Details */}
                <div className="flex-1 lg:text-center">
                  <div className={cn(
                    "text-[14px] text-white/50 font-light leading-relaxed transition-all duration-300 lg:absolute lg:top-[200px] lg:left-1/2 lg:-translate-x-1/2 lg:w-[180px]",
                    hoveredNode === i ? "opacity-100 translate-y-0 lg:text-white/80" : "opacity-100 lg:opacity-0 lg:-translate-y-2"
                  )}>
                    {node.desc}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Final Statement */}
        <ScrollReveal delay={0.4}>
          <div className="w-full text-center mt-32">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[64px] leading-[1.1] font-bold tracking-tight text-white max-w-[1000px] mx-auto">
              Technology Creates Possibilities.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gradient-01-start)] via-[var(--color-gradient-01-mid1)] to-[var(--color-gradient-01-end)] animate-shimmer">
                Ecosystems Create Sustainable Advantage.
              </span>
            </h2>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
