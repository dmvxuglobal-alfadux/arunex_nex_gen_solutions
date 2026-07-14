"use client";

import { AuroraBackground } from "@/components/animations/aurora-background";
import { CustomCursor } from "@/components/layout/custom-cursor";
import { Navigation } from "@/components/layout/navigation";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { TiltCard } from "@/components/animations/tilt-card";
import { AnimatedCounter } from "@/components/animations/animated-counter";
import { MagneticWrapper } from "@/components/animations/magnetic-wrapper";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Cloud, Shield, Activity, Users, DollarSign } from "lucide-react";
import { BusinessReality } from "@/components/sections/business-reality";
import { TransformationFramework } from "@/components/sections/transformation-framework";
import { SolutionsPreview } from "@/components/sections/solutions-preview";
import { WhyArunex } from "@/components/sections/why-arunex";
import { Industries } from "@/components/sections/industries";
import { InnovationEcosystem } from "@/components/sections/innovation-ecosystem";

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navigation />

      {/* Hero Section */}
      <AuroraBackground className="min-h-screen pt-[120px] pb-10 flex items-center">
        <div className="container mx-auto px-6 relative z-10 w-full max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-8 items-center h-full">
            
            {/* Left Column: Messaging */}
            <div className="flex flex-col justify-center">
              <ScrollReveal delay={0.1}>
                <h1 className="font-heading text-5xl sm:text-6xl md:text-[72px] lg:text-[88px] xl:text-[96px] leading-[0.95] font-bold tracking-tight mb-8">
                  <span className="text-white">Smarter<br />Business.</span><br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gradient-01-start)] via-[var(--color-gradient-01-mid1)] to-[var(--color-gradient-01-end)] animate-shimmer">
                    Powered by AI.
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-lg md:text-[22px] text-white/70 max-w-[620px] mb-10 leading-relaxed font-light">
                  We help small & mid-sized businesses automate operations, improve decisions, and accelerate growth. Deploy practical, high-impact AI solutions that drive real outcomes.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto mb-12">
                  <MagneticWrapper>
                    <Button className="rounded-2xl h-[52px] px-7 text-[16px] font-medium bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#3B82F6] text-white hover:scale-[1.02] hover:-translate-y-[2px] transition-all duration-250 border-0 shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] w-full sm:w-auto group">
                      Book an AI Strategy Session
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </MagneticWrapper>
                  <MagneticWrapper>
                    <Button variant="outline" className="rounded-2xl h-[52px] px-7 text-[16px] font-medium bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-250 w-full sm:w-auto">
                      Explore Solutions
                    </Button>
                  </MagneticWrapper>
                </div>
              </ScrollReveal>

              {/* Trust Indicators */}
              <ScrollReveal delay={0.4}>
                <div className="flex flex-wrap gap-3 mt-4">
                  {["AI Transformation", "Business Intelligence", "Automation", "Digital Growth", "Analytics"].map((badge, i) => (
                    <motion.div
                      key={badge}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                      className="px-4 py-2 rounded-full border border-white/10 bg-[#0A1224]/50 backdrop-blur-sm text-xs font-medium text-white/60 hover:text-white hover:border-white/20 transition-colors"
                    >
                      {badge}
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Dashboard Mockup */}
            <ScrollReveal direction="left" delay={0.5} className="relative h-full min-h-[500px] hidden lg:block">
              {/* Dashboard Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[var(--color-gradient-01-end)]/10 blur-[120px] rounded-full pointer-events-none" />
              
              <TiltCard className="w-full max-w-[700px] ml-auto">
                <div className="relative w-full h-[600px] rounded-[32px] bg-[#0A1224]/80 backdrop-blur-2xl border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col">
                  {/* Top Bar */}
                  <div className="h-14 border-b border-white/5 flex items-center px-6 justify-between bg-white/[0.02]">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="text-xs font-mono text-white/30 tracking-widest">ARUNEX_INTELLIGENCE</div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-6 grid grid-cols-2 gap-4 h-full">
                    {/* Revenue Card */}
                    <div className="col-span-2 rounded-2xl bg-white/5 border border-white/5 p-5 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full" />
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="text-sm text-white/50 mb-1 flex items-center gap-2">
                            <DollarSign className="w-4 h-4" /> Revenue Forecast
                          </div>
                          <div className="text-4xl font-bold font-heading text-white flex items-baseline gap-1">
                            $
                            <AnimatedCounter from={0} to={842} duration={2} />
                            <span className="text-2xl">k</span>
                          </div>
                        </div>
                        <div className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium border border-emerald-500/30">
                          +24.5%
                        </div>
                      </div>
                      <div className="h-12 w-full mt-2 relative">
                         {/* Simple animated bar chart visual */}
                         <div className="absolute bottom-0 left-0 flex items-end gap-2 w-full h-full">
                            {[40, 65, 45, 80, 55, 90, 75, 100].map((h, i) => (
                              <motion.div 
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ duration: 1, delay: 0.8 + (i * 0.1) }}
                                className="flex-1 bg-gradient-to-t from-emerald-500/20 to-emerald-400/50 rounded-t-sm"
                              />
                            ))}
                         </div>
                      </div>
                    </div>

                    {/* AI Recommendations */}
                    <div className="rounded-2xl bg-white/5 border border-white/5 p-5">
                      <div className="text-sm text-white/50 mb-4 flex items-center gap-2">
                        <Activity className="w-4 h-4 text-blue-400" /> AI Insights
                      </div>
                      <div className="space-y-4">
                        {[1, 2].map((i) => (
                          <div key={i} className="flex gap-3 items-start">
                            <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-pulse" />
                            <div>
                              <div className="h-3 w-32 bg-white/20 rounded mb-2" />
                              <div className="h-2 w-24 bg-white/10 rounded" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Sales Pipeline */}
                    <div className="rounded-2xl bg-white/5 border border-white/5 p-5 flex flex-col justify-between">
                      <div className="text-sm text-white/50 mb-1 flex items-center gap-2">
                        <Users className="w-4 h-4" /> Pipeline Health
                      </div>
                      <div className="relative w-full h-24 flex items-center justify-center">
                        <svg className="w-24 h-24 -rotate-90">
                          <circle cx="48" cy="48" r="36" className="stroke-white/10" strokeWidth="8" fill="none" />
                          <motion.circle 
                            cx="48" cy="48" r="36" 
                            className="stroke-blue-500" 
                            strokeWidth="8" 
                            fill="none" 
                            strokeDasharray="226" 
                            initial={{ strokeDashoffset: 226 }}
                            animate={{ strokeDashoffset: 60 }}
                            transition={{ duration: 1.5, delay: 1 }}
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center font-bold text-xl text-white">
                          74%
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
      
      {/* Master Prompt 2.2 Sections */}
      <BusinessReality />
      <TransformationFramework />
      <SolutionsPreview />

      {/* Master Prompt 2.3 Sections */}
      <WhyArunex />
      <Industries />
      <InnovationEcosystem />
    </SmoothScroll>
  );
}
