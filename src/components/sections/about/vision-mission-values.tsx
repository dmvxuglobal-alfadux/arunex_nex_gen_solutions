"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Eye, Rocket, Star, Briefcase, Zap, Shield, Sparkles, TrendingUp, Heart } from "lucide-react";

const values = [
  { icon: Briefcase, title: "Business First" },
  { icon: Zap, title: "Innovation" },
  { icon: Shield, title: "Integrity" },
  { icon: Sparkles, title: "Simplicity" },
  { icon: TrendingUp, title: "Continuous Improvement" },
  { icon: Heart, title: "Customer Success" },
];

export const VisionMissionValues = () => {
  return (
    <section className="relative w-full bg-[#030712] py-32 z-20 overflow-hidden border-t border-white/[0.02]">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Vision Card */}
          <ScrollReveal delay={0.1}>
            <div className="group h-full p-10 rounded-[32px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-[var(--color-gradient-01-end)]/30 transition-all duration-300 flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-[#0A1224] border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all">
                <Eye className="w-8 h-8 text-[var(--color-gradient-01-end)]" />
              </div>
              <h3 className="font-heading text-3xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-[20px] text-white/70 font-light leading-relaxed">
                Empower businesses worldwide through intelligent, scalable digital transformation.
              </p>
            </div>
          </ScrollReveal>

          {/* Mission Card */}
          <ScrollReveal delay={0.2}>
            <div className="group h-full p-10 rounded-[32px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-emerald-500/30 transition-all duration-300 flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-[#0A1224] border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all">
                <Rocket className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="font-heading text-3xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-[20px] text-white/70 font-light leading-relaxed">
                Help organizations grow using practical AI, automation, analytics, and digital innovation.
              </p>
            </div>
          </ScrollReveal>

          {/* Core Values Card */}
          <ScrollReveal delay={0.3}>
            <div className="group h-full p-10 rounded-[32px] bg-[#0A1224]/80 backdrop-blur-xl border border-white/10 flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Star className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="font-heading text-3xl font-bold text-white">Core Values</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                {values.map((val, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <val.icon className="w-4 h-4 text-white/60" />
                    </div>
                    <span className="text-[15px] font-medium text-white/90">{val.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
