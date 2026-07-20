import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { SolutionHero } from "@/components/sections/solution-detail/solution-hero";
import { TargetAudience } from "@/components/sections/solution-detail/target-audience";
import { BusinessChallenges } from "@/components/sections/solution-detail/business-challenges";
import { SolutionOverview } from "@/components/sections/solution-detail/solution-overview";
import { CapabilityGrid } from "@/components/sections/solution-detail/capability-grid";
import { BusinessOutcomes } from "@/components/sections/solution-detail/business-outcomes";
import { ImplementationTimeline } from "@/components/sections/solution-detail/implementation-timeline";
import { DeliverablesChecklist } from "@/components/sections/solution-detail/deliverables-checklist";
import { FAQAccordion } from "@/components/sections/solution-detail/faq-accordion";
import { SolutionCTA } from "@/components/sections/solution-detail/solution-cta";
import { SolutionData } from "@/types/solution";

export const SolutionTemplate = ({ data }: { data: SolutionData }) => {
  return (
    <SmoothScroll>
      <SolutionHero data={data} />
      <TargetAudience data={data} />
      <BusinessChallenges data={data} />
      <SolutionOverview data={data} />
      <CapabilityGrid data={data} />
      <BusinessOutcomes data={data} />
      <ImplementationTimeline data={data} />
      <DeliverablesChecklist data={data} />
      <FAQAccordion data={data} />
      <SolutionCTA />
    </SmoothScroll>
  );
};
