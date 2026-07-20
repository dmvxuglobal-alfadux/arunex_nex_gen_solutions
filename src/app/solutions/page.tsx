import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { SolutionsHero } from "@/components/sections/solutions/solutions-hero";
import { GrowthJourney } from "@/components/sections/solutions/growth-journey";
import { CoreSolutions } from "@/components/sections/solutions/core-solutions";
import { DepartmentSuites } from "@/components/sections/solutions/department-suites";
import { ComparisonMatrix } from "@/components/sections/solutions/comparison-matrix";
import { TransformationProcess } from "@/components/sections/solutions/transformation-process";
import { Industries } from "@/components/sections/industries";
import { BusinessImpact } from "@/components/sections/business-impact";
import { TechnologyEcosystem } from "@/components/sections/solutions/technology-ecosystem";
import { FAQ } from "@/components/sections/solutions/faq";
import { SolutionsCTA } from "@/components/sections/solutions/solutions-cta";

export const metadata = {
  title: "Transformation Solutions | Arunex Gen Solutions",
  description: "Arunex delivers structured AI, automation, analytics, and digital transformation solutions tailored to different business stages.",
};

export default function SolutionsPage() {
  return (
    <SmoothScroll>
      <SolutionsHero />
      <GrowthJourney />
      <CoreSolutions />
      <DepartmentSuites />
      <ComparisonMatrix />
      <TransformationProcess />
      <Industries />
      <BusinessImpact />
      <TechnologyEcosystem />
      <FAQ />
      <SolutionsCTA />
    </SmoothScroll>
  );
}
