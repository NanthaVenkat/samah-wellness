import { ArrowRight } from "lucide-react";
import MotionReveal from "../Common/MotionReveal";
import Button from "../Button";

const customize = [
  "Additional movement sessions",
  "Therapy sessions",
  "Rejuvenation treatments",
  "Coaching consultations",
  "Circle events",
];

export default function CustomizeMembership() {
  return (
    <section className="band bg-paper">
      <div className="shell grid gap-12 md:grid-cols-[1.2fr_1fr] items-center">
        <MotionReveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="font-outfit text-[clamp(2.4rem,4.5vw,4.5rem)] leading-[1.04] text-[#7b4316] balance">Customize your membership</h2>
            <p className="font-sans text-muted leading-relaxed max-w-md">You can personalize your membership with thoughtful add-ons and focused support.</p>
          </div>
          <div className="grid gap-4">
            {customize.map((item, index) => (
              <div key={item} className="flex gap-4 items-baseline group">
                <span className="font-sans text-[0.75rem] text-olive-soft opacity-60">/{String(index + 1).padStart(2, "0")}</span>
                <p className="font-sans text-lg text-[#7b4316] group-hover:translate-x-1 transition-transform">{item}</p>
              </div>
            ))}
          </div>
        </MotionReveal>

        <MotionReveal className="card-soft grid content-center gap-6 p-[clamp(1.5rem,4vw,4rem)] bg-olive text-brand-white shadow-brand-hover">
          <h3 className="font-outfit text-[clamp(1.8rem,3vw,2.5rem)] leading-tight m-0 balance">Let us know the details</h3>
          <div className="grid gap-3.5">
            {["Your Name", "Phone Number", "Email", "Membership requirements"].map(field => (
              <input 
                key={field}
                placeholder={field} 
                className="w-full px-4 py-3.5 rounded-xl border border-[rgba(255,252,244,0.15)] bg-[rgba(255,252,244,0.05)] text-brand-white placeholder:text-[rgba(255,252,244,0.4)] focus:ring-1 focus:ring-olive-soft outline-none transition-all" 
              />
            ))}
          </div>
          <Button 
            text="Submit"
            iconSuffix={ArrowRight}
            className="bg-brand-white text-olive border-brand-white hover:bg-brand-white/90"
            rounded
            fullWidth
          />
        </MotionReveal>
      </div>
    </section>
  );
}
