import MotionReveal from "../Common/MotionReveal";
import SectionHeading from "../Common/SectionHeading";

const waLines = [
  "When the body feels safe, it restores.",
  "When the mind is clear, it settles.",
  "When energy flows, it lightens.",
  "When the soul is heard, it aligns.",
  "When we feel connected, we belong.",
];

export default function PhilosophySection() {
  return (
    <section className="band bg-bg">
      <div className="shell grid gap-8 md:grid-cols-2 md:grid-rows-[auto_auto] items-center">
        <MotionReveal className="relative overflow-hidden rounded-[1.5rem] aspect-[4/5] md:row-span-2" delay={0.05}>
          <div className="parallax absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80')" }} />
        </MotionReveal>

        <div className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="The Philosophy Of Wa"
            title="Guided by Wa"
            copy="At the heart of Samah lies quiet harmony. The body softens, the mind clears, the energy lifts, and community becomes medicine."
            align="left"
          />

          <MotionReveal className="card-soft p-8 md:p-12 flex flex-col gap-4">
            {waLines.map((line) => (
              <p key={line} className="font-lora italic text-lg text-muted last:mb-0">{line}</p>
            ))}
          </MotionReveal>
        </div>

        <MotionReveal className="relative overflow-hidden rounded-[1.5rem] aspect-square md:w-3/4 md:ml-auto" delay={0.1}>
          <div className="parallax absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80')" }} />
        </MotionReveal>
      </div>
    </section>
  );
}
