"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";

export const OurStory = () => {
  return (
    <section className="relative w-full bg-[#030712] py-32 z-20 overflow-hidden border-t border-white/[0.02]">
      <div className="container mx-auto px-6 max-w-[1000px] relative z-10">
        
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-[var(--color-gradient-01-end)] mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="space-y-12">
          <ScrollReveal delay={0.1}>
            <div className="p-8 md:p-12 rounded-[32px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300">
              <h3 className="font-heading text-2xl text-white font-bold mb-4">Why Arunex Was Created</h3>
              <p className="text-[17px] text-white/70 font-light leading-relaxed">
                Arunex was born out of a profound frustration with the traditional IT services industry. We saw too many businesses purchasing expensive software, implementing complex technology, and yet failing to see any real change in their bottom line. Technology was being sold as the solution, rather than the enabler. We created Arunex to fix this disconnect.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="p-8 md:p-12 rounded-[32px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300 ml-0 md:ml-12">
              <h3 className="font-heading text-2xl text-white font-bold mb-4">A Business-First Philosophy</h3>
              <p className="text-[17px] text-white/70 font-light leading-relaxed">
                We do not start conversations by talking about Artificial Intelligence, APIs, or Cloud Infrastructure. We start by talking about your margins, your operational friction, and your growth bottlenecks. Our philosophy is simple: if a technology does not drive a measurable business outcome, it does not belong in your organization.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="p-8 md:p-12 rounded-[32px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300 ml-0 md:ml-24">
              <h3 className="font-heading text-2xl text-white font-bold mb-4">Long-Term Transformation Partnerships</h3>
              <p className="text-[17px] text-white/70 font-light leading-relaxed">
                Transformation is not a one-time project. It is a continuous evolution. We act as your fractional Chief AI Officer and long-term innovation partner. We build the roadmap, execute the implementation, train your team, and continuously optimize the systems as your business scales. Your success is the only metric that matters to us.
              </p>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};
