import MotionReveal from "../Common/MotionReveal";

const pillars = [
  { symbol: "B", title: "Body & Rejuvenation", copy: "Return to ease within the body through movement, touch, and restorative practices." },
  { symbol: "M", title: "Mind & Emotions", copy: "Cultivate clarity, resilience, and emotional steadiness with guided therapeutic support." },
  { symbol: "E", title: "Energy & Prana", copy: "Restore subtle flow and inner vitality through gentle, regulating modalities." },
  { symbol: "S", title: "Soul & Spirit", copy: "Reconnect with meaning, ritual, stillness, and quiet expansion." },
  { symbol: "C", title: "Community", copy: "Feel seen, held, and nourished through circles, events, and collective care." },
];

export default function PillarsSection() {
  return (
    <section className="band bg-paper">
      <div className="shell grid gap-12 md:grid-cols-[1fr_1.2fr] items-center">
        <MotionReveal className="relative overflow-hidden rounded-[2rem] aspect-[4/5] md:aspect-auto md:h-full min-h-[30rem]">
          <div className="parallax absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=80')" }} />
        </MotionReveal>
        <MotionReveal className="card-soft flex flex-col gap-8 p-8 md:p-16">
          <div className="flex flex-col gap-4">
            <p className="font-sans text-[0.68rem] uppercase tracking-[0.24em] text-olive leading-tight">The 5 Samah Pillars</p>
            <h2 className="font-outfit text-[clamp(2.2rem,4.4vw,4rem)] leading-[1.04] text-[#7b4316] balance">A trailblazer in integrative wellness.</h2>
          </div>
          <div className="flex flex-col gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-line flex items-center justify-center font-lora text-lg text-olive italic bg-brand-white shadow-sm">
                  {pillar.symbol}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-outfit text-xl text-[#7b4316]">{pillar.title}</h3>
                  <p className="font-sans text-muted leading-relaxed">{pillar.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
