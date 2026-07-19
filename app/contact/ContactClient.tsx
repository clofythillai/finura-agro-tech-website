"use client";

import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import { useLang } from "@/context/LangContext";

export default function ContactClient() {
  const { lang } = useLang();
  const isTa = lang === "ta";

  return (
    <>
      {/* Hero */}
      <div className="pt-16 bg-brand-dark border-b-3 border-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="inline-block bg-brand-lime border-3 border-brand-black px-3 py-1 mb-4">
            <span className="font-display font-700 text-xs uppercase tracking-widest">
              {isTa ? "தொடர்பு" : "Contact Us"}
            </span>
          </div>
          <h1 className="section-heading text-brand-cream max-w-3xl">
            {isTa ? "எங்களை தொடர்பு கொள்ளுங்கள்." : "Let's Connect."}
          </h1>
          <p className="font-body text-gray-400 mt-4">
            {isTa
              ? "பயிற்சி, இன்டர்ன்ஷிப், ஆலோசனை அல்லது நர்சரி ஆர்டர்களுக்கு — நாங்கள் இங்கே இருக்கிறோம்."
              : "For training, internships, consultancy, or nursery orders — we're here to help."}
          </p>
        </div>
      </div>

      {/* Main content */}
      <section className="bg-brand-cream py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <ScrollReveal>
              <div className="border-3 border-brand-black shadow-brutal">
                <div className="bg-brand-lime border-b-3 border-brand-black px-6 py-4">
                  <h2 className="font-display font-700 text-lg uppercase tracking-wide text-brand-black">
                    {isTa ? "செய்தி அனுப்பு" : "Send Us a Message"}
                  </h2>
                </div>
                <div className="p-6">
                  <ContactForm />
                </div>
              </div>
            </ScrollReveal>

            {/* Contact info */}
            <div className="space-y-5">
              {/* Phone */}
              <ScrollReveal delay={0}>
                <div className="border-3 border-brand-black bg-brand-dark shadow-brutal p-5">
                  <p className="font-display font-700 text-xs uppercase tracking-widest text-brand-orange mb-3">
                    {isTa ? "தொலைபேசி" : "Phone"}
                  </p>
                  <div className="space-y-2">
                    <a href="tel:9445450305" className="font-display font-700 text-2xl text-brand-lime hover:text-brand-cream transition-colors block">
                      📞 9445450305
                    </a>
                    <a href="tel:9487249777" className="font-display font-700 text-2xl text-brand-lime hover:text-brand-cream transition-colors block">
                      📞 9487249777
                    </a>
                    <a href="tel:04652223305" className="font-display font-700 text-lg text-gray-400 hover:text-brand-cream transition-colors block">
                      📞 04652-223305
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Email */}
              <ScrollReveal delay={80}>
                <div className="border-3 border-brand-black bg-brand-dark shadow-brutal p-5">
                  <p className="font-display font-700 text-xs uppercase tracking-widest text-brand-orange mb-2">
                    {isTa ? "மின்னஞ்சல்" : "Email"}
                  </p>
                  <a
                    href="mailto:finuraagrotechllp@gmail.com"
                    className="font-body text-base text-brand-lime hover:text-brand-cream transition-colors break-all"
                  >
                    finuraagrotechllp@gmail.com
                  </a>
                </div>
              </ScrollReveal>

              {/* Hours */}
              <ScrollReveal delay={120}>
                <div className="border-3 border-brand-black bg-brand-lime shadow-brutal p-5">
                  <p className="font-display font-700 text-xs uppercase tracking-widest text-brand-black mb-3">
                    {isTa ? "இயக்க நேரம்" : "Business Hours"}
                  </p>
                  <div className="space-y-2 font-body text-sm text-brand-black">
                    <div className="flex justify-between gap-4">
                      <span className="font-700">{isTa ? "திங்கள் – சனி" : "Monday – Saturday"}</span>
                      <span>9:00 AM – 5:30 PM</span>
                    </div>
                    <div className="flex justify-between gap-4 text-gray-700">
                      <span>{isTa ? "மதிய உணவு இடைவேளை" : "Lunch Break"}</span>
                      <span>1:00 PM – 2:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-4 font-700 text-red-700">
                      <span>{isTa ? "ஞாயிறு" : "Sunday"}</span>
                      <span>{isTa ? "மூடப்பட்டது" : "Closed"}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Addresses */}
              <ScrollReveal delay={160}>
                <div className="border-3 border-brand-black bg-brand-cream shadow-brutal">
                  <div className="bg-brand-orange border-b-3 border-brand-black px-5 py-3">
                    <h3 className="font-display font-700 text-sm uppercase tracking-wide text-brand-black">
                      {isTa ? "முகவரிகள்" : "Our Addresses"}
                    </h3>
                  </div>
                  <div className="p-5 space-y-4">
                    {[
                      {
                        label: isTa ? "பதிவு செய்யப்பட்ட அலுவலகம்" : "Registered Office",
                        addr: "2F/1A West Lutheran Street, Nagercoil – 629001, Kanyakumari District, Tamil Nadu",
                      },
                      {
                        label: isTa ? "கிளை 1 — தோவாலை" : "Branch 1 — Thovalai",
                        addr: "11/8 J, Loyola College Road, Thovalai – 629302, Kanyakumari District, Tamil Nadu",
                      },
                      {
                        label: isTa ? "கிளை 2 — நங்குநேரி" : "Branch 2 — Nanguneri",
                        addr: "NH-7, Near AMRL HiTech City, South Nanguneri, Tirunelveli District, Tamil Nadu",
                      },
                    ].map(({ label, addr }) => (
                      <div key={label} className="pb-3 border-b border-gray-200 last:border-0 last:pb-0">
                        <p className="font-display font-700 text-xs uppercase tracking-wide text-brand-orange mb-1">{label}</p>
                        <p className="font-body text-sm text-gray-700">{addr}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Facebook */}
              <ScrollReveal delay={200}>
                <a
                  href="https://facebook.com/410389732318278"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-3 border-brand-black bg-[#1877F2] shadow-brutal p-4 flex items-center gap-3 hover:shadow-brutal-hover hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  <svg className="w-6 h-6 fill-white flex-shrink-0" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                  <span className="font-display font-700 text-sm uppercase text-white">
                    {isTa ? "Facebook பக்கம்" : "Follow on Facebook"}
                  </span>
                </a>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps embed — Thovalai branch */}
      <section className="border-t-3 border-brand-black">
        <div className="w-full h-96 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.2!2d77.2771!3d8.3372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMMwJzEzLjkiTiA3N8KwMTYnMzcuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Finura Agro Tech LLP — Thovalai Branch location on Google Maps"
          />
        </div>
        <div className="bg-brand-black border-t-3 border-brand-black px-4 sm:px-6 py-3 text-center">
          <p className="font-body text-xs text-gray-400">
            {isTa
              ? "தோவாலை கிளை — 11/8 J, லயோலா கல்லூரி சாலை, தோவாலை – 629302, கன்னியாகுமரி மாவட்டம்"
              : "Thovalai Branch — 11/8 J, Loyola College Road, Thovalai – 629302, Kanyakumari District"}
          </p>
        </div>
      </section>
    </>
  );
}
