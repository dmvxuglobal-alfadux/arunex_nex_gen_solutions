import { SolutionTemplate } from "@/components/templates/solution-template";
import { solutionsData } from "@/data/solutions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Enterprise | Arunex Gen Solutions",
  description: "Create an intelligent, connected enterprise that supports long-term transformation.",
};

export default function EnterpriseSolutionPage() {
  const data = solutionsData.enterprise;
  return <SolutionTemplate data={data} />;
}
