import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Finura Agro Tech LLP — an MCA-registered LLP in Kanyakumari District founded by Mr. M. Ashok Macrin, retired Deputy Director of Horticulture. TNAU-affiliated, EDII-KABIF incubated.",
};

export default function AboutPage() {
  return <AboutClient />;
}
