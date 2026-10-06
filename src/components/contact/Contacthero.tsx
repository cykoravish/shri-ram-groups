"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export default function ContactHero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <section className="relative w-full h-[70vh] md:h-[75vh] overflow-hidden">
        <Image
          src="/images/hero-contact.webp"
          alt="Family walking towards a ShriRam residence at sunset"
          fill
          priority
          className="object-cover object-[72%_50%] md:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />

        <div className="relative z-10 h-full flex flex-col items-center justify-end pb-24 md:pb-28 px-6 text-center">
          <span
            className={`font-lato text-xs md:text-sm tracking-[0.4em] uppercase text-brand-light mb-4 transition-all duration-700 ease-out motion-reduce:transition-none ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Contact Us
          </span>
          <h1
            className={`font-playfair text-4xl md:text-6xl lg:text-7xl text-white leading-tight transition-all duration-700 ease-out delay-150 motion-reduce:transition-none ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            We&apos;re Just a <span className="italic">Conversation Away</span>
          </h1>
          <p
            className={`font-lato text-sm md:text-base text-white/80 max-w-lg mt-5 leading-relaxed transition-all duration-700 ease-out delay-300 motion-reduce:transition-none ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Good conversations begin with a simple hello. Connect with our
            team for project details, assistance and everything you need to
            make an informed decision.
          </p>
        </div>
      </section>

      {/* Floating quick-connect card straddling hero and the section below */}
      <div className="relative z-20 max-w-3xl mx-auto px-6 -mt-12 md:-mt-16">
        <div
          className={`bg-white shadow-xl grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#DDDDDD] transition-all duration-700 ease-out delay-300 motion-reduce:transition-none ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="tel:+911234567890"
            className="group flex items-center justify-center gap-3 px-6 py-6 hover:bg-[#F7F7F7] transition-colors"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-tint text-brand group-hover:bg-brand group-hover:text-white transition-colors">
              <Phone size={16} />
            </span>
            <span className="text-left">
              <span className="block font-lato text-[10px] uppercase tracking-[0.2em] text-[#707070]">
                Call Us
              </span>
              <span className="block font-lato font-bold text-sm text-ink">
                +91 12345 67890
              </span>
            </span>
          </a>
          <a
            href="mailto:info@shriramgroup.com"
            className="group flex items-center justify-center gap-3 px-6 py-6 hover:bg-[#F7F7F7] transition-colors"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-tint text-brand group-hover:bg-brand group-hover:text-white transition-colors">
              <Mail size={16} />
            </span>
            <span className="text-left">
              <span className="block font-lato text-[10px] uppercase tracking-[0.2em] text-[#707070]">
                Email Us
              </span>
              <span className="block font-lato font-bold text-sm text-ink">
                info@shriramgroup.com
              </span>
            </span>
          </a>
        </div>
      </div>
    </>
  );
}