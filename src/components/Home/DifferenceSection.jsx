import { ArrowRight } from "lucide-react";
import MotionReveal from "../Common/MotionReveal";
import Button from "../Button";

const differencePoints = [
  "Integrated care instead of fragmented appointments",
  "Curated pathways, not generic class bundles",
  "Science-aware and body-led support",
  "Progress you can feel in daily life",
  "Small-group intimacy and genuine belonging",
  "Built for sustainable, long-term change",
];

export default function DifferenceSection() {
  return (
    <section className="band bg-paper">
      <div className="shell grid gap-12 md:grid-cols-[1fr_1.2fr] items-center">
        <MotionReveal className="relative overflow-hidden rounded-[2rem] aspect-[4/5] md:aspect-auto md:h-full min-h-[30rem]">
          <div className="parallax absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?auto=format&fit=crop&w=1200&q=80')" }} />
        </MotionReveal>
        <MotionReveal className="card-soft flex flex-col gap-8 p-8 md:p-16">
          <div className="flex flex-col gap-4">
            <h2 className="font-outfit text-[clamp(2.2rem,4.4vw,4rem)] leading-[1.04] text-[#7b4316] balance">What makes Samah different?</h2>
            <p className="font-lora italic text-[clamp(1.5rem,2.8vw,2.4rem)] text-olive-soft">Progress feels less temporary.</p>
          </div>
          <div className="grid gap-4">
            {differencePoints.map((item, index) => (
              <div key={item} className="flex gap-4 items-baseline group">
                <span className="font-sans text-[0.75rem] text-olive-soft opacity-60">/{String(index + 1).padStart(2, "0")}</span>
                <p className="font-sans text-lg text-[#7b4316] group-hover:translate-x-1 transition-transform">{item}</p>
              </div>
            ))}
          </div>
          <Button 
            text="Book a 15-minute call"
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
