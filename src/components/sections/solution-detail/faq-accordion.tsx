"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { SolutionData } from "@/types/solution";

export const FAQAccordion = ({ data }: { data: SolutionData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full bg-[#030712] py-32 z-20 overflow-hidden border-t border-white/[0.02]">
      <div className="container mx-auto px-6 max-w-[900px] relative z-10">
        
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-white/60 font-light">
              Common questions about the {data.hero.title} package.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {data.faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={0.05 * i}>
              <div 
                className={cn(
                  "border rounded-2xl transition-all duration-300 overflow-hidden",
                  openIndex === i ? "bg-white/[0.04] border-white/10" : "bg-transparent border-white/5 hover:border-white/10"
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={cn(
                    "font-semibold text-[16px] transition-colors",
                    openIndex === i ? "text-white" : "text-white/80"
                  )}>
                    {faq.question}
                  </span>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors",
                    openIndex === i ? "bg-[var(--color-gradient-01-end)]/20 text-[var(--color-gradient-01-end)]" : "bg-white/5 text-white/40"
                  )}>
                    {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-[15px] text-white/60 font-light leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
