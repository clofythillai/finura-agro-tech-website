import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Finura Agro Tech LLP. Registered office in Nagercoil; branches at Thovalai (Kanyakumari) and Nanguneri (Tirunelveli). Phone: 9445450305 / 9487249777. Email: finuraagrotechllp@gmail.com.",
};

export default function ContactPage() {
  return <ContactClient />;
}
