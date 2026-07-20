"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { AnimatedCounter } from "@/components/animations/animated-counter";
import { SolutionData } from "@/types/solution";

export const BusinessOutcomes = ({ data }: { data: SolutionData }) => {
  return (
    <section className="relative w-full bg-[#030712] py-32 z-20 overflow-hidden border-t border-white/[0.02]">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[var(--color-gradient-01-end)]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        
        <ScrollReveal>
          <div className="text-center max-w-[800px] mx-auto mb-20">
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Measurable Outcomes
            </h2>
            <p className="text-lg text-white/60 font-light leading-relaxed">
              We focus entirely on the metrics that matter to your bottom line.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          {data.outcomes.map((outcome, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <div className="group h-full p-10 rounded-[24px] bg-[#0A1224]/80 backdrop-blur-xl border border-white/10 hover:-translate-y-2 transition-all duration-500 shadow-[0_30px_100px_rgba(0,0,0,0.3)] hover:shadow-[0_40px_120px_rgba(59,130,246,0.15)] flex flex-col items-center text-center">
                
                <h4 className="text-[14px] font-medium text-white/50 uppercase tracking-widest mb-6">
                  {outcome.label}
                </h4>
                
                <div className="text-6xl lg:text-[80px] font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 flex items-baseline gap-1 mb-6">
                  <AnimatedCounter from={0} to={outcome.value} duration={2.5} />
                  <span className="text-4xl lg:text-[56px] text-[var(--color-gradient-01-end)]">{outcome.suffix}</span>
                </div>
                
                <p className="text-[15px] text-white/70 font-light leading-relaxed">
                  {outcome.description}
                </p>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
