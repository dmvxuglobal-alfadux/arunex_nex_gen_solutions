"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Building2, Users, TrendingUp, Target } from "lucide-react";
import { SolutionData } from "@/types/solution";

export const TargetAudience = ({ data }: { data: SolutionData }) => {
  const cards = [
    { icon: Building2, label: "Business Size", value: data.audience.businessSize },
    { icon: Users, label: "Team Size", value: data.audience.teamSize },
    { icon: TrendingUp, label: "Growth Stage", value: data.audience.growthStage },
    { icon: Target, label: "Primary Goals", value: data.audience.goals }
  ];

  return (
    <section className="relative w-full bg-[#030712] py-32 z-20 overflow-hidden border-t border-white/[0.02]">
      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        
        <ScrollReveal>
          <div className="text-center max-w-[800px] mx-auto mb-20">
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Who Is This Solution For?
            </h2>
            <p className="text-lg text-white/60 font-light leading-relaxed">
              We design our transformation packages specifically for organizations at this stage of maturity.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <div className="group h-full p-8 rounded-[24px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#0A1224] border border-white/10 flex items-center justify-center mb-6 group-hover:border-[var(--color-gradient-01-end)]/40 transition-colors">
                  <card.icon className="w-6 h-6 text-white/60 group-hover:text-[var(--color-gradient-01-end)] transition-colors" />
                </div>
                <div className="text-[12px] font-mono text-[var(--color-gradient-01-end)]/70 uppercase tracking-widest mb-3">
                  {card.label}
                </div>
                <h3 className="text-[17px] font-medium text-white leading-relaxed">
                  {card.value}
                </h3>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
