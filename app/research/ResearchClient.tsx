"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MarqueeStrip from "@/components/MarqueeStrip";
import TeamCard from "@/components/TeamCard";
import LabCard from "@/components/LabCard";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";
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
  visible: { transition: { staggerChildren: 0.08 } },
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

/* ── team data ───────────────────────────────────────── */
const team = [
  {
    name: "Mr. M. Ashok Macrin",
    designation: "Managing Director, Centre for Training & Research",
    designationTa: "மேலாண் இயக்குநர், பயிற்சி மற்றும் ஆராய்ச்சி மையம்",
    bio: "Initially joined government service in 1983 as Horticulture Officer in the Department of Horticulture and Plantation Crop. Served as Horticulture Officer, Assistant Director of Horticulture, and Deputy Director of Horticulture from 1983 to 2020. Retired from government service on 31st January 2020. During government service, he participated in an international training program in Hi-Tech Horticulture and Protected Cultivation at the International Agricultural Centre, Netherlands, sponsored by the Government of Tamil Nadu, and also visited countries like Germany, France, and Belgium. Participated in various national-level training programs sponsored by State and Central Government. Received the Best Worker Award for Ockhi cyclone relief work from the Kanyakumari District Collector in 2008. Has received various awards from state and central government.",
    bioTa: "1983 ஆம் ஆண்டு தோட்டக்கலை மற்றும் தோட்ட பயிர்கள் துறையில் தோட்டக்கலை அலுவலராக அரசு சேவையில் சேர்ந்தார். 1983 முதல் 2020 வரை தோட்டக்கலை அலுவலர், தோட்டக்கலை உதவி இயக்குநர் மற்றும் தோட்டக்கலை துணை இயக்குநராக பணியாற்றினார்.",
    tags: ["1983–2020 Govt. Service", "Netherlands Training", "Best Worker Award 2008", "TNAU MoU"],
    imageSrc: "/profiles/Ashok macrin.png",
    missing: false,
  },
  {
    name: "Dr. A. Dannie Macrin",
    designation: "Scientist — Molecular & Analytical Techniques",
    designationTa: "விஞ்ஞானி — மூலக்கூறு மற்றும் பகுப்பாய்வு நுட்பங்கள்",
    bio: "Completed his PhD in Genetic Engineering at SRM Institute of Science and Technology (2012–2019), M.Tech in Genetic Engineering at SRM Institute of Science and Technology (2009–2011), and B.Tech in Bioinformatics at Karunya Institute of Technical Sciences (2005–2009). He has more than 7 years of experience in molecular, analytical, and diagnostic techniques including Plant Tissue Culture, qPCR, Western Blotting, Immuno-staining, FACS, RNA sequencing, and other assay techniques. More than 5 years of experience in laboratory management, including cataloging, manpower management, chemical purchase, accounting, recording, and result analysis. More than 5 years of research experience, including one year at the University of Washington.",
    bioTa: "SRM அறிவியல் மற்றும் தொழில்நுட்ப நிறுவனத்தில் மரபணு பொறியியலில் PhD (2012–2019) முடித்தார். 7+ ஆண்டுகளுக்கும் மேலான மூலக்கூறு, பகுப்பாய்வு மற்றும் கண்டறிதல் நுட்பங்களில் அனுபவம்.",
    tags: ["PhD — Genetic Engineering", "SRM University", "University of Washington", "qPCR, RNA-seq"],
    imageSrc: "/profiles/Dannie macrin.png",
    missing: false,
  },
  {
    name: "Dr. S. Prakash",
    designation: "Research Scientist — Biotechnology & Microbiology",
    designationTa: "ஆராய்ச்சி விஞ்ஞானி — உயிரி தொழில்நுட்பம் & நுண்ணுயிரியல்",
    bio: "Explored application-oriented research activity in the domain of Biotechnology. Recognized supervisor at Anna University, Chennai, and Bharathiar University. Published 44 research papers in high-impact national and international journals. Published 7 books, 3 CDs, and 11 chapters in books. Established an Anna University-recognized R&D centre in the Department of Biotechnology, Udaya School of Engineering, Kanyakumari District. Received 9 student research grants from the State Council for Science and Technology, Government of Tamil Nadu, under the Student Project Scheme. Received 2 seminar grants from ICMR & DRDA. Guided 30 M.Tech/M.Sc Biotechnology/Microbiology & Nanoscience and Technology students under Anna University. Currently guiding 2 PhD research scholars under Bharathiar University.",
    bioTa: "உயிரி தொழில்நுட்ப துறையில் பயன்பாட்டு சார்ந்த ஆராய்ச்சி. அண்ணா பல்கலைக்கழகம் மற்றும் பாரதியார் பல்கலைக்கழகத்தின் அங்கீகரிக்கப்பட்ட மேற்பார்வையாளர். 44 ஆராய்ச்சி கட்டுரைகள் வெளியிட்டுள்ளார்.",
    tags: ["44 Research Papers", "Anna University Supervisor", "7 Books Published", "ICMR Grant"],
    imageSrc: "/profiles/Praksh S.png",
    missing: false,
  },
  {
    name: "Dr. Vinu Radha",
    designation: "Researcher — Finura Agro Tech LLP",
    designationTa: "ஆராய்ச்சியாளர் — பினுரா அக்ரோ டெக் எல்எல்பி",
    bio: "Dr. Vinu Radha is an active researcher at Finura Agro Tech LLP. She focuses on plant pathology, soil microbiology, and tissue culture technologies. Actively involved in organizing training programs for agricultural students and farmers, bridging the gap between research and practice.",
    bioTa: "டாக்டர் வினு ராதா பினுரா அக்ரோ டெக் எல்எல்பியின் ஆராய்ச்சியாளர் ஆவார். இவர் தாவர நோயியல், மண் நுண்ணுயிரியல் மற்றும் திசு வளர்ப்பு தொழில்நுட்பங்களில் கவனம் செலுத்துகிறார்.",
    tags: ["Plant Pathology", "Soil Microbiology", "Tissue Culture"],
    missing: false,
  },
];

