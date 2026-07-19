"use client";

interface TestimonialCardProps {
  review: string;
  author: string;
  rating?: number;
  dark?: boolean;
}

export default function TestimonialCard({ review, author, rating = 5, dark = false }: TestimonialCardProps) {
  return (
    <div
      className={`border-3 border-brand-black shadow-brutal p-6 flex flex-col gap-4 hover:shadow-brutal-hover hover:translate-x-1.5 hover:translate-y-1.5 transition-all duration-150 ${
        dark ? "bg-brand-dark text-brand-cream" : "bg-brand-cream text-brand-black"
      }`}
    >
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={`text-xl ${i < rating ? "text-brand-orange" : "text-gray-300"}`}>
            ★
          </span>
        ))}
      </div>

      {/* Quote */}
      <div className="relative">
        <span className="text-6xl font-display text-brand-lime leading-none absolute -top-2 -left-1 opacity-50">"</span>
        <p className={`font-body text-base leading-relaxed pl-8 ${dark ? "text-gray-300" : "text-gray-700"}`}>
          {review}
        </p>
      </div>

      {/* Author */}
      <div className={`pt-3 border-t-3 ${dark ? "border-brand-gray" : "border-gray-200"}`}>
        <p className="font-display font-700 text-sm uppercase tracking-wide">
          — {author}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs text-gray-500 font-body">Verified Google Review</span>
          <span className="bg-brand-lime border border-brand-black px-1 text-xs font-display font-700">✓</span>
        </div>
      </div>
    </div>
  );
}
