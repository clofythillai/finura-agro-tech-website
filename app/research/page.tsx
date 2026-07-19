import type { Metadata } from "next";
import ResearchClient from "./ResearchClient";

export const metadata: Metadata = {
  title: "Research & Team",
  description:
    "Meet the research team at Finura Agro Tech LLP. Mr. M. Ashok Macrin, Dr. A. Dannie Macrin (PhD, SRM), Dr. S. Prakash (44 research papers, Anna University recognized), and more.",
};

export default function ResearchPage() {
  return <ResearchClient />;
}
