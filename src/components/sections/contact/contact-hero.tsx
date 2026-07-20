"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { AuroraBackground } from "@/components/animations/aurora-background";
import { MagneticWrapper } from "@/components/animations/magnetic-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const ContactHero = () => {
  return (
    <AuroraBackground className="pt-[160px] pb-24 flex items-center relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-[30%] left-[20%] w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute top-[50%] right-[10%] w-[600px] h-[600px] bg-[var(--color-gradient-01-end)]/10 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full max-w-[1000px] text-center">
        
        <ScrollReveal delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 mx-auto">
            <div className="w-2 h-2 rounded-full bg-[var(--color-gradient-01-end)] animate-pulse" />
            <span className="text-xs font-medium tracking-wide text-white/80 uppercase">Contact & Strategy</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-[72px] leading-[1.05] font-bold tracking-tight mb-8">
            <span className="text-white">Let's Start Your </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gradient-01-start)] via-[var(--color-gradient-01-mid1)] to-[var(--color-gradient-01-end)] animate-shimmer mt-2">
              Business Transformation.
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-lg md:text-[22px] text-white/70 max-w-[700px] mx-auto mb-12 leading-relaxed font-light">
            Whether you want to automate a single department or architect an enterprise-wide AI ecosystem, our executive consultants are ready to outline your roadmap.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto mb-16">
            <MagneticWrapper>
              <Button className="rounded-2xl h-[52px] px-8 text-[16px] font-medium bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#3B82F6] text-white hover:scale-[1.02] hover:-translate-y-[2px] transition-all duration-250 border-0 shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] w-full sm:w-auto group">
                Book an AI Strategy Session
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </MagneticWrapper>
            <MagneticWrapper>
              <Button variant="outline" className="rounded-2xl h-[52px] px-8 text-[16px] font-medium bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-250 w-full sm:w-auto">
                Talk to Our Team
              </Button>
            </MagneticWrapper>
          </div>
        </ScrollReveal>

        {/* Trust Badges */}
        <ScrollReveal delay={0.5}>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            {["Business First", "AI Transformation", "Automation", "Executive Consulting"].map((badge, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 opacity-80" />
                <span className="text-[14px] font-medium text-white/60 tracking-wide">{badge}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </AuroraBackground>
  );
};
