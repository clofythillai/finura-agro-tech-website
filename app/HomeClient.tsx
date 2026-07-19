"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollVelocityMarquee from "@/components/ScrollVelocityMarquee";
import TiltCard from "@/components/TiltCard";
import TextReveal from "@/components/TextReveal";
import StatCounter from "@/components/StatCounter";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import ScrollReveal from "@/components/ScrollReveal";
import { useLang } from "@/context/LangContext";

/* ── animation helpers ─────────────────────────────── */
const fadeUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger: any = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const chipAnim: any = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── data ─────────────────────────────────────────── */
const services = [
  { icon: "🔬", title: "Centre for Training & Research", titleTa: "பயிற்சி மற்றும் ஆராய்ச்சி மையம்", description: "Platform for innovation, research, technology transfer, and skill development. Offers specialized training programmes, research facilities, consultancy, industrial collaborations, and internship opportunities for students, researchers, farmers, and entrepreneurs.", descriptionTa: "கண்டுபிடிப்பு, ஆராய்ச்சி, தொழில்நுட்ப பரிமாற்றம் மற்றும் திறன் மேம்பாட்டிற்கான தளமாக செயல்படுகிறது. சிறப்பு பயிற்சி திட்டங்கள், ஆராய்ச்சி வசதிகள் மற்றும் இன்டர்ன்ஷிப் வாய்ப்புகளை வழங்குகிறது.", accentColor: "lime" as const },
  { icon: "🌱", title: "Plant Tissue Culture", titleTa: "தாவர திசு வளர்ப்பு", description: "High-quality, disease-free banana planting materials through advanced tissue culture. Assisted by National Horticulture Mission, Govt. of India.", descriptionTa: "மேம்பட்ட திசு வளர்ப்பு நுட்பங்கள் மூலம் உயர்தர, நோயற்ற வாழை நடவு பொருட்களின் உற்பத்தி மற்றும் வழங்கல்.", accentColor: "lime" as const },
  { icon: "🍄", title: "Mushroom Production", titleTa: "காளான் உற்பத்தி", description: "Commercial mushroom cultivation, spawn production, and hands-on training. Milky Mushroom and other varieties produced at our Nanguneri branch.", descriptionTa: "வணிக காளான் சாகுபடி, விதை உற்பத்தி மற்றும் நடைமுறை பயிற்சி திட்டங்கள். நங்குநேரி கிளையில் பால் காளான் உற்பத்தி.", accentColor: "orange" as const },
  { icon: "🧫", title: "Plant Pathology Laboratory", titleTa: "தாவர நோயியல் ஆய்வகம்", description: "Diagnosis and management of plant diseases with scientific recommendations for sustainable crop production.", descriptionTa: "நிலையான பயிர் உற்பத்திக்கான அறிவியல் பரிந்துரைகளுடன் தாவர நோய்களின் கண்டறிதல் மற்றும் மேலாண்மை.", accentColor: "lime" as const },
  { icon: "🌍", title: "Soil Testing Services", titleTa: "மண் பரிசோதனை சேவைகள்", description: "Comprehensive soil analysis and nutrient management solutions to improve soil health and agricultural productivity.", descriptionTa: "மண் ஆரோக்கியம் மற்றும் விவசாய உற்பத்தித்திறனை மேம்படுத்த விரிவான மண் பகுப்பாய்வு.", accentColor: "orange" as const },
  { icon: "🦠", title: "Bio Control Agent Production", titleTa: "உயிரியல் கட்டுப்பாட்டு முகவர் உற்பத்தி", description: "Eco-friendly biocontrol agents and biofertilizers — Trichoderma, Pseudomonas, Rhizobium and more.", descriptionTa: "சுற்றுச்சூழல் நட்பு உயிரியல் கட்டுப்பாட்டு முகவர்கள் மற்றும் உயிர் உரங்களின் உற்பத்தி மற்றும் விநியோகம்.", accentColor: "lime" as const },
  { icon: "🌿", title: "Nursery & Plant Production", titleTa: "நர்சரி மற்றும் தாவர உற்பத்தி", description: "Wide range of horticultural, ornamental, and medicinal plants. Coconut varieties, rare fruits, orchids, anthurium, and terrace garden kits.", descriptionTa: "தோட்டக்கலை, அலங்கார மற்றும் மருத்துவ தாவரங்களின் பரந்த வகைகள். தேங்காய் வகைகள், அரிய பழங்கள் மற்றும் ஆர்க்கிட்.", accentColor: "orange" as const },
  { icon: "📋", title: "Consultancy & Bankable Projects", titleTa: "ஆலோசனை மற்றும் வங்கி திட்டங்கள்", description: "DPR preparation, bankable project reports, feasibility studies, and agri-entrepreneurship guidance.", descriptionTa: "விவசாயிகள், நிறுவனங்கள் மற்றும் தொழில்முனைவோருக்கு தொழில்நுட்ப ஆலோசனை மற்றும் DPR தயாரிப்பு.", accentColor: "lime" as const },
  { icon: "🌾", title: "Organic Products & Agricultural Inputs", titleTa: "இயற்கை பொருட்கள் மற்றும் இடுபொருட்கள்", description: "Organic shop stocking biofertilizers, botanical pesticides, soil conditioners, and organic nutrients.", descriptionTa: "இயற்கை உரங்கள், தாவர பூச்சி மருந்துகள் மற்றும் மண் மேம்படுத்திகள் கொண்ட இயற்கை கடை.", accentColor: "orange" as const },
];

