import MotionReveal from "./MotionReveal";
import HeroForm from "./HeroForm";

export default function PageHero({ title, body, cta, image }) {
  return (
    <section className="p-0">
      <div className="grid md:grid-cols-[1.25fr_0.95fr] min-h-[calc(100vh-5rem)]">
        <MotionReveal className="relative min-h-[38rem] overflow-hidden group" delay={0.05}>
          <div 
            className="hero-image parallax absolute inset-0 bg-cover bg-center transition-transform duration-[8s] ease-in-out group-hover:scale-110" 
            style={{ backgroundImage: image }} 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(20,12,4,0.05)] to-[rgba(20,12,4,0.72)]" />
          <div className="absolute left-[clamp(1.2rem,4vw,4rem)] right-[clamp(1.2rem,4vw,4rem)] bottom-[clamp(1.8rem,5vw,4rem)] z-10 text-brand-white">
            <h1 className="max-w-[12ch] mb-4 text-[clamp(2.6rem,5vw,5.5rem)] leading-[0.96] font-lora">
              {title}
            </h1>
            <p className="font-sans leading-relaxed max-w-lg">
              {body}
            </p>
          </div>
        </MotionReveal>
        <HeroForm ctaLabel={cta} />
      </div>
    </section>
  );
}
