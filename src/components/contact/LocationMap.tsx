export default function LocationMap() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 text-center">
          <p className="font-lato text-xs uppercase tracking-[0.3em] text-[#C4A065]">
            Visit Us
          </p>
          <h2 className="font-playfair text-4xl text-[#1F1F1F] mt-3">
            Find Us on the Map
          </h2>
        </div>

        <div className="overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27996.158628642883!2d77.437424!3d28.704007!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf110422b918b%3A0x7fd62f85dd2697f9!2sShri%20Ram%20Heights!5e0!3m2!1sen!2sin!4v1784123872624!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
