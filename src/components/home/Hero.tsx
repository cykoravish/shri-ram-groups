export default function Hero() {
  return (
    <section className="relative w-full aspect-video lg:aspect-auto lg:h-[calc(100dvh-80px-70px)] overflow-hidden bg-[#dfe6ee]">
      {/* The video carries its own headlines and logo, so no text/tint overlay on top.
          Poster (final logo frame) paints instantly; video swaps in as it streams. */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        poster="/images/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="ShriRam Realty - Gateway to Prosperity"
      />
    </section>
  );
}
