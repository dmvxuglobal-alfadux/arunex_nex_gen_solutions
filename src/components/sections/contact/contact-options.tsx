"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Mail, Phone, MapPin, Clock, Globe, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const options = [
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@arunexgen.com",
    actionText: "Send Email",
    actionLink: "mailto:hello@arunexgen.com",
    colSpan: "md:col-span-1"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (800) 123-4567",
    actionText: "Call Now",
    actionLink: "tel:+18001234567",
    colSpan: "md:col-span-1"
  },
  {
    icon: MapPin,
    title: "Global Headquarters",
    details: "123 Innovation Drive, Tech District, NY 10001",
    actionText: "Get Directions",
    actionLink: "#",
    colSpan: "md:col-span-2 lg:col-span-1"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon - Fri: 9:00 AM - 6:00 PM (EST)",
    actionText: "Book Meeting",
    actionLink: "#",
    colSpan: "md:col-span-1"
  },
  {
    icon: Globe,
    title: "LinkedIn",
    details: "Arunex Gen Solutions",
    actionText: "Follow Us",
    actionLink: "#",
    colSpan: "md:col-span-1 lg:col-span-2"
  }
];

export const ContactOptions = () => {
  return (
    <section className="relative w-full bg-[#030712] py-24 z-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {options.map((option, i) => (
            <ScrollReveal key={i} delay={0.05 * i} className={option.colSpan}>
              <div className="group h-full p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 flex flex-col justify-between">
                
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0A1224] flex items-center justify-center mb-6 border border-white/10 group-hover:border-[var(--color-gradient-01-end)]/30 transition-colors">
                    <option.icon className="w-5 h-5 text-white/60 group-hover:text-[var(--color-gradient-01-end)] transition-colors" />
                  </div>
                  <h3 className="text-[14px] font-semibold text-white/50 uppercase tracking-widest mb-2">
                    {option.title}
                  </h3>
                  <p className="text-[17px] text-white font-medium leading-relaxed mb-8">
                    {option.details}
                  </p>
                </div>

                <Link 
                  href={option.actionLink}
                  className="inline-flex items-center gap-2 text-[14px] font-medium text-[var(--color-gradient-01-end)] hover:text-blue-400 transition-colors mt-auto"
                >
                  {option.actionText}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
