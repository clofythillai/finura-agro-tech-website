import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Finura Agro Tech LLP offers 9 divisions: plant tissue culture, mushroom production, soil testing, biocontrol agents, nursery, plant pathology, training & research, consultancy, and organic inputs.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
