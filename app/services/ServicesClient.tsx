"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import MarqueeStrip from "@/components/MarqueeStrip";
import { useLang } from "@/context/LangContext";

const services = [
  {
    icon: "🔬",
    title: "Centre for Training & Research",
    titleTa: "பயிற்சி மற்றும் ஆராய்ச்சி மையம்",
    description: "Serves as a platform for innovation, research, technology transfer, and skill development in agriculture and allied sciences. Offers specialized training programmes, research facilities, consultancy services, industrial collaborations, and extension activities for students, researchers, farmers, and entrepreneurs. Collaborates with universities, research institutions, and industries for knowledge sharing, innovation, and technology transfer. Summer and winter internship opportunities with practical exposure in plant tissue culture, biotechnology, microbiology, and agricultural technologies. Research initiatives in biotechnology, horticulture, plant protection, and sustainable agriculture.",
    descriptionTa: "விவசாயம் மற்றும் தொடர்புடைய அறிவியல் துறைகளில் கண்டுபிடிப்பு, ஆராய்ச்சி, தொழில்நுட்ப பரிமாற்றம் மற்றும் திறன் மேம்பாட்டிற்கான தளமாக செயல்படுகிறது.",
    accentColor: "lime" as const,
    image: "/images/Finura_Agro_Tech_LLP_107861135.jpeg",
    imageAlt: "Training session in the plant tissue culture lab at Finura Agro Tech LLP — students and instructor",
  },
  {
    icon: "🌱",
    title: "Centre for Plant Tissue Culture",
    titleTa: "தாவர திசு வளர்ப்பு மையம்",
    description: "Production and supply of high-quality, disease-free banana planting materials through advanced tissue culture techniques. The centre is equipped with a state-of-the-art growth room, laminar flow benches, autoclaves, and all necessary facilities for commercial-scale tissue culture production. Assisted by National Horticulture Mission, Govt. of India and the Department of Horticulture & Plantation Crops, Govt. of Tamil Nadu.",
    descriptionTa: "மேம்பட்ட திசு வளர்ப்பு நுட்பங்கள் மூலம் உயர்தர, நோயற்ற வாழை நடவு பொருட்களின் உற்பத்தி மற்றும் வழங்கல். மையம் அத்யாதுனிக வளர்ச்சி அறை, லேமினார் ஃப்ளோ பெஞ்சுகள், ஆட்டோக்ளேவ்கள் மற்றும் வணிக அளவிலான திசு வளர்ப்பு உற்பத்திக்கான அனைத்து வசதிகளும் கொண்டுள்ளது.",
    accentColor: "lime" as const,
    image: "/images/Finura_Agro_Tech_LLP_1483594408.jpeg",
    imageAlt: "Plant tissue culture growth room with multiple racks of culture jars under artificial lighting",
  },
  {
    icon: "🍄",
    title: "Mushroom Production Unit",
    titleTa: "காளான் உற்பத்தி அலகு",
    description: "Commercial mushroom cultivation, spawn production, and hands-on training programs for students, farmers, and entrepreneurs. The unit produces Milky Mushroom and other varieties and is located at the Nanguneri branch, assisted by the Department of Horticulture under MIDH – National Horticulture Mission.",
    descriptionTa: "மாணவர்கள், விவசாயிகள் மற்றும் தொழில்முனைவோருக்கு வணிக காளான் சாகுபடி, விதை உற்பத்தி மற்றும் நடைமுறை பயிற்சி திட்டங்கள்.",
    accentColor: "orange" as const,
    image: "/images/Finura_Agro_Tech_LLP_1821205353.jpeg",
    imageAlt: "Mushroom Production Centre at Finura Agro Tech LLP — banner showing the facility at NH-7, AMRL High Tech City, Nanguneri",
  },
  {
    icon: "🧫",
    title: "Plant Pathology Laboratory",
    titleTa: "தாவர நோயியல் ஆய்வகம்",
    description: "Diagnosis and management of plant diseases with scientific recommendations for sustainable crop production. The laboratory is equipped to identify fungal, bacterial, and viral diseases affecting crops and provide integrated disease management strategies.",
    descriptionTa: "நிலையான பயிர் உற்பத்திக்கான அறிவியல் பரிந்துரைகளுடன் தாவர நோய்களின் கண்டறிதல் மற்றும் மேலாண்மை.",
    accentColor: "lime" as const,
    image: null,
    imageAlt: null,
  },
  {
    icon: "🌍",
    title: "Soil Testing Services",
    titleTa: "மண் பரிசோதனை சேவைகள்",
    description: "Comprehensive soil analysis and nutrient management solutions to improve soil health and agricultural productivity. Services include physical, chemical, and biological analysis of soil samples with detailed reports and fertilizer recommendations for farmers.",
    descriptionTa: "மண் ஆரோக்கியம் மற்றும் விவசாய உற்பத்தித்திறனை மேம்படுத்த விரிவான மண் பகுப்பாய்வு மற்றும் ஊட்டச்சத்து மேலாண்மை தீர்வுகள்.",
    accentColor: "orange" as const,
    image: null,
    imageAlt: null,
  },
  {
    icon: "🦠",
    title: "Bio Control Agent Production",
    titleTa: "உயிரியல் கட்டுப்பாட்டு முகவர் உற்பத்தி",
    description: "Production and distribution of eco-friendly biocontrol agents and biofertilizers for sustainable farming. Products include Trichoderma, Pseudomonas, Rhizobium, and other beneficial microorganisms that support plant health naturally.",
    descriptionTa: "நிலையான விவசாயத்திற்காக சுற்றுச்சூழல் நட்பு உயிரியல் கட்டுப்பாட்டு முகவர்கள் மற்றும் உயிர் உரங்களின் உற்பத்தி மற்றும் விநியோகம்.",
    accentColor: "lime" as const,
    image: null,
    imageAlt: null,
  },
  {
    icon: "🌿",
    title: "Nursery & Plant Production",
    titleTa: "நர்சரி மற்றும் தாவர உற்பத்தி",
    description: "Development and maintenance of nurseries for horticultural, ornamental, and medicinal plants. The nursery stocks Coconut Varieties, Big Trees, Fruit Plants, Rare Fruits, TC Banana, Timber, Ornamental, Medicinal, Gift Plants, Orchids, Anthurium, Pots, Terrace Garden Kits, and Organic Inputs.",
    descriptionTa: "தோட்டக்கலை, அலங்கார மற்றும் மருத்துவ தாவரங்களுக்கான நர்சரிகளின் மேம்பாடு மற்றும் பராமரிப்பு.",
    accentColor: "orange" as const,
    image: "/images/Finura_Agro_Tech_LLP_1603593474.jpg",
    imageAlt: "Ornamental plants in decorative circular metal wall holders at the Finura Agro Tech nursery",
  },
  {
    icon: "📋",
    title: "Consultancy & Bankable Projects",
    titleTa: "ஆலோசனை மற்றும் வங்கி திட்டங்கள்",
    description: "Technical consultancy and expert guidance for farmers, institutions, startups, and agribusiness enterprises. Services include preparation of Detailed Project Reports (DPRs), bankable project reports for bank loans, feasibility studies, and guidance for agri-entrepreneurship.",
    descriptionTa: "விவசாயிகள், நிறுவனங்கள், ஸ்டார்ட்அப்கள் மற்றும் வேளாண் வணிக நிறுவனங்களுக்கு தொழில்நுட்ப ஆலோசனை மற்றும் நிபுணர் வழிகாட்டல்.",
    accentColor: "lime" as const,
    image: null,
    imageAlt: null,
  },
  {
    icon: "🌾",
    title: "Organic Products & Agricultural Inputs",
    titleTa: "இயற்கை பொருட்கள் மற்றும் விவசாய இடுபொருட்கள்",
    description: "Supply of organic products, biofertilizers, and other agricultural inputs to support eco-friendly farming practices. The organic shop stocks biofertilizers, botanical pesticides, soil conditioners, and organic nutrients for home gardens, farms, and commercial cultivation.",
    descriptionTa: "சுற்றுச்சூழல் நட்பு விவசாய நடைமுறைகளை ஆதரிக்க இயற்கை பொருட்கள், உயிர் உரங்கள் மற்றும் பிற விவசாய இடுபொருட்களின் வழங்கல்.",
    accentColor: "orange" as const,
    image: null,
    imageAlt: null,
  },
];

