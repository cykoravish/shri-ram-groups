/* Shows a project picture. Cut-out renders (transparent PNG/WebP of the building) sit on a soft
   gradient, anchored to the bottom; regular photos keep the usual cover crop.
   The parent must be `relative` with its own aspect ratio / height and `overflow-hidden`. */
export default function ProjectImage({
  src,
  alt,
  cutout = false,
  className = "",
}: {
  src: string;
  alt: string;
  cutout?: boolean;
  className?: string;
}) {
  if (!cutout) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={`w-full h-full object-cover ${className}`} />;
  }
  return (
    <>
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-tint to-white" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-contain object-bottom ${className}`}
      />
    </>
  );
}
