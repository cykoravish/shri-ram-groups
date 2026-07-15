import type { Metadata } from "next";
import ContactHero from "@/components/contact/Contacthero";
import ContactInfoBand from "@/components/contact/Contactinfoband";
import ContactForm from "@/components/contact/Contactform";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contact Us | ShriRam Group",
  description:
    "Get in touch with ShriRam Group for enquiries about our residential and commercial projects in Ghaziabad.",
};

export default function ContactUsPage() {
  return (
    <>
      <ContactHero />
      <ContactInfoBand />
      <ContactForm />
      <Footer />
    </>
  );
}