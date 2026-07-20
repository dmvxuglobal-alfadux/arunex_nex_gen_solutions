"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { AlertCircle } from "lucide-react";
import { SolutionData } from "@/types/solution";

export const BusinessChallenges = ({ data }: { data: SolutionData }) => {
  return (
    <section className="relative w-full bg-[#030712] py-32 z-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        <ScrollReveal>
          <div className="text-center max-w-[800px] mx-auto mb-20">
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              The Challenges We Solve
            </h2>
            <p className="text-lg text-white/60 font-light leading-relaxed">
              Operational friction slows down growth. This package is engineered to directly eliminate these specific bottlenecks.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.challenges.map((challenge, i) => (
            <ScrollReveal key={i} delay={0.05 * i}>
              <div className="group h-full p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-red-500/[0.02] hover:border-red-500/20 transition-all duration-300 flex items-start gap-4">
                <div className="mt-1">
                  <AlertCircle className="w-5 h-5 text-white/30 group-hover:text-red-400 transition-colors" />
                </div>
                <p className="text-[15px] text-white/70 font-light leading-relaxed">
                  {challenge}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
