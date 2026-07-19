import type { Metadata } from "next";
import TrainingClient from "./TrainingClient";

export const metadata: Metadata = {
  title: "Training & Internships",
  description:
    "Finura Agro Tech LLP offers hands-on training in plant tissue culture, mushroom production, biocontrol agents, spirulina, soil testing, and more. TNAU certificate courses and industrial internships available.",
};

export default function TrainingPage() {
  return <TrainingClient />;
}
