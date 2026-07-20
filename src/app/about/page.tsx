import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { AboutHero } from "@/components/sections/about/about-hero";
import { OurStory } from "@/components/sections/about/our-story";
import { VisionMissionValues } from "@/components/sections/about/vision-mission-values";
import { WhyArunex } from "@/components/sections/why-arunex";
import { AboutIndustries } from "@/components/sections/about/about-industries";
import { InnovationEcosystem } from "@/components/sections/innovation-ecosystem";
import { AboutApproach } from "@/components/sections/about/about-approach";
import { ChooseArunex } from "@/components/sections/about/choose-arunex";
import { AboutCTA } from "@/components/sections/about/about-cta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Arunex Gen Solutions",
  description: "Learn about Arunex's vision, mission, and business-first approach to AI transformation.",
};

export default function AboutPage() {
  return (
    <SmoothScroll>
      <AboutHero />
      <OurStory />
      <VisionMissionValues />
      <WhyArunex />
      <AboutIndustries />
      <InnovationEcosystem />
      <AboutApproach />
      <ChooseArunex />
      <AboutCTA />
    </SmoothScroll>
  );
}
