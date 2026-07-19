import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photo gallery of Finura Agro Tech LLP — tissue culture lab, training sessions, mushroom production unit, nursery, building exterior, and student groups.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
