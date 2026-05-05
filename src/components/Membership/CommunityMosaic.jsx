import MotionReveal from "../Common/MotionReveal";
import SectionHeading from "../Common/SectionHeading";

const audiences = [
  { symbol: "S", title: "Professionals dealing with stress" },
  { symbol: "W", title: "Individuals seeking holistic wellness" },
  { symbol: "R", title: "People recovering from burnout" },
  { symbol: "M", title: "Movement enthusiasts" },
  { symbol: "I", title: "Mindfulness seekers" },
  { symbol: "C", title: "Community-oriented individuals" },
];

const community = [
  { size: "small", title: "Wellbeing grows stronger together", image: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80')" },
  { size: "small", title: "Meaningful circles", image: "url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80')" },
  { size: "small", title: "Shared rituals", image: "url('https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80')" },
  { size: "small", title: "Workshops & retreats", image: "url('https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=900&q=80')" },
  { size: "small", title: "Nourishing food experiences", image: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80')" },
  { size: "wide", title: "This is not just a space.", copy: "It is a community you belong to.", image: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80')" },
];

export default function CommunityMosaic() {
  return (
    <section className="band bg-bg">
      <div className="shell flex flex-col gap-24">
        <div className="flex flex-col gap-12">
          <SectionHeading title="Who Samah memberships are for" />
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {audiences.map((audience, index) => (
              <MotionReveal key={audience.title} delay={index * 0.06} className="flex flex-col gap-4 items-center text-center group">
                <div className="w-14 h-14 rounded-full border border-line flex items-center justify-center font-lora text-lg text-olive italic bg-brand-white shadow-sm transition-transform group-hover:scale-110">
                  {audience.symbol}
                </div>
                <h3 className="font-sans text-[0.85rem] text-muted leading-tight balance group-hover:text-olive transition-colors">{audience.title}</h3>
              </MotionReveal>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <SectionHeading title="The Samah community" />
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 auto-rows-[16rem]">
            {community.map((item, index) => (
              <MotionReveal 
                key={item.title} 
                delay={index * 0.05} 
                className={`relative overflow-hidden rounded-[1.5rem] group ${item.size === "wide" ? "md:col-span-2 lg:col-span-2" : ""}`}
              >
                <div className="parallax absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-110" style={{ backgroundImage: item.image }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,12,4,0.7)] to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-brand-white">
                  <h3 className="font-outfit text-xl leading-tight">{item.title}</h3>
                  {item.copy ? <p className="font-sans text-sm text-[rgba(255,252,244,0.7)] mt-2">{item.copy}</p> : null}
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 py-12 border-t border-line md:flex-row">
          <p className="font-lora italic text-[clamp(2.2rem,3.2vw,3rem)] text-olive leading-tight text-center md:text-left">
            Join Samah living today
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:gap-8 font-sans font-bold text-olive">
            <a href="#snapshot" className="hover:underline underline-offset-8">View membership options</a>
            <a href="#download" className="hover:underline underline-offset-8">Download full membership deck</a>
          </div>
        </div>
      </div>
    </section>
  );
}
