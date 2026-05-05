import MotionReveal from "../Common/MotionReveal";
import SectionHeading from "../Common/SectionHeading";

const positioning = [
  { kicker: "Not just", title: "another Studio", visual: "url('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80')" },
  { kicker: "Not just", title: "another Spa", visual: "url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80')" },
  { kicker: "Not yet", title: "another Clinic", visual: "url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80')" },
  { kicker: "Nor a", title: "spiritual centre", visual: "url('https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=900&q=80')" },
];

export default function AboutSection() {
  return (
    <section className="band bg-olive text-brand-white" id="about">
      <div className="shell flex flex-col gap-12 md:gap-24">
        <SectionHeading
          eyebrow="What Samah Is"
          title="Wellness, brought back into harmony."
          copy="Not just another studio or spa, but a science-aware ecosystem for movement, restoration, energy, and belonging."
          light
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {positioning.map((item, index) => (
            <MotionReveal key={item.title} delay={index * 0.06} className="card-soft flex items-center justify-between p-6 bg-[rgba(255,252,244,0.08)] border-[rgba(255,252,244,0.12)] text-brand-white group">
              <div>
                <p className="font-sans text-[0.62rem] uppercase tracking-widest text-[rgba(255,252,244,0.55)] leading-tight mb-1">{item.kicker}</p>
                <h3 className="font-outfit text-[clamp(1.1rem,1.3vw,1.35rem)] lowercase">{item.title}</h3>
              </div>
              <div className="w-14 h-14 rounded-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: item.visual }} />
            </MotionReveal>
          ))}
        </div>

        <MotionReveal className="card-soft grid md:grid-cols-[1fr_1.1fr] overflow-hidden p-0 bg-transparent shadow-none border-none hover:translate-y-0">
          <div className="flex flex-col justify-center gap-6 p-8 md:p-12 lg:p-20 bg-olive text-brand-white border border-[rgba(255,252,244,0.12)] rounded-[1.5rem] md:rounded-r-none">
            <p className="font-lora italic text-[clamp(1.5rem,2.8vw,2.4rem)] text-olive-soft">Introducing Samah Wellness House</p>
            <h3 className="font-outfit text-[clamp(2.2rem,4.4vw,4rem)] leading-[1.04] balance">A communal house for holistic wellbeing.</h3>
            <p className="font-sans leading-relaxed text-[rgba(255,252,244,0.8)]">A deeply personalized model of care that helps people feel safe, clear, energized, and connected.</p>
          </div>
          <div className="parallax bg-cover bg-center min-h-[22rem] rounded-[1.5rem] md:rounded-l-none" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1400&q=80')" }} />
        </MotionReveal>
      </div>
    </section>
  );
}
