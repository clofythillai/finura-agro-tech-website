"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import MarqueeStrip from "@/components/MarqueeStrip";
import TrainingCard from "@/components/TrainingCard";
import { useLang } from "@/context/LangContext";

const featuredPrograms = [
  {
    title: "Plant Tissue Culture Certificate Course",
    titleTa: "தாவர திசு வளர்ப்பு சான்றிதழ் படிப்பு",
    duration: "15 Days Crash Course",
    fee: "15,000",
    highlights: [
      "Principles and application of tissue culture",
      "Preparation of tissue culture media & sterilization",
      "Hands-on training for various tissue culture techniques",
      "Maintenance of cultured plant cells",
      "Certificate issued on completion",
    ],
  },
  {
    title: "Industrial Internship — Two Weeks",
    titleTa: "தொழிற்சாலை இன்டர்ன்ஷிப் — இரண்டு வாரங்கள்",
    duration: "2 Weeks",
    fee: "5,000",
    highlights: [
      "Banana, Pineapple, Orchids, Ornamental & Medicinal Plants",
      "Sterile and non-sterile area access",
      "100% hands-on training",
      "Guided by experienced scientists and trainers",
      "Valid certificate issued",
      "Hostel facilities for boys & girls",
    ],
  },
  {
    title: "Industrial Internship — One Month",
    titleTa: "தொழிற்சாலை இன்டர்ன்ஷிப் — ஒரு மாதம்",
    duration: "1 Month",
    fee: "10,000",
    highlights: [
      "Banana, Pineapple, Orchids, Ornamental & Medicinal Plants",
      "Sterile and non-sterile area access",
      "100% hands-on training",
      "Central & State Govt. assisted tissue culture centre",
      "Valid certificate issued",
      "Hostel facilities for boys & girls",
    ],
  },
  {
    title: "Summer Internship — Plant Tissue Culture",
    titleTa: "கோடை இன்டர்ன்ஷிப் — திசு வளர்ப்பு",
    duration: "14 Days Intensive",
    fee: "2,500",
    highlights: [
      "Industrial exposure for students",
      "Convenient dates and timings",
      "Certificate issued",
      "Hostel facilities available",
    ],
  },
  {
    title: "Spirulina Production Workshop",
    titleTa: "ஸ்பைருலினா உற்பத்தி பயிலரங்கு",
    duration: "1 Day Workshop",
    fee: "250",
    highlights: [
      "100% hands-on training",
      "Microscopic study of Spirulina",
      "Mother culture production & maintenance",
      "Harvesting and drying methods",
      "Startup ideas and business guidance",
      "Certificate issued",
    ],
  },
];

const allPrograms = [
  { title: "TNAU Certificate & Diploma Courses", titleTa: "TNAU சான்றிதழ் மற்றும் டிப்ளோமா படிப்புகள்" },
  { title: "Internship on Plant Tissue Culture", titleTa: "தாவர திசு வளர்ப்பு இன்டர்ன்ஷிப்" },
  { title: "Training on Mushroom Spawn Production", titleTa: "காளான் விதை உற்பத்தி பயிற்சி" },
  { title: "Training on Mushroom Production", titleTa: "காளான் உற்பத்தி பயிற்சி" },
  { title: "Training on Biocontrol Agents Production", titleTa: "உயிரியல் கட்டுப்பாட்டு முகவர்கள் பயிற்சி" },
  { title: "Training on Spirulina Production", titleTa: "ஸ்பைருலினா உற்பத்தி பயிற்சி" },
  { title: "Training on Landscaping & Gardening", titleTa: "நிலப்பரப்பு மற்றும் தோட்டம் பயிற்சி" },
  { title: "Training on Coconut Cultivation", titleTa: "தென்னை சாகுபடி பயிற்சி" },
  { title: "Training on Biofertiliser Production", titleTa: "உயிர் உர உற்பத்தி பயிற்சி" },
  { title: "Training on Bankable Projects", titleTa: "வங்கி திட்டங்கள் பயிற்சி" },
  { title: "Training on Soil Testing", titleTa: "மண் பரிசோதனை பயிற்சி" },
  { title: "Training on Roof Gardening", titleTa: "மாடி தோட்ட பயிற்சி" },
  { title: "Training on Microgreens", titleTa: "மைக்ரோக்ரீன்ஸ் பயிற்சி" },
  { title: "Training on Plant Breeding", titleTa: "தாவர இனப்பெருக்கம் பயிற்சி" },
];

