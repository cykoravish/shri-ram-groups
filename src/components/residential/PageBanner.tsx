"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface PageBannerProps {
  image: string;
  title: string;
  subtitle?: string;
  /** Image already carries its own headline: no dim overlay, title kept only for screen readers */
  bakedText?: boolean;
  /** Put the title at the bottom so it does not cover the artwork */
  titleAtBottom?: boolean;
  /** Tailwind object-position classes, e.g. "object-[14%_50%] md:object-center" */
  focusClass?: string;
  /** Tailwind height classes for the image area */
  heightClass?: string;
}

export default function PageBanner({
  image,
  title,
  subtitle,
  bakedText = false,
  titleAtBottom = false,
  focusClass = "object-center",
  heightClass = "h-[50vh] md:h-[60vh]",
}: PageBannerProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    // On mobile a band behind the fixed header keeps logo/nav clear of the artwork
    <section className="relative w-full bg-ink pt-20 md:pt-0">
      <div className={`relative w-full overflow-hidden ${heightClass}`}>
        <Image
          src={image}
          alt={title}
          fill
          priority
          className={`object-cover ${focusClass}`}
          sizes="100vw"
        />
        {bakedText ? (
          <h1 className="sr-only">{title}</h1>
        ) : (
          <>
            <div
              className={`absolute inset-0 ${
                titleAtBottom
                  ? "bg-gradient-to-t from-black/65 via-black/10 to-transparent"
                  : "bg-black/50"
              }`}
            />
            <div
              className={`absolute inset-0 z-10 flex flex-col items-center text-center px-6 ${
                titleAtBottom ? "justify-end pb-4 md:pb-14" : "justify-center"
              }`}
            >
              {subtitle && (
                <span
                  className={`font-lato text-xs md:text-sm tracking-[0.4em] uppercase text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.55)] mb-2 md:mb-4 transition-all duration-700 ease-out motion-reduce:transition-none ${
                    show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  {subtitle}
                </span>
              )}
              <h1
                className={`font-playfair text-3xl sm:text-4xl md:text-6xl text-white leading-tight transition-all duration-700 ease-out delay-150 motion-reduce:transition-none ${
                  show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                {title}
              </h1>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
