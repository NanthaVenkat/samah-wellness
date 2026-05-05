import MotionReveal from "../Common/MotionReveal";
import SectionHeading from "../Common/SectionHeading";

const events = [
  { tag: "Retreat", title: "Sunrise restoration", copy: "Beachside breathwork, slow movement, and reflective rest.", date: "14 Apr, 2026", image: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80')" },
  { tag: "Circle", title: "Evening belonging circle", copy: "Soft conversation and embodied reflection for women in transition.", date: "20 Apr, 2026", image: "url('https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80')" },
  { tag: "Workshop", title: "Hands that heal", copy: "A tactile workshop in nervous system soothing and grounding rituals.", date: "27 Apr, 2026", image: "url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80')" },
  { tag: "Immersion", title: "Quiet reset immersion", copy: "A candlelit evening of restorative yoga, sound, and silence.", date: "2 May, 2026", image: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80')" },
];

export default function EventsSection() {
  return (
    <section className="band bg-[#3a2c1d] text-brand-white" id="events">
      <div className="shell flex flex-col gap-16">
        <SectionHeading
          eyebrow="Workshops & Retreats"
          title="Experiences that help you pause, reflect, and reconnect."
          copy="A rotating set of immersive circles, soulful workshops, and seasonal retreats designed for deep restoration."
          light
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {events.map((event, index) => (
            <MotionReveal key={event.title} delay={index * 0.08} className="group flex flex-col gap-5">
              <div className="relative overflow-hidden rounded-[1.25rem] aspect-[1.1/1]">
                <div className="parallax absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-[1.5s]" style={{ backgroundImage: event.image }} />
              </div>
              <div className="flex flex-col gap-2.5">
                <span className="self-start px-3 py-1 rounded-full border border-[rgba(255,252,244,0.15)] bg-[rgba(255,252,244,0.05)] text-[0.65rem] uppercase tracking-widest">{event.tag}</span>
                <h3 className="font-outfit text-xl leading-snug">{event.title}</h3>
                <p className="font-sans text-sm text-[rgba(255,252,244,0.7)] leading-relaxed">{event.copy}</p>
                <small className="font-sans text-[0.7rem] uppercase tracking-wider text-olive-soft mt-1">{event.date}</small>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
