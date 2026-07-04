import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-[#F7F7F7] px-6 overflow-hidden">
      {/* Large quiet watermark numeral - consistent with the "25" motif used elsewhere */}
      <span
        aria-hidden="true"
        className="absolute font-lato font-bold text-[14rem] md:text-[22rem] text-[#C4A065]/10 leading-none select-none"
      >
        404
      </span>

      <div className="relative z-10 text-center max-w-lg">
        <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#C4A065]">
          Page Not Found
        </span>
        <h1 className="font-lato font-bold text-3xl md:text-5xl text-[#1F1F1F] mt-4 mb-5 leading-tight">
          This Address Doesn&apos;t Exist
        </h1>
        <p className="font-lato text-[#707070] text-base md:text-lg leading-relaxed mb-10">
          The page you&apos;re looking for may have been moved, renamed, or
          never built. Let&apos;s get you back to solid ground.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="font-lato text-sm uppercase tracking-wide bg-[#C4A065] hover:bg-[#BCA168] text-white px-8 py-3 transition-colors"
          >
            Back To Home
          </Link>
          <Link
            href="/residential"
            className="font-lato text-sm uppercase tracking-wide text-[#1F1F1F] border-b border-[#C4A065] pb-1 hover:text-[#C4A065] transition-colors"
          >
            Explore Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}