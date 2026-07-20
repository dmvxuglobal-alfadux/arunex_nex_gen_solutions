"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is the strategy session free?",
    answer: "Yes, the initial 45-minute strategy session is completely complimentary and carries no obligation. It is designed to evaluate mutual fit and identify high-level transformation opportunities."
  },
  {
    question: "How long is the consultation?",
    answer: "Our standard initial consultation is scheduled for 45 minutes, allowing enough time to understand your business context, discuss current friction points, and outline a high-level roadmap."
  },
  {
    question: "Do you work with small businesses?",
    answer: "While our focus is primarily on mid-market and enterprise organizations (50+ employees) looking to scale, we do offer specific starter packages for rapidly growing smaller businesses with clear transformation goals."
  },
  {
    question: "Can Arunex integrate with existing systems?",
    answer: "Absolutely. Our solutions are designed to be cloud-native and highly interoperable. We prioritize seamless integration with your existing ERP, CRM, and operational software rather than forced rip-and-replace."
  },
  {
    question: "How soon can a project begin?",
    answer: "Once the Transformation Roadmap is approved and agreements are signed, we typically mobilize our teams and begin the discovery phase within 2 to 3 weeks."
  },
  {
    question: "Do you provide implementation support?",
    answer: "Yes, we are not just consultants. We handle end-to-end implementation, including custom development, software configuration, system integration, and comprehensive team training."
  },
  {
    question: "Which industries do you specialize in?",
    answer: "We have extensive experience transforming Healthcare, Manufacturing, Retail, Financial Services, Education, Logistics, Construction, and Professional Services."
  },
  {
    question: "Can consultations be conducted online?",
    answer: "Yes, all initial strategy sessions are conducted via secure video conferencing, allowing us to seamlessly partner with global organizations."
  }
];

export const ContactFAQ = () => {
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
              Common questions about our consultation process and engagement models.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
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
                    "font-semibold text-[16px] transition-colors pr-8",
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
