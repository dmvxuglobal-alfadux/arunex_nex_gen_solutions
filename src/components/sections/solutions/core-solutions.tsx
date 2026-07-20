"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const solutions = [
  {
    title: "AI Business Starter",
    badge: "Foundations",
    description: "For businesses beginning their digital transformation journey.",
    bestFor: "Small teams moving away from manual processes.",
    deliverables: [
      "AI Readiness Assessment",
      "Workflow Automation Setup",
      "Core Business Dashboard",
      "Team Enablement Training",
      "Digital Strategy Workshop"
    ],
    featured: false
  },
  {
    title: "AI Growth Accelerator",
    badge: "Most Popular",
    description: "For growing organizations looking to scale through intelligent automation.",
    bestFor: "Mid-sized businesses experiencing friction in sales or operations.",
    deliverables: [
      "Sales & Marketing Automation",
      "AI Customer Engagement",
      "Executive KPI Dashboards",
      "Department AI Assistants",
      "Business Intelligence Foundation"
    ],
    featured: true
  },
  {
    title: "Digital Enterprise",
    badge: "Enterprise",
    description: "For mature organizations requiring complete operational transformation.",
    bestFor: "Large operations dealing with data silos and legacy complexity.",
    deliverables: [
      "Enterprise-wide Automation",
      "Executive Intelligence Platform",
      "Cross-Department Integration",
      "Advanced Predictive Analytics",
      "Custom AI Knowledge Platform",
      "Scalable Digital Infrastructure"
    ],
    featured: false
  }
];

export const CoreSolutions = () => {
  return (
    <section className="relative w-full bg-[#030712] py-32 z-20 overflow-hidden">
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-[800px] mx-auto mb-20">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-bold tracking-tight text-white mb-6">
              Core Transformation Solutions
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
              Three comprehensive tiers of transformation, designed to meet your business exactly where it is today and scale it for tomorrow.
            </p>
          </div>
        </ScrollReveal>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution, i) => (
            <ScrollReveal key={i} delay={0.15 * i}>
              <div className={cn(
                "group relative w-full h-full min-h-[600px] rounded-[32px] p-8 md:p-10 flex flex-col transition-all duration-300 hover:-translate-y-2",
                solution.featured 
                  ? "bg-[#0A1224] border border-[var(--color-gradient-01-end)]/30 shadow-[0_30px_100px_rgba(59,130,246,0.15)] hover:shadow-[0_40px_120px_rgba(59,130,246,0.25)]" 
                  : "bg-white/[0.02] border border-white/5 hover:bg-white/[0.04]"
              )}>
                
                {/* Background Hover Light */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br transition-colors duration-500 rounded-[32px] pointer-events-none",
                  solution.featured 
                    ? "from-[var(--color-gradient-01-end)]/10 to-transparent" 
                    : "from-white/0 to-transparent group-hover:from-white/5"
                )} />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6">
                    <span className={cn(
                      "inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border",
                      solution.featured 
                        ? "bg-blue-500/10 text-blue-400 border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.3)]" 
                        : "bg-white/5 text-white/60 border-white/10"
                    )}>
                      {solution.badge}
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-3xl font-bold text-white mb-4 tracking-tight">
                    {solution.title}
                  </h3>
                  
                  <p className="text-white/60 text-[16px] leading-relaxed font-light mb-6">
                    {solution.description}
                  </p>

                  <div className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-[11px] font-mono text-white/40 uppercase tracking-widest mb-2">Best Suited For</div>
                    <div className="text-[14px] text-white/80 font-medium leading-snug">{solution.bestFor}</div>
                  </div>

                  <div className="space-y-4 mb-10 flex-1">
                    <div className="text-[11px] font-mono text-white/40 uppercase tracking-widest mb-4">Core Deliverables</div>
                    {solution.deliverables.map((item, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <CheckCircle2 className={cn(
                          "w-5 h-5 shrink-0 mt-0.5",
                          solution.featured ? "text-[var(--color-gradient-01-end)]" : "text-white/30 group-hover:text-white/50 transition-colors"
                        )} />
                        <span className="text-[15px] text-white/70 leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button className={cn(
                    "w-full h-14 rounded-2xl text-[16px] font-medium transition-all duration-300 group/btn",
                    solution.featured
                      ? "bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#3B82F6] text-white hover:scale-[1.02] border-0 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                      : "bg-white/5 border border-white/10 text-white hover:bg-white/10 group-hover:border-white/20"
                  )}>
                    Explore Package Details
                    <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