const labs = [
  {
    name: "Plant Tissue Culture Laboratory",
    nameTa: "தாவர திசு வளர்ப்பு ஆய்வகம்",
    description: "State-of-the-art tissue culture facility with laminar flow benches, autoclave, growth rooms with controlled lighting, and media preparation area. Produces disease-free banana and other planting materials at commercial scale.",
    descriptionTa: "லேமினார் ஃப்ளோ பெஞ்சுகள், ஆட்டோக்ளேவ், கட்டுப்படுத்தப்பட்ட வெளிச்சம் கொண்ட வளர்ச்சி அறைகள் மற்றும் ஊடக தயாரிப்பு பகுதி கொண்ட அத்யாதுனிக திசு வளர்ப்பு வசதி.",
    icon: "🧪",
  },
  {
    name: "Soil Testing Laboratory",
    nameTa: "மண் பரிசோதனை ஆய்வகம்",
    description: "Equipped for physical, chemical, and biological soil analysis. Provides comprehensive soil health reports and fertilizer recommendations to help farmers optimise crop yield and soil fertility.",
    descriptionTa: "இயற்பியல், இரசாயன மற்றும் உயிரியல் மண் பகுப்பாய்வுக்கு தயாரிக்கப்பட்டுள்ளது. விவசாயிகளுக்கு விரிவான மண் ஆரோக்கிய அறிக்கைகள் மற்றும் உர பரிந்துரைகள் வழங்குகிறது.",
    icon: "🌱",
  },
  {
    name: "Microbiology Laboratory",
    nameTa: "நுண்ணுயிரியல் ஆய்வகம்",
    description: "Equipped for research in soil microbiology, industrial microbiology, plant pathology, and biocontrol agent production. Supports student research projects, M.Sc/M.Tech dissertation work, and collaborative academic research.",
    descriptionTa: "மண் நுண்ணுயிரியல், தொழில்துறை நுண்ணுயிரியல், தாவர நோயியல் மற்றும் உயிரியல் கட்டுப்பாட்டு முகவர் உற்பத்தியில் ஆராய்ச்சிக்கு தயாரிக்கப்பட்டுள்ளது.",
    icon: "🔬",
  },
  {
    name: "Mushroom Production Unit",
    nameTa: "காளான் உற்பத்தி அலகு",
    description: "Commercial mushroom cultivation unit at the Nanguneri branch. Produces Milky Mushroom and other varieties for local markets. Offers hands-on spawn production and mushroom cultivation training.",
    descriptionTa: "நங்குநேரி கிளையில் வணிக காளான் சாகுபடி அலகு. பால் காளான் மற்றும் பிற வகைகளை உள்ளூர் சந்தைகளுக்கு உற்பத்தி செய்கிறது.",
    icon: "🍄",
  },
];

