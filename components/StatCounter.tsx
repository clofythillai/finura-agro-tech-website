"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  labelTa?: string;
  duration?: number;
  dark?: boolean;
}

export default function StatCounter({
  end,
  suffix = "",
  prefix = "",
  label,
  labelTa,
  duration = 2000,
  dark = false,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <div
      ref={ref}
      className={`border-3 border-brand-black p-6 text-center ${
        dark ? "bg-brand-dark text-brand-cream shadow-brutal-white" : "bg-brand-cream text-brand-black shadow-brutal"
      }`}
    >
      <div className={`font-display font-700 text-5xl md:text-6xl leading-none mb-2 ${dark ? "text-brand-lime" : "text-brand-black"}`}>
        {prefix}{count}{suffix}
      </div>
      <div className={`font-body text-sm uppercase tracking-wide ${dark ? "text-gray-400" : "text-gray-600"}`}>
        {label}
      </div>
    </div>
  );
}
