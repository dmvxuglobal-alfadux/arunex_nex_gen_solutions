import { SolutionTemplate } from "@/components/templates/solution-template";
import { solutionsData } from "@/data/solutions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Business Starter | Arunex Gen Solutions",
  description: "Build a strong digital foundation with practical AI adoption.",
};

export default function StarterSolutionPage() {
  const data = solutionsData.starter;
  return <SolutionTemplate data={data} />;
}
