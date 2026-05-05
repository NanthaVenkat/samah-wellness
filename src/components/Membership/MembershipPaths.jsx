import MotionReveal from "../Common/MotionReveal";
import SectionHeading from "../Common/SectionHeading";

const memberships = [
  { title: "Full Access", copy: "For those who want complete holistic care across the Samah ecosystem." },
  { title: "Essential Access", copy: "For those exploring a steady, balanced rhythm of wellness." },
  { title: "Body Based", copy: "For movement and physical wellness enthusiasts seeking structure." },
  { title: "Mind Based", copy: "For those prioritizing therapy, meditation, and self-reflection." },
];

const snapshot = {
  columns: ["Membership", "Body", "Mind", "Circles", "Facilities", "Coaching", "Rejuvenation"],
  rows: [
    { name: "Full Access", values: ["8", "2", "2", "5", "2", "2"] },
    { name: "Light Access", values: ["4", "1", "1", "3", "1", "1"] },
    { name: "Body Based", values: ["8", "-", "-", "5", "1", "2"] },
    { name: "Mind Based", values: ["-", "4", "2", "2", "1", "-"] },
  ],
};

export default function MembershipPaths() {
  return (
    <section className="band bg-[#3a2c1d] text-brand-white">
      <div className="shell flex flex-col gap-20">
        <div className="flex flex-col gap-12">
          <SectionHeading
            title="The 4 Samah membership paths"
            copy="Designed to support different wellness journeys while preserving one integrated ecosystem."
            light
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {memberships.map((membership, index) => (
              <MotionReveal key={membership.title} delay={index * 0.08} className="card-soft flex flex-col gap-4 p-8 bg-[rgba(255,252,244,0.08)] border-[rgba(255,252,244,0.12)] text-brand-white min-h-[16rem]">
                <h3 className="font-outfit text-2xl lowercase">{membership.title}</h3>
                <p className="font-sans text-sm text-[rgba(255,252,244,0.7)] leading-relaxed">{membership.copy}</p>
                <a href="#snapshot" className="mt-auto font-sans text-sm font-bold tracking-wider uppercase text-olive-soft hover:text-brand-white transition-colors underline underline-offset-8">View plan</a>
              </MotionReveal>
            ))}
          </div>

          <p className="font-sans text-[0.7rem] uppercase tracking-widest text-[rgba(255,252,244,0.4)] text-center">
            All memberships include discounted access to services.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          <SectionHeading title="Snapshot of memberships" light />

          <MotionReveal className="card-soft overflow-hidden p-0 bg-transparent border-[rgba(255,252,244,0.15)]" id="snapshot">
            <div className="grid grid-cols-[1.5fr_repeat(6,1fr)] bg-[rgba(255,252,244,0.05)] border-b border-[rgba(255,252,244,0.1)] font-sans text-[0.65rem] uppercase tracking-widest text-[rgba(255,252,244,0.5)]">
              {snapshot.columns.map((column) => (
                <span key={column} className="p-6 border-r border-[rgba(255,252,244,0.1)] last:border-r-0 text-center first:text-left">{column}</span>
              ))}
            </div>
            {snapshot.rows.map((row, index) => (
              <div key={row.name} className={`grid grid-cols-[1.5fr_repeat(6,1fr)] font-sans text-[0.95rem] ${index !== snapshot.rows.length - 1 ? "border-b border-[rgba(255,252,244,0.1)]" : ""}`}>
                <span className="p-6 border-r border-[rgba(255,252,244,0.1)] font-outfit text-lg">{row.name}</span>
                {row.values.map((value, vIndex) => (
                  <span key={`${row.name}-${vIndex}`} className="p-6 border-r border-[rgba(255,252,244,0.1)] last:border-r-0 text-center opacity-80">{value}</span>
                ))}
              </div>
            ))}
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
