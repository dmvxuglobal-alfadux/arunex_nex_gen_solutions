"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { LineChart, Users, HeartHandshake, CircleDollarSign, Briefcase, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const suites = [
  {
    icon: LineChart,
    title: "CEO Intelligence Suite",
    challenge: "Fragmented data making executive decisions slow and risky.",
    approach: "Unified executive dashboards pulling real-time data from all departments.",
    benefits: ["Real-time visibility", "Predictive forecasting", "Risk mitigation"]
  },
  {
    icon: Users,
    title: "Sales Growth Suite",
    challenge: "Inconsistent follow-ups and lost revenue opportunities.",
    approach: "Intelligent CRM automation and predictive lead scoring.",
    benefits: ["Higher win rates", "Automated outreach", "Accurate pipeline data"]
  },
  {
    icon: HeartHandshake,
    title: "Customer Experience Suite",
    challenge: "Slow response times leading to customer churn.",
    approach: "AI-powered support agents and automated ticketing workflows.",
    benefits: ["24/7 engagement", "Faster resolutions", "Higher CSAT scores"]
  },
  {
    icon: CircleDollarSign,
    title: "Finance Intelligence Suite",
    challenge: "Manual reporting and delayed financial consolidation.",
    approach: "Automated reconciliation and real-time expense analytics.",
    benefits: ["Faster month-end close", "Error reduction", "Audit readiness"]
  },
  {
    icon: Briefcase,
    title: "HR Automation Suite",
    challenge: "Time-consuming onboarding and manual employee requests.",
    approach: "Self-service HR portals and automated onboarding flows.",
    benefits: ["Seamless onboarding", "Reduced admin time", "Better employee experience"]
  },
  {
    icon: Settings,
    title: "Operations Excellence Suite",
    challenge: "Disconnected processes causing operational bottlenecks.",
    approach: "End-to-end workflow automation and resource planning.",
    benefits: ["Process visibility", "Resource optimization", "Cost reduction"]
  }
];

export const DepartmentSuites = () => {
  return (
    <section className="relative w-full bg-[#030712] py-32 z-20 overflow-hidden border-t border-white/[0.02]">
      
      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-[800px] mx-auto mb-20">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-bold tracking-tight text-white mb-6">
              Department Intelligence Suites
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
              Targeted transformation solutions designed to solve specific departmental challenges and drive measurable improvements.
            </p>
          </div>
        </ScrollReveal>

        {/* Suites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {suites.map((suite, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <div className="group relative w-full h-full rounded-[24px] bg-white/[0.02] border border-white/5 p-8 transition-all duration-300 hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] overflow-hidden flex flex-col">
                
                {/* Subtle Hover Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-gradient-01-end)]/0 blur-3xl rounded-full group-hover:bg-[var(--color-gradient-01-end)]/10 transition-colors duration-500 pointer-events-none" />

                <div className="relative z-10 mb-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[var(--color-gradient-01-end)]/40 transition-colors">
                    <suite.icon className="w-6 h-6 text-white/70 group-hover:text-[var(--color-gradient-01-end)] transition-colors" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white tracking-tight">
                    {suite.title}
                  </h3>
                </div>

                <div className="space-y-5 flex-1 relative z-10">
                  <div>
                    <div className="text-[11px] font-mono text-white/30 uppercase tracking-widest mb-1.5">The Challenge</div>
                    <p className="text-[14.5px] text-white/60 font-light leading-relaxed">
                      {suite.challenge}
                    </p>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[var(--color-gradient-01-end)]/70 uppercase tracking-widest mb-1.5">Our Approach</div>
                    <p className="text-[14.5px] text-white/80 font-medium leading-relaxed">
                      {suite.approach}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 relative z-10">
                  <div className="text-[11px] font-mono text-white/30 uppercase tracking-widest mb-3">Key Benefits</div>
                  <div className="flex flex-wrap gap-2">
                    {suite.benefits.map((benefit, j) => (
                      <span key={j} className="px-3 py-1.5 rounded-full bg-white/5 text-[12px] text-white/70 border border-white/10">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
