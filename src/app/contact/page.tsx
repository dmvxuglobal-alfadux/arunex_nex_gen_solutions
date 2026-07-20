import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { ContactHero } from "@/components/sections/contact/contact-hero";
import { ContactOptions } from "@/components/sections/contact/contact-options";
import { StrategySessionForm } from "@/components/sections/contact/strategy-session-form";
import { ConsultationJourney } from "@/components/sections/contact/consultation-journey";
import { ContactFAQ } from "@/components/sections/contact/contact-faq";
import { SolutionCTA } from "@/components/sections/solution-detail/solution-cta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Arunex Gen Solutions",
  description: "Book an AI strategy session and start your business transformation journey with Arunex.",
};

export default function ContactPage() {
  return (
    <SmoothScroll>
      <ContactHero />
      <ContactOptions />
      <StrategySessionForm />
      <ConsultationJourney />
      <ContactFAQ />
      <SolutionCTA />
    </SmoothScroll>
  );
}
