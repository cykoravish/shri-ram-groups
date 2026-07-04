export default function CtaBand() {
  return (
    <section className="relative w-full bg-[#1F1F1F] py-16 md:py-20 overflow-hidden">
      {/* Quiet diagonal accent - echoes the stats section signature */}
      <div
        className="absolute inset-0 bg-[#C4A065]/10"
        style={{ clipPath: "polygon(0 0, 35% 0, 15% 100%, 0 100%)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-lato font-bold text-3xl md:text-4xl text-white mb-4">
          Planning Your Next Move?
        </h2>
        <p className="font-lato text-white/70 text-base md:text-lg mb-8 max-w-xl mx-auto">
          Talk to our team about current availability, site visits, and
          pricing across our residential and commercial developments.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/contact-us"
            className="font-lato text-sm uppercase tracking-wide bg-[#C4A065] hover:bg-[#BCA168] text-white px-8 py-3 transition-colors"
          >
            Enquire Now
          </a>
          <a
            href="tel:+911234567890"
            className="font-lato text-sm uppercase tracking-wide text-white border border-white/40 hover:border-[#C4A065] hover:text-[#C4A065] px-8 py-3 transition-colors"
          >
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}