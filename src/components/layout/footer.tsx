"use client";

import Link from "next/link";
import { Linkedin, Twitter, Github, ArrowRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative w-full bg-[#030712] pt-24 pb-8 z-20 overflow-hidden border-t border-white/[0.02]">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Brand */}
          <div className="lg:col-span-4 pr-8">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-gradient-01-start)] to-[var(--color-gradient-01-end)] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-white font-bold text-xl leading-none relative z-10 -ml-[1px]">A</span>
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">ARUNEX<span className="text-white/40">.</span></span>
            </Link>
            <p className="text-[15px] text-white/50 font-light leading-relaxed mb-8 max-w-[320px]">
              AI-Powered Business Transformation Partner. We help organizations scale through intelligent automation, practical AI, and actionable analytics.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Github, href: "#" },
              ].map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <social.icon className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="lg:col-span-3">
            <h4 className="text-[14px] font-semibold text-white uppercase tracking-widest mb-6">Solutions</h4>
            <ul className="space-y-4">
              {[
                { label: "AI Business Starter", href: "/solutions/starter" },
                { label: "AI Growth Accelerator", href: "/solutions/growth" },
                { label: "Digital Enterprise", href: "/solutions/enterprise" }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-[15px] text-white/50 font-light hover:text-[var(--color-gradient-01-end)] transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-3">
            <h4 className="text-[14px] font-semibold text-white uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4">
              {[
                { label: "About", href: "/about" },
                { label: "Industries", href: "/about" },
                { label: "Innovation Ecosystem", href: "/about" },
                { label: "Contact", href: "/contact" }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-[15px] text-white/50 font-light hover:text-[var(--color-gradient-01-end)] transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="lg:col-span-2">
            <h4 className="text-[14px] font-semibold text-white uppercase tracking-widest mb-6">Resources</h4>
            <ul className="space-y-4">
              {[
                { label: "FAQs", href: "/contact" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Careers", href: "#" }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-[15px] text-white/50 font-light hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[14px] text-white/40 font-light">
            © {new Date().getFullYear()} Arunex Gen Solutions. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-[13px] text-white/40 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-[13px] text-white/40 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="text-[13px] text-white/40 hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
