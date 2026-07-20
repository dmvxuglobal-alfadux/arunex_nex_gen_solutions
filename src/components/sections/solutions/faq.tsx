"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Which solution is right for my business?",
    answer: "It depends on your operational maturity. Startups and small businesses usually begin with the AI Business Starter to build foundations. Mid-sized companies seeking automation fit the AI Growth Accelerator, while large organizations require the Digital Enterprise for cross-department integration."
  },
  {
    question: "How long does implementation take?",
    answer: "Implementation timelines vary by complexity. Starter packages typically take 2-4 weeks. Growth Accelerators average 1-3 months, and Enterprise solutions can take 3-6 months. We always define a clear timeline during the Strategy phase."
  },
  {
    question: "Can Arunex integrate with our existing systems?",
    answer: "Yes. We pride ourselves on building connected ecosystems. We integrate with almost all major CRMs, ERPs, and Data Platforms (like Salesforce, HubSpot, SAP, etc.) using APIs and custom middleware so you don't have to rip and replace your current tech stack."
  },
  {
    question: "Do we need internal technical expertise?",
    answer: "Not at all. We handle the architecture, deployment, and optimization. We design systems that are incredibly user-friendly for non-technical executives and operators. You focus on your business; we handle the tech."
  },
  {
    question: "Is training included in the transformation packages?",
    answer: "Absolutely. We believe technology is useless without adoption. Every package includes comprehensive team enablement, leadership training, and post-launch support to ensure your team is confident using the new systems."
  },
  {
    question: "How is success measured?",
    answer: "Before writing any code, we define specific, measurable KPIs with you (e.g., hours saved per week, lead response time, operational cost reduction). Our executive dashboards track these exact metrics in real-time."
  },
  {
    question: "What industries do you support?",
    answer: "We support a wide range of industries including Healthcare, Manufacturing, Retail, Financial Services, Logistics, and Professional Services. Our solutions are adaptable to any industry that relies on data, processes, and people."
  },
  {
    question: "What happens after implementation?",
    answer: "Transformation is an ongoing journey. Post-implementation, we provide continuous optimization, support, and scaling services. We act as your long-term innovation partner, ensuring the systems evolve as your business grows."
  }
];

export const FAQ = () => {
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
              Everything you need to know about partnering with Arunex.
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
