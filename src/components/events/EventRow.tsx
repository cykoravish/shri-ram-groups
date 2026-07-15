"use client";

import { useEffect, useRef, useState } from "react";
import CalendarChip from "./CalendarChip";

interface EventRowProps {
  title: string;
  displayDate: string;
  description: string;
  image: string;
  year: number;
  month: number;
  day: number;
  reverse?: boolean;
}

export default function EventRow({
  title,
  displayDate,
  description,
  image,
  year,
  month,
  day,
  reverse,
}: EventRowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const imageBlock = (
    <div className="relative aspect-[4/3] w-full overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
  );

  const calendarBlock = <CalendarChip year={year} month={month} highlightDay={day} />;

  return (
    <div ref={ref} className="w-full py-10 md:py-14">
      <div
        className={`max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_1.2fr_1fr] gap-8 md:gap-10 items-center transition-all duration-700 ease-out motion-reduce:transition-none ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className={reverse ? "md:order-3" : "md:order-1"}>
          {reverse ? calendarBlock : imageBlock}
        </div>

        <div className="md:order-2 text-center md:text-left">
          <h3 className="font-playfair text-2xl md:text-3xl text-[#C4A065]">{title}</h3>
          <p className="font-lato text-xs uppercase tracking-[0.15em] text-[#707070] mt-2 mb-4">
            {displayDate}
          </p>
          <p className="font-lato text-sm text-[#707070] leading-relaxed max-w-md mx-auto md:mx-0">
            {description}
          </p>
        </div>

        <div className={reverse ? "md:order-1" : "md:order-3"}>
          {reverse ? imageBlock : calendarBlock}
        </div>
      </div>
    </div>
  );
}