const trainingChips = [
  "TNAU Certificate & Diploma Courses", "Plant Tissue Culture", "Mushroom Spawn Production",
  "Mushroom Production", "Biocontrol Agents Production", "Spirulina Production",
  "Landscaping & Gardening", "Coconut Cultivation", "Biofertiliser Production",
  "Bankable Projects", "Soil Testing", "Roof Gardening", "Microgreens", "Plant Breeding",
];

export default function HomeClient() {
  const { lang } = useLang();
  const isTa = lang === "ta";

  const marqueeItems = [
    "MCA REGISTERED", "TNAU AFFILIATED", "EDII-KABIF INCUBATEE", "GOVT. ASSISTED",
    "SINCE 2021", "LLPIN AAY-4389", "44 RESEARCH PAPERS", "4 LABORATORIES",
    "9 CORE DOMAINS", "100+ STUDENTS ANNUALLY", "PLANT TISSUE CULTURE CENTRE",
    "MUSHROOM PRODUCTION UNIT"
  ];

  const marqueeItemsTA = [
    "MCA பதிவு பெற்றது", "TNAU இணைந்தது", "EDII-KABIF இன்குபேட்டி", "அரசு உதவி பெற்றது",
    "2021 முதல்", "LLPIN AAY-4389", "44 ஆராய்ச்சி கட்டுரைகள்", "4 ஆய்வகங்கள்",
    "9 முக்கிய துறைகள்", "100+ மாணவர்கள் ஆண்டுதோறும்", "திசு வளர்ப்பு மையம்",
    "காளான் உற்பத்தி அலகு"
  ];

  const items = isTa ? marqueeItemsTA : marqueeItems;

  return (
    <>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="pt-16 min-h-screen bg-brand-cream flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left: Headline + CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="min-w-0"
            >
              {/* Credential sticker */}
              <motion.div variants={fadeUp} custom={0}>
                <div className="inline-block bg-brand-orange border-3 border-brand-black shadow-brutal-sm px-4 py-2 mb-5 transform -rotate-1">
                  <span className="font-display font-700 text-xs uppercase tracking-widest">
                    {isTa ? "TNAU இணை நிறுவனம் • MCA பதிவு" : "TNAU Affiliated • MCA Registered • Est. 2021"}
                  </span>
                </div>
              </motion.div>

              {/* Hero headline — Tamil-adaptive layout */}
              <motion.div variants={fadeUp} custom={1}>
                {isTa ? (
                  /* Tamil headline — uses smaller size to prevent overflow */
                  <h1 className="font-display font-700 uppercase leading-none tracking-tight mb-5" style={{ fontSize: "clamp(2.4rem, 7vw, 4.5rem)" }}>
                    <span className="text-brand-black block">
                      <TextReveal text="இயற்கைக்கான" delay={0.1} />
                    </span>
                    <span className="text-transparent block" style={{ WebkitTextStroke: "2px #0D0D0D" }}>
                      <TextReveal text="தொழில்நுட்பம்" delay={0.25} />
                    </span>
                    <span className="text-brand-lime bg-brand-black px-3 inline-block mt-2">
                      Technology for Nature.
                    </span>
                  </h1>
                ) : (
                  <h1 className="font-display font-700 text-6xl md:text-7xl xl:text-8xl uppercase leading-none tracking-tight mb-5">
                    <span className="text-brand-black block">
                      <TextReveal text="Technology" delay={0.1} />
                    </span>
                    <span className="text-transparent block" style={{ WebkitTextStroke: "3px #0D0D0D" }}>
                      <TextReveal text="For" delay={0.25} />
                    </span>
                    <span className="text-brand-lime bg-brand-black px-3 inline-block mt-1">
                      <TextReveal text="Nature." delay={0.4} />
                    </span>
                  </h1>
                )}
              </motion.div>

              <motion.p
                variants={fadeUp}
                custom={2}
                className="font-body text-base md:text-lg text-gray-700 leading-relaxed max-w-lg mb-7 border-l-4 border-brand-lime pl-4"
              >
                {isTa
                  ? "தமிழ்நாட்டின் முன்னணி விவசாய-உயிரியல் தொழில்நுட்ப மையம் — திசு வளர்ப்பு, காளான் உற்பத்தி, மண் பரிசோதனை, பயிற்சி மற்றும் ஆராய்ச்சி."
                  : "Finura Agro Tech LLP — A leading agri-biotech centre in Tamil Nadu. Tissue culture, mushroom production, soil testing, research & training for students, farmers & entrepreneurs."}
              </motion.p>

              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-3">
                <Link id="hero-cta-services" href="/services" className="btn-primary text-sm md:text-base">
                  {isTa ? "சேவைகளை காண்க →" : "Explore Our Services →"}
                </Link>
                <Link id="hero-cta-training" href="/training" className="btn-secondary text-sm md:text-base">
                  {isTa ? "பயிற்சி திட்டங்கள்" : "View Training Programmes"}
                </Link>
              </motion.div>

              <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-2 mt-6">
                {["MCA Registered", "TNAU Affiliated", "Govt. Assisted", "EDII-KABIF"].map((badge) => (
                  <span key={badge} className="tag-chip text-xs">{badge}</span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Photo collage */}
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative border-3 border-brand-black shadow-brutal-lg overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/Finura_Agro_Tech_LLP_862361451.jpeg"
                  alt="Finura Agro Tech LLP Tissue Culture Centre building — Thovalai, Kanyakumari District"
                  fill className="object-cover" priority
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute bottom-4 left-4 bg-brand-lime border-3 border-brand-black px-4 py-2 shadow-brutal">
                  <p className="font-display font-700 text-sm uppercase">Thovalai, Kanyakumari</p>
                </div>
              </div>
              {/* Inset photo */}
              <motion.div
                className="absolute -bottom-6 -right-4 w-40 h-32 border-3 border-brand-black shadow-brutal overflow-hidden transform rotate-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Image
                  src="/images/Finura_Agro_Tech_LLP_1483594408.jpeg"
                  alt="Tissue culture growth room — Finura Agro Tech LLP"
                  fill className="object-cover" sizes="160px"
                />
              </motion.div>
              {/* Sticker */}
              <motion.div
                className="absolute -top-4 -left-4 bg-brand-orange border-3 border-brand-black shadow-brutal px-3 py-2 transform -rotate-3 z-10"
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: -3 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <p className="font-display font-700 text-xs uppercase">100+ Students</p>
                <p className="font-display font-700 text-xs uppercase">Trained Annually</p>
              </motion.div>
            </motion.div>

            {/* Mobile photo (shown only on small screens) */}
            <motion.div
              className="relative lg:hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative border-3 border-brand-black shadow-brutal overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/Finura_Agro_Tech_LLP_862361451.jpeg"
                  alt="Finura Agro Tech LLP Tissue Culture Centre — Thovalai"
                  fill className="object-cover" priority
                  sizes="100vw"
                />
                <div className="absolute bottom-3 left-3 bg-brand-lime border-3 border-brand-black px-3 py-1.5 shadow-brutal">
                  <p className="font-display font-700 text-xs uppercase">Thovalai, Kanyakumari</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────────────────── */}
      <ScrollVelocityMarquee baseVelocity={2} children={items} dark={true} />

      {/* ── COMPANY PROFILE ─────────────────────────────────── */}
      <section className="bg-brand-dark py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <div className="inline-block bg-brand-orange border-3 border-brand-black px-3 py-1 mb-4">
                <span className="font-display font-700 text-xs uppercase tracking-widest">
                  {isTa ? "நிறுவனம் பற்றி" : "Company Profile"}
                </span>
              </div>
              <h2 className="section-heading text-brand-cream mb-6">
                {isTa ? "பினுரா அக்ரோ டெக் எல்எல்பி" : "Finura Agro\nTech LLP"}
              </h2>
              <p className="font-body text-base text-gray-300 leading-relaxed mb-6">
                {isTa
                  ? "பினுரா அக்ரோ டெக் எல்எல்பி என்பது இந்திய அரசின் கார்ப்பரேட் விவகார அமைச்சகத்தின் (MCA) கீழ் நிறுவனங்களின் பதிவாளரிடம் பதிவு செய்யப்பட்ட ஒரு கூட்டுப் பொறுப்பு கூட்டாண்மை நிறுவனம்."
                  : "FINURA AGRO TECH LLP is a Limited Liability Partnership firm registered under Registrar of Companies, Ministry of Corporate Affairs (MCA), Govt of India. Designated Partners are Mr. M. Ashok Macrin, Deputy Director of Horticulture (Retd) and Mrs. Anisha Shinney Thangam, Former Professor of Scott Christian College, Nagercoil."}
              </p>
              <Link href="/about" className="btn-primary">
                {isTa ? "மேலும் அறிக →" : "Read Full Profile →"}
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="border-3 border-brand-black bg-brand-cream shadow-brutal-white">
                <div className="bg-brand-lime border-b-3 border-brand-black px-5 py-3">
                  <h3 className="font-display font-700 text-sm uppercase tracking-wide">
                    {isTa ? "பதிவு விவரங்கள்" : "Registration Details"}
                  </h3>
                </div>
                <div className="p-5 space-y-3">
                  {[
                    { label: "LLPIN", value: "AAY-4389" },
                    { label: "Registered On", value: "3rd September 2021" },
                    { label: "Type", value: "Limited Liability Partnership" },
                    { label: "Regulator", value: "MCA, Govt. of India" },
                    { label: "Affiliation", value: "Tamil Nadu Agricultural University" },
                    { label: "Incubated By", value: "EDII-KABIF, AC & RI, Killikulam" },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-start gap-4 text-sm border-b border-gray-200 pb-2 last:border-0 last:pb-0">
                      <span className="font-display font-700 text-xs uppercase tracking-wide text-gray-600 flex-shrink-0">{label}</span>
                      <span className="font-body text-brand-black text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SERVICES BENTO GRID ────────────────────────────── */}
      <section className="bg-brand-cream py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
              <div>
                <div className="inline-block bg-brand-lime border-3 border-brand-black px-3 py-1 mb-3">
                  <span className="font-display font-700 text-xs uppercase tracking-widest">Our Divisions</span>
                </div>
                <h2 className="section-heading">
                  {isTa ? "9 பிரிவுகள்" : "9 Divisions."}
                  <br />
                  <span className="text-brand-orange">{isTa ? "ஒரு இலக்கு." : "One Mission."}</span>
                </h2>
              </div>
              <Link href="/services" className="btn-secondary self-start sm:self-end flex-shrink-0">
                {isTa ? "அனைத்தையும் காண்க →" : "View All Services →"}
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 60}>
                <TiltCard>
                  <ServiceCard {...s} index={i} />
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ───────────────────────────────────── */}
      <section className="bg-brand-black py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <StatCounter end={1983} label={isTa ? "அரசு சேவை தொடங்கிய ஆண்டு" : "In Govt. Service Since"} dark />
            <StatCounter end={44} label={isTa ? "ஆராய்ச்சி கட்டுரைகள்" : "Research Papers Published"} dark />
            <StatCounter end={9} label={isTa ? "முக்கிய ஆராய்ச்சி துறைகள்" : "Core Research Domains"} dark />
            <StatCounter end={4} label={isTa ? "ஆய்வகங்கள்" : "Laboratories"} dark />
            <StatCounter end={100} suffix="+" label={isTa ? "மாணவர்கள் ஆண்டுதோறும்" : "Students Trained Annually"} dark />
          </div>
        </div>
      </section>

      {/* ── FEATURED LEADERSHIP ───────────────────────────── */}
      <section className="bg-brand-cream py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-3 border-brand-black shadow-brutal">
              <div className="relative min-h-80 lg:min-h-[500px] border-b-3 lg:border-b-0 lg:border-r-3 border-brand-black overflow-hidden">
                <Image
                  src="/profiles/Ashok macrin.png"
                  alt="Mr. M. Ashok Macrin, Managing Director — Finura Agro Tech LLP"
                  fill className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-black/90 to-transparent p-6">
                  <div className="bg-brand-lime border-3 border-brand-black inline-block px-3 py-1 mb-2">
                    <span className="font-display font-700 text-xs uppercase">Managing Director</span>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-brand-dark text-brand-cream flex flex-col justify-between">
                <div>
                  <span className="font-display font-700 text-xs uppercase tracking-widest text-brand-orange mb-2 block">
                    {isTa ? "தலைமை" : "Leadership"}
                  </span>
                  <h2 className="font-display font-700 text-3xl md:text-4xl uppercase text-brand-cream leading-tight mb-4">
                    Mr. M. Ashok Macrin
                  </h2>
                  <p className="font-body text-sm text-gray-300 leading-relaxed mb-4">
                    {isTa
                      ? "திரு. எம். அசோக் மேக்ரின் அவர்கள் பினுரா அக்ரோ டெக் எல்எல்பியின் பயிற்சி மற்றும் ஆராய்ச்சி மையத்தின் மேலாண்மை இயக்குநர் ஆவார். தமிழ்நாடு அரசின் தோட்டக்கலை துறையின் முன்னாள் துணை இயக்குநர். நெதர்லாந்தில் சர்வதேச பயிற்சி பெற்றவர்."
                      : "Mr. M. Ashok Macrin is the Managing Director of the Centre for Training and Research Division. Former Deputy Director of Horticulture, Govt. of Tamil Nadu, with international training in Hi-Tech Horticulture at the International Agricultural Centre, Netherlands."}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["37+ Years Govt. Service", "International Training — Netherlands", "TNAU Collaborator"].map((t) => (
                      <span key={t} className="tag-chip text-xs">{t}</span>
                    ))}
                  </div>
                </div>
                <Link href="/research" className="btn-primary self-start">
                  {isTa ? "முழு குழுவை காண்க →" : "Full Bio & Team →"}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── TRAINING TEASER ───────────────────────────────── */}
      <section className="bg-brand-dark py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <div className="inline-block bg-brand-orange border-3 border-brand-black px-3 py-1 mb-3">
                  <span className="font-display font-700 text-xs uppercase tracking-widest text-brand-black">
                    {isTa ? "பயிற்சி திட்டங்கள்" : "Training Programmes"}
                  </span>
                </div>
                <h2 className="section-heading text-brand-cream">
                  {isTa ? "கற்றுக் கொள்ளுங்கள்." : "Learn Real Skills."}
                  <br />
                  <span className="text-brand-lime">{isTa ? "சான்றிதழ் பெறுங்கள்." : "Earn Certificates."}</span>
                </h2>
              </div>
              <Link href="/training" className="btn-primary self-start sm:self-end flex-shrink-0">
                {isTa ? "அனைத்து பயிற்சிகளையும் காண்க →" : "View All Programmes →"}
              </Link>
            </div>
          </ScrollReveal>

          <ChipGrid chips={trainingChips} />
        </div>
      </section>

      {/* ── GALLERY TEASER ────────────────────────────────── */}
      <section className="bg-brand-cream py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-10">
              <h2 className="section-heading">
                {isTa ? "எங்கள் படத்தொகுப்பு" : "From Our"}
                <br />
                <span className="text-brand-lime">{isTa ? "" : "Facility."}</span>
              </h2>
              <Link href="/gallery" className="btn-secondary hidden sm:inline-flex">
                {isTa ? "அனைத்தையும் காண்க →" : "View Gallery →"}
              </Link>
            </div>
          </ScrollReveal>

          <GalleryGrid />

          <div className="mt-6 text-center sm:hidden">
            <Link href="/gallery" className="btn-secondary">
              {isTa ? "அனைத்தையும் காண்க →" : "View Full Gallery →"}
            </Link>
          </div>
        </div>
      </section>

      {/* ── MARQUEE (light) ───────────────────────────────── */}
      <ScrollVelocityMarquee baseVelocity={-2} children={items} dark={false} />

      {/* ── TESTIMONIALS ──────────────────────────────────── */}
      <section className="bg-brand-dark py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="section-heading text-brand-cream mb-10">
              {isTa ? "மக்கள் கருத்து." : "What People Say."}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <ScrollReveal delay={0}>
              <TestimonialCard review="Good collections of various indoor and fruits plants available in this nursery" author="S. Prakash" rating={5} dark />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <TestimonialCard review="Excellent hands-on training programme in Plant Tissue Culture. The facilities are world-class and the guidance from experienced scientists is invaluable." author="Training Programme Participant" rating={5} dark />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <TestimonialCard review="The internship at Finura Agro Tech LLP gave me real industrial exposure in tissue culture and biotechnology. Highly recommended for all life science students." author="Industrial Intern" rating={5} dark />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────── */}
      <section className="bg-brand-lime py-16 px-4 sm:px-6 border-y-3 border-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <AnimatedSection>
              <h2 className="font-display font-700 text-4xl md:text-5xl uppercase leading-tight text-brand-black mb-3">
                {isTa ? "உங்கள் இயற்கை விவசாய" : "Start Your Organic"}
                <br />
                <span className="text-transparent" style={{ WebkitTextStroke: "3px #0D0D0D" }}>
                  {isTa ? "பயணத்தை தொடங்குங்கள்." : "Farming Journey."}
                </span>
              </h2>
              <p className="font-body text-base text-gray-800 max-w-lg">
                {isTa
                  ? "ஆண்டுதோறும் எங்களுடன் பயிற்சி பெறும் நூற்றுக்கணக்கான மாணவர்கள், விவசாயிகள் மற்றும் தொழில்முனைவோருடன் இணையுங்கள்."
                  : "Join hundreds of students, farmers, and entrepreneurs who train with us every year. Hands-on. Certified. Life-changing."}
              </p>
            </AnimatedSection>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Link id="cta-contact-btn" href="/contact" className="btn-primary bg-brand-black text-brand-lime border-brand-black text-base">
                {isTa ? "இன்றே தொடர்பு கொள்ளுங்கள் →" : "Contact Us Today →"}
              </Link>
              <Link href="/training" className="btn-secondary text-base">
                {isTa ? "பயிற்சிகளை காண்க" : "View Programmes"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Chip Grid with stagger animation ────────────────── */
function ChipGrid({ chips }: { chips: string[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className="flex flex-wrap gap-3"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
    >
      {chips.map((chip) => (
        <motion.div
          key={chip}
          variants={chipAnim}
          className="border-3 border-brand-black bg-brand-cream px-4 py-2 font-display font-700 text-sm uppercase tracking-wide hover:bg-brand-lime hover:shadow-brutal-sm transition-all cursor-default"
        >
          <span className="text-brand-orange mr-2">◆</span>
          {chip}
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ── Gallery grid with hover scale ─────────────────── */
const galleryImages = [
  { src: "/images/Finura_Agro_Tech_LLP_1483594408.jpeg", alt: "Plant tissue culture growth room — racks of culture jars" },
  { src: "/images/Finura_Agro_Tech_LLP_456708559.jpeg", alt: "Lab technician at laminar flow bench — sterile tissue culture work" },
  { src: "/images/Finura_Agro_Tech_LLP_107861135.jpeg", alt: "Training session in tissue culture lab — students with instructor" },
  { src: "/images/Finura_Agro_Tech_LLP_1603593474.jpg", alt: "Ornamental plants in wall planters — Finura nursery" },
  { src: "/images/Finura_Agro_Tech_LLP_248603113.jpeg", alt: "Mushroom spawn production training session" },
  { src: "/images/Finura_Agro_Tech_LLP_196540370.jpeg", alt: "Students with Mr. Ashok Macrin at Finura entrance banner" },
];

function GalleryGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-3 gap-4"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
    >
      {galleryImages.map((img, i) => (
        <motion.div
          key={img.src}
          variants={{ hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: i * 0.08 } } }}
          className="border-3 border-brand-black shadow-brutal overflow-hidden aspect-[4/3] relative group"
        >
          <Image
            src={img.src} alt={img.alt} fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, 33vw" loading="lazy"
          />
          <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/20 transition-all duration-300" />
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-brand-lime border-t-3 border-brand-black p-2">
            <p className="font-display font-700 text-xs uppercase truncate text-brand-black">{img.alt.split("—")[0].trim()}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
