const usps = [
  {
    title: "Timely Delivery",
    description:
      "25 years of handing over keys on the date we promised — not a day later.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Uncompromising Quality",
    description:
      "Every material, fitting, and finish is chosen to outlast trends and last generations.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Complete Transparency",
    description:
      "Clear pricing, honest timelines, and no surprises — from booking to possession.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "End-to-End Support",
    description:
      "From site visits to after-sales service, our team stays with you well past move-in day.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 13a8 8 0 0116 0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <rect x="2.5" y="13" width="4" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="17.5" y="13" width="4" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#F7F7F7] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-12 md:mb-16">
          <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#C4A065]">
            Why Choose Us
          </span>
          <h2 className="font-lato font-bold text-3xl md:text-5xl text-[#1F1F1F] mt-3">
            Built On Trust, Delivered With Care
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {usps.map((usp) => (
            <div key={usp.title} className="group relative pt-6">
              <span className="absolute top-0 left-0 w-10 h-[2px] bg-[#C4A065] transition-all duration-300 group-hover:w-16" />
              <div className="text-[#C4A065] mb-5">{usp.icon}</div>
              <h3 className="font-lato font-bold text-lg text-[#1F1F1F] mb-2">
                {usp.title}
              </h3>
              <p className="font-lato text-sm text-[#707070] leading-relaxed">
                {usp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}