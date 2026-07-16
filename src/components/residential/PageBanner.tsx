"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface PageBannerProps {
  image: string;
  title: string;
  subtitle?: string;
}

export default function PageBanner({
  image,
  title,
  subtitle,
}: PageBannerProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" />
     <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
        {subtitle && (
          <span
            className={`font-lato text-xs md:text-sm tracking-[0.4em] uppercase text-[#C4A065] mb-4 transition-all duration-700 ease-out motion-reduce:transition-none ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {subtitle}
          </span>
        )}
        <h1
          className={`font-playfair text-4xl md:text-6xl text-white leading-tight transition-all duration-700 ease-out delay-150 motion-reduce:transition-none ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
