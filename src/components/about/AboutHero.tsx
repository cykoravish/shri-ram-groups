"use client";

import { useEffect, useState } from "react";

export default function AboutHero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1600&auto=format&fit=crop"
        alt="City skyline at dusk"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30" />
      <div className="relative z-10 h-full flex items-end justify-center pb-14 md:pb-16">
        <h1
          className={`font-playfair text-4xl md:text-6xl text-white transition-all duration-700 ease-out motion-reduce:transition-none ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          About Us
        </h1>
      </div>
    </section>
  );
}