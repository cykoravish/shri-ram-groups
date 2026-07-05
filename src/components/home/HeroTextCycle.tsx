import { useEffect, useState } from "react";

const linePairs = [
  ["WITH A VISION", "FOR THE FUTURE,"],
  ["WE CREATE", "EXCEPTIONAL LIVING SPACES."],
  ["SPACES THAT EMPOWER", "YOU TO LIVE,"],
  ["TO LEARN, TO CONNECT,", "AND TO THRIVE."],
];

const animationVariants = [
  { hidden: "opacity-0 translate-y-4", visible: "opacity-100 translate-y-0" },
  { hidden: "opacity-0 scale-95", visible: "opacity-100 scale-100" },
  { hidden: "opacity-0 -translate-x-8", visible: "opacity-100 translate-x-0" },
  { hidden: "opacity-0 blur-sm", visible: "opacity-100 blur-none" },
];

export default function HeroTextCycle() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const showDuration = 4000;
    const fadeDuration = 700;

    const fadeOutTimer = setTimeout(() => {
      setVisible(false);
      const nextTimer = setTimeout(() => {
        setIndex((prev) => (prev + 1) % linePairs.length);
        setVisible(true);
      }, fadeDuration);
      return () => clearTimeout(nextTimer);
    }, showDuration);

    return () => clearTimeout(fadeOutTimer);
  }, [index]);

  const variant = animationVariants[index % animationVariants.length];

  return (
    <div className="absolute top-10 md:top-14 left-1/2 -translate-x-1/2 z-10 text-center px-4 max-w-md md:max-w-xl lg:max-w-2xl">
      <p
        className={`font-playfair font-normal text-xl md:text-2xl lg:text-3xl tracking-wider text-white leading-tight transition-all duration-700 ease-in-out ${
          visible ? variant.visible : variant.hidden
        }`}
      >
        {linePairs[index][0]}
      </p>
      <p
        className={`font-playfair font-bold text-xl md:text-2xl lg:text-3xl tracking-wider text-white leading-tight transition-all duration-700 ease-in-out ${
          visible ? variant.visible : variant.hidden
        }`}
      >
        {linePairs[index][1]}
      </p>
    </div>
  );
}