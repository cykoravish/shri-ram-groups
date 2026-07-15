"use client";

import { useEffect, useState } from "react";

export default function CommercialHero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full bg-[#C4A065] py-16 md:py-20 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 w-56 h-56 md:w-72 md:h-72 border-2 border-[#1F1F1F]/10 rotate-12"
      />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <span
          className={`block font-lato text-xs tracking-[0.4em] uppercase text-[#1F1F1F]/70 transition-all duration-700 ease-out motion-reduce:transition-none ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Commercial Portfolio
        </span>
        <h1
          className={`font-playfair text-3xl md:text-5xl text-[#1F1F1F] mt-4 leading-tight transition-all duration-700 ease-out delay-150 motion-reduce:transition-none ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Ongoing Commercial Projects
        </h1>
      </div>
    </section>
  );
}