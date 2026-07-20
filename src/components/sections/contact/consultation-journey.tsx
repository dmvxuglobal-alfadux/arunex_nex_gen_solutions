"use client";

import { motion, useScroll } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { MailCheck, Search, Users, BarChart3, Lightbulb, Map } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: MailCheck,
    title: "1. Enquiry Received",
    description: "Your information is securely received and routed to the appropriate consulting team based on your industry and goals."
  },
  {
    icon: Search,
    title: "2. Initial Review",
    description: "Our analysts perform a preliminary review of your current business context to ensure we maximize the value of our first meeting."
  },
  {
    icon: Users,
    title: "3. Strategy Discussion",
    description: "A 45-minute consultation to understand your operational friction, growth targets, and overall business vision."
  },
  {
    icon: BarChart3,
    title: "4. Business Assessment",
    description: "We evaluate your current technology stack and identify the highest-impact areas for AI and automation."
  },
  {
    icon: Lightbulb,
    title: "5. Solution Recommendation",
    description: "We present a tailored solution architecture, outlining expected ROI, timelines, and technical requirements."
  },
  {
    icon: Map,
    title: "6. Transformation Roadmap",
    description: "We deliver a comprehensive, phased execution plan to transform your operations with minimal disruption."
  }
];

export const ConsultationJourney = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section ref={containerRef} className="relative w-full bg-[#030712] py-32 z-20 overflow-hidden border-t border-white/[0.02]">
      
      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        
        <ScrollReveal>
          <div className="text-center max-w-[800px] mx-auto mb-24">
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              The Consultation Journey
            </h2>
            <p className="text-lg text-white/60 font-light leading-relaxed">
              What to expect after you submit your strategy session request.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative max-w-[900px] mx-auto">
          
          <div className="absolute left-[39px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/5" />
          
          <motion.div 
            className="absolute left-[39px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--color-gradient-01-start)] to-[var(--color-gradient-01-end)] origin-top"
            style={{ scaleY: scrollYProgress }}
          />

          <div className="flex flex-col gap-12 md:gap-24">
            {steps.map((step, i) => (
              <div key={i} className={cn(
                "relative flex flex-col md:flex-row items-start md:items-center",
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}>
                
                <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0A1224] border-2 border-[var(--color-gradient-01-end)] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                   <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-gradient-01-end)]" />
                </div>

                <ScrollReveal 
                  direction={i % 2 === 0 ? "right" : "left"} 
                  delay={0.1}
                  className={cn(
                    "w-full md:w-[calc(50%-48px)] pl-20 md:pl-0",
                    i % 2 === 0 ? "md:pr-12 lg:pr-20 md:text-right" : "md:pl-12 lg:pl-20 md:text-left"
                  )}
                >
                  <div className="group p-8 rounded-[24px] bg-white/[0.02] border border-white/5 backdrop-blur-md hover:bg-white/[0.04] transition-all duration-300">
                    <div className={cn(
                      "flex items-center gap-4 mb-4",
                      i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                    )}>
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[var(--color-gradient-01-end)]/40 transition-colors shrink-0">
                        <step.icon className="w-6 h-6 text-white/60 group-hover:text-[var(--color-gradient-01-end)] transition-colors" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-white tracking-tight">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-[15px] text-white/70 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
