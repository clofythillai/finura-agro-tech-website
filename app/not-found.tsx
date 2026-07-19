"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center px-4 pt-16">
      <div className="max-w-lg w-full">
        {/* Big 404 */}
        <div className="font-display font-700 leading-none mb-4" style={{ fontSize: "clamp(6rem, 20vw, 12rem)", color: "#B8F23C", WebkitTextStroke: "4px #0D0D0D" }}>
          404
        </div>

        <div className="inline-block bg-brand-orange border-3 border-brand-black shadow-brutal px-4 py-2 mb-6 transform -rotate-1">
          <span className="font-display font-700 text-sm uppercase tracking-wide">
            Page Not Found
          </span>
        </div>

        <h1 className="font-display font-700 text-3xl md:text-4xl uppercase text-brand-cream leading-tight mb-4">
          This page has gone<br />
          <span className="text-brand-lime">underground.</span>
        </h1>

        <p className="font-body text-base text-gray-400 leading-relaxed mb-8 border-l-3 border-brand-lime pl-4">
          The page you're looking for doesn't exist or has moved. Head back to the home page or contact us directly.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link href="/" className="btn-primary">
            ← Back to Home
          </Link>
          <Link href="/contact" className="btn-secondary" style={{ color: "#F5F1E8", borderColor: "#F5F1E8" }}>
            Contact Us
          </Link>
        </div>

        <div className="mt-8 border-3 border-brand-black bg-brand-lime shadow-brutal p-4">
          <p className="font-display font-700 text-sm uppercase tracking-wide text-brand-black mb-1">
            Direct Contact
          </p>
          <a href="tel:9445450305" className="font-display font-700 text-xl text-brand-black">
            📞 9445450305
          </a>
        </div>
      </div>
    </div>
  );
}
