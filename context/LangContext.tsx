"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "ta";

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<string, { en: string; ta: string }> = {
  // Navbar
  "nav.home": { en: "Home", ta: "முகப்பு" },
  "nav.about": { en: "About", ta: "எங்களை பற்றி" },
  "nav.services": { en: "Services", ta: "சேவைகள்" },
  "nav.research": { en: "Research", ta: "ஆராய்ச்சி" },
  "nav.training": { en: "Training", ta: "பயிற்சி" },
  "nav.nursery": { en: "Nursery", ta: "நர்சரி" },
  "nav.gallery": { en: "Gallery", ta: "படத்தொகுப்பு" },
  "nav.contact": { en: "Contact", ta: "தொடர்பு" },
  "nav.apply": { en: "Apply for Internship", ta: "இன்டர்ன்ஷிப் விண்ணப்பி" },

  // Hero
  "hero.headline1": { en: "Technology", ta: "தொழில்நுட்பம்" },
  "hero.headline2": { en: "For", ta: "இயற்கைக்காக" },
  "hero.headline3": { en: "Nature.", ta: "" },
  "hero.sub": {
    en: "Finura Agro Tech LLP — A leading agri-biotech centre in Tamil Nadu for tissue culture, mushroom production, soil testing, training, and research.",
    ta: "தமிழ்நாட்டின் முன்னணி விவசாய-உயிரியல் தொழில்நுட்ப மையம் — திசு வளர்ப்பு, காளான் உற்பத்தி, மண் பரிசோதனை, பயிற்சி மற்றும் ஆராய்ச்சி."
  },
  "hero.cta1": { en: "Explore Our Services", ta: "சேவைகளை காண்க" },
  "hero.cta2": { en: "Apply for Internship", ta: "இன்டர்ன்ஷிப் விண்ணப்பி" },

  // Marquee
  "marquee.text": {
    en: "MCA REGISTERED • TNAU AFFILIATED • EDII-KABIF INCUBATEE • GOVT. ASSISTED • SINCE 2021 • LLPIN AAY-4389 • 44 RESEARCH PAPERS • 4 LABORATORIES • 9 CORE DOMAINS •",
    ta: "MCA பதிவு பெற்றது • TNAU இணைந்தது • EDII-KABIF இன்குபேட்டி • அரசு உதவி பெற்றது • 2021 முதல் • LLPIN AAY-4389 • 44 ஆராய்ச்சி கட்டுரைகள் • 4 ஆய்வகங்கள் •"
  },

  // Sections
  "section.divisions": { en: "Our Divisions", ta: "எங்கள் பிரிவுகள்" },
  "section.stats": { en: "By The Numbers", ta: "எண்களில்" },
  "section.team": { en: "Leadership", ta: "தலைமை" },
  "section.training": { en: "Training Programmes", ta: "பயிற்சி திட்டங்கள்" },
  "section.labs": { en: "Our Laboratories", ta: "எங்கள் ஆய்வகங்கள்" },
  "section.gallery": { en: "Gallery", ta: "படத்தொகுப்பு" },
  "section.testimonials": { en: "What People Say", ta: "மக்கள் கருத்து" },
  "section.contact": { en: "Get In Touch", ta: "தொடர்பு கொள்ளுங்கள்" },
  "section.nursery": { en: "Our Nursery", ta: "எங்கள் நர்சரி" },
  "section.vision": { en: "Vision", ta: "தொலைநோக்கு" },
  "section.mission": { en: "Mission", ta: "இலக்கு" },
  "section.about_company": { en: "About Finura Agro Tech LLP", ta: "பினுரா அக்ரோ டெக் எல்எல்பி பற்றி" },

  // Stats
  "stat.since": { en: "In Govt. Service Since", ta: "அரசு சேவை தொடங்கிய ஆண்டு" },
  "stat.papers": { en: "Research Papers Published", ta: "வெளியிடப்பட்ட ஆராய்ச்சி கட்டுரைகள்" },
  "stat.domains": { en: "Core Research Domains", ta: "முக்கிய ஆராய்ச்சி துறைகள்" },
  "stat.labs": { en: "Laboratories", ta: "ஆய்வகங்கள்" },
  "stat.students": { en: "Students Trained Annually", ta: "ஆண்டுதோறும் பயிற்சி பெற்ற மாணவர்கள்" },

  // CTA Banner
  "cta.banner.heading": { en: "Start Your Organic Farming Journey", ta: "உங்கள் இயற்கை விவசாய பயணத்தை தொடங்குங்கள்" },
  "cta.banner.sub": { en: "Join hundreds of students, farmers, and entrepreneurs who train with us every year.", ta: "ஆண்டுதோறும் எங்களுடன் பயிற்சி பெறும் நூற்றுக்கணக்கான மாணவர்கள், விவசாயிகள் மற்றும் தொழில்முனைவோருடன் இணையுங்கள்." },
  "cta.banner.btn": { en: "Contact Us Today", ta: "இன்றே தொடர்பு கொள்ளுங்கள்" },

  // Footer
  "footer.tagline": { en: "Technology for Nature", ta: "இயற்கைக்கான தொழில்நுட்பம்" },
  "footer.copy": { en: "© 2024 Finura Agro Tech LLP. All rights reserved.", ta: "© 2024 பினுரா அக்ரோ டெக் எல்எல்பி. அனைத்து உரிமைகளும் பாதுகாக்கப்படுகின்றன." },
  "footer.hours": { en: "Mon–Sat: 9:00 AM – 5:30 PM | Lunch: 1–2 PM | Sun: Closed", ta: "திங்கள்–சனி: காலை 9 – மாலை 5:30 | மதிய உணவு: 1–2 PM | ஞாயிறு: மூடப்பட்டது" },
  "footer.tamil_coming": { en: "", ta: "" },

  // Contact form
  "form.name": { en: "Full Name", ta: "முழு பெயர்" },
  "form.email": { en: "Email Address", ta: "மின்னஞ்சல் முகவரி" },
  "form.phone": { en: "Phone Number", ta: "தொலைபேசி எண்" },
  "form.subject": { en: "Subject", ta: "தலைப்பு" },
  "form.message": { en: "Message", ta: "செய்தி" },
  "form.submit": { en: "Send Message", ta: "செய்தி அனுப்பு" },
  "form.success": { en: "Thank you! We'll be in touch soon.", ta: "நன்றி! நாங்கள் விரைவில் தொடர்பு கொள்கிறோம்." },

  // Read more / less
  "read_more": { en: "Read more", ta: "மேலும் படிக்க" },
  "read_less": { en: "Read less", ta: "குறைவாக படிக்க" },
  "view_all": { en: "View All", ta: "அனைத்தையும் காண்க" },
  "coming_soon": { en: "Coming Soon", ta: "விரைவில் வருகிறது" },
  "learn_more": { en: "Learn More", ta: "மேலும் அறிக" },

  // About page
  "about.profile": {
    en: "FINURA AGRO TECH LLP is a Limited Liability Partnership firm registered under Registrar of Companies, Ministry of Corporate Affairs (MCA), Govt of India. Designated Partners of Finura Agro Tech Llp are Mr. M. Ashok Macrin, Deputy Director of Horticulture (Retd) and Mrs. Anisha Shinney Thangam, Former Professor of Scott Christian College, Nagercoil. Finura Agro Tech LLP Identification Number is (LLPIN) AAY-4389. Registered on 3rd September 2021. Its registered office is situated at 2F/1A West Lutheran Street, Nagercoil, Kanyakumari District, Tamil Nadu, India, and the Branches at Thovalai and Nanguneri.",
    ta: "பினுரா அக்ரோ டெக் எல்எல்பி என்பது இந்திய அரசின் கார்ப்பரேட் விவகார அமைச்சகத்தின் (MCA) கீழ் நிறுவனங்களின் பதிவாளரிடம் பதிவு செய்யப்பட்ட ஒரு கூட்டுப் பொறுப்பு கூட்டாண்மை நிறுவனம். பினுரா அக்ரோ டெக் எல்எல்பியின் நியமிக்கப்பட்ட பங்காளிகள் திரு. எம். அசோக் மேக்ரின் (ஓய்வுபெற்ற தோட்டக்கலை துணை இயக்குநர்) மற்றும் திருமதி. அனிஷா ஷினி தங்கம் (நாகர்கோவிலின் ஸ்காட் கிறிஸ்டியன் கல்லூரியின் முன்னாள் பேராசிரியர்). பினுரா அக்ரோ டெக் எல்எல்பி அடையாள எண் (LLPIN) AAY-4389 ஆகும். 3 செப்டம்பர் 2021 அன்று பதிவு செய்யப்பட்டது."
  },
  "about.vision": {
    en: "To be a leading centre of excellence in agricultural innovation, biotechnology, and skill development by empowering farmers, students, researchers, and entrepreneurs through sustainable technologies, advanced training, and industry–academia collaboration.",
    ta: "நிலையான தொழில்நுட்பங்கள், மேம்பட்ட பயிற்சி மற்றும் தொழில்-கல்வி ஒத்துழைப்பு மூலம் விவசாயிகள், மாணவர்கள், ஆராய்ச்சியாளர்கள் மற்றும் தொழில்முனைவோரை வலுப்படுத்துவதன் மூலம் விவசாய கண்டுபிடிப்பு, உயிரி தொழில்நுட்பம் மற்றும் திறன் மேம்பாட்டில் சிறந்த மையமாக விளங்குவது."
  },
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = () => setLang((prev) => (prev === "en" ? "ta" : "en"));

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang] || entry["en"];
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
