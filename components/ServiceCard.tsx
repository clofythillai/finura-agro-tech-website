"use client";

import { useState } from "react";
import { useLang } from "@/context/LangContext";

interface ServiceCardProps {
  icon: string;
  title: string;
  titleTa?: string;
  description: string;
  descriptionTa?: string;
  accentColor?: "lime" | "orange";
  index?: number;
}

export default function ServiceCard({
  icon,
  title,
  titleTa,
  description,
  descriptionTa,
  accentColor = "lime",
  index = 0,
}: ServiceCardProps) {
  const { lang } = useLang();
  const [expanded, setExpanded] = useState(false);
  const isTa = lang === "ta";
  const displayTitle = isTa && titleTa ? titleTa : title;
  const displayDesc = isTa && descriptionTa ? descriptionTa : description;

  const shortDesc = displayDesc.length > 120 ? displayDesc.slice(0, 120) + "..." : displayDesc;

  const tiltClass = index % 2 === 0 ? "" : "";
  const bgAccent = accentColor === "lime" ? "bg-brand-lime" : "bg-brand-orange";

  return (
    <div
      className={`border-3 border-brand-black bg-brand-cream shadow-brutal hover:shadow-brutal-hover hover:translate-x-1.5 hover:translate-y-1.5 transition-all duration-150 flex flex-col h-full group`}
    >
      {/* Header */}
      <div className={`${bgAccent} border-b-3 border-brand-black px-5 py-4 flex items-start gap-3`}>
        <span className="text-3xl flex-shrink-0">{icon}</span>
        <h3 className="font-display font-700 text-base uppercase tracking-tight leading-tight text-brand-black">
          {displayTitle}
        </h3>
      </div>

      {/* Body */}
      <div className="px-5 py-4 flex-1 flex flex-col">
        <p className="font-body text-sm text-gray-700 leading-relaxed flex-1">
          {expanded ? displayDesc : shortDesc}
        </p>
        {displayDesc.length > 120 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-3 font-display font-700 text-xs uppercase tracking-wide text-brand-black underline hover:text-brand-orange transition-colors self-start"
          >
            {expanded
              ? (isTa ? "குறைவாக படிக்க" : "Read less")
              : (isTa ? "மேலும் படிக்க" : "Read more")}
          </button>
        )}
      </div>
    </div>
  );
}
