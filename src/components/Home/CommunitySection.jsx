import MotionReveal from "../Common/MotionReveal";

const communityCards = [
  { title: "Stories of recovery", copy: "Real voices from those rediscovering rest and resilience.", image: "url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80')" },
  { title: "Gentle leadership", copy: "Practitioners who guide with warmth, clarity, and depth.", image: "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80')" },
  { title: "Slow rituals", copy: "Practices that make wellbeing feel livable and grounded.", image: "url('https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80')" },
  { title: "Shared joy", copy: "Community moments that remind us healing does not happen alone.", image: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80')" },
];

const testimonial = {
  quote: "For the first time, my body feels supported instead of pushed.",
  name: "Sophia Loren",
  city: "Coimbatore",
};

export default function CommunitySection() {
  return (
    <section className="band bg-bg-soft">
      <div className="shell grid gap-12 md:grid-cols-2 items-center mb-16 md:mb-24" id="community">
        <MotionReveal className="flex flex-col gap-6">
          <p className="font-sans text-[0.68rem] uppercase tracking-[0.24em] text-olive leading-tight">Clients Feedback</p>
          <h2 className="font-outfit text-[clamp(2.2rem,4.4vw,4rem)] leading-[1.04] text-[#7b4316] balance">What our community is experiencing</h2>
          <p className="font-sans text-muted leading-relaxed max-w-md">Movement, recovery, emotional wellbeing, and community living under one thoughtful roof.</p>
        </MotionReveal>

        <MotionReveal className="card-soft relative p-8 md:p-16 flex flex-col gap-6 bg-paper overflow-hidden">
          <div className="absolute top-4 left-4 text-[8rem] font-lora text-[rgba(153,146,69,0.15)] leading-none select-none">“</div>
          <p className="font-lora italic text-[clamp(1.25rem,2.2vw,1.8rem)] text-olive relative z-10 leading-snug">
            {testimonial.quote}
          </p>
          <div className="flex flex-col gap-0.5 mt-auto">
            <h3 className="font-outfit text-xl text-[#7b4316]">{testimonial.name}</h3>
            <span className="font-sans text-sm text-olive-soft tracking-wider uppercase">{testimonial.city}</span>
          </div>
        </MotionReveal>
      </div>

      <div className="shell grid gap-6 grid-cols-2 lg:grid-cols-4">
        {communityCards.map((card, index) => (
          <MotionReveal key={card.title} delay={index * 0.06} className="group flex flex-col gap-5">
            <div className="relative overflow-hidden rounded-[1.25rem] aspect-square">
              <div className="parallax absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-[1.5s]" style={{ backgroundImage: card.image }} />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-outfit text-xl text-[#7b4316]">{card.title}</h3>
              <p className="font-sans text-sm text-muted leading-relaxed">{card.copy}</p>
            </div>
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}
