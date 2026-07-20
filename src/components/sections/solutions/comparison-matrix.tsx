"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  { name: "Target Business Size", starter: "Small / Startup", growth: "Mid-Market", enterprise: "Large / Enterprise" },
  { name: "Team Size", starter: "1-50", growth: "50-250", enterprise: "250+" },
  { name: "AI Readiness Required", starter: "Beginner", growth: "Intermediate", enterprise: "Advanced" },
  { name: "Automation Level", starter: "Basic Workflows", growth: "Cross-functional", enterprise: "Enterprise-wide" },
  { name: "Analytics Capabilities", starter: "Standard Reports", growth: "Predictive Analytics", enterprise: "Custom BI Platform" },
  { name: "Executive Dashboards", starter: "Single View", growth: "Multi-Department", enterprise: "Real-time Global" },
  { name: "Department Integration", starter: "Siloed", growth: "Partial Integration", enterprise: "Fully Integrated" },
  { name: "Support Level", starter: "Standard", growth: "Priority", enterprise: "Dedicated Architect" },
  { name: "Implementation Timeline", starter: "2-4 Weeks", growth: "1-3 Months", enterprise: "3-6 Months" },
  { name: "Scalability", starter: "High", growth: "Very High", enterprise: "Unlimited" },
];

export const ComparisonMatrix = () => {
  return (
    <section className="relative w-full bg-[#030712] py-32 z-20 overflow-hidden">
      
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-[800px] mx-auto mb-20">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-bold tracking-tight text-white mb-6">
              Solution Comparison
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
              Compare our core transformation tiers to find the perfect fit for your organization's maturity and goals.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="w-full overflow-x-auto pb-8">
            <div className="min-w-[800px] border border-white/10 rounded-[24px] bg-[#0A1224]/50 backdrop-blur-xl overflow-hidden">
              
              {/* Table Header */}
              <div className="grid grid-cols-4 border-b border-white/10 bg-white/[0.02]">
                <div className="p-6 md:p-8 flex items-end">
                  <span className="text-[14px] font-medium text-white/50 uppercase tracking-widest">Features & Capabilities</span>
                </div>
                
                <div className="p-6 md:p-8 text-center border-l border-white/5">
                  <div className="inline-block px-3 py-1 bg-white/5 rounded-full text-[11px] font-semibold text-white/60 tracking-wider mb-4">FOUNDATIONS</div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2">AI Business Starter</h3>
                </div>
                
                <div className="p-6 md:p-8 text-center border-l border-white/5 relative bg-[var(--color-gradient-01-end)]/5">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[var(--color-gradient-01-start)] to-[var(--color-gradient-01-end)]" />
                  <div className="inline-block px-3 py-1 bg-blue-500/20 rounded-full text-[11px] font-semibold text-blue-400 tracking-wider mb-4 border border-blue-500/30">MOST POPULAR</div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2">AI Growth Accelerator</h3>
                </div>
                
                <div className="p-6 md:p-8 text-center border-l border-white/5">
                  <div className="inline-block px-3 py-1 bg-white/5 rounded-full text-[11px] font-semibold text-white/60 tracking-wider mb-4">ENTERPRISE</div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2">Digital Enterprise</h3>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-white/5">
                {features.map((feature, i) => (
                  <div key={i} className="grid grid-cols-4 hover:bg-white/[0.02] transition-colors">
                    <div className="p-4 md:p-6 flex items-center text-[15px] font-medium text-white/80">
                      {feature.name}
                    </div>
                    <div className="p-4 md:p-6 flex items-center justify-center text-center text-[15px] text-white/60 border-l border-white/5">
                      {feature.starter}
                    </div>
                    <div className="p-4 md:p-6 flex items-center justify-center text-center text-[15px] text-white font-medium border-l border-white/5 bg-[var(--color-gradient-01-end)]/[0.02]">
                      {feature.growth}
                    </div>
                    <div className="p-4 md:p-6 flex items-center justify-center text-center text-[15px] text-white/60 border-l border-white/5">
                      {feature.enterprise}
                    </div>
                  </div>
                ))}
              </div>

              {/* Table Footer */}
              <div className="grid grid-cols-4 border-t border-white/10 bg-white/[0.02]">
                <div className="p-6"></div>
                <div className="p-6 text-center border-l border-white/5">
                  <button className="text-[14px] font-medium text-white/60 hover:text-white transition-colors">Select Starter</button>
                </div>
                <div className="p-6 text-center border-l border-white/5 bg-[var(--color-gradient-01-end)]/5">
                  <button className="text-[14px] font-medium text-[var(--color-gradient-01-end)] hover:text-blue-400 transition-colors">Select Accelerator</button>
                </div>
                <div className="p-6 text-center border-l border-white/5">
                  <button className="text-[14px] font-medium text-white/60 hover:text-white transition-colors">Select Enterprise</button>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
