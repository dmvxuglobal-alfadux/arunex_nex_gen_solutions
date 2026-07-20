"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { MagneticWrapper } from "@/components/animations/magnetic-wrapper";

const trustElements = [
  "No obligation consultation",
  "Business-first approach",
  "Tailored roadmap",
  "Practical implementation"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const lineVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export const FinalCTA = () => {
  return (
    <section className="relative w-full bg-[#030712] py-[220px] z-20 overflow-hidden border-t border-white/[0.02]">
      
      {/* Massive Aurora Background Lighting */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[1200px] h-[800px] bg-[var(--color-gradient-01-end)] blur-[250px] rounded-[100%] opacity-20"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute w-[800px] h-[600px] bg-blue-600 blur-[200px] rounded-[100%] opacity-10 translate-y-[20%]"
        />
      </div>

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-[900px] flex flex-col items-center"
        >
          {/* Animated Headline */}
          <h2 className="font-heading text-5xl md:text-6xl lg:text-[80px] xl:text-[96px] leading-[1.05] font-bold tracking-tight text-white mb-8">
            <motion.div variants={lineVariants} className="overflow-hidden">
              <span className="block">Ready to Build</span>
            </motion.div>
            <motion.div variants={lineVariants} className="overflow-hidden">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gradient-01-start)] via-[var(--color-gradient-01-mid1)] to-[var(--color-gradient-01-end)] animate-shimmer">
                Your AI Transformation?
              </span>
            </motion.div>
          </h2>

          {/* Supporting Text */}
          <motion.p variants={lineVariants} className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-[700px] mb-12">
            We partner with businesses to create practical AI strategies, intelligent automation, and measurable growth. Let's design a roadmap that works for you.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={lineVariants} className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto mb-16">
            <MagneticWrapper>
              <Button className="rounded-2xl h-[60px] px-8 text-[17px] font-medium bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#3B82F6] text-white hover:scale-[1.02] hover:-translate-y-[2px] transition-all duration-250 border-0 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] w-full sm:w-auto group">
                Book an AI Strategy Session
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </MagneticWrapper>
            
            <MagneticWrapper>
              <Button variant="outline" className="rounded-2xl h-[60px] px-8 text-[17px] font-medium bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-250 w-full sm:w-auto">
                Explore Solutions
              </Button>
            </MagneticWrapper>
          </motion.div>

          {/* Trust Elements */}
          <motion.div variants={lineVariants} className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            {trustElements.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                  <Check className="w-2.5 h-2.5 text-emerald-400" />
                </div>
                <span className="text-[14px] font-medium text-white/60 tracking-wide">{item}</span>
              </div>
            ))}
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};
