import MotionReveal from "../Common/MotionReveal";
import SectionHeading from "../Common/SectionHeading";

const indulgence = [
  { title: "Structured Offerings", copy: "Consistent practices to ground your everyday.", href: "/offerings", image: "url('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80')" },
  { title: "Memberships", copy: "A holistic rhythm of care across every dimension.", href: "/memberships", image: "url('https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=1200&q=80')" },
  { title: "Pathways", copy: "Guided journeys for specific goals and transformations.", href: "/home#pathways", image: "url('https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1200&q=80')" },
  { title: "Events", copy: "Circles, workshops, retreats, and gatherings for connection.", href: "/home#events", image: "url('https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80')" },
];

export default function IndulgeSection() {
  return (
    <section className="band bg-bg">
      <div className="shell flex flex-col gap-16">
        <SectionHeading
          eyebrow="Four Ways To Indulge At Samah"
          title="Wellbeing can be structured. It can also be gently indulgent."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {indulgence.map((item, index) => (
            <MotionReveal key={item.title} delay={index * 0.06} className="card-soft flex flex-col gap-5 p-6 hover:shadow-brand-hover">
              <div className="relative overflow-hidden rounded-[1rem] aspect-video">
                <div className="parallax absolute inset-0 bg-cover bg-center" style={{ backgroundImage: item.image }} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-outfit text-xl text-[#7b4316]">{item.title}</h3>
                <p className="font-sans text-muted leading-relaxed">{item.copy}</p>
                <a href={item.href} className="inline-block mt-2 font-sans font-semibold text-olive hover:underline">Explore more</a>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
