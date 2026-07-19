"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";

const footerNav = [
  { href: "/", labelEn: "Home", labelTa: "முகப்பு" },
  { href: "/about", labelEn: "About Us", labelTa: "எங்களை பற்றி" },
  { href: "/services", labelEn: "Services", labelTa: "சேவைகள்" },
  { href: "/research", labelEn: "Research & Team", labelTa: "ஆராய்ச்சி" },
  { href: "/training", labelEn: "Training", labelTa: "பயிற்சி" },
  { href: "/nursery", labelEn: "Nursery", labelTa: "நர்சரி" },
  { href: "/gallery", labelEn: "Gallery", labelTa: "படத்தொகுப்பு" },
  { href: "/contact", labelEn: "Contact", labelTa: "தொடர்பு" },
];

const comingSoon = [
  { href: "/apply", labelEn: "Apply Online", labelTa: "ஆன்லைனில் விண்ணப்பி" },
  { href: "/login/student", labelEn: "Student Login", labelTa: "மாணவர் உள்நுழைவு" },
  { href: "/login/staff", labelEn: "Staff Login", labelTa: "ஊழியர் உள்நுழைவு" },
];

export default function Footer() {
  const { lang } = useLang();
  const isTA = lang === "ta";

  return (
    <footer className="bg-brand-dark text-brand-cream border-t-3 border-brand-black">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 border-3 border-brand-lime bg-brand-dark flex items-center justify-center">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <circle cx="20" cy="20" r="18" fill="#0D0D0D" />
                <circle cx="20" cy="5" r="2" fill="#F4A11B" />
                <circle cx="31" cy="11" r="2" fill="#F4A11B" />
                <circle cx="35" cy="20" r="2" fill="#F4A11B" />
                <circle cx="31" cy="29" r="2" fill="#F4A11B" />
                <circle cx="20" cy="35" r="2" fill="#F4A11B" />
                <circle cx="9" cy="29" r="2" fill="#F4A11B" />
                <circle cx="5" cy="20" r="2" fill="#F4A11B" />
                <circle cx="9" cy="11" r="2" fill="#F4A11B" />
                <circle cx="20" cy="11" r="1.5" fill="#B8F23C" />
                <circle cx="27" cy="14" r="1.5" fill="#B8F23C" />
                <circle cx="29" cy="20" r="1.5" fill="#B8F23C" />
                <circle cx="11" cy="20" r="1.5" fill="#B8F23C" />
                <circle cx="13" cy="14" r="1.5" fill="#B8F23C" />
                <rect x="19" y="18" width="2" height="8" fill="#B8F23C" />
                <polygon points="20,10 25,20 15,20" fill="#B8F23C" />
                <polygon points="20,14 24,21 16,21" fill="#B8F23C" opacity="0.7" />
              </svg>
            </div>
            <div>
              <div className="font-display font-700 text-sm uppercase tracking-tight leading-tight text-brand-cream">
                Finura Agro Tech
              </div>
              <div className="font-body text-xs text-gray-400 tracking-wider">LLP</div>
            </div>
          </div>
          <p className="font-body text-sm text-gray-400 leading-relaxed mb-4">
            {isTA ? "இயற்கைக்கான தொழில்நுட்பம்" : "Technology for Nature"}
          </p>
          <div className="space-y-1 text-xs text-gray-400 font-body">
            <p>LLPIN: AAY-4389</p>
            <p>MCA Registered, Govt. of India</p>
            <p>TNAU Affiliated | EDII-KABIF Incubatee</p>
          </div>
          {/* Social */}
          <div className="flex gap-3 mt-5">
            <a
              href="https://facebook.com/410389732318278"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Finura Agro Tech on Facebook"
              className="w-9 h-9 border-3 border-brand-black bg-brand-gray flex items-center justify-center hover:bg-brand-lime hover:border-brand-lime hover:text-brand-black transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href="https://wa.me/919445450305"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="w-9 h-9 border-3 border-brand-black bg-brand-gray flex items-center justify-center hover:bg-brand-lime hover:border-brand-lime hover:text-brand-black transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-display font-700 text-sm uppercase tracking-wide text-brand-lime mb-4 border-b-3 border-brand-lime pb-2">
            {isTA ? "பக்கங்கள்" : "Pages"}
          </h3>
          <ul className="space-y-2">
            {footerNav.map(({ href, labelEn, labelTa }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-body text-sm text-gray-400 hover:text-brand-lime transition-colors flex items-center gap-2 group"
                >
                  <span className="text-brand-orange group-hover:text-brand-lime transition-colors">→</span>
                  {isTA ? labelTa : labelEn}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Coming Soon */}
        <div>
          <h3 className="font-display font-700 text-sm uppercase tracking-wide text-brand-orange mb-4 border-b-3 border-brand-orange pb-2">
            {isTA ? "விரைவில் வருகிறது" : "Coming Soon"}
          </h3>
          <ul className="space-y-2 mb-6">
            {comingSoon.map(({ href, labelEn, labelTa }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-body text-sm text-gray-400 hover:text-brand-orange transition-colors flex items-center gap-2"
                >
                  <span className="text-xs border border-brand-orange text-brand-orange px-1">SOON</span>
                  {isTA ? labelTa : labelEn}
                </Link>
              </li>
            ))}
          </ul>
          <div>
            <h3 className="font-display font-700 text-sm uppercase tracking-wide text-brand-lime mb-3 border-b-3 border-brand-lime pb-2">
              {isTA ? "இயக்க நேரம்" : "Hours"}
            </h3>
            <p className="text-xs text-gray-400 font-body leading-relaxed">
              {isTA
                ? "திங்கள்–சனி: காலை 9 – மாலை 5:30\nமதிய உணவு: 1–2 PM\nஞாயிறு: மூடப்பட்டது"
                : "Mon–Sat: 9:00 AM – 5:30 PM\nLunch: 1:00 PM – 2:00 PM\nSunday: Closed"}
            </p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display font-700 text-sm uppercase tracking-wide text-brand-lime mb-4 border-b-3 border-brand-lime pb-2">
            {isTA ? "தொடர்பு" : "Contact"}
          </h3>
          <div className="space-y-4 text-sm font-body text-gray-400">
            <div>
              <p className="text-brand-cream font-600 text-xs uppercase tracking-wide mb-1">
                {isTA ? "பதிவு செய்யப்பட்ட அலுவலகம்" : "Registered Office"}
              </p>
              <p>West Lutheran Street,<br />Nagercoil – 629001,<br />Kanyakumari District, TN</p>
            </div>
            <div>
              <p className="text-brand-cream font-600 text-xs uppercase tracking-wide mb-1">
                {isTA ? "கிளை 1 — தோவாலை" : "Branch — Thovalai"}
              </p>
              <p>11/8 J, Loyola College Road,<br />Thovalai – 629302</p>
            </div>
            <div>
              <p className="text-brand-cream font-600 text-xs uppercase tracking-wide mb-1">
                {isTA ? "தொலைபேசி" : "Phone"}
              </p>
              <a href="tel:9445450305" className="hover:text-brand-lime transition-colors block">9445450305</a>
              <a href="tel:9487249777" className="hover:text-brand-lime transition-colors block">9487249777</a>
            </div>
            <div>
              <a href="mailto:finuraagrotechllp@gmail.com" className="hover:text-brand-lime transition-colors text-xs break-all">
                finuraagrotechllp@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t-3 border-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-gray-500">
            {isTA
              ? "© 2024 பினுரா அக்ரோ டெக் எல்எல்பி. அனைத்து உரிமைகளும் பாதுகாக்கப்படுகின்றன."
              : "© 2024 Finura Agro Tech LLP. All rights reserved. LLPIN: AAY-4389"}
          </p>
          <p className="font-body text-xs text-gray-600">
            {isTA ? "Tamil version available ✓" : "தமிழ் பதிப்பு கிடைக்கும் ✓"}
          </p>
        </div>
      </div>
    </footer>
  );
}
