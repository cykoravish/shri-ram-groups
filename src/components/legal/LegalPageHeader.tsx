export default function LegalPageHeader({
  title,
  updated,
}: {
  title: string;
  updated: string;
}) {
  return (
    <section className="w-full bg-tint py-14 md:py-18 text-center px-6">
      <h1 className="font-playfair text-3xl md:text-5xl text-ink">{title}</h1>
      <span className="block w-16 h-[3px] bg-brand mx-auto mt-5 mb-4" />
      <p className="font-lato text-xs uppercase tracking-[0.2em] text-[#707070]">
        Last Updated: {updated}
      </p>
    </section>
  );
}