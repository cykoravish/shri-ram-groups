// Landscape screens: video starts at the very top behind the header and fills one screen
// (extra height is trimmed by object-cover). Portrait screens: full 16:9 frame under a band.
export default function Hero() {
  return (
    <>
    <section className="w-full bg-ink pt-20 md:landscape:pt-0">
      <div className="relative w-full aspect-video overflow-hidden md:landscape:aspect-auto md:landscape:h-[100dvh]">
        <video
          className="absolute inset-0 w-full h-full object-cover object-[50%_20%]"
          src="/videos/hero.mp4"
          poster="/images/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="ShriRam Realty - Gateway to Prosperity"
        />
      </div>
    </section>

    {/* Brand tagline directly under the hero video */}
    <section className="w-full bg-white py-8 md:py-12 text-center">
      <div className="mx-auto flex max-w-3xl items-center justify-center gap-4 md:gap-8 px-6">
        <span aria-hidden className="h-px flex-1 max-w-[4rem] md:max-w-[9rem] bg-brand/40" />
        <p className="font-playfair text-2xl sm:text-3xl md:text-4xl tracking-wide text-ink">
          Gateway to <span className="text-brand">Prosperity</span>
        </p>
        <span aria-hidden className="h-px flex-1 max-w-[4rem] md:max-w-[9rem] bg-brand/40" />
      </div>
    </section>
    </>
  );
}