export default function ServicesClient() {
  const { lang } = useLang();
  const isTa = lang === "ta";

  return (
    <>
      {/* Hero */}
      <div className="pt-16 bg-brand-dark border-b-3 border-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="inline-block bg-brand-lime border-3 border-brand-black px-3 py-1 mb-4">
            <span className="font-display font-700 text-xs uppercase tracking-widest">
              {isTa ? "சேவைகள்" : "Our Divisions"}
            </span>
          </div>
          <h1 className="section-heading text-brand-cream max-w-3xl">
            {isTa ? "9 பிரிவுகள்." : "9 Divisions."}
            <br />
            <span className="text-brand-lime">{isTa ? "ஒரு இலக்கு." : "One Mission."}</span>
          </h1>
        </div>
      </div>

      <MarqueeStrip dark={true} />

      {/* Services grid */}
      <section className="bg-brand-cream py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-10">
          {services.map((s, i) => {
            const displayTitle = isTa ? s.titleTa : s.title;
            const displayDesc = isTa ? s.descriptionTa : s.description;
            const isEven = i % 2 === 0;

            return (
              <ScrollReveal key={s.title} delay={i * 50}>
                <div className={`border-3 border-brand-black shadow-brutal grid grid-cols-1 ${s.image ? "lg:grid-cols-2" : ""}`}>
                  {/* Image side */}
                  {s.image && isEven && (
                    <div className="relative min-h-64 border-b-3 lg:border-b-0 lg:border-r-3 border-brand-black overflow-hidden">
                      <Image src={s.image} alt={s.imageAlt || displayTitle} fill className="object-cover" sizes="600px" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex flex-col">
                    <div className={`${s.accentColor === "lime" ? "bg-brand-lime" : "bg-brand-orange"} border-b-3 border-brand-black px-6 py-4 flex items-center gap-3`}>
                      <span className="text-3xl">{s.icon}</span>
                      <h2 className="font-display font-700 text-xl uppercase tracking-tight text-brand-black">
                        {displayTitle}
                      </h2>
                    </div>
                    <div className="p-6 bg-brand-cream flex-1">
                      <p className="font-body text-base text-gray-700 leading-relaxed">{displayDesc}</p>
                    </div>
                  </div>

                  {/* Image on right for odd items */}
                  {s.image && !isEven && (
                    <div className="relative min-h-64 border-t-3 lg:border-t-0 lg:border-l-3 border-brand-black overflow-hidden order-first lg:order-last">
                      <Image src={s.image} alt={s.imageAlt || displayTitle} fill className="object-cover" sizes="600px" />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Coming soon note */}
      <section className="bg-brand-orange py-8 px-4 sm:px-6 border-y-3 border-brand-black">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display font-700 text-base uppercase tracking-wide text-brand-black">
              🛒 {isTa ? "ஆன்லைன் ஆர்டர்கள் — விரைவில் வருகிறது" : "Online Orders — Coming Soon"}
            </p>
            <p className="font-body text-sm text-gray-800 mt-1">
              {isTa ? "நர்சரி தயாரிப்புகள் மற்றும் இயற்கை இடுபொருட்களுக்கான ஆன்லைன் கடை விரைவில் தொடங்கும்." : "Online shop for nursery plants and organic inputs is coming in Phase 2."}
            </p>
          </div>
          <Link href="/contact" className="btn-primary bg-brand-black text-brand-lime flex-shrink-0">
            {isTa ? "இப்போது ஆர்டர் செய்ய அழைக்கவும்" : "Call to Order Now →"}
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark py-16 px-4 sm:px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="section-heading text-brand-cream mb-4">
            {isTa ? "ஆலோசனை தேவையா?" : "Need a Consultation?"}
          </h2>
          <p className="font-body text-gray-400 mb-8">
            {isTa ? "எங்கள் நிபுணர்கள் உங்கள் விவசாய அல்லது தொழில் தேவைகளுக்கான சரியான தீர்வு வழங்க தயாராக இருக்கிறார்கள்." : "Our experts are ready to guide you on the right solution for your agricultural or business needs."}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">{isTa ? "தொடர்பு கொள்ளுங்கள் →" : "Get in Touch →"}</Link>
            <Link href="/training" className="btn-secondary" style={{ color: "#F5F1E8", borderColor: "#F5F1E8" }}>
              {isTa ? "பயிற்சிகளை காண்க" : "Training Programmes"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
