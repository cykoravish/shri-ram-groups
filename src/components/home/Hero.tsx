export default function Hero() {
  return (
    // 80px band (pt-20) sits behind the fixed header so nav text stays readable
    // and the video's own headline is never hidden under it.
    <section className="w-full bg-ink pt-20">
      {/* Full 16:9 frame, never cropped. The video carries its own headlines and logo,
          so there is no text/tint overlay. Poster (final logo frame) paints instantly. */}
      <div className="relative w-full aspect-video overflow-hidden">
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
      </div>
    </section>
  );
}
