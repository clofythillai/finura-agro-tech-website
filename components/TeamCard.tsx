"use client";

import { useState } from "react";
import Image from "next/image";
import { useLang } from "@/context/LangContext";

interface TeamCardProps {
  name: string;
  designation: string;
  designationTa?: string;
  bio: string;
  bioTa?: string;
  imageSrc?: string;
  imageAlt?: string;
  tags?: string[];
  missing?: boolean;
}

export default function TeamCard({
  name,
  designation,
  designationTa,
  bio,
  bioTa,
  imageSrc,
  imageAlt,
  tags = [],
  missing = false,
}: TeamCardProps) {
  const { lang } = useLang();
  const [expanded, setExpanded] = useState(false);
  const isTa = lang === "ta";

  const displayDesig = isTa && designationTa ? designationTa : designation;
  const displayBio = isTa && bioTa ? bioTa : bio;
  const shortBio = displayBio.length > 180 ? displayBio.slice(0, 180) + "..." : displayBio;

  return (
    <div className="border-3 border-brand-black bg-brand-cream shadow-brutal hover:shadow-brutal-hover hover:translate-x-1.5 hover:translate-y-1.5 transition-all duration-150 flex flex-col">
      {/* Photo */}
      <div className="relative h-56 border-b-3 border-brand-black bg-gray-200 overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt || `${name} — Finura Agro Tech LLP`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
            <div className="text-center">
              <div className="text-6xl mb-2">👤</div>
              <p className="text-xs text-gray-500 font-body px-4">
                {missing
                  ? "📌 Photo pending — to be supplied by client"
                  : "Photo coming soon"}
              </p>
            </div>
          </div>
        )}
        {/* Sticker badge */}
        <div className="absolute top-3 right-3 bg-brand-lime border-3 border-brand-black px-2 py-1 transform rotate-2">
          <span className="font-display font-700 text-xs uppercase">Research</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-display font-700 text-xl uppercase tracking-tight text-brand-black mb-1">
          {name}
        </h3>
        <p className="font-body text-sm text-brand-orange font-600 mb-3">{displayDesig}</p>

        {missing ? (
          <div className="bg-brand-orange/10 border-3 border-brand-orange p-3 mb-3">
            <p className="font-body text-xs text-brand-black">
              📌 <strong>Note to client:</strong> Bio text for Dr. Vinu Radha has not been supplied yet.
              Please provide the bio before launch.
            </p>
          </div>
        ) : (
          <>
            <p className="font-body text-sm text-gray-700 leading-relaxed flex-1">
              {expanded ? displayBio : shortBio}
            </p>
            {displayBio.length > 180 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-3 font-display font-700 text-xs uppercase tracking-wide text-brand-black underline hover:text-brand-orange transition-colors self-start"
              >
                {expanded
                  ? (isTa ? "குறைவாக படிக்க" : "Read less")
                  : (isTa ? "மேலும் படிக்க" : "Read more")}
              </button>
            )}
          </>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t-3 border-gray-200">
            {tags.map((tag) => (
              <span key={tag} className="tag-chip text-xs py-0.5">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
