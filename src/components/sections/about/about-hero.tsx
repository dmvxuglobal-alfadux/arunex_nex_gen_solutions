"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { AuroraBackground } from "@/components/animations/aurora-background";
import { TiltCard } from "@/components/animations/tilt-card";
import { MagneticWrapper } from "@/components/animations/magnetic-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Globe, Building2 } from "lucide-react";

export const AboutHero = () => {
  return (
    <AuroraBackground className="min-h-screen pt-[160px] pb-20 flex items-center">
      <div className="container mx-auto px-6 relative z-10 w-full max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-12 lg:gap-8 items-center h-full">
          
          {/* Left Column: Messaging */}
          <div className="flex flex-col justify-center">
            
            <ScrollReveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs font-medium tracking-wide text-white/80 uppercase">About Arunex Gen Solutions</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1 className="font-heading text-5xl sm:text-6xl md:text-[64px] lg:text-[72px] leading-[1.05] font-bold tracking-tight mb-8">
                <span className="text-white">Transforming Businesses Through </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gradient-01-start)] via-[var(--color-gradient-01-mid1)] to-[var(--color-gradient-01-end)] animate-shimmer">
                  AI, Innovation & Strategy.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-lg md:text-[22px] text-white/70 max-w-[620px] mb-10 leading-relaxed font-light">
                We are more than just a technology provider. We are your long-term innovation partner, dedicated to turning complex digital challenges into measurable business growth.
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
                    Explore Our Solutions
                  </Button>
                </MagneticWrapper>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Abstract Executive Visualization */}
          <ScrollReveal direction="left" delay={0.5} className="relative h-full min-h-[500px] hidden lg:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[var(--color-gradient-01-end)]/10 blur-[120px] rounded-full pointer-events-none" />
            
            <TiltCard className="w-full max-w-[650px] ml-auto mt-8">
              <div className="relative w-full h-[540px] rounded-[32px] bg-[#0A1224]/80 backdrop-blur-2xl border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col p-8">
                
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 blur-3xl rounded-full" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  {/* Top Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                        <Globe className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium text-lg">Global Transformation Hub</h3>
                        <p className="text-white/50 text-sm">Real-time enterprise overview</p>
                      </div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium border border-emerald-500/30">
                      Active
                    </div>
                  </div>

                  {/* Middle Data */}
                  <div className="grid grid-cols-2 gap-6 my-8">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                      <div className="text-white/50 text-sm mb-2 flex items-center gap-2">
                        <Briefcase className="w-4 h-4" /> Strategy Alignment
                      </div>
                      <div className="text-3xl font-heading font-bold text-white mb-2">100%</div>
                      <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          className="h-full bg-emerald-400 rounded-full"
                        />
                      </div>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                      <div className="text-white/50 text-sm mb-2 flex items-center gap-2">
                        <Building2 className="w-4 h-4" /> Scalability Index
                      </div>
                      <div className="text-3xl font-heading font-bold text-white mb-2">A+</div>
                      <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "95%" }}
                          transition={{ duration: 1.5, delay: 0.7 }}
                          className="h-full bg-blue-400 rounded-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bottom visual */}
                  <div className="flex-1 rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-around px-8 opacity-30">
                      {[1,2,3,4,5,6].map((i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: "10%" }}
                          animate={{ height: ["10%", "80%", "40%", "90%", "20%"] }}
                          transition={{ duration: 10 + i, repeat: Infinity, ease: "linear" }}
                          className="w-8 bg-gradient-to-t from-[var(--color-gradient-01-end)] to-transparent rounded-t-sm opacity-50"
                        />
                      ))}
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
