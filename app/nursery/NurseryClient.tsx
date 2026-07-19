"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import MarqueeStrip from "@/components/MarqueeStrip";
import { useLang } from "@/context/LangContext";

const categories = [
  { en: "Coconut Varieties", ta: "தேங்காய் வகைகள்", icon: "🥥" },
  { en: "Big Trees", ta: "பெரிய மரங்கள்", icon: "🌳" },
  { en: "All Fruits Plants", ta: "அனைத்து பழ தாவரங்கள்", icon: "🍎" },
  { en: "Rare Fruits Plants", ta: "அரிய பழ தாவரங்கள்", icon: "🫐" },
  { en: "TC Banana Plants", ta: "TC வாழை தாவரங்கள்", icon: "🍌" },
  { en: "Timber Plants", ta: "மரக்கட்டை தாவரங்கள்", icon: "🌲" },
  { en: "Ornamental Plants", ta: "அலங்கார தாவரங்கள்", icon: "🌺" },
  { en: "Medicinal Plants", ta: "மருத்துவ தாவரங்கள்", icon: "🌿" },
  { en: "Gift Plants", ta: "பரிசு தாவரங்கள்", icon: "🎁" },
  { en: "Orchids", ta: "ஆர்க்கிட்", icon: "🌸" },
  { en: "Anthurium", ta: "அந்துரியம்", icon: "💐" },
  { en: "Pots", ta: "தொட்டிகள்", icon: "🪴" },
  { en: "Terrace Garden Kits", ta: "மாடி தோட்ட கிட்கள்", icon: "🏡" },
  { en: "Organic Inputs", ta: "இயற்கை இடுபொருட்கள்", icon: "🌱" },
];

export default function NurseryClient() {
  const { lang } = useLang();
  const isTa = lang === "ta";

  return (
    <>
      {/* Hero */}
      <div className="pt-16 bg-brand-cream border-b-3 border-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="py-16 pr-0 lg:pr-12">
              <div className="inline-block bg-brand-lime border-3 border-brand-black px-3 py-1 mb-4">
                <span className="font-display font-700 text-xs uppercase tracking-widest">
                  {isTa ? "நர்சரி" : "Nursery"}
                </span>
              </div>
              <h1 className="section-heading max-w-lg mb-6">
                {isTa ? "14+ வகை தாவரங்கள்." : "14+ Plant"}
                <br />
                <span className="text-brand-orange">{isTa ? "" : "Categories."}</span>
              </h1>
              <p className="font-body text-base text-gray-700 leading-relaxed max-w-lg mb-6">
                {isTa
                  ? "எங்கள் நர்சரி தோட்டக்கலை, அலங்கார மற்றும் மருத்துவ தாவரங்களின் பரந்த வகைப்படுத்தலை வழங்குகிறது. Google ஐந்து நட்சத்திர மதிப்பீட்டால் நம்பகமான."
                  : "Our nursery offers a wide selection of horticultural, ornamental, and medicinal plants. Trusted with a 5-star Google rating for quality collections of indoor and fruit plants."}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  {isTa ? "விலை கேட்க தொடர்பு கொள்ளுங்கள்" : "Enquire About Plants →"}
                </Link>
                <a href="tel:9445450305" className="btn-secondary">
                  📞 9445450305
                </a>
              </div>
            </div>
            <div className="relative min-h-72 border-l-0 lg:border-l-3 border-t-3 lg:border-t-0 border-brand-black overflow-hidden">
              <Image
                src="/images/Finura_Agro_Tech_LLP_1603593474.jpg"
                alt="Ornamental plants in decorative circular metal wall holders at the Finura Agro Tech nursery — indoor plants display"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <MarqueeStrip dark={false} />

      {/* Plant categories */}
      <section className="bg-brand-dark py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="section-heading text-brand-cream mb-10">
              {isTa ? "தாவர வகைகள்." : "Plant Categories."}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.en} delay={i * 40}>
                <div className="border-3 border-brand-black bg-brand-cream shadow-brutal hover:shadow-brutal-hover hover:translate-x-1 hover:translate-y-1 transition-all p-4 text-center">
                  <div className="text-4xl mb-2">{cat.icon}</div>
                  <p className="font-display font-700 text-xs uppercase tracking-tight text-brand-black leading-tight">
                    {isTa ? cat.ta : cat.en}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured review */}
      <section className="bg-brand-cream py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="border-3 border-brand-black bg-brand-black shadow-brutal p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-xl text-brand-orange">★</span>
                  ))}
                </div>
                <blockquote className="font-body text-base text-brand-cream italic leading-relaxed mb-4">
                  "Good collections of various indoor and fruits plants available in this nursery"
                </blockquote>
                <cite className="font-display font-700 text-sm uppercase text-brand-lime">— S. Prakash, Google Review</cite>
              </div>
            </ScrollReveal>

            {/* Coming soon online order */}
            <ScrollReveal delay={100}>
              <div className="border-3 border-brand-black bg-brand-orange shadow-brutal p-6 flex flex-col justify-between">
                <div>
                  <p className="font-display font-700 text-xs uppercase tracking-widest text-brand-black mb-2">
                    🛒 {isTa ? "விரைவில் வருகிறது" : "Coming Soon"}
                  </p>
                  <h3 className="font-display font-700 text-2xl uppercase text-brand-black mb-3">
                    {isTa ? "ஆன்லைன் ஆர்டர்கள்" : "Online Orders"}
                  </h3>
                  <p className="font-body text-sm text-gray-800 mb-4">
                    {isTa
                      ? "நர்சரி தயாரிப்புகள் மற்றும் இயற்கை இடுபொருட்களுக்கான ஆன்லைன் கடை விரைவில் தொடங்கும்."
                      : "Shop for plants, pots, terrace garden kits, and organic inputs online. Coming in Phase 2."}
                  </p>
                </div>
                <Link href="/contact" className="btn-primary text-sm">
                  {isTa ? "இப்போது தொடர்பு கொள்ளுங்கள் →" : "Enquire Now →"}
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
