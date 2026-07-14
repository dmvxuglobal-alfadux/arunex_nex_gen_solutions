import { AuroraBackground } from "@/components/animations/aurora-background";
import { CustomCursor } from "@/components/layout/custom-cursor";
import { Navigation } from "@/components/layout/navigation";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, Bot, Cloud, Cpu, Lock, Zap } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { TiltCard } from "@/components/animations/tilt-card";
import { AnimatedCounter } from "@/components/animations/animated-counter";
import { MagneticWrapper } from "@/components/animations/magnetic-wrapper";

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navigation />
      
      <AuroraBackground className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <ScrollReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-[var(--color-gradient-01-end)] animate-pulse shadow-[0_0_10px_var(--color-gradient-01-end)]" />
              <span className="text-sm font-medium text-white/80">Transforming Business with AI</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <h1 className="font-heading text-5xl md:text-[96px] leading-[1.05] font-bold tracking-tight mb-8 max-w-5xl">
              Modernize operations with <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gradient-01-start)] via-[var(--color-gradient-01-mid1)] to-[var(--color-gradient-01-end)] pb-2 animate-shimmer">
                intelligent automation
              </span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <p className="text-lg md:text-[22px] text-muted max-w-[700px] mb-12 leading-relaxed font-light mx-auto">
              We help small & mid-sized businesses make better decisions and scale operations through AI, cloud infrastructure, and digital innovation.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
              <MagneticWrapper>
                <Button size="lg" className="group w-full sm:w-auto">
                  Start Transformation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </MagneticWrapper>
              <MagneticWrapper>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Explore Services
                </Button>
              </MagneticWrapper>
            </div>
          </ScrollReveal>
        </div>
      </AuroraBackground>
      
      {/* Services Section */}
      <section id="solutions" className="py-32 bg-background relative z-10 border-t border-white/[0.04]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <ScrollReveal direction="left" className="max-w-2xl">
              <h2 className="font-heading text-4xl md:text-[56px] leading-[1.1] font-bold tracking-tight mb-6">
                Strategic technology for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gradient-02-start)] via-[var(--color-gradient-01-end)] to-[var(--color-gradient-02-end)] pb-2 animate-shimmer">
                  sustainable growth
                </span>
              </h2>
              <p className="text-[22px] text-muted font-light leading-relaxed">
                Move beyond the buzzwords. We deploy practical, high-impact AI solutions that drive real business outcomes and operational efficiency.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <MagneticWrapper>
                <Button variant="outline" className="shrink-0">
                  View All Solutions
                </Button>
              </MagneticWrapper>
            </ScrollReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: "AI Integration & Automation",
                description: "Automate repetitive tasks and integrate intelligent workflows that free your team to focus on strategic initiatives.",
              },
              {
                icon: BarChart3,
                title: "Data Strategy & Analytics",
                description: "Transform raw data into actionable intelligence with modern dashboards, predictive analytics, and real-time reporting.",
              },
              {
                icon: Cloud,
                title: "Cloud Infrastructure",
                description: "Secure, scalable, and resilient cloud architecture designed to support your growing business and AI requirements.",
              }
            ].map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <TiltCard>
                  <Card className="h-full cursor-default">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-[16px] bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-4 text-white shadow-inner">
                        <service.icon className="w-7 h-7 text-white/80" />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Enterprise Capability Section */}
      <section className="py-32 bg-[var(--background-secondary)] relative z-10 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left">
              <h2 className="font-heading text-4xl md:text-[56px] leading-[1.1] font-bold tracking-tight mb-8">
                Enterprise capability.<br />
                Approachable execution.
              </h2>
              <p className="text-[22px] text-muted mb-12 font-light leading-relaxed">
                You don't need a massive IT budget to operate like an enterprise. We bridge the gap with tailored technology strategies that fit your exact business model.
              </p>
              
              <div className="space-y-8">
                {[
                  { icon: Lock, text: "Enterprise-grade security and compliance" },
                  { icon: Cpu, text: "Custom AI models trained on your data" },
                  { icon: Zap, text: "High-performance architecture with 99.9% uptime" }
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={0.2 + (i * 0.1)} direction="left">
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-[16px] bg-[var(--color-gradient-03-start)]/20 text-[var(--color-gradient-03-end)] flex items-center justify-center shrink-0 border border-[var(--color-gradient-03-start)]/30">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <span className="text-[22px] font-medium tracking-tight">{item.text}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={0.4}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-gradient-01-start)] to-[var(--color-gradient-02-end)] opacity-[0.15] blur-[100px] rounded-full" />
                <TiltCard>
                  <div className="relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-[40px] p-10 shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
                    {/* Mockup Dashboard UI */}
                    <div className="flex items-center justify-between mb-10 pb-8 border-b border-white/10">
                      <div>
                        <div className="text-base text-muted mb-2 font-medium tracking-wide uppercase">Total Efficiency Gained</div>
                        <AnimatedCounter 
                          from={0} 
                          to={342} 
                          prefix="+"
                          suffix="%" 
                          className="text-5xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60" 
                        />
                      </div>
                      <div className="px-5 py-2.5 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-semibold border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                        Trending Up
                      </div>
                    </div>
                    <div className="space-y-6">
                      {[1, 2, 3].map((_, i) => (
                        <div key={i} className="flex items-center gap-6 p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer group">
                          <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 group-hover:border-white/20 transition-colors" />
                          <div className="flex-1 space-y-3">
                            <div className="h-3.5 bg-white/20 rounded-full overflow-hidden w-full max-w-[200px]">
                              <div className="h-full bg-white/40 animate-pulse w-full origin-left" style={{ animationDelay: `${i * 200}ms` }} />
                            </div>
                            <div className="h-3.5 bg-white/10 rounded-full w-2/3 max-w-[140px]" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-40 relative z-10 border-t border-white/[0.04] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-gradient-01-start)]/10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[var(--color-gradient-02-mid)] opacity-[0.08] blur-[120px] rounded-full pointer-events-none" />
        <ScrollReveal direction="up" delay={0.2} className="container mx-auto px-6 relative flex flex-col items-center text-center">
          <h2 className="font-heading text-5xl md:text-[72px] leading-[1.05] font-bold tracking-tight mb-8 max-w-4xl">
            Ready to build the future <br className="hidden md:block" /> of your business?
          </h2>
          <p className="text-[22px] text-muted mb-12 max-w-2xl font-light">
            Schedule a strategic consultation to discover how Arunex can modernize your operations.
          </p>
          <MagneticWrapper>
            <Button size="lg" className="group h-16 px-10 text-[18px]">
              Schedule Consultation
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
            </Button>
          </MagneticWrapper>
        </ScrollReveal>
      </section>
    </SmoothScroll>
  );
}
