"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";

interface ComingSoonProps {
  title: string;
  titleTa?: string;
  description?: string;
  descriptionTa?: string;
}

export default function ComingSoon({ title, titleTa, description, descriptionTa }: ComingSoonProps) {
  const { lang } = useLang();
  const isTa = lang === "ta";

  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center px-4 pt-16">
      <div className="max-w-lg w-full">
        {/* Sticker tag */}
        <div className="inline-block bg-brand-orange border-3 border-brand-black shadow-brutal px-4 py-2 mb-6 transform -rotate-1">
          <span className="font-display font-700 text-sm uppercase tracking-wide">
            {isTa ? "விரைவில் வருகிறது" : "Coming Soon"}
          </span>
        </div>

        <h1 className="font-display font-700 text-5xl md:text-6xl uppercase text-brand-cream leading-none mb-4">
          {isTa && titleTa ? titleTa : title}
        </h1>

        {description && (
          <p className="font-body text-lg text-gray-400 leading-relaxed mb-8 border-l-3 border-brand-lime pl-4">
            {isTa && descriptionTa ? descriptionTa : description}
          </p>
        )}

        <div className="border-3 border-brand-black bg-brand-lime shadow-brutal p-5 mb-8">
          <p className="font-display font-700 text-sm uppercase tracking-wide text-brand-black mb-2">
            {isTa ? "இதற்கிடையில், எங்களை தொடர்பு கொள்ளுங்கள்:" : "In the meantime, reach us at:"}
          </p>
          <a href="tel:9445450305" className="font-display font-700 text-2xl text-brand-black hover:text-brand-dark transition-colors block">
            📞 9445450305
          </a>
          <a href="mailto:finuraagrotechllp@gmail.com" className="font-body text-sm text-brand-black hover:underline block mt-1">
            finuraagrotechllp@gmail.com
          </a>
        </div>

        <Link href="/" className="btn-secondary inline-flex">
          ← {isTa ? "முகப்பு பக்கம்" : "Back to Home"}
        </Link>
      </div>
    </div>
  );
}
