"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { AuroraBackground } from "@/components/animations/aurora-background";
import { TiltCard } from "@/components/animations/tilt-card";
import { AnimatedCounter } from "@/components/animations/animated-counter";
import { MagneticWrapper } from "@/components/animations/magnetic-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Activity, Shield } from "lucide-react";
import { SolutionData } from "@/types/solution";

export const SolutionHero = ({ data }: { data: SolutionData }) => {
  return (
    <AuroraBackground className="min-h-screen pt-[160px] pb-20 flex items-center">
      
      {/* Subtle Animated Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-blue-400 rounded-full blur-[1px] animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute top-[60%] left-[30%] w-1.5 h-1.5 bg-emerald-400 rounded-full blur-[1px] animate-[pulse_3s_ease-in-out_infinite_1s]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-12 lg:gap-8 items-center h-full">
          
          {/* Left Column: Messaging */}
          <div className="flex flex-col justify-center">
            
            <ScrollReveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs font-medium tracking-wide text-white/80 uppercase">{data.hero.badge}</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1 className="font-heading text-5xl sm:text-6xl md:text-[64px] lg:text-[72px] leading-[1.05] font-bold tracking-tight mb-8">
                <span className="text-white">{data.hero.title}</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-lg md:text-[22px] text-white/70 max-w-[620px] mb-10 leading-relaxed font-light">
                {data.hero.subtitle}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
                <MagneticWrapper>
                  <Button className="rounded-2xl h-[52px] px-7 text-[16px] font-medium bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#3B82F6] text-white hover:scale-[1.02] hover:-translate-y-[2px] transition-all duration-250 border-0 shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] w-full sm:w-auto group">
                    Book an AI Strategy Session
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </MagneticWrapper>
                <MagneticWrapper>
                  <Button variant="outline" className="rounded-2xl h-[52px] px-7 text-[16px] font-medium bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-250 w-full sm:w-auto">
                    Download Solution Overview
                  </Button>
                </MagneticWrapper>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Abstract Visualization */}
          <ScrollReveal direction="left" delay={0.5} className="relative h-full min-h-[500px] hidden lg:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[var(--color-gradient-01-end)]/10 blur-[120px] rounded-full pointer-events-none" />
            
            <TiltCard className="w-full max-w-[650px] ml-auto mt-8">
              <div className="relative w-full h-[540px] rounded-[32px] bg-[#0A1224]/80 backdrop-blur-2xl border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col">
                
                <div className="h-14 border-b border-white/5 flex items-center px-6 justify-between bg-white/[0.02]">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-xs font-mono text-white/30 tracking-widest">{data.id.toUpperCase()}_WORKSPACE</div>
                </div>

                <div className="p-6 grid grid-cols-2 gap-4 h-full relative z-10">
                  <div className="col-span-2 rounded-2xl bg-white/5 border border-white/5 p-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
                    <div className="text-sm text-white/50 mb-4 flex items-center gap-2">
                      <Cloud className="w-4 h-4" /> System Integration Status
                    </div>
                    <div className="flex items-center gap-2 w-full mt-2">
                       {[1, 2, 3, 4, 5].map((step, i) => (
                         <div key={i} className="flex-1">
                           <motion.div 
                             initial={{ scale: 0 }}
                             animate={{ scale: 1 }}
                             transition={{ delay: 1 + (i * 0.2) }}
                             className="w-full h-2 rounded-full bg-gradient-to-r from-[var(--color-gradient-01-start)]/40 to-[var(--color-gradient-01-end)]"
                           />
                         </div>
                       ))}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/5 border border-white/5 p-5">
                    <div className="text-sm text-white/50 mb-4 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-emerald-400" /> Efficiency Gain
                    </div>
                    <div className="text-3xl font-bold font-heading text-white flex items-baseline gap-1 mt-2">
                      <AnimatedCounter from={0} to={100} duration={2} />
                      <span className="text-xl text-emerald-400">%</span>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/5 border border-white/5 p-5 flex items-center justify-center">
                     <div className="relative w-20 h-20">
                        <motion.div 
                          animate={{ rotate: 360 }} 
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 border-2 border-dashed border-white/20 rounded-full"
                        />
                        <div className="absolute inset-2 border-2 border-white/10 rounded-full flex items-center justify-center bg-white/5">
                           <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                        </div>
                     </div>
                  </div>
                </div>

              </div>
            </TiltCard>
          </ScrollReveal>

        </div>
      </div>
    </AuroraBackground>
  );
};
