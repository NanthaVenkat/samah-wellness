import { Phone } from "lucide-react";

export default function OfferingsCTA() {
  return (
    <section className="band bg-bg border-t border-line">
      <div className="shell flex flex-col items-center justify-between gap-8 md:flex-row">
        <p className="font-lora italic text-[clamp(2.2rem,3.8vw,3.2rem)] text-olive leading-tight text-center md:text-left">
          Join the Samah experiences today
        </p>
        <a 
          href="#contact" 
          className="flex items-center gap-3 font-sans font-bold text-lg text-olive hover:translate-x-1 transition-transform group"
        >
          <div className="w-12 h-12 rounded-full bg-olive text-brand-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
            <Phone size={20} />
          </div>
          Speak to our team
        </a>
      </div>
    </section>
  );
}
