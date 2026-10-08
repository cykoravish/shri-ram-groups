import type {SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/** Skyscrapers: sq. ft. delivered */
export function BuildingsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 41h38" />
      <rect x="14" y="7" width="14" height="34" />
      <rect x="28" y="18" width="9" height="23" />
      <rect x="7" y="24" width="7" height="17" />
      <path d="M18 12h6M18 17h6M18 22h6M18 27h6M18 32h6M31 23h3M31 28h3M31 33h3M9.5 29h2M9.5 34h2" />
      <path d="M21 41v-5" />
    </svg>
  );
}

/** Medal with star and ribbons: projects successfully delivered */
export function AwardIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="24" cy="19" r="11.5" />
      <circle cx="24" cy="19" r="8.2" />
      <polygon points="24.00,13.80 25.35,17.14 28.95,17.39 26.19,19.71 27.06,23.21 24.00,21.30 20.94,23.21 21.81,19.71 19.05,17.39 22.65,17.14" />
      <path d="M17.5 29.5 13.5 43l6.2-3.6L23 44l1.2-9" />
      <path d="M30.5 29.5 34.5 43l-6.2-3.6L25 44" />
    </svg>
  );
}

/** Tower crane + building: ongoing projects */
export function CraneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 42h40" />
      <path d="M11 42V9M16 42V9" />
      <path d="M11 14l5 5M16 14l-5 5M11 22l5 5M16 22l-5 5M11 30l5 5M16 30l-5 5" />
      <path d="M5 9h35l-3 -3M9 9V5h5" />
      <path d="M37 9v9" />
      <rect x="33" y="18" width="8" height="3" />
      <rect x="23" y="26" width="15" height="16" />
      <path d="M27 31h3M27 36h3M32 31h3M32 36h3" />
    </svg>
  );
}

/** Group of people: happy customers */
export function PeopleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="24" cy="15" r="5.2" />
      <path d="M13.5 38c0-7 4.5-11 10.5-11s10.5 4 10.5 11" />
      <circle cx="10.5" cy="21" r="3.8" />
      <path d="M3.5 38c0-5.5 2.8-8.6 7-8.6" />
      <circle cx="37.5" cy="21" r="3.8" />
      <path d="M44.5 38c0-5.5-2.8-8.6-7-8.6" />
    </svg>
  );
}
