import type { Metadata } from "next";
import NurseryClient from "./NurseryClient";

export const metadata: Metadata = {
  title: "Nursery",
  description:
    "Finura Agro Tech LLP nursery offers coconut varieties, fruit plants, rare fruits, TC banana, timber, ornamental, medicinal, orchids, anthurium, gift plants, pots, terrace garden kits, and organic inputs.",
};

export default function NurseryPage() {
  return <NurseryClient />;
}
