"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Map, Zap, Cog, LineChart, ArrowRight } from "lucide-react";
import { SolutionData } from "@/types/solution";
import { cn } from "@/lib/utils";

export const SolutionOverview = ({ data }: { data: SolutionData }) => {
  const steps = [
    { icon: Map, title: "Strategy", desc: data.overview.strategy },
    { icon: Cog, title: "Process", desc: data.overview.process },
    { icon: Zap, title: "Automation", desc: data.overview.automation },
    { icon: LineChart, title: "Analytics", desc: data.overview.analytics },
  ];

  return (
    <section className="relative w-full bg-[#030712] py-32 z-20 overflow-hidden border-t border-white/[0.02]">
      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        
        <ScrollReveal>
          <div className="text-center max-w-[800px] mx-auto mb-24">
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              How We Solve It
            </h2>
            <p className="text-lg text-white/60 font-light leading-relaxed">
              We approach transformation holistically, moving from high-level strategy down to automated execution.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-gradient-01-end)]/20 to-transparent" />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={0.1 * i} className="relative z-10">
                <div className="flex flex-col items-start lg:items-center text-left lg:text-center group">
                  
                  <div className="w-24 h-24 rounded-3xl bg-[#0A1224] border border-white/10 flex items-center justify-center mb-8 relative group-hover:-translate-y-2 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-white/50 group-hover:text-[var(--color-gradient-01-end)] transition-colors" />
                    <div className="absolute inset-0 rounded-3xl border border-[var(--color-gradient-01-end)]/0 group-hover:border-[var(--color-gradient-01-end)]/50 transition-colors shadow-[0_0_0_rgba(59,130,246,0)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]" />
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-white mb-4 tracking-tight">
                    <span className="text-[var(--color-gradient-01-end)] mr-2">0{i + 1}.</span>
                    {step.title}
                  </h3>
                  
                  <p className="text-[15px] text-white/60 font-light leading-relaxed">
                    {step.desc}
                  </p>

                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
