"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import MarqueeStrip from "@/components/MarqueeStrip";
import { useLang } from "@/context/LangContext";

const missionPoints = {
  en: [
    "To promote sustainable agricultural practices through modern technologies and scientific interventions.",
    "To provide quality training, internships, and capacity-building programmes for students, farmers, and aspiring entrepreneurs.",
    "To strengthen collaborations with universities, research institutions, industries, and government organizations.",
    "To establish state-of-the-art facilities in plant tissue culture, plant pathology, soil testing, mushroom production, and biocontrol technologies.",
    "To disseminate practical knowledge and technical expertise for the benefit of society.",
  ],
  ta: [
    "நவீன தொழில்நுட்பங்கள் மற்றும் அறிவியல் தலையீடுகள் மூலம் நிலையான விவசாய நடைமுறைகளை மேம்படுத்துவது.",
    "மாணவர்கள், விவசாயிகள் மற்றும் தொழில்முனைவோருக்கு தரமான பயிற்சி, இன்டர்ன்ஷிப் மற்றும் திறன் மேம்பாட்டு திட்டங்களை வழங்குவது.",
    "பல்கலைக்கழகங்கள், ஆராய்ச்சி நிறுவனங்கள், தொழில்கள் மற்றும் அரசு நிறுவனங்களுடன் கூட்டுறவை வலுப்படுத்துவது.",
    "திசு வளர்ப்பு, தாவர நோயியல், மண் பரிசோதனை, காளான் உற்பத்தி மற்றும் உயிரியல் கட்டுப்பாட்டு தொழில்நுட்பங்களில் அதி நவீன வசதிகளை நிறுவுவது.",
    "சமுதாயத்தின் நலனுக்காக நடைமுறை அறிவையும் தொழில்நுட்ப நிபுணத்துவத்தையும் பரப்புவது.",
  ],
};