export default function TrainingClient() {
  const { lang } = useLang();
  const isTa = lang === "ta";

  return (
    <>
      {/* Hero */}
      <div className="pt-16 bg-brand-dark border-b-3 border-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="inline-block bg-brand-lime border-3 border-brand-black px-3 py-1 mb-4">
            <span className="font-display font-700 text-xs uppercase tracking-widest">
              {isTa ? "பயிற்சி மற்றும் இன்டர்ன்ஷிப்" : "Training & Internships"}
            </span>
          </div>
          <h1 className="section-heading text-brand-cream max-w-3xl">
            {isTa ? "உண்மையான திறன்கள்." : "Build Real Skills."}
            <br />
            <span className="text-brand-lime">{isTa ? "சான்றிதழ்கள் பெறுங்கள்." : "Earn Certificates."}</span>
          </h1>
          <p className="font-body text-gray-400 mt-4 max-w-2xl">
            {isTa
              ? "100% நடைமுறை பயிற்சி • அனுபவமிக்க விஞ்ஞானிகளால் வழிகாட்டப்படுகிறது • TNAU இணை நிறுவனம் • ஆண் மற்றும் பெண் மாணவர்களுக்கு விடுதி வசதி"
              : "100% Hands-on Training • Guided by Experienced Scientists • TNAU Affiliated • Hostel Facilities for Boys & Girls"}
          </p>
        </div>
      </div>

      <MarqueeStrip dark={true} />

      {/* Featured internship programmes */}
      <section className="bg-brand-cream py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="inline-block bg-brand-orange border-3 border-brand-black px-3 py-1 mb-4">
              <span className="font-display font-700 text-xs uppercase tracking-widest text-brand-black">
                {isTa ? "சிறப்பு திட்டங்கள்" : "Featured Programmes"}
              </span>
            </div>
            <h2 className="section-heading mb-10">
              {isTa ? "இன்டர்ன்ஷிப் திட்டங்கள்." : "Internship Programmes."}
            </h2>
          </ScrollReveal>

          {/* Hero image from TC flyer */}
          <ScrollReveal>
            <div className="relative border-3 border-brand-black shadow-brutal overflow-hidden mb-10 aspect-[16/6]">
              <Image
                src="/images/Finura_Agro_Tech_LLP_456708559.jpeg"
                alt="Plant tissue culture technicians working at laminar flow bench — Finura Agro Tech LLP internship"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 to-transparent flex items-center px-8">
                <div>
                  <p className="font-display font-700 text-xs uppercase text-brand-lime tracking-widest mb-2">Live Lab Training</p>
                  <h2 className="font-display font-700 text-3xl md:text-4xl uppercase text-brand-cream leading-tight">
                    {isTa ? "திசு வளர்ப்பு மையம்" : "Plant Tissue Culture Centre"}
                  </h2>
                  <p className="font-body text-sm text-gray-300 mt-2">
                    11/8 J, Finura Garden, Thovalai – 629302, Kanyakumari District
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPrograms.map((program, i) => (
              <ScrollReveal key={program.title} delay={i * 80}>
                <TrainingCard
                  title={program.title}
                  titleTa={program.titleTa}
                  duration={program.duration}
                  fee={program.fee}
                  highlights={program.highlights}
                  variant="featured"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* All Programmes chip grid */}
      <section className="bg-brand-dark py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="section-heading text-brand-cream mb-4">
              {isTa ? "அனைத்து பயிற்சி திட்டங்கள்." : "All Training Programmes."}
            </h2>
            <p className="font-body text-gray-400 mb-10 max-w-2xl">
              {isTa
                ? "TNAU சான்றிதழ் மற்றும் டிப்ளோமா படிப்புகள் உட்பட அனைத்து சிறப்பு பயிற்சி திட்டங்களும் கிடைக்கும்."
                : "Including TNAU certificate & diploma courses and all specialized training modules."}
            </p>
          </ScrollReveal>
          <div className="flex flex-wrap gap-3">
            {allPrograms.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 40}>
                <TrainingCard title={p.title} titleTa={p.titleTa} variant="chip" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Apply CTA */}
      <section className="bg-brand-lime py-16 px-4 sm:px-6 border-y-3 border-brand-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="section-heading text-brand-black mb-4">
              {isTa ? "வசதிகள் மற்றும் ஆதரவு" : "Facilities & Support."}
            </h2>
            <ul className="space-y-3">
              {[
                isTa ? "ஆண் மற்றும் பெண் மாணவர்களுக்கு விடுதி வசதி" : "Hostel facilities for boys & girls",
                isTa ? "TNAU அங்கீகரிக்கப்பட்ட திசு வளர்ப்பு மையம்" : "TNAU-affiliated tissue culture centre",
                isTa ? "100% நடைமுறை பயிற்சி" : "100% hands-on, practical training",
                isTa ? "அனுபவமிக்க விஞ்ஞானிகள் மற்றும் பயிற்றுனர்கள்" : "Guided by experienced scientists & trainers",
                isTa ? "வெளியேறும் போது செல்லுபடியாகும் சான்றிதழ்" : "Valid certificates issued on completion",
                isTa ? "நுழைவு மற்றும் வெளியேறும் நேரங்கள் வசதியாக" : "Convenient batch dates & timings",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-base text-brand-black">
                  <span className="text-brand-black font-700 text-lg flex-shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <div className="border-3 border-brand-black bg-brand-black text-brand-cream p-6 shadow-brutal">
              <h3 className="font-display font-700 text-lg uppercase mb-3">
                {isTa ? "இன்டர்ன்ஷிப்பிற்கு விண்ணப்பி" : "Apply for Internship"}
              </h3>
              <p className="font-body text-sm text-gray-300 mb-4">
                {isTa ? "ஆன்லைன் விண்ணப்ப போர்ட்டல் விரைவில் வருகிறது. இப்போது நேரடியாக தொடர்பு கொள்ளவும்:" : "Online application portal coming soon. Contact us directly to enrol:"}
              </p>
              <div className="space-y-2">
                <a href="tel:9445450305" className="btn-primary block text-center text-sm">
                  📞 {isTa ? "இப்போது அழைக்கவும்: 9445450305" : "Call Now: 9445450305"}
                </a>
                <a href="mailto:finuraagrotechllp@gmail.com" className="btn-secondary block text-center text-sm" style={{ color: "#F5F1E8", borderColor: "#F5F1E8" }}>
                  ✉ finuraagrotechllp@gmail.com
                </a>
              </div>
            </div>
            <Link href="/apply" className="btn-orange text-center justify-center text-sm py-3">
              {isTa ? "ஆன்லைன் விண்ணப்பம் — விரைவில் வருகிறது" : "Online Apply — Coming Soon"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
