import MotionReveal from "./MotionReveal";

export default function SectionHeading({ eyebrow, title, copy, align = "center", light = false }) {
  const isCenter = align === "center";
  
  return (
    <MotionReveal className={`flex flex-col gap-4 ${isCenter ? "items-center text-center" : "items-start text-left"}`}>
      {eyebrow ? (
        <p className={`font-sans text-[0.68rem] uppercase tracking-[0.24em] leading-tight ${light ? "text-olive-soft" : "text-olive"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-outfit text-[clamp(2.2rem,4.4vw,4rem)] leading-[1.04] balance ${light ? "text-brand-white" : "text-[#7b4316]"} ${isCenter ? "max-w-[22ch]" : "max-w-none"}`}>
        {title}
      </h2>
      {copy ? (
        <p className={`font-sans leading-relaxed max-w-[55ch] ${light ? "text-[rgba(255,252,244,0.72)]" : "text-muted"}`}>
          {copy}
        </p>
      ) : null}
    </MotionReveal>
  );
}
