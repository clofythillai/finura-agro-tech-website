"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import MarqueeStrip from "@/components/MarqueeStrip";
import { useLang } from "@/context/LangContext";

const photos = [
  {
    src: "/images/Finura_Agro_Tech_LLP_862361451.jpeg",
    alt: "Finura Agro Tech LLP Tissue Culture Centre building exterior — Thovalai, Kanyakumari District. Modern two-storey facility with signboard.",
    category: "facility",
    label: "Our Facility",
  },
  {
    src: "/images/Finura_Agro_Tech_LLP_1483594408.jpeg",
    alt: "Plant tissue culture growth room — rows of culture jars on metal racks under controlled white light. High-capacity commercial tissue culture lab.",
    category: "lab",
    label: "Tissue Culture Lab",
  },
  {
    src: "/images/Finura_Agro_Tech_LLP_456708559.jpeg",
    alt: "Tissue culture technician working at laminar flow bench in sterile area — performing subculture operations. White lab coat and hairnet worn.",
    category: "lab",
    label: "Tissue Culture Lab",
  },
  {
    src: "/images/Finura_Agro_Tech_LLP_107861135.jpeg",
    alt: "Training session at Finura Agro Tech LLP — instructor explaining lab protocols to a group of students wearing hairnets and masks in the tissue culture preparation room.",
    category: "training",
    label: "Training Programme",
  },
  {
    src: "/images/Finura_Agro_Tech_LLP_1999390985.jpeg",
    alt: "Lab demonstration — scientist explaining tissue culture techniques to a group of visiting trainees wearing hairnets and masks in the lab.",
    category: "training",
    label: "Training Programme",
  },
  {
    src: "/images/Finura_Agro_Tech_LLP_853599843.jpeg",
    alt: "Group photo of students and faculty outside the Finura Agro Tech LLP Tissue Culture Centre building after a training session.",
    category: "training",
    label: "Student Group",
  },
  {
    src: "/images/Finura_Agro_Tech_LLP_196540370.jpeg",
    alt: "School students holding banana seedlings at the Finura Agro Tech LLP entrance — educational visit with Mr. Ashok Macrin. 'Finura Agro Tech LLP — LLPIN AAY-4389' banner visible.",
    category: "events",
    label: "Events & Visits",
  },
  {
    src: "/images/Finura_Agro_Tech_LLP_248603113.jpeg",
    alt: "Mushroom spawn production training — students and farmers learning hands-on substrate preparation for mushroom cultivation at Finura Agro Tech LLP.",
    category: "mushroom",
    label: "Mushroom Unit",
  },
  {
    src: "/images/Finura_Agro_Tech_LLP_27502692.jpeg",
    alt: "Milky mushroom produce — fresh Calocybe indica (Milky Mushroom) in 200g retail packaging, Price Rs 70, produced at Finura Agro Tech LLP mushroom unit.",
    category: "mushroom",
    label: "Mushroom Unit",
  },
  {
    src: "/images/Finura_Agro_Tech_LLP_1821205353.jpeg",
    alt: "Mushroom Production Centre banner — facility at NH-7, AMRL High Tech City, South Nanguneri, Tirunelveli District. Assisted by Dept. of Horticulture under MIDH – National Horticulture Mission.",
    category: "mushroom",
    label: "Mushroom Unit",
  },
  {
    src: "/images/Finura_Agro_Tech_LLP_1603593474.jpg",
    alt: "Decorative ornamental plants in circular black metal wall holders — nursery display of Pilea, Pothos, and Asparagus fern varieties at Finura Agro Tech nursery.",
    category: "nursery",
    label: "Nursery & Plants",
  },
  {
    src: "/images/Finura_Agro_Tech_LLP_28581614.jpeg",
    alt: "Certificate Course on Plant Tissue Culture — 15 Days Crash Course promotional flyer. Course fee Rs 15,000. Contact: Mr. Ashok Macrin 9445450305, Dr. S. Prakash 9487249777.",
    category: "training",
    label: "Training Material",
  },
  {
    src: "/images/Finura_Agro_Tech_LLP_454374854.jpeg",
    alt: "Summer Internship on Plant Tissue Culture — 14 days intensive programme, Rs 2,500 fee. Tissue culture jars with growing banana plantlets. Finura Agro Tech LLP, Thovalai.",
    category: "training",
    label: "Training Material",
  },
  {
    src: "/images/Finura_Agro_Tech_LLP_916751768.jpeg",
    alt: "Industrial Internships & Training Programs on Plant Tissue Culture — Two Weeks (Rs 5000) and One Month (Rs 10000) programmes at Plant Tissue Culture Centre, Finura Agro Tech LLP.",
    category: "training",
    label: "Training Material",
  },
];

