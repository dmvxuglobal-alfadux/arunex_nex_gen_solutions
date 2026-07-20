"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Database, Cloud, Cpu, Lock, Workflow, LineChart, Users, Server, Globe, ShieldCheck } from "lucide-react";

const technologies = [
  { icon: Cpu, name: "Artificial Intelligence", desc: "LLMs, Machine Learning, Predictive Models" },
  { icon: LineChart, name: "Business Intelligence", desc: "Interactive Dashboards, Real-time Reporting" },
  { icon: Cloud, name: "Cloud Infrastructure", desc: "Scalable Hosting, Serverless Computing" },
  { icon: Workflow, name: "Process Automation", desc: "RPA, Zapier, Custom Workflows" },
  { icon: Database, name: "Data Platforms", desc: "Data Lakes, Warehousing, ETL Pipelines" },
  { icon: Users, name: "CRM Integration", desc: "Salesforce, HubSpot, Dynamics Sync" },
  { icon: Server, name: "ERP Integration", desc: "SAP, Oracle, NetSuite Connectivity" },
  { icon: Globe, name: "API Architecture", desc: "REST, GraphQL, Webhooks" },
  { icon: ShieldCheck, name: "Security & Governance", desc: "SOC2 Compliance, Data Encryption" },
  { icon: LineChart, name: "Advanced Analytics", desc: "Deep Learning, Statistical Modeling" },
];

export const TechnologyEcosystem = () => {
  return (
    <section className="relative w-full bg-[#030712] py-32 z-20 overflow-hidden border-t border-white/[0.02]">
      
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-[800px] mx-auto mb-20">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-bold tracking-tight text-white mb-6">
              Our Technology Ecosystem
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
              We leverage an agnostic stack of modern technologies, focusing on the capabilities that drive actual business value rather than restrictive vendor lock-in.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {technologies.map((tech, i) => (
            <ScrollReveal key={i} delay={0.05 * i}>
              <div className="group h-full p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-blue-500/10 transition-colors">
                  <tech.icon className="w-5 h-5 text-white/50 group-hover:text-blue-400 transition-colors" />
                </div>
                <h4 className="text-[15px] font-semibold text-white mb-2">{tech.name}</h4>
                <p className="text-[13px] text-white/40 font-light leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
