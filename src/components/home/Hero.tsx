export default function Hero() {
  return (
   <section className="relative w-full aspect-video lg:aspect-auto lg:h-[calc(100dvh-80px)] overflow-hidden">
      {/* Poster paints instantly; video swaps in the moment enough has streamed in */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        poster="/images/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      {/* Soft gradient for text legibility - not a hard dark tint */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/30" />
    </section>
  );
}
