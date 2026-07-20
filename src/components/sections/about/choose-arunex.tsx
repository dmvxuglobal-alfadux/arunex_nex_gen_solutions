"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Briefcase, Zap, ZapOff, ArrowRightLeft, ShieldCheck, Handshake, BarChart3, CloudCog } from "lucide-react";

const reasons = [
  {
    icon: Briefcase,
    title: "Business-First Strategy",
    description: "We don't sell technology for technology's sake. Every solution we deploy must tie back directly to measurable business growth, cost reduction, or risk mitigation.",
  },
  {
    icon: Zap,
    title: "Practical AI Adoption",
    description: "We avoid the hype. We focus on deploying practical, battle-tested AI and automation that your team can actually understand, use, and benefit from immediately.",
  },
  {
    icon: BarChart3,
    title: "Faster Decision Making",
    description: "By breaking down data silos and implementing centralized executive dashboards, we give leadership the real-time visibility needed to make confident decisions.",
  },
  {
    icon: ArrowRightLeft,
    title: "Operational Efficiency",
    description: "We eliminate manual data entry, automate repetitive workflows, and streamline operations so your team can focus on high-value, strategic work.",
  },
  {
    icon: CloudCog,
    title: "Scalable Transformation",
    description: "We build on modular, cloud-native architectures. The systems we design today will seamlessly handle your growth and volume tomorrow without needing a complete rewrite.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description: "We are not a traditional agency that builds and leaves. We act as your fractional innovation team, continuously optimizing your systems as your business evolves.",
  }
];

export const ChooseArunex = () => {
  return (
    <section className="relative w-full bg-[#030712] py-32 z-20 overflow-hidden border-t border-white/[0.02]">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        
        <ScrollReveal>
          <div className="text-center max-w-[800px] mx-auto mb-20">
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Why Businesses Choose Arunex
            </h2>
            <p className="text-lg text-white/60 font-light leading-relaxed">
              We deliver measurable advantages that generic IT service providers simply cannot match.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <ScrollReveal key={i} delay={0.05 * i}>
              <div className="group h-full p-8 rounded-3xl bg-[#0A1224]/50 backdrop-blur-sm border border-white/5 hover:bg-white/[0.04] hover:border-[var(--color-gradient-01-end)]/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-[var(--color-gradient-01-end)]/10 transition-colors">
                  <reason.icon className="w-5 h-5 text-white/60 group-hover:text-[var(--color-gradient-01-end)] transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                  {reason.title}
                </h3>
                <p className="text-[15px] text-white/60 font-light leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
