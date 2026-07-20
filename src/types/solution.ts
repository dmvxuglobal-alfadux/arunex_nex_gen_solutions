import { LucideIcon } from "lucide-react";

export type Capability = {
  iconName: string; // We'll map this to a Lucide icon component in the UI to avoid serializing React components in raw data
  title: string;
  description: string;
  benefit: string;
};

export type BusinessOutcome = {
  label: string;
  value: number; // For animated counter
  suffix: string; // e.g. "%", "x", "hrs"
  description: string;
};

export type ImplementationStage = {
  title: string;
  objective: string;
  deliverables: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type SolutionData = {
  id: "starter" | "growth" | "enterprise";
  hero: {
    title: string;
    subtitle: string;
    badge: string;
  };
  audience: {
    businessSize: string;
    teamSize: string;
    growthStage: string;
    goals: string;
  };
  challenges: string[];
  overview: {
    strategy: string;
    process: string;
    automation: string;
    analytics: string;
  };
  capabilities: Capability[];
  outcomes: BusinessOutcome[];
  timeline: ImplementationStage[];
  deliverables: string[];
  faqs: FAQ[];
};