const domains = [
  "Soil Microbiology", "Industrial Microbiology", "Medical Microbiology", "Food Microbiology",
  "Microbiome", "Plant Tissue Culture", "Plant Pathology", "Biofertilizers",
  "Biocontrol Agents", "Soil Analysis", "Plants Propagation", "Marine Biotechnology", "Mushroom",
];

const supportServices = [
  { en: "Project Selection", ta: "திட்ட தேர்வு" },
  { en: "Project Execution", ta: "திட்ட செயலாக்கம்" },
  { en: "Result Analysis", ta: "முடிவு பகுப்பாய்வு" },
  { en: "Report Preparation", ta: "அறிக்கை தயாரிப்பு" },
  { en: "Journal Publications", ta: "ஜர்னல் வெளியீடுகள்" },
  { en: "Patent Filing", ta: "காப்புரிமை தாக்கல்" },
];

export default function ResearchClient() {
  const { lang } = useLang();
  const isTa = lang === "ta";
  const labsRef = useRef(null);
  const labsInView = useInView(labsRef, { once: true, margin: "-60px" });
  const domainsRef = useRef(null);
  const domainsInView = useInView(domainsRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* Hero */}
      <div className="pt-16 bg-brand-dark border-b-3 border-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-block bg-brand-lime border-3 border-brand-black px-3 py-1 mb-4">
              <span className="font-display font-700 text-xs uppercase tracking-widest text-brand-black">
                {isTa ? "ஆராய்ச்சி மற்றும் குழு" : "Research & Team"}
              </span>
            </div>
            <h1 className="section-heading text-brand-cream max-w-3xl">
              {isTa ? "தலைமை ஆராய்ச்சியாளர்கள்" : "Meet Our"}
              <br />
              <span className="text-brand-lime">{isTa ? "." : "Research Team."}</span>
            </h1>
          </motion.div>
        </div>
      </div>

      <MarqueeStrip dark={true} />

      {/* Team */}
      <section className="bg-brand-cream py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="section-heading mb-10">
              {isTa ? "ஆராய்ச்சி குழு" : "Our Research Team."}
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 80}>
                <TiltCard>
                  <TeamCard {...member} />
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratories */}
      <section className="bg-brand-dark py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="inline-block bg-brand-orange border-3 border-brand-black px-3 py-1 mb-4">
              <span className="font-display font-700 text-xs uppercase tracking-widest text-brand-black">
                {isTa ? "ஆய்வகங்கள்" : "Laboratories"}
              </span>
            </div>
            <h2 className="section-heading text-brand-cream mb-10">
              {isTa ? "எங்கள் ஆய்வகங்கள்." : "Our Laboratories."}
            </h2>
          </AnimatedSection>

          <motion.div
            ref={labsRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
            initial="hidden"
            animate={labsInView ? "visible" : "hidden"}
            variants={stagger}
          >
            {labs.map((lab, i) => (
              <motion.div
                key={lab.name}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                <LabCard {...lab} dark />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Research Domains tag cloud */}
      <section className="bg-brand-cream py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="section-heading mb-8">
              {isTa ? "ஆராய்ச்சி துறைகள்." : "Research Domains."}
            </h2>
          </AnimatedSection>

          <motion.div
            ref={domainsRef}
            className="flex flex-wrap gap-3 mb-12"
            initial="hidden"
            animate={domainsInView ? "visible" : "hidden"}
            variants={stagger}
          >
            {domains.map((d) => (
              <motion.div
                key={d}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
                }}
                className="border-3 border-brand-black bg-brand-cream px-5 py-3 font-display font-700 text-sm uppercase tracking-wide shadow-brutal-sm hover:bg-brand-lime transition-all duration-150 hover:shadow-brutal hover:-translate-y-0.5 cursor-default"
              >
                {d}
              </motion.div>
            ))}
          </motion.div>

          {/* We Support section */}
          <AnimatedSection>
            <div className="border-3 border-brand-black bg-brand-dark shadow-brutal hover:shadow-brutal-lime transition-all duration-300">
              <div className="bg-brand-lime border-b-3 border-brand-black px-6 py-4">
                <h3 className="font-display font-700 text-lg uppercase tracking-wide text-brand-black">
                  {isTa ? "இறுதி ஆண்டு மாணவர்களுக்கு நாங்கள் ஆதரிக்கிறோம்" : "We Support Final-Year Students"}
                </h3>
              </div>
              <div className="p-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                {supportServices.map(({ en, ta }) => (
                  <div key={en} className="flex items-center gap-3">
                    <span className="text-brand-lime font-700 text-lg">✓</span>
                    <span className="font-body text-sm text-brand-cream">{isTa ? ta : en}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
