export default function Hero() {
  return (
    // Landscape screens (laptop/desktop/landscape tablet): video starts at the very top behind the
    // header and fills exactly one screen; extra height is trimmed (mostly from the bottom) by object-cover.
    // Portrait screens (phones/portrait tablets): full 16:9 frame under a band, so nothing important is cut.
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
  );
}
