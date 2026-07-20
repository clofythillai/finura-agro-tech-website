"use client";

import { useState } from "react";
import { useLang } from "@/context/LangContext";

// ── Contact Form Endpoint Config ──────────────────────────
// You can use Formspree, Web3Forms, or Getform.
// Just create a free form endpoint at https://formspree.io/ or https://web3forms.com/
// and paste your endpoint URL or access key below:
const FORM_SUBMIT_URL = "https://formspree.io/f/xyzyqojw"; // Replace with your Formspree Form ID/URL

export default function ContactForm() {
  const { lang } = useLang();
  const isTa = lang === "ta";
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

    if (FORM_SUBMIT_URL.includes("YOUR_FORM_ID") || FORM_SUBMIT_URL.includes("xyzyqojw")) {
      console.warn("Form Submission: Using placeholder endpoint. Formspree submissions will fail until configured.");
    }

    try {
      const response = await fetch(FORM_SUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Form submission returned a non-ok status code.");
      }
    } catch (error) {
      console.error("Form submission error details:", error);
      setErrors({
        submit: isTa
          ? "மின்னஞ்சலை அனுப்ப முடியவில்லை. தயவுசெய்து நேரடியாக அழைக்கவும்: 9445450305"
          : "Failed to send message. Please try again later, or contact us directly at 9445450305.",
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
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
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
