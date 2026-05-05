import { ArrowRight } from "lucide-react";
import Button from "../Button";

export default function HeroForm({ ctaLabel = "Book a discovery call" }) {
  return (
    <div className="card-soft reveal grid content-center gap-4 p-[clamp(1.5rem,4vw,4rem)] bg-[radial-gradient(circle_at_18%_20%,rgba(228,212,154,0.45),transparent_28%),linear-gradient(180deg,rgba(255,252,244,0.92),rgba(248,244,234,0.95))]">
      <p className="font-roundhand italic text-[clamp(1.6rem,3.5vw,3rem)] text-[rgba(143,130,65,0.95)] m-0 leading-tight">
        Not sure where to begin?
      </p>
      <h2 className="font-outfit text-[clamp(2.2rem,4.4vw,4rem)] leading-[1.04] text-[#7b4316] m-0 balance">
        Start with a gentle conversation.
      </h2>
      <p className="font-sans leading-relaxed text-muted">
        Tell us what your body has been experiencing, and our team will guide you toward the
        right next step.
      </p>
      <div className="grid gap-3.5">
        {["Your Name", "Phone Number", "Email", "What are you seeking support for?"].map(field => (
          <input
            key={field}
            placeholder={field}
            className="w-full px-4 py-3.5 rounded-xl border border-[rgba(72,51,20,0.3)] bg-[rgba(255,252,244,0.65)] focus:ring-1 focus:ring-olive outline-none transition-all"
          />
        ))}
      </div>
      <Button
        text={ctaLabel}
        iconSuffix={ArrowRight}
        rounded
        fullWidth
        className="mt-4"
      />
    </div>
  );
}
