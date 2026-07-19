"use client";

import { useLang } from "@/context/LangContext";

interface MarqueeStripProps {
  dark?: boolean;
}

export default function MarqueeStrip({ dark = true }: MarqueeStripProps) {
  const { t } = useLang();
  const items = [
    "MCA REGISTERED",
    "TNAU AFFILIATED",
    "EDII-KABIF INCUBATEE",
    "GOVT. ASSISTED",
    "SINCE 2021",
    "LLPIN AAY-4389",
    "44 RESEARCH PAPERS",
    "4 LABORATORIES",
    "9 CORE DOMAINS",
    "100+ STUDENTS ANNUALLY",
    "NATIONAL HORTICULTURE MISSION",
    "PLANT TISSUE CULTURE CENTRE",
    "MUSHROOM PRODUCTION UNIT",
  ];

  const itemsTA = [
    "MCA பதிவு பெற்றது",
    "TNAU இணைந்தது",
    "EDII-KABIF இன்குபேட்டி",
    "அரசு உதவி",
    "2021 முதல்",
    "LLPIN AAY-4389",
    "44 ஆராய்ச்சி கட்டுரைகள்",
    "4 ஆய்வகங்கள்",
    "9 முக்கிய துறைகள்",
    "100+ மாணவர்கள் ஆண்டுதோறும்",
    "தேசிய தோட்டக்கலை இயக்கம்",
    "திசு வளர்ப்பு மையம்",
    "காளான் உற்பத்தி அலகு",
  ];

  const { lang } = useLang();
  const displayItems = lang === "ta" ? itemsTA : items;
  const doubled = [...displayItems, ...displayItems];

  return (
    <div
      className={`overflow-hidden border-y-3 border-brand-black py-3 ${
        dark ? "bg-brand-black text-brand-lime" : "bg-brand-lime text-brand-black"
      }`}
    >
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 35s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center font-display font-700 text-sm uppercase tracking-widest flex-shrink-0"
          >
            {item}
            <span className={`mx-4 text-lg ${dark ? "text-brand-orange" : "text-brand-black"}`}>
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
