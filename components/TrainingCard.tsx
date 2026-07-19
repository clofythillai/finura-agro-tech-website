"use client";

import { useLang } from "@/context/LangContext";

interface TrainingCardProps {
  title: string;
  titleTa?: string;
  duration?: string;
  fee?: string;
  highlights?: string[];
  variant?: "featured" | "chip";
}

export default function TrainingCard({
  title,
  titleTa,
  duration,
  fee,
  highlights = [],
  variant = "chip",
}: TrainingCardProps) {
  const { lang } = useLang();
  const displayTitle = lang === "ta" && titleTa ? titleTa : title;

  if (variant === "chip") {
    return (
      <div className="border-3 border-brand-black bg-brand-cream px-4 py-3 font-display font-700 text-sm uppercase tracking-wide shadow-brutal-sm hover:shadow-brutal-hover hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-default">
        <span className="text-brand-orange mr-2">▶</span>
        {displayTitle}
      </div>
    );
  }

  return (
    <div className="border-3 border-brand-black bg-brand-cream shadow-brutal hover:shadow-brutal-hover hover:translate-x-1.5 hover:translate-y-1.5 transition-all duration-150">
      {/* Header */}
      <div className="bg-brand-dark border-b-3 border-brand-black px-5 py-4">
        <h3 className="font-display font-700 text-base uppercase tracking-tight text-brand-lime leading-tight">
          {displayTitle}
        </h3>
      </div>

      {/* Details */}
      <div className="px-5 py-4">
        <div className="flex flex-wrap gap-3 mb-4">
          {duration && (
            <div className="border-3 border-brand-black px-3 py-1 bg-brand-lime">
              <span className="font-display font-700 text-xs uppercase">⏱ {duration}</span>
            </div>
          )}
          {fee && (
            <div className="border-3 border-brand-black px-3 py-1 bg-brand-orange">
              <span className="font-display font-700 text-xs uppercase">₹ {fee}</span>
            </div>
          )}
        </div>

        {highlights.length > 0 && (
          <ul className="space-y-1.5">
            {highlights.map((h, i) => (
              <li key={i} className="font-body text-sm text-gray-700 flex items-start gap-2">
                <span className="text-brand-lime font-700 flex-shrink-0">✓</span>
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
