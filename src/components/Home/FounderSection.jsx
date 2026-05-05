import { ArrowRight } from "lucide-react";
import MotionReveal from "../Common/MotionReveal";
import Button from "../Button";

export default function FounderSection() {
  return (
    <section className="band bg-bg-soft" id="stories">
      <div className="shell grid md:grid-cols-[1.1fr_1fr] items-center gap-0 overflow-hidden card-soft p-0 border-none shadow-brand-hover">
        <MotionReveal className="relative min-h-[30rem] overflow-hidden">
          <div className="parallax absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521805103424-d8f8430e893e?auto=format&fit=crop&w=1200&q=80')" }} />
        </MotionReveal>
        <MotionReveal className="flex flex-col gap-6 p-8 md:p-16 lg:p-24 bg-[rgba(255,252,244,0.6)]">
          <h2 className="font-outfit text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.04] text-[#7b4316]">From our founder</h2>
          <p className="font-sans text-lg text-muted leading-relaxed">Born from lived experience, Samah is the kind of space we once searched for and then chose to build.</p>
          <Button 
            text="Begin your journey"
            href="#contact"
            iconSuffix={ArrowRight}
            rounded
            className="mt-4 self-start"
          />
        </MotionReveal>
      </div>
    </section>
  );
}
