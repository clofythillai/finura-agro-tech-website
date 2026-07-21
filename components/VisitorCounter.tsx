"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/context/LangContext";

export default function VisitorCounter() {
  const { lang } = useLang();
  const isTa = lang === "ta";
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const baseCount = 14320;
    const storageKey = "finura_visitor_count_cache";

    const fetchRealCount = async () => {
      try {
        // Using Abacus, a fast, anonymous, open-source counting API
        const res = await fetch("https://abacus.jasoncameron.dev/hit/finura-agro-tech-llp/visitors");
        if (res.ok) {
          const data = await res.json();
          // Abacus returns structure: { value: number }
          if (data && typeof data.value === "number") {
            const finalCount = baseCount + data.value;
            localStorage.setItem(storageKey, finalCount.toString());
            setCount(finalCount);
            return;
          }
        }
        throw new Error("Abacus API returned non-ok status");
      } catch (e) {
        // Fallback to local storage counter simulation (increments on every reload for immediate feedback)
        const cached = localStorage.getItem(storageKey);
        let currentCount = cached ? parseInt(cached, 10) : baseCount;

        currentCount += 1;
        localStorage.setItem(storageKey, currentCount.toString());
        setCount(currentCount);
      }
    };

    fetchRealCount();
  }, []);

  if (count === null) {
    return (
      <span className="font-body text-xs text-gray-500">
        {isTa ? "பார்வையாளர்கள்: ..." : "Visitors: ..."}
      </span>
    );
  }

  return (
    <div className="flex items-center gap-2 select-none">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-lime opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-lime"></span>
      </span>
      <span className="font-display font-700 text-xs uppercase tracking-wider text-brand-cream">
        {isTa ? "பார்வையாளர்கள்: " : "Visitors: "}
        <span className="bg-brand-black px-1.5 py-0.5 border border-brand-gray text-brand-lime font-mono shadow-brutal-sm ml-1">
          {count.toLocaleString()}
        </span>
      </span>
    </div>
  );
}
