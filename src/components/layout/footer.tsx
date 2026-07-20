"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, MessageCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  solutions: [
    { label: "AI Business Starter", href: "/solutions/starter" },
    { label: "AI Growth Accelerator", href: "/solutions/growth" },
    { label: "Digital Enterprise", href: "/solutions/enterprise" },
    { label: "CEO Intelligence Suite", href: "/solutions/ceo" },
    { label: "Sales Growth Suite", href: "/solutions/sales" }
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Industries", href: "/industries" },
    { label: "Insights", href: "/insights" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" }
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" }
  ]
};

export const Footer = () => {
  return (
    <footer className="w-full bg-[#02040A] border-t border-white/5 pt-24 pb-8 relative z-30">
      
      {/* Soft Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gradient-01-end)]/20 to-transparent blur-[1px]" />

      <div className="container mx-auto px-6 max-w-[1440px]">
        
        {/* Top Section - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl font-bold tracking-tight text-white">Arunex</span>
            </Link>
            <p className="text-[15px] text-white/50 leading-relaxed font-light max-w-[280px]">
              An AI-Powered Business Transformation Company. We help businesses modernize operations through intelligent automation and strategic growth.
            </p>
            <div className="flex items-center gap-4 mt-2">
              {[Briefcase, MessageCircle, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                  <Icon className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-4">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="group inline-flex items-center text-[15px] text-white/60 hover:text-white transition-colors duration-250">
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--color-gradient-01-end)]/50 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="group inline-flex items-center text-[15px] text-white/60 hover:text-white transition-colors duration-250">
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--color-gradient-01-end)]/50 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 mb-8">
              <li>
                <a href="mailto:hello@arunex.com" className="text-[15px] text-white/60 hover:text-white transition-colors">
                  hello@arunex.com
                </a>
              </li>
              <li>
                <span className="text-[15px] text-white/60">
                  +1 (800) 123-4567
                </span>
              </li>
              <li>
                <span className="text-[15px] text-white/60 font-light block max-w-[200px] leading-relaxed">
                  123 Innovation Drive,<br/>
                  Tech District, CA 94103
                </span>
              </li>
            </ul>
            <Button className="w-full sm:w-auto rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 group">
              Book Strategy Session
              <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-white/40 font-light">
            © {new Date().getFullYear()} Arunex Gen Solutions. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.label} href={link.href} className="text-[13px] text-white/40 hover:text-white/80 transition-colors">
                {link.label}
              </Link>
            ))}
            <a href="#" className="text-[13px] text-white/40 hover:text-[var(--color-gradient-01-end)] transition-colors flex items-center gap-1">
              <Briefcase className="w-3 h-3" /> LinkedIn
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
