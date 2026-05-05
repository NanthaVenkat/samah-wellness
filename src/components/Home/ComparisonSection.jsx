import MotionReveal from "../Common/MotionReveal";
import SectionHeading from "../Common/SectionHeading";

const comparisonRows = [
  { aspect: "Holistic approach across mind, body, energy, and soul", samah: "Included", other: "Rare" },
  { aspect: "Integrated wellness in one space", samah: "Included", other: "Limited" },
  { aspect: "Personalized pathways", samah: "Included", other: "Sometimes" },
  { aspect: "Root-cause focus", samah: "Included", other: "Sometimes" },
  { aspect: "Community and shared healing spaces", samah: "Included", other: "Rare" },
  { aspect: "Lifestyle integration beyond sessions", samah: "Included", other: "Uncommon" },
];

export default function ComparisonSection() {
  return (
    <section className="band bg-bg">
      <div className="shell flex flex-col gap-16">
        <SectionHeading
          eyebrow="Why Samah"
          title="A different model of care"
          copy="See how Samah compares to fragmented wellness experiences and why integration changes the pace of healing."
        />
        <MotionReveal className="card-soft overflow-hidden p-0 border-line">
          <div className="grid grid-cols-[1.5fr_1fr_1.2fr] bg-[rgba(255,252,244,0.4)] border-b border-line font-sans text-[0.65rem] uppercase tracking-widest text-muted">
            <span className="p-6 border-r border-line">Aspect</span>
            <span className="p-6 border-r border-line text-olive font-bold">Samah</span>
            <span className="p-6">Traditional care</span>
          </div>
          {comparisonRows.map((row, index) => (
            <div key={row.aspect} className={`grid grid-cols-[1.5fr_1fr_1.2fr] font-sans text-[0.95rem] ${index !== comparisonRows.length - 1 ? "border-b border-line" : ""}`}>
              <span className="p-6 border-r border-line text-muted leading-snug">{row.aspect}</span>
              <span className="p-6 border-r border-line text-olive font-medium bg-[rgba(153,146,69,0.04)]">{row.samah}</span>
              <span className="p-6 text-[rgba(101,82,61,0.6)] italic">{row.other}</span>
            </div>
          ))}
        </MotionReveal>
      </div>
    </section>
  );
}
