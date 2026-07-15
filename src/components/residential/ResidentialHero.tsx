"use client";

import { useEffect, useState } from "react";

export default function ResidentialHero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <section className="relative w-full h-[45vh] md:h-[55vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1600&auto=format&fit=crop"
          alt="ShriRam Group residence interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </section>

      <div className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-center">
        <span
          className={`block font-lato text-xs tracking-[0.4em] uppercase text-[#C4A065] transition-all duration-700 ease-out motion-reduce:transition-none ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Our Residences
        </span>
        <h1
          className={`font-playfair text-3xl md:text-5xl text-[#1F1F1F] mt-4 mb-6 leading-tight transition-all duration-700 ease-out delay-150 motion-reduce:transition-none ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Explore Our Projects
        </h1>
        <p
          className={`font-lato text-sm md:text-base text-[#707070] leading-relaxed transition-all duration-700 ease-out delay-300 motion-reduce:transition-none ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Every residence we build is a commitment to timeless design and
          enduring quality. Explore our portfolio, from landmark new launches
          to the communities our families call home today.
        </p>
      </div>
    </>
  );
}