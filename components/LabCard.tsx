"use client";

import { useLang } from "@/context/LangContext";

interface LabCardProps {
  name: string;
  nameTa?: string;
  description: string;
  descriptionTa?: string;
  icon: string;
  dark?: boolean;
}

export default function LabCard({ name, nameTa, description, descriptionTa, icon, dark = false }: LabCardProps) {
  const { lang } = useLang();
  const isTa = lang === "ta";
  const displayName = isTa && nameTa ? nameTa : name;
  const displayDesc = isTa && descriptionTa ? descriptionTa : description;

  return (
    <div
      className={`border-3 border-brand-black shadow-brutal hover:shadow-brutal-hover hover:translate-x-1.5 hover:translate-y-1.5 transition-all duration-150 p-6 flex flex-col gap-4 ${
        dark ? "bg-brand-dark text-brand-cream" : "bg-brand-cream text-brand-black"
      }`}
    >
      <div className="flex items-start gap-4">
        <div className={`w-14 h-14 border-3 border-brand-black flex items-center justify-center text-3xl flex-shrink-0 ${dark ? "bg-brand-lime" : "bg-brand-lime"}`}>
          {icon}
        </div>
        <div>
          <h3 className="font-display font-700 text-lg uppercase tracking-tight leading-tight mb-2">
            {displayName}
          </h3>
          <p className={`font-body text-sm leading-relaxed ${dark ? "text-gray-300" : "text-gray-700"}`}>
            {displayDesc}
          </p>
        </div>
      </div>
    </div>
  );
}
