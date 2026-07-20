"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { AuroraBackground } from "@/components/animations/aurora-background";
import { TiltCard } from "@/components/animations/tilt-card";
import { AnimatedCounter } from "@/components/animations/animated-counter";
import { MagneticWrapper } from "@/components/animations/magnetic-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Cloud, Shield, Activity, Users, DollarSign } from "lucide-react";

export const SolutionsHero = () => {
  return (
    <AuroraBackground className="min-h-screen pt-[160px] pb-20 flex items-center">
      
      {/* Subtle Animated Particles (CSS Animation overlay) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-blue-400 rounded-full blur-[1px] animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute top-[60%] left-[30%] w-1.5 h-1.5 bg-emerald-400 rounded-full blur-[1px] animate-[pulse_3s_ease-in-out_infinite_1s]" />
        <div className="absolute top-[30%] right-[20%] w-2.5 h-2.5 bg-purple-400 rounded-full blur-[1px] animate-[pulse_5s_ease-in-out_infinite_2s]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-12 lg:gap-8 items-center h-full">
          
          {/* Left Column: Messaging */}
          <div className="flex flex-col justify-center">
            
            <ScrollReveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs font-medium tracking-wide text-white/80 uppercase">Arunex Ecosystem</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1 className="font-heading text-5xl sm:text-6xl md:text-[64px] lg:text-[72px] leading-[1.05] font-bold tracking-tight mb-8">
                <span className="text-white">Business Transformation Solutions</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gradient-01-start)] via-[var(--color-gradient-01-mid1)] to-[var(--color-gradient-01-end)] animate-shimmer">
                  Designed for Sustainable Growth.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-lg md:text-[22px] text-white/70 max-w-[620px] mb-10 leading-relaxed font-light">
                Arunex delivers structured AI, automation, analytics, and digital transformation solutions tailored to different business stages. We focus on measurable business outcomes, not just technology features.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto mb-12">
                <MagneticWrapper>
                  <Button className="rounded-2xl h-[52px] px-7 text-[16px] font-medium bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#3B82F6] text-white hover:scale-[1.02] hover:-translate-y-[2px] transition-all duration-250 border-0 shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] w-full sm:w-auto group">
                    Book an AI Strategy Session
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </MagneticWrapper>
                <MagneticWrapper>
                  <Button variant="outline" className="rounded-2xl h-[52px] px-7 text-[16px] font-medium bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-250 w-full sm:w-auto">
                    Talk to an Expert
                  </Button>
                </MagneticWrapper>
              </div>
            </ScrollReveal>

            {/* Trust Badges */}
            <ScrollReveal delay={0.5}>
              <div className="flex flex-wrap gap-3 mt-2">
                {["AI Transformation", "Business Intelligence", "Automation", "Cloud Solutions", "Executive Consulting"].map((badge, i) => (
                  <motion.div
                    key={badge}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                    className="px-4 py-2 rounded-full border border-white/10 bg-[#0A1224]/50 backdrop-blur-sm text-xs font-medium text-white/60"
                  >
                    {badge}
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Executive Dashboard Visualization */}
          <ScrollReveal direction="left" delay={0.6} className="relative h-full min-h-[500px] hidden lg:block">
            {/* Dashboard Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[var(--color-gradient-01-end)]/10 blur-[120px] rounded-full pointer-events-none" />
            
            <TiltCard className="w-full max-w-[700px] ml-auto mt-8">
              <div className="relative w-full h-[580px] rounded-[32px] bg-[#0A1224]/80 backdrop-blur-2xl border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col">
                
                {/* Top Bar */}
                <div className="h-14 border-b border-white/5 flex items-center px-6 justify-between bg-white/[0.02]">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-xs font-mono text-white/30 tracking-widest">ARUNEX_TRANSFORMATION_HUB</div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 grid grid-cols-2 gap-4 h-full relative z-10">
                  
                  {/* Automation Status */}
                  <div className="col-span-2 rounded-2xl bg-white/5 border border-white/5 p-5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <div className="text-sm text-white/50 mb-1 flex items-center gap-2">
                          <Cloud className="w-4 h-4" /> Workflow Automation
                        </div>
                        <div className="text-3xl font-bold font-heading text-white flex items-baseline gap-1 mt-2">
                          <AnimatedCounter from={0} to={89} duration={2} />
                          <span className="text-xl text-white/70">% Active</span>
                        </div>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium border border-blue-500/30">
                        Optimized
                      </div>
                    </div>
                    
                    {/* Process timeline visual */}
                    <div className="flex items-center gap-2 w-full mt-2">
                       {[1, 2, 3, 4, 5].map((step, i) => (
                         <div key={i} className="flex items-center gap-2 flex-1">
                           <motion.div 
                             initial={{ scale: 0 }}
                             animate={{ scale: 1 }}
                             transition={{ delay: 1 + (i * 0.2) }}
                             className="w-full h-2 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-400/60"
                           />
                         </div>
                       ))}
                    </div>
                  </div>

                  {/* AI Insights */}
                  <div className="rounded-2xl bg-white/5 border border-white/5 p-5">
                    <div className="text-sm text-white/50 mb-4 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-emerald-400" /> Operational Efficiency
                    </div>
                    <div className="relative w-full h-24 flex flex-col justify-end gap-2">
                      {[60, 85, 75, 95].map((h, i) => (
                        <div key={i} className="w-full flex items-center gap-3">
                           <div className="text-xs text-white/30 font-mono w-4">Q{i+1}</div>
                           <motion.div 
                             initial={{ width: 0 }}
                             animate={{ width: `${h}%` }}
                             transition={{ duration: 1, delay: 1.2 + (i * 0.1) }}
                             className="h-2 bg-emerald-400/50 rounded-full"
                           />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cross-Department Integration */}
                  <div className="rounded-2xl bg-white/5 border border-white/5 p-5 flex flex-col justify-between">
                    <div className="text-sm text-white/50 mb-1 flex items-center gap-2">
                      <Shield className="w-4 h-4" /> System Integration
                    </div>
                    <div className="flex items-center justify-center h-full">
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
              </div>
            </TiltCard>
          </ScrollReveal>

        </div>
      </div>
    </AuroraBackground>
  );
};
