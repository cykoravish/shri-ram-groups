"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success";

function FloatingField({
  id,
  label,
  type = "text",
  textarea = false,
}: {
  id: string;
  label: string;
  type?: string;
  textarea?: boolean;
}) {
  const base =
    "peer w-full border border-[#DDDDDD] bg-white px-4 pt-6 pb-2 font-lato text-sm text-[#1F1F1F] outline-none transition-colors focus:border-[#C4A065]";

  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          name={id}
          placeholder=" "
          rows={4}
          required
          className={`${base} resize-none`}
        />
      ) : (
        <input id={id} name={id} type={type} placeholder=" " required className={base} />
      )}
      <label
        htmlFor={id}
        className="absolute left-4 top-4 font-lato text-[#707070] transition-all duration-200 pointer-events-none
          peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
          peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:tracking-[0.15em] peer-focus:uppercase peer-focus:text-[#C4A065]
          top-1.5 text-[10px] tracking-[0.15em] uppercase"
      >
        {label}
      </label>
      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C4A065] transition-all duration-300 peer-focus:w-full" />
    </div>
  );
}

export default function ContactForm() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    // TODO: wire this up to your real submit endpoint
    setTimeout(() => setStatus("success"), 1400);
  }

  return (
    <section ref={ref} className="w-full bg-[#F7F7F7] py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-14 md:gap-16 items-start">
        {/* Left: context copy + framed image */}
        <div
          className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="font-lato text-xs tracking-[0.3em] uppercase text-[#C4A065]">
            Send A Message
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl text-[#1F1F1F] mt-4 mb-6 leading-tight">
            We&apos;d Love to Hear
            <br />
            About Your Plans
          </h2>
          <p className="font-lato text-[#707070] text-sm md:text-base leading-relaxed max-w-sm mb-10">
            Whether it&apos;s a residence, a workspace, or a partnership —
            tell us what you have in mind and our team will reach out
            within one business day.
          </p>

          <div className="relative inline-block">
            <div className="absolute -top-3 -left-3 w-full h-full border-2 border-[#C4A065]" />
            <div className="relative aspect-[4/3] w-64 md:w-72 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop"
                alt="ShriRam Group office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right: form card */}
        <div
          className={`bg-white shadow-xl p-8 md:p-10 transition-all duration-700 ease-out delay-150 motion-reduce:transition-none ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center text-center py-10 animate-[fadeSlideUp_0.5s_ease-out]">
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[#C4A065] text-white mb-5">
                <Check size={24} />
              </span>
              <h3 className="font-playfair text-2xl text-[#1F1F1F] mb-2">Message Sent</h3>
              <p className="font-lato text-sm text-[#707070] max-w-xs">
                Thank you for reaching out. Our team will be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <FloatingField id="name" label="Full Name" />
              <FloatingField id="phone" label="Contact No." type="tel" />
              <FloatingField id="email" label="Email" type="email" />
              <FloatingField id="message" label="Tell us about your requirement" textarea />

              <button
                type="submit"
                disabled={status === "loading"}
                className="group relative w-full overflow-hidden bg-[#1F1F1F] text-white font-lato text-sm uppercase tracking-[0.2em] py-4 flex items-center justify-center gap-3 disabled:cursor-wait"
              >
                <span className="absolute inset-0 bg-[#C4A065] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out motion-reduce:transition-none" />
                <span className="relative flex items-center gap-3">
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending
                    </>
                  ) : (
                    <>
                      Submit Enquiry
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </>
                  )}
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}