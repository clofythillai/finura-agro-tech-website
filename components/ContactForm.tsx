"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useLang } from "@/context/LangContext";

// ── EmailJS config ────────────────────────────────────────
const EMAILJS_SERVICE_ID: string = "service_it8fapp";
const EMAILJS_TEMPLATE_ID: string = "template_ix2j8kb";
const EMAILJS_PUBLIC_KEY: string = "nA4IopOURtglmKt2_";

export default function ContactForm() {
  const { lang } = useLang();
  const isTa = lang === "ta";
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = isTa ? "பெயர் தேவை" : "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = isTa ? "சரியான மின்னஞ்சல் உள்ளிடவும்" : "Enter a valid email";
    if (form.phone && !form.phone.match(/^[6-9]\d{9}$/)) e.phone = isTa ? "சரியான தொலைபேசி எண் உள்ளிடவும்" : "Enter a valid 10-digit Indian phone number";
    if (!form.subject.trim()) e.subject = isTa ? "தலைப்பு தேவை" : "Subject is required";
    if (!form.message.trim() || form.message.trim().length < 10) e.message = isTa ? "குறைந்தது 10 எழுத்துகள் உள்ளிடவும்" : "Message must be at least 10 characters";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);

    if (EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY" || EMAILJS_PUBLIC_KEY.trim() === "") {
      console.error("EmailJS Error: Public Key is not configured. Please edit components/ContactForm.tsx and set EMAILJS_PUBLIC_KEY to your actual EmailJS Public Key.");
      setErrors({
        submit: isTa
          ? "மின்னஞ்சல் கட்டமைப்பு நிறைவடையவில்லை. தயவுசெய்து contact/ContactForm.tsx இல் Public Key ஐ உள்ளிடவும், அல்லது எங்களை நேரடியாக அழைக்கவும்: 9445450305"
          : "Contact Form configuration is incomplete. Please set your EmailJS Public Key in components/ContactForm.tsx, or contact us directly at 9445450305.",
      });
      setLoading(false);
      return;
    }

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (error) {
      console.error("EmailJS sending error details:", error);
      setErrors({
        submit: isTa
          ? "மின்னஞ்சலை அனுப்ப முடியவில்லை. முகவரி அல்லது இணைய இணைப்பைச் சரிபார்க்கவும், அல்லது எங்களை அழைக்கவும்: 9445450305"
          : "Failed to send message. Please verify your EmailJS keys in components/ContactForm.tsx or reach us directly at 9445450305.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="border-3 border-brand-black bg-brand-lime shadow-brutal p-8 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="font-display font-700 text-2xl uppercase mb-2">
          {isTa ? "நன்றி!" : "Thank You!"}
        </h3>
        <p className="font-body text-base text-gray-800">
          {isTa
            ? "உங்கள் செய்தி கிடைத்தது. நாங்கள் விரைவில் தொடர்பு கொள்கிறோம்."
            : "Your message has been received. We'll be in touch within 24 hours."}
        </p>
      </div>
    );
  }

  const field = (id: string, label: string, type = "text", rows?: number) => (
    <div>
      <label htmlFor={id} className="block font-display font-700 text-xs uppercase tracking-wide mb-1.5 text-brand-black">
        {label}
      </label>
      {rows ? (
        <textarea
          id={id}
          name={id}
          rows={rows}
          value={form[id as keyof typeof form]}
          onChange={(e) => setForm({ ...form, [id]: e.target.value })}
          className={`input-brutal resize-none ${errors[id] ? "border-red-500" : ""}`}
          placeholder={label}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={form[id as keyof typeof form]}
          onChange={(e) => setForm({ ...form, [id]: e.target.value })}
          className={`input-brutal ${errors[id] ? "border-red-500" : ""}`}
          placeholder={label}
        />
      )}
      {errors[id] && <p className="text-red-600 text-xs mt-1 font-body">{errors[id]}</p>}
    </div>
  );

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {field("name", isTa ? "முழு பெயர் *" : "Full Name *")}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {field("email", isTa ? "மின்னஞ்சல் *" : "Email Address *", "email")}
        {field("phone", isTa ? "தொலைபேசி" : "Phone Number", "tel")}
      </div>
      {field("subject", isTa ? "தலைப்பு *" : "Subject *")}
      {field("message", isTa ? "செய்தி *" : "Message *", "text", 5)}

      {errors.submit && (
        <p className="text-red-600 text-sm font-body border-3 border-red-500 p-3">{errors.submit}</p>
      )}

      <button
        id="contact-submit-btn"
        type="submit"
        disabled={loading}
        className="btn-primary justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading
          ? (isTa ? "அனுப்புகிறோம்..." : "Sending...")
          : (isTa ? "செய்தி அனுப்பு →" : "Send Message →")}
      </button>

      <p className="text-xs text-gray-500 font-body text-center">
        {isTa
          ? "அல்லது நேரடியாக அழைக்கவும்: 9445450305"
          : "Or call us directly: 9445450305 / 9487249777"}
      </p>
    </form>
  );
}
