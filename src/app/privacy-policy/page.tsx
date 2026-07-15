import type { Metadata } from "next";
import LegalPageHeader from "@/components/legal/LegalPageHeader";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | ShriRam Group",
  description: "How ShriRam Group collects, uses, and protects your information.",
};

const sections = [
  {
    heading: "1. Introduction",
    body: [
      "ShriRam Group (\"we\", \"us\", \"our\") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains what information we collect, how we use it, and the choices you have.",
      "By using our website or sharing your details with us — for example, through an enquiry form or by contacting our sales team — you agree to the practices described in this policy.",
    ],
  },
  {
    heading: "2. Information We Collect",
    body: [
      "We may collect personal information you provide directly, such as your name, phone number, email address, and any details you share when submitting an enquiry or requesting a call back.",
      "We may also collect non-personal information automatically, such as your browser type, device information, and pages visited, to help us understand how our website is used.",
    ],
  },
  {
    heading: "3. How We Use Your Information",
    body: [
      "We use the information we collect to respond to your enquiries, share project details and updates you've requested, improve our website and services, and comply with legal or regulatory requirements.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    heading: "4. Cookies",
    body: [
      "Our website may use cookies and similar technologies to improve your browsing experience and understand site traffic. You can disable cookies through your browser settings, though some features of the site may not function as intended.",
    ],
  },
  {
    heading: "5. Sharing of Information",
    body: [
      "We may share your information with trusted service providers who assist us in operating our website or business (such as CRM or communication tools), and where required by law, court order, or government request.",
      "We do not share your information with third parties for their own marketing purposes without your consent.",
    ],
  },
  {
    heading: "6. Data Security",
    body: [
      "We take reasonable technical and organizational measures to protect your personal information from unauthorized access, loss, or misuse. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "7. Your Rights",
    body: [
      "You may request access to, correction of, or deletion of your personal information held by us at any time by contacting us using the details below. You may also opt out of receiving marketing communications from us.",
    ],
  },
  {
    heading: "8. Third-Party Links",
    body: [
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites, and we encourage you to review their privacy policies separately.",
    ],
  },
  {
    heading: "9. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal or regulatory reasons. The updated policy will be posted on this page with a revised date.",
    ],
  },
  {
    heading: "10. Contact Us",
    body: [
      "If you have any questions about this Privacy Policy or how we handle your information, please contact us at info@shriramgroup.com or +91 12345 67890.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalPageHeader title="Privacy Policy" updated="15 July 2026" />

      <section className="w-full bg-white py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          {sections.map((s) => (
            <div key={s.heading} className="mb-10 last:mb-0">
              <h2 className="font-playfair text-xl md:text-2xl text-[#1F1F1F] mb-4">
                {s.heading}
              </h2>
              {s.body.map((p, i) => (
                <p
                  key={i}
                  className="font-lato text-sm md:text-base text-[#707070] leading-relaxed mb-3 last:mb-0"
                >
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}