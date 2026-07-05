import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Residential", href: "/residential" },
  { label: "Commercial", href: "/commercial" },
  { label: "Community", href: "/community" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact-us" },
];

const socials = [
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "Facebook", href: "#", icon: FaFacebook },
  { label: "LinkedIn", href: "#", icon: FaLinkedin },
  { label: "YouTube", href: "#", icon: FaYoutube },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#F1EEE9] pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] gap-10 md:gap-8 pb-12 border-b border-[#DDDDDD]">
          {/* Brand + address */}
          <div>
            <span className="font-lato font-bold text-2xl text-[#1F1F1F]">
              3<span className="text-[#C4A065]">Brainz</span>
            </span>
            <p className="font-lato text-sm text-[#707070] mt-4 leading-relaxed max-w-xs">
              Regional Office, NH-24, Ghaziabad, Uttar Pradesh, India
            </p>
            <p className="font-lato text-sm text-[#707070] mt-2">
              +91 12345 67890
            </p>
            <p className="font-lato text-sm text-[#707070]">info@3brainz.com</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-lato text-xs uppercase tracking-[0.2em] text-[#1F1F1F] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-lato text-sm text-[#707070] hover:text-[#C4A065] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-lato text-xs uppercase tracking-[0.2em] text-[#1F1F1F] mb-4">
              Follow Us
            </h4>
            <ul className="space-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="flex items-center gap-2 font-lato text-sm text-[#707070] hover:text-[#C4A065] transition-colors"
                  >
                    <s.icon size={16} />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6">
          © {new Date().getFullYear()} 3Brainz. All rights reserved.
          <p className="font-lato text-xs text-[#707070] text-center sm:text-right max-w-md">
            RERA registration details available on request. This is not an
            offer, and does not constitute a contract of any kind.
          </p>
        </div>
      </div>
    </footer>
  );
}
