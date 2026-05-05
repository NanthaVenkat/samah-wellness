import MotionReveal from "../Common/MotionReveal";
import SectionHeading from "../Common/SectionHeading";

const comparison = {
  left: [
    "Yoga memberships",
    "Gym memberships",
    "Therapy packages",
    "Movement practices",
    "Mind and therapy sessions",
    "Recovery facilities",
    "Health coaching guidance",
    "Rejuvenation therapies",
    "Circles and community experiences",
  ],
  right: [
    "Mind and therapy sessions",
    "Recovery facilities",
    "Health coaching guidance",
    "Rejuvenation therapies",
    "Circles and community experiences",
    "Integrated access across body and mind",
    "Seasonal rituals and wellness gatherings",
    "Everything works together as one ecosystem",
  ],
};

export default function MembershipIntro() {
  return (
    <section className="band bg-bg">
      <div className="shell flex flex-col gap-16">
        <SectionHeading title="What makes Samah memberships different" />
        <MotionReveal className="grid gap-6 md:grid-cols-2 lg:mx-auto lg:max-w-5xl lg:w-full">
          <div className="card-soft flex flex-col gap-5 p-8 md:p-12 border-line bg-[rgba(255,252,244,0.4)]">
            <h3 className="font-outfit text-xl text-muted mb-4 opacity-60">Most wellness studios offer</h3>
            <div className="flex flex-col gap-3">
              {comparison.left.map((item) => (
                <div key={item} className="flex gap-3 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-line" />
                  <p className="font-sans text-[0.95rem] text-muted line-through opacity-50 decoration-olive-soft">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card-soft flex flex-col gap-5 p-8 md:p-12 border-olive bg-[rgba(153,146,69,0.08)] shadow-brand-hover ring-1 ring-olive ring-inset">
            <h3 className="font-outfit text-xl text-olive mb-4">Samah membership includes</h3>
            <div className="flex flex-col gap-3">
              {comparison.right.map((item) => (
                <div key={item} className="flex gap-3 items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-olive-soft transition-transform group-hover:scale-150" />
                  <p className="font-sans text-[1rem] text-olive font-medium">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-auto pt-8 font-lora italic text-olive-soft text-lg border-t border-[rgba(61,64,25,0.1)]">
              Everything works together as one ecosystem.
            </p>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
