import { ArrowRight } from "lucide-react";
import MotionReveal from "../Common/MotionReveal";
import Button from "../Button";

const whatsNew = [
  "Newly opened class batches",
  "Upcoming circles and workshops",
  "Seasonal retreats",
  "Fresh therapeutic offerings",
  "Community gatherings",
  "Limited-seat immersions",
];

export default function WhatsNewSection() {
  return (
    <section className="band bg-bg-soft" id="pathways">
      <div className="shell grid gap-12 md:grid-cols-[1.2fr_1fr] items-center">
        <MotionReveal className="card-soft flex flex-col gap-8 p-8 md:p-16 md:order-1">
          <div className="flex flex-col gap-4">
            <h2 className="font-outfit text-[clamp(2.2rem,4.4vw,4rem)] leading-[1.04] text-[#7b4316] balance">A living house is always evolving.</h2>
            <p className="font-sans text-muted leading-relaxed">Discover what is unfolding next at Samah, from seasonal retreats to fresh workshops and new therapeutic offerings.</p>
          </div>
          <div className="grid gap-4">
            {whatsNew.map((item, index) => (
              <div key={item} className="flex gap-4 items-baseline group">
                <span className="font-sans text-[0.75rem] text-olive-soft opacity-60">/{String(index + 1).padStart(2, "0")}</span>
                <p className="font-sans text-lg text-[#7b4316] group-hover:translate-x-1 transition-transform">{item}</p>
              </div>
            ))}
          </div>
          <Button 
            text="Explore what's new"
            href="#events"
            iconSuffix={ArrowRight}
            secondary
            rounded
            className="mt-4 self-start"
          />
        </MotionReveal>
        <MotionReveal className="relative overflow-hidden rounded-[2rem] aspect-[4/5] md:aspect-auto md:h-full min-h-[30rem]">
          <div className="parallax absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80')" }} />
        </MotionReveal>
      </div>
    </section>
  );
}
