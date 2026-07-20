"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SolutionData } from "@/types/solution";
import { 
  Search, Workflow, LayoutDashboard, Users, 
  TrendingUp, MessageCircle, BarChart3, Bot, 
  Network, ShieldCheck, BrainCircuit, Globe 
} from "lucide-react";
import { createElement } from "react";

const IconMap: Record<string, any> = {
  Search, Workflow, LayoutDashboard, Users,
  TrendingUp, MessageCircle, BarChart3, Bot,
  Network, ShieldCheck, BrainCircuit, Globe
};

export const CapabilityGrid = ({ data }: { data: SolutionData }) => {
  return (
    <section className="relative w-full bg-[#030712] py-32 z-20 overflow-hidden border-t border-white/[0.02]">
      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        
        <ScrollReveal>
          <div className="text-center max-w-[800px] mx-auto mb-20">
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Core Capabilities
            </h2>
            <p className="text-lg text-white/60 font-light leading-relaxed">
              What you get when you deploy this solution into your operations.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px] mx-auto">
          {data.capabilities.map((cap, i) => {
            const Icon = IconMap[cap.iconName] || Globe; // fallback
            return (
              <ScrollReveal key={i} delay={0.1 * i}>
                <div className="group h-full p-8 rounded-[24px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:border-[var(--color-gradient-01-end)]/40 transition-colors">
                    <Icon className="w-6 h-6 text-white/60 group-hover:text-[var(--color-gradient-01-end)] transition-colors" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-4">
                    {cap.title}
                  </h3>
                  <p className="text-[15px] text-white/60 font-light leading-relaxed mb-8">
                    {cap.description}
                  </p>
                  <div className="pt-6 border-t border-white/5">
                    <div className="text-[11px] font-mono text-[var(--color-gradient-01-end)]/70 uppercase tracking-widest mb-2">Business Benefit</div>
                    <div className="text-[15px] text-white/90 font-medium">{cap.benefit}</div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
