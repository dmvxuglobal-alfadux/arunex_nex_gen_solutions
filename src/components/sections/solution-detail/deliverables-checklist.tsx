"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Check } from "lucide-react";
import { SolutionData } from "@/types/solution";

export const DeliverablesChecklist = ({ data }: { data: SolutionData }) => {
  return (
    <section className="relative w-full bg-[#030712] py-32 z-20 overflow-hidden border-t border-white/[0.02]">
      <div className="container mx-auto px-6 max-w-[1000px] relative z-10">
        
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              What's Included
            </h2>
            <p className="text-lg text-white/60 font-light">
              Everything you need to successfully deploy this solution.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {data.deliverables.map((item, i) => (
            <ScrollReveal key={i} delay={0.05 * i}>
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30 shrink-0">
                  <Check className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-[16px] text-white/80 font-medium">{item}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
