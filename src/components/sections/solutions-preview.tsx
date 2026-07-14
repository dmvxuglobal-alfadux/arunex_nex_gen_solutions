"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    title: "AI Business Starter",
    badge: "For Growing Businesses",
    description: "A practical starting point for organizations taking their first steps toward AI-powered operations.",
    highlights: ["AI Readiness Assessment", "Workflow Automation", "Business Dashboard", "Team Enablement"]
  },
  {
    title: "AI Growth Accelerator",
    badge: "Most Popular",
    description: "Designed for expanding businesses that need intelligent automation across sales, marketing, and operations.",
    highlights: ["Sales Automation", "Marketing Automation", "AI Assistants", "KPI Dashboards"],
    featured: true
  },
  {
    title: "Digital Enterprise",
    badge: "Enterprise Ready",
    description: "A complete transformation program connecting leadership, departments, data, and operations into one intelligent business ecosystem.",
    highlights: ["Executive Dashboards", "AI Knowledge Systems", "Enterprise Integration", "Business Intelligence"]
  }
];

export const SolutionsPreview = () => {
  return (
    <section className="relative w-full bg-[#030712] py-32 z-20 overflow-hidden border-t border-white/[0.02]">
      
      {/* Subtle Grid Background for this section */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-[800px] mx-auto mb-20">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-bold tracking-tight text-white mb-6">
              Solutions Designed Around Business Outcomes
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
              Rather than offering isolated services, Arunex delivers integrated transformation solutions that solve real business challenges.
            </p>
          </div>
        </ScrollReveal>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {solutions.map((solution, i) => (
            <ScrollReveal key={i} delay={0.12 * i}>
              <div className="group relative w-full h-full min-h-[520px] rounded-[32px] bg-white/[0.02] border border-white/5 p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.04]">
                
                {/* Background Hover Light */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gradient-01-end)]/0 to-transparent group-hover:from-[var(--color-gradient-01-end)]/10 transition-colors duration-500 rounded-[32px] pointer-events-none" />
                
                {/* Animated Line on Hover */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gradient-01-end)] to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide border ${solution.featured ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-white/5 text-white/60 border-white/10'}`}>
                      {solution.badge}
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-2xl font-bold text-white mb-4 tracking-tight">
                    {solution.title}
                  </h3>
                  
                  <p className="text-white/50 text-[15px] leading-relaxed font-light mb-8 flex-1">
                    {solution.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {solution.highlights.map((highlight, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[var(--color-gradient-01-end)]" />
                        <span className="text-[15px] text-white/70">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full h-12 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 group-hover:border-[var(--color-gradient-01-end)]/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Transition Out Statement */}
        <ScrollReveal delay={0.2} className="w-full text-center pb-20">
          <h2 className="font-heading text-3xl md:text-[40px] leading-[1.2] font-bold tracking-tight text-white/80">
            Transformation Doesn't Stop at Technology.<br/>
            It Extends Across Every Department.
          </h2>
        </ScrollReveal>

      </div>
    </section>
  );
};
