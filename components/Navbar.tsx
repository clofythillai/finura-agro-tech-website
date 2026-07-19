"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/context/LangContext";

const navLinks = [
  { href: "/", key: "nav.home" },
  { href: "/about", key: "nav.about" },
  { href: "/services", key: "nav.services" },
  { href: "/research", key: "nav.research" },
  { href: "/training", key: "nav.training" },
  { href: "/nursery", key: "nav.nursery" },
  { href: "/gallery", key: "nav.gallery" },
  { href: "/contact", key: "nav.contact" },
];

export default function Navbar() {
  const { t, lang, toggleLang } = useLang();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-brand-cream border-b-3 border-brand-black shadow-brutal-sm"
          : "bg-brand-cream border-b-3 border-brand-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 border-3 border-brand-black bg-brand-dark flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                {/* Circular dots pattern */}
                <circle cx="20" cy="20" r="18" fill="#0D0D0D" />
                {/* Orange dots ring */}
                <circle cx="20" cy="5" r="2" fill="#F4A11B" />
                <circle cx="31" cy="11" r="2" fill="#F4A11B" />
                <circle cx="35" cy="20" r="2" fill="#F4A11B" />
                <circle cx="31" cy="29" r="2" fill="#F4A11B" />
                <circle cx="20" cy="35" r="2" fill="#F4A11B" />
                <circle cx="9" cy="29" r="2" fill="#F4A11B" />
                <circle cx="5" cy="20" r="2" fill="#F4A11B" />
                <circle cx="9" cy="11" r="2" fill="#F4A11B" />
                {/* Inner dots */}
                <circle cx="20" cy="11" r="1.5" fill="#B8F23C" />
                <circle cx="27" cy="14" r="1.5" fill="#B8F23C" />
                <circle cx="29" cy="20" r="1.5" fill="#B8F23C" />
                <circle cx="11" cy="20" r="1.5" fill="#B8F23C" />
                <circle cx="13" cy="14" r="1.5" fill="#B8F23C" />
                {/* Tree trunk */}
                <rect x="19" y="18" width="2" height="8" fill="#B8F23C" />
                {/* Tree canopy */}
                <polygon points="20,10 25,20 15,20" fill="#B8F23C" />
                <polygon points="20,14 24,21 16,21" fill="#B8F23C" opacity="0.7" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <div className="font-display font-700 text-sm uppercase tracking-tight leading-tight text-brand-black">
                Finura Agro Tech
              </div>
              <div className="font-body text-xs text-gray-600 tracking-wider">
                LLP
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ href, key }) => (
              <Link
                key={href}
                href={href}
                className={`font-display font-600 text-xs uppercase tracking-wide px-3 py-1.5 transition-all duration-150 ${
                  pathname === href
                    ? "bg-brand-lime border-3 border-brand-black"
                    : "hover:bg-brand-black hover:text-brand-cream border-3 border-transparent"
                }`}
              >
                {t(key)}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Tamil toggle */}
            <button
              id="lang-toggle"
              onClick={toggleLang}
              aria-label="Toggle language between English and Tamil"
              className="hidden sm:flex items-center gap-1 border-3 border-brand-black px-3 py-1 font-display font-700 text-xs uppercase tracking-wide bg-brand-cream hover:bg-brand-black hover:text-brand-cream transition-all duration-150"
            >
              <span>{lang === "en" ? "தமிழ்" : "EN"}</span>
            </button>

            {/* CTA */}
            <Link
              id="nav-apply-btn"
              href="/apply"
              className="hidden md:inline-flex btn-orange text-xs py-2 px-4"
            >
              {t("nav.apply")}
            </Link>

            {/* Hamburger */}
            <button
              id="mobile-menu-btn"
              className="lg:hidden border-3 border-brand-black p-2 bg-brand-cream hover:bg-brand-black hover:text-brand-cream transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 bg-current transition-all ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                <span className={`block h-0.5 bg-current transition-all ${isOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-current transition-all ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-brand-cream border-t-3 border-brand-black">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map(({ href, key }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`font-display font-700 text-sm uppercase tracking-wide px-4 py-3 border-3 border-transparent transition-all ${
                  pathname === href
                    ? "bg-brand-lime border-brand-black"
                    : "hover:border-brand-black"
                }`}
              >
                {t(key)}
              </Link>
            ))}
            <div className="flex gap-2 mt-2 pt-2 border-t-3 border-brand-black">
              <button
                onClick={toggleLang}
                className="flex-1 border-3 border-brand-black py-2 font-display font-700 text-sm uppercase text-center hover:bg-brand-black hover:text-brand-cream transition-colors"
              >
                {lang === "en" ? "Switch to தமிழ்" : "Switch to English"}
              </button>
              <Link
                href="/apply"
                onClick={() => setIsOpen(false)}
                className="flex-1 btn-orange text-sm py-2 text-center justify-center"
              >
                {t("nav.apply")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
