export default function LegalPageHeader({
  title,
  updated,
}: {
  title: string;
  updated: string;
}) {
  return (
    <section className="w-full bg-[#F1EEE9] py-14 md:py-18 text-center px-6">
      <h1 className="font-playfair text-3xl md:text-5xl text-[#1F1F1F]">{title}</h1>
      <span className="block w-16 h-[3px] bg-[#C4A065] mx-auto mt-5 mb-4" />
      <p className="font-lato text-xs uppercase tracking-[0.2em] text-[#707070]">
        Last Updated: {updated}
      </p>
    </section>
  );
}