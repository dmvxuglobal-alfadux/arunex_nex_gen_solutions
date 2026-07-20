"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { 
  Building2, 
  Stethoscope, 
  Factory, 
  ShoppingCart, 
  GraduationCap, 
  Landmark, 
  Truck, 
  HardHat, 
  Home 
} from "lucide-react";

const industries = [
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Automate patient onboarding, optimize resource allocation, and improve clinical decision support.",
    color: "from-blue-500/20 to-blue-500/0",
    borderHover: "hover:border-blue-500/30",
    iconColor: "text-blue-400"
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Predictive maintenance, supply chain optimization, and automated quality control systems.",
    color: "from-emerald-500/20 to-emerald-500/0",
    borderHover: "hover:border-emerald-500/30",
    iconColor: "text-emerald-400"
  },
  {
    icon: ShoppingCart,
    title: "Retail",
    description: "Personalized customer journeys, dynamic pricing engines, and inventory forecasting.",
    color: "from-purple-500/20 to-purple-500/0",
    borderHover: "hover:border-purple-500/30",
    iconColor: "text-purple-400"
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Intelligent student support, administrative automation, and predictive enrollment models.",
    color: "from-yellow-500/20 to-yellow-500/0",
    borderHover: "hover:border-yellow-500/30",
    iconColor: "text-yellow-400"
  },
  {
    icon: Landmark,
    title: "Financial Services",
    description: "Automated risk assessment, fraud detection, and algorithmic portfolio management.",
    color: "from-sky-500/20 to-sky-500/0",
    borderHover: "hover:border-sky-500/30",
    iconColor: "text-sky-400"
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Route optimization, fleet predictive maintenance, and real-time tracking dashboards.",
    color: "from-orange-500/20 to-orange-500/0",
    borderHover: "hover:border-orange-500/30",
    iconColor: "text-orange-400"
  },
  {
    icon: Building2,
    title: "Professional Services",
    description: "Automated proposal generation, intelligent resource management, and CRM optimization.",
    color: "from-indigo-500/20 to-indigo-500/0",
    borderHover: "hover:border-indigo-500/30",
    iconColor: "text-indigo-400"
  },
  {
    icon: HardHat,
    title: "Construction",
    description: "Project timeline prediction, safety monitoring automation, and supply chain tracking.",
    color: "from-rose-500/20 to-rose-500/0",
    borderHover: "hover:border-rose-500/30",
    iconColor: "text-rose-400"
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Automated property valuation models, smart lead routing, and tenant experience portals.",
    color: "from-teal-500/20 to-teal-500/0",
    borderHover: "hover:border-teal-500/30",
    iconColor: "text-teal-400"
  }
];

export const AboutIndustries = () => {
  return (
    <section className="relative w-full bg-[#030712] py-32 z-20 overflow-hidden border-t border-white/[0.02]">
      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        
        <ScrollReveal>
          <div className="text-center max-w-[800px] mx-auto mb-20">
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Industries We Transform
            </h2>
            <p className="text-lg text-white/60 font-light leading-relaxed">
              We apply our business-first methodology across diverse sectors, bringing cross-industry intelligence to solve unique operational challenges.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <ScrollReveal key={i} delay={0.05 * i}>
              <div className={`group relative h-full p-8 rounded-[24px] bg-white/[0.02] border border-white/5 transition-all duration-300 ${industry.borderHover} overflow-hidden`}>
                
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#0A1224] flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <industry.icon className={`w-6 h-6 ${industry.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-[15px] text-white/60 font-light leading-relaxed">
                    {industry.description}
                  </p>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