const filterCategories = [
  { key: "all", labelEn: "All Photos", labelTa: "அனைத்து படங்கள்" },
  { key: "facility", labelEn: "Facility", labelTa: "வசதிகள்" },
  { key: "lab", labelEn: "Tissue Culture Lab", labelTa: "திசு வளர்ப்பு ஆய்வகம்" },
  { key: "training", labelEn: "Training", labelTa: "பயிற்சி" },
  { key: "mushroom", labelEn: "Mushroom Unit", labelTa: "காளான் அலகு" },
  { key: "nursery", labelEn: "Nursery", labelTa: "நர்சரி" },
  { key: "events", labelEn: "Events", labelTa: "நிகழ்வுகள்" },
];

export default function GalleryClient() {
  const { lang } = useLang();
  const isTa = lang === "ta";
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeFilter === "all"
    ? photos
    : photos.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <div className="pt-16 bg-brand-dark border-b-3 border-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="inline-block bg-brand-lime border-3 border-brand-black px-3 py-1 mb-4">
            <span className="font-display font-700 text-xs uppercase tracking-widest">
              {isTa ? "படத்தொகுப்பு" : "Gallery"}
            </span>
          </div>
          <h1 className="section-heading text-brand-cream max-w-3xl">
            {isTa ? "எங்கள் வசதிகளை காண்க." : "See Our Facility"}
            <br />
            <span className="text-brand-lime">{isTa ? "" : "In Action."}</span>
          </h1>
          <p className="font-body text-gray-400 mt-4">
            {isTa ? "14 படங்கள் — திசு வளர்ப்பு, பயிற்சி, காளான் உற்பத்தி, நர்சரி மற்றும் நிகழ்வுகள்." : "14 photos — tissue culture lab, training sessions, mushroom unit, nursery & events."}
          </p>
        </div>
      </div>

      <MarqueeStrip dark={true} />

      {/* Filter tabs */}
      <section className="bg-brand-cream py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-10">
            {filterCategories.map(({ key, labelEn, labelTa }) => (
              <button
                key={key}
                id={`gallery-filter-${key}`}
                onClick={() => setActiveFilter(key)}
                className={`border-3 border-brand-black px-4 py-2 font-display font-700 text-sm uppercase tracking-wide transition-all ${
                  activeFilter === key
                    ? "bg-brand-black text-brand-lime shadow-brutal-lime"
                    : "bg-brand-cream hover:bg-brand-lime hover:shadow-brutal-sm"
                }`}
              >
                {isTa ? labelTa : labelEn}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((photo, i) => (
              <ScrollReveal key={photo.src} delay={i * 40}>
                <button
                  className="w-full border-3 border-brand-black shadow-brutal overflow-hidden aspect-square relative hover:shadow-brutal-hover hover:translate-x-1 hover:translate-y-1 transition-all group"
                  onClick={() => setLightbox(photos.indexOf(photo))}
                  aria-label={`View full image: ${photo.label}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-black/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="font-display font-700 text-xs uppercase text-brand-lime">{photo.label}</p>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-display font-700 text-xl uppercase text-gray-400">
                {isTa ? "படங்கள் இல்லை" : "No photos in this category"}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-brand-cream font-display font-700 text-2xl border-3 border-brand-cream w-12 h-12 flex items-center justify-center hover:bg-brand-cream hover:text-brand-black transition-colors"
            aria-label="Close lightbox"
          >
            ✕
          </button>
          <div
            className="relative max-w-4xl w-full max-h-[85vh] border-3 border-brand-cream"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative" style={{ aspectRatio: "4/3" }}>
              <Image
                src={photos[lightbox].src}
                alt={photos[lightbox].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            <div className="bg-brand-black border-t-3 border-brand-cream p-4">
              <p className="font-display font-700 text-sm uppercase text-brand-lime">
                {photos[lightbox].label}
              </p>
              <p className="font-body text-xs text-gray-400 mt-1 line-clamp-2">
                {photos[lightbox].alt}
              </p>
            </div>
          </div>
          {/* Prev/Next */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 border-3 border-brand-cream bg-brand-black text-brand-cream w-12 h-12 flex items-center justify-center font-display font-700 text-xl hover:bg-brand-lime hover:text-brand-black hover:border-brand-lime transition-all"
            onClick={(e) => { e.stopPropagation(); setLightbox(((lightbox || 0) - 1 + photos.length) % photos.length); }}
            aria-label="Previous photo"
          >
            ‹
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 border-3 border-brand-cream bg-brand-black text-brand-cream w-12 h-12 flex items-center justify-center font-display font-700 text-xl hover:bg-brand-lime hover:text-brand-black hover:border-brand-lime transition-all"
            onClick={(e) => { e.stopPropagation(); setLightbox(((lightbox || 0) + 1) % photos.length); }}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
