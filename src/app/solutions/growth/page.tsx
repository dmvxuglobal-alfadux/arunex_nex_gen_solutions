import { SolutionTemplate } from "@/components/templates/solution-template";
import { solutionsData } from "@/data/solutions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Growth Accelerator | Arunex Gen Solutions",
  description: "Improve efficiency and accelerate business growth through intelligent automation.",
};

export default function GrowthSolutionPage() {
  const data = solutionsData.growth;
  return <SolutionTemplate data={data} />;
}