export default function AboutClient() {
  const { lang } = useLang();
  const isTa = lang === "ta";

  return (
    <>
      {/* Hero Banner */}
      <div className="pt-16 bg-brand-dark border-b-3 border-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="inline-block bg-brand-lime border-3 border-brand-black px-3 py-1 mb-4">
            <span className="font-display font-700 text-xs uppercase tracking-widest">
              {isTa ? "எங்களை பற்றி" : "About Us"}
            </span>
          </div>
          <h1 className="section-heading text-brand-cream max-w-3xl">
            {isTa ? "நம்பகமான விவசாய மையம்" : "Building Agricultural"}
            <br />
            <span className="text-brand-lime">{isTa ? "." : "Excellence."}</span>
          </h1>
        </div>
      </div>

      <MarqueeStrip dark={true} />

      {/* Company Profile */}
      <section className="bg-brand-cream py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <div className="inline-block bg-brand-orange border-3 border-brand-black px-3 py-1 mb-4">
                <span className="font-display font-700 text-xs uppercase tracking-widest">
                  {isTa ? "நிறுவனம் பற்றி" : "Company Profile"}
                </span>
              </div>
              <h2 className="section-heading mb-6">
                {isTa ? "பினுரா அக்ரோ டெக் எல்எல்பி" : "Finura Agro Tech LLP"}
              </h2>
              <div className="space-y-4 font-body text-base text-gray-700 leading-relaxed">
                <p>
                  FINURA AGRO TECH LLP is a Limited Liability Partnership firm registered under Registrar of Companies, Ministry of Corporate Affairs (MCA), Govt of India. Designated Partners of Finura Agro Tech LLP are <strong>Mr. M. Ashok Macrin</strong>, Deputy Director of Horticulture (Retd) and <strong>Mrs. Anisha Shinney Thangam</strong>, Former Professor of Scott Christian College, Nagercoil.
                </p>
                <p>
                  Finura Agro Tech LLP Identification Number is (LLPIN) <strong>AAY-4389</strong>. Registered on <strong>3rd September 2021</strong>. Its registered office is situated at 2F/1A West Lutheran Street, Nagercoil, Kanyakumari District, Tamil Nadu, India, and the Branches at Thovalai and Nanguneri.
                </p>
                {isTa && (
                  <p className="text-sm text-gray-600 italic border-l-3 border-brand-lime pl-3">
                    பினுரா அக்ரோ டெக் எல்எல்பி என்பது இந்திய அரசின் கார்ப்பரேட் விவகார அமைச்சகத்தின் (MCA) கீழ் நிறுவனங்களின் பதிவாளரிடம் பதிவு செய்யப்பட்ட ஒரு கூட்டுப் பொறுப்பு கூட்டாண்மை நிறுவனம்.
                  </p>
                )}
              </div>
            </ScrollReveal>

            {/* Legal details */}
            <ScrollReveal delay={200}>
              <div className="border-3 border-brand-black bg-brand-dark text-brand-cream shadow-brutal">
                <div className="bg-brand-lime border-b-3 border-brand-black px-5 py-3">
                  <h3 className="font-display font-700 text-sm uppercase tracking-wide text-brand-black">
                    {isTa ? "பதிவு விவரங்கள்" : "Legal & Registration Details"}
                  </h3>
                </div>
                <div className="p-5 space-y-3">
                  {[
                    { label: "LLPIN", value: "AAY-4389" },
                    { label: "Registration Date", value: "3rd September 2021" },
                    { label: "Type", value: "Limited Liability Partnership" },
                    { label: "Regulator", value: "Ministry of Corporate Affairs, Govt. of India" },
                    { label: "MoU With", value: "Tamil Nadu Agricultural University (TNAU)" },
                    { label: "Incubated By", value: "EDII-KABIF, AC & RI, Killikulam, TNAU" },
                    { label: "Reg. Office", value: "West Lutheran Street, Nagercoil – 629001" },
                    { label: "Branch 1", value: "11/8 J, Loyola College Road, Thovalai – 629302" },
                    { label: "Branch 2", value: "NH-7, Near AMRL HiTech City, South Nanguneri" },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-start gap-4 text-sm border-b border-brand-gray pb-2 last:border-0 last:pb-0">
                      <span className="font-display font-700 text-xs uppercase tracking-wide text-brand-lime flex-shrink-0">{label}</span>
                      <span className="font-body text-gray-300 text-right text-xs">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-brand-dark py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="section-heading text-brand-cream mb-12">
              {isTa ? "தொலைநோக்கு & இலக்கு" : "Vision & Mission."}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Vision */}
            <ScrollReveal delay={0}>
              <div className="border-3 border-brand-black bg-brand-lime shadow-brutal h-full">
                <div className="border-b-3 border-brand-black px-6 py-4 bg-brand-black">
                  <h3 className="font-display font-700 text-lg uppercase tracking-wide text-brand-lime">
                    {isTa ? "தொலைநோக்கு" : "Vision"}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="font-body text-base text-brand-black leading-relaxed">
                    {isTa
                      ? "நிலையான தொழில்நுட்பங்கள், மேம்பட்ட பயிற்சி மற்றும் தொழில்-கல்வி ஒத்துழைப்பு மூலம் விவசாயிகள், மாணவர்கள், ஆராய்ச்சியாளர்கள் மற்றும் தொழில்முனைவோரை வலுப்படுத்துவதன் மூலம் விவசாய கண்டுபிடிப்பு, உயிரி தொழில்நுட்பம் மற்றும் திறன் மேம்பாட்டில் சிறந்த மையமாக விளங்குவது."
                      : "To be a leading centre of excellence in agricultural innovation, biotechnology, and skill development by empowering farmers, students, researchers, and entrepreneurs through sustainable technologies, advanced training, and industry–academia collaboration."}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Mission */}
            <ScrollReveal delay={100}>
              <div className="border-3 border-brand-black bg-brand-cream shadow-brutal h-full">
                <div className="border-b-3 border-brand-black px-6 py-4 bg-brand-orange">
                  <h3 className="font-display font-700 text-lg uppercase tracking-wide text-brand-black">
                    {isTa ? "இலக்கு" : "Mission"}
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {(isTa ? missionPoints.ta : missionPoints.en).map((point, i) => (
                      <li key={i} className="flex items-start gap-3 font-body text-sm text-gray-700 leading-relaxed">
                        <span className="text-brand-lime font-700 text-lg flex-shrink-0 mt-0.5">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About the Director */}
      <section className="bg-brand-cream py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-3 border-brand-black shadow-brutal">
              <div className="relative min-h-80 lg:min-h-[480px] border-b-3 lg:border-b-0 lg:border-r-3 border-brand-black overflow-hidden">
                <Image
                  src="/profiles/Ashok macrin.png"
                  alt="Mr. M. Ashok Macrin, Managing Director of Finura Agro Tech LLP"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
              </div>
              <div className="p-8 bg-brand-dark text-brand-cream">
                <div className="inline-block bg-brand-lime border-3 border-brand-black px-3 py-1 mb-3">
                  <span className="font-display font-700 text-xs uppercase">Managing Director</span>
                </div>
                <h2 className="font-display font-700 text-3xl md:text-4xl uppercase leading-tight mb-4">
                  Mr. M. Ashok Macrin
                </h2>
                <p className="font-body text-sm text-brand-orange font-600 mb-4">
                  Deputy Director of Horticulture (Retd.) | Managing Director, Centre for Training & Research
                </p>
                <div className="space-y-3 font-body text-sm text-gray-300 leading-relaxed">
                  <p>
                    Mr. M. Ashok Macrin is the Managing Director of the Centre for Training and Research Division of Finura Agro Tech LLP, Thovalai. He is a former Deputy Director of Horticulture and Plantation Crops, Government of Tamil Nadu, with extensive experience in agriculture, horticulture, and rural development.
                  </p>
                  <p>
                    During his distinguished career (1983–2020), he played a significant role in implementing various government schemes related to horticultural crop production, plantation development, protected cultivation, nursery management, and farmer welfare programmes.
                  </p>
                  <p>
                    He participated in an international training program in Hi-Tech Horticulture and Protected Cultivation at the <strong className="text-brand-lime">International Agricultural Centre, Netherlands</strong>, sponsored by the Government of Tamil Nadu, and visited Germany, France, and Belgium.
                  </p>
                  <p>
                    Received the Best Worker Award for Ockhi cyclone relief work from the Kanyakumari District Collector in 2008. Every year, hundreds of students from various educational institutions undergo practical training under his leadership.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-5">
                  {["1983–2020 Govt. Service", "International Training", "Best Worker Award 2008", "TNAU Collaborator"].map((t) => (
                    <span key={t} className="tag-chip text-xs">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Branch locations */}
      <section className="bg-brand-lime py-16 px-4 sm:px-6 border-y-3 border-brand-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-heading text-brand-black mb-10">
            {isTa ? "எங்கள் இடங்கள்" : "Our Locations."}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                type: isTa ? "பதிவு செய்யப்பட்ட அலுவலகம்" : "Registered Office",
                address: "2F/1A West Lutheran Street, Nagercoil – 629001, Kanyakumari District, Tamil Nadu",
              },
              {
                type: isTa ? "கிளை 1 — தோவாலை" : "Branch 1 — Thovalai",
                address: "11/8 J, Loyola College Road, Thovalai – 629302, Kanyakumari District, Tamil Nadu",
              },
              {
                type: isTa ? "கிளை 2 — நங்குநேரி" : "Branch 2 — Nanguneri",
                address: "NH-7, Near AMRL HiTech City, South Nanguneri, Tirunelveli District, Tamil Nadu",
              },
            ].map(({ type, address }) => (
              <div key={type} className="border-3 border-brand-black bg-brand-cream shadow-brutal p-5">
                <p className="font-display font-700 text-xs uppercase tracking-wide text-brand-orange mb-2">{type}</p>
                <p className="font-body text-sm text-gray-800 leading-relaxed">{address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark py-16 px-4 sm:px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="section-heading text-brand-cream mb-4">
            {isTa ? "எங்களுடன் இணையுங்கள்" : "Join Our Journey."}
          </h2>
          <p className="font-body text-gray-400 mb-8">
            {isTa ? "பயிற்சி, ஆராய்ச்சி அல்லது ஆலோசனை — நாங்கள் உதவ தயாராக இருக்கிறோம்." : "Whether for training, research, or consultancy — we're here to help you grow."}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              {isTa ? "தொடர்பு கொள்ளுங்கள் →" : "Contact Us →"}
            </Link>
            <Link href="/services" className="btn-secondary" style={{ color: "#F5F1E8", borderColor: "#F5F1E8" }}>
              {isTa ? "சேவைகளை காண்க" : "Explore Services"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
