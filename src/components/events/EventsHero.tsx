"use client";

import { useEffect, useState } from "react";

export default function EventsHero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <section className="relative w-full h-[45vh] md:h-[55vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop"
          alt="Community gathering"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />
        <div className="relative z-10 h-full flex items-end justify-center pb-10 md:pb-12">
          <h1
            className={`font-playfair text-4xl md:text-6xl text-white transition-all duration-700 ease-out motion-reduce:transition-none ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Events
          </h1>
        </div>
      </section>

      <div className="w-full bg-[#C4A065] py-8 md:py-10 text-center px-6">
        <p
          className={`font-lato text-xs md:text-sm tracking-[0.3em] uppercase text-[#1F1F1F]/70 transition-all duration-700 ease-out delay-150 motion-reduce:transition-none ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Your Home, Your Community
        </p>
        <p
          className={`font-playfair text-xl md:text-2xl text-[#1F1F1F] mt-2 transition-all duration-700 ease-out delay-300 motion-reduce:transition-none ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          ShriRam Group, Where Belonging Matters
        </p>
      </div>
    </>
  );
}