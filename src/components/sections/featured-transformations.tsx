"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const stories = [
  {
    industry: "Manufacturing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800", // Abstract tech/manufacturing placeholder
    challenge: "Disconnected operations and lack of visibility.",
    transformation: "Connected workflows and Executive Dashboard.",
    outcome: "Improved visibility across departments."
  },
  {
    industry: "Retail",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    challenge: "Slow customer response times.",
    transformation: "AI-powered customer engagement systems.",
    outcome: "Faster service and better customer satisfaction."
  },
  {
    industry: "Professional Services",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
    challenge: "Manual reporting slowing down decisions.",
    transformation: "Business Intelligence platform integration.",
    outcome: "Real-time executive visibility and rapid reporting."
  }
];

export const FeaturedTransformations = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const statementOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
  const cardsOpacity = useTransform(scrollYProgress, [0.7, 0.9], [1, 0.2]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#030712] py-32 z-20 overflow-hidden">
      
      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-[700px] mx-auto mb-20">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-bold tracking-tight text-white mb-6">
              From Challenges to Measurable Growth
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
              Real stories of how we've helped businesses move from operational friction to intelligent automation.
            </p>
          </div>
        </ScrollReveal>

        {/* Stories Grid */}
        <motion.div style={{ opacity: cardsOpacity }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
          {stories.map((story, i) => (
            <ScrollReveal key={i} delay={0.15 * i}>
              <div className="group relative w-full rounded-[32px] bg-white/[0.02] border border-white/5 overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.04]">
                
                {/* Gradient Border on Hover */}
                <div className="absolute inset-0 border border-white/0 rounded-[32px] pointer-events-none transition-all duration-300 group-hover:border-[var(--color-gradient-01-end)]/40 z-20" />

                {/* Image Header */}
                <div className="relative h-[240px] w-full overflow-hidden bg-[#0A1224]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={story.image} 
                    alt={story.industry}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  {/* Overlay Fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
                  
                  <div className="absolute bottom-6 left-8 z-10">
                    <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-xs font-semibold tracking-wide border border-white/20">
                      {story.industry}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-8 flex flex-col flex-1 relative z-10">
                  <div className="space-y-6 flex-1">
                    <div>
                      <div className="text-[12px] font-mono text-white/40 uppercase tracking-widest mb-2">Challenge</div>
                      <p className="text-[15px] text-white/80 font-light leading-relaxed">{story.challenge}</p>
                    </div>
                    <div>
                      <div className="text-[12px] font-mono text-blue-400/70 uppercase tracking-widest mb-2">Transformation</div>
                      <p className="text-[15px] text-white/80 font-light leading-relaxed">{story.transformation}</p>
                    </div>
                    <div>
                      <div className="text-[12px] font-mono text-emerald-400/70 uppercase tracking-widest mb-2">Outcome</div>
                      <p className="text-[16px] text-white font-medium leading-relaxed">{story.outcome}</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5">
                    <Button variant="ghost" className="p-0 h-auto text-white/60 hover:text-white hover:bg-transparent group/btn transition-colors">
                      View Transformation Story
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </motion.div>

        {/* Transition Out Statement */}
        <motion.div style={{ opacity: statementOpacity }} className="w-full text-center px-6 pointer-events-none pb-20">
          <h2 className="font-heading text-3xl md:text-5xl lg:text-[56px] leading-[1.2] font-bold tracking-tight text-white max-w-[1000px] mx-auto">
            Imagine What Your Business Could <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gradient-01-start)] to-[var(--color-gradient-01-end)]">Achieve Next.</span>
          </h2>
        </motion.div>

      </div>
    </section>
  );
};
