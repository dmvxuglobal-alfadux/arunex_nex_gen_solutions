"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Search, ActivitySquare, Map, Cog, LineChart, TrendingUp } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: Search,
    title: "01. Discover",
    objective: "Understand your current operational friction.",
    deliverables: "Initial consultation, stakeholder interviews.",
    outcome: "Clear alignment on business challenges."
  },
  {
    icon: ActivitySquare,
    title: "02. Assess",
    objective: "Audit existing technology and workflows.",
    deliverables: "AI Readiness Report, Systems Audit.",
    outcome: "Data-driven gap analysis."
  },
  {
    icon: Map,
    title: "03. Strategize",
    objective: "Design the transformation roadmap.",
    deliverables: "Solution architecture, ROI projections.",
    outcome: "Actionable, phased implementation plan."
  },
  {
    icon: Cog,
    title: "04. Implement",
    objective: "Deploy automation and AI solutions.",
    deliverables: "System integration, workflow building.",
    outcome: "Live, connected operational systems."
  },
  {
    icon: LineChart,
    title: "05. Optimize",
    objective: "Refine models and improve adoption.",
    deliverables: "Team training, performance tuning.",
    outcome: "High user adoption and efficiency."
  },
  {
    icon: TrendingUp,
    title: "06. Scale",
    objective: "Expand capabilities across departments.",
    deliverables: "Advanced BI roll-out, predictive models.",
    outcome: "Enterprise-wide digital agility."
  }
];

export const TransformationProcess = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section ref={containerRef} className="relative w-full bg-[#030712] py-32 z-20 overflow-hidden border-t border-white/[0.02]">
      
      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-[800px] mx-auto mb-24">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-bold tracking-tight text-white mb-6">
              Our Transformation Process
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
              We don't just sell software. We partner with you through a structured, six-step methodology to ensure successful adoption and measurable ROI.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative max-w-[1000px] mx-auto">
          
          {/* Main Vertical Line (Background) */}
          <div className="absolute left-[39px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/5" />
          
          {/* Main Vertical Line (Animated Progress) */}
          <motion.div 
            className="absolute left-[39px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--color-gradient-01-start)] to-[var(--color-gradient-01-end)] origin-top"
            style={{ scaleY: scrollYProgress }}
          />

          <div className="flex flex-col gap-12 md:gap-24">
            {steps.map((step, i) => (
              <div key={i} className={cn(
                "relative flex flex-col md:flex-row items-start md:items-center",
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}>
                
                {/* Timeline Node */}
                <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0A1224] border-2 border-[var(--color-gradient-01-end)] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                   <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-gradient-01-end)]" />
                </div>

                {/* Content Panel */}
                <ScrollReveal 
                  direction={i % 2 === 0 ? "right" : "left"} 
                  delay={0.1}
                  className={cn(
                    "w-full md:w-[calc(50%-48px)] pl-20 md:pl-0",
                    i % 2 === 0 ? "md:pr-12 lg:pr-20 md:text-right" : "md:pl-12 lg:pl-20 md:text-left"
                  )}
                >
                  <div className="group p-8 rounded-[24px] bg-white/[0.02] border border-white/5 backdrop-blur-md hover:bg-white/[0.04] transition-all duration-300">
                    <div className={cn(
                      "flex items-center gap-4 mb-6",
                      i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                    )}>
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[var(--color-gradient-01-end)]/40 transition-colors shrink-0">
                        <step.icon className="w-6 h-6 text-white/60 group-hover:text-[var(--color-gradient-01-end)] transition-colors" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-white tracking-tight">
                        {step.title}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="text-[11px] font-mono text-white/30 uppercase tracking-widest mb-1.5">Objective</div>
                        <p className="text-[15px] text-white/70 font-light leading-relaxed">{step.objective}</p>
                      </div>
                      <div>
                        <div className="text-[11px] font-mono text-white/30 uppercase tracking-widest mb-1.5">Deliverables</div>
                        <p className="text-[15px] text-white/70 font-light leading-relaxed">{step.deliverables}</p>
                      </div>
                      <div>
                        <div className="text-[11px] font-mono text-[var(--color-gradient-01-end)]/70 uppercase tracking-widest mb-1.5">Outcome</div>
                        <p className="text-[15px] text-white font-medium leading-relaxed">{step.outcome}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
