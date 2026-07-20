"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { AnimatedCounter } from "@/components/animations/animated-counter";
import { Zap, Clock, LineChart, Infinity } from "lucide-react";
import { useRef } from "react";

const metrics = [
  {
    icon: Zap,
    title: "Productivity",
    value: "80",
    isNumeric: true,
    suffix: "%",
    desc: "Reduction in repetitive manual effort through automation."
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "24×7",
    isNumeric: false,
    suffix: "",
    desc: "AI-powered customer engagement across digital channels."
  },
  {
    icon: LineChart,
    title: "Decision Making",
    value: "Real-Time",
    isNumeric: false,
    suffix: "",
    desc: "Executive dashboards with actionable business insights."
  },
  {
    icon: Infinity,
    title: "Scalability",
    value: "∞",
    isNumeric: false,
    suffix: "",
    desc: "Solutions designed to grow alongside your business."
  }
];

export const BusinessImpact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const cardsY = useTransform(scrollYProgress, [0.6, 0.8], [0, -100]);
  const cardsOpacity = useTransform(scrollYProgress, [0.6, 0.8], [1, 0.1]);
  const statementOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#030712] py-32 z-20 overflow-hidden">
      
      {/* Subtle Moving Gradient */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
         <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(59,130,246,1)_0%,transparent_70%)] animate-[pulse-horizontal_20s_ease-in-out_infinite]" />
      </div>

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-[700px] mx-auto mb-20">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-bold tracking-tight text-white mb-6">
              Business Outcomes That Matter
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
              We focus on measurable improvements that businesses care about. Real results, driven by practical technology.
            </p>
          </div>
        </ScrollReveal>

        {/* Metrics Grid */}
        <motion.div style={{ y: cardsY, opacity: cardsOpacity }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-40">
          {metrics.map((metric, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <div className="group relative w-full h-full rounded-[24px] bg-white/[0.02] border border-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] overflow-hidden flex flex-col items-center text-center">
                
                {/* Soft Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[100px] bg-[var(--color-gradient-01-end)]/10 blur-[40px] rounded-full pointer-events-none group-hover:bg-[var(--color-gradient-01-end)]/20 transition-colors duration-500" />
                
                <div className="mb-6 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                   <metric.icon className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                </div>
                
                <div className="mb-2">
                  <span className="text-[13px] font-mono text-[var(--color-gradient-01-end)] tracking-widest uppercase">
                    {metric.title}
                  </span>
                </div>

                <div className="font-heading text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight flex items-center justify-center gap-1 min-h-[60px]">
                  {metric.isNumeric ? (
                    <AnimatedCounter from={0} to={parseInt(metric.value)} duration={2} />
                  ) : (
                    <span>{metric.value}</span>
                  )}
                  {metric.suffix && <span className="text-3xl text-white/70">{metric.suffix}</span>}
                </div>

                <p className="text-white/50 text-[15px] leading-relaxed font-light mt-auto">
                  {metric.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </motion.div>

        {/* Transition Out Statement */}
        <motion.div style={{ opacity: statementOpacity }} className="w-full text-center px-6 pointer-events-none pb-20">
          <h2 className="font-heading text-3xl md:text-5xl lg:text-[56px] leading-[1.2] font-bold tracking-tight text-white max-w-[1000px] mx-auto">
            Every Transformation Begins With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gradient-01-start)] via-[var(--color-gradient-01-mid1)] to-[var(--color-gradient-01-end)]">One Conversation.</span>
          </h2>
        </motion.div>

      </div>
    </section>
  );
};
