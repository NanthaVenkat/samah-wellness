import { motion } from "framer-motion";
import { CloudDownload, ChevronLeft, ChevronRight } from "lucide-react";
import MotionReveal from "../Common/MotionReveal";

export default function DimensionSection({ dimension, isLast }) {
  return (
    <section className="band bg-paper">
      <div className="shell flex flex-col gap-12">
        <div className="grid md:grid-cols-[0.8fr_1fr] gap-8 md:gap-16">
          <MotionReveal>
            <h2 className="font-outfit text-[clamp(2.4rem,5vw,4.8rem)] leading-[0.96] text-[#7b4316] balance">{dimension.title}</h2>
          </MotionReveal>
          <MotionReveal delay={0.08} className="flex flex-col gap-4">
            <p className="font-lora italic text-[clamp(1.2rem,2.2vw,1.8rem)] text-olive leading-snug">{dimension.lead}</p>
            <p className="font-sans text-muted leading-relaxed max-w-lg">{dimension.copy}</p>
          </MotionReveal>
        </div>

        <MotionReveal className="flex flex-wrap gap-2.5 pb-4">
          {dimension.categories.map((item, index) => (
            <motion.button
              key={item.name}
              whileHover={{ y: -2 }}
              className={`px-6 py-2.5 rounded-full font-sans text-sm tracking-wide transition-all border ${
                index === 0 
                ? "bg-olive text-brand-white border-olive" 
                : "bg-brand-white text-muted border-line hover:border-olive-soft"
              }`}
            >
              {item.name}
            </motion.button>
          ))}
        </MotionReveal>

        <div className="flex items-center justify-between gap-4 py-6 border-y border-line">
          <a href="#download" className="flex items-center gap-2 font-sans text-[0.85rem] font-semibold text-olive hover:underline">
            <CloudDownload size={18} />
            Download {dimension.downloadLabel} deck
          </a>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:bg-brand-white transition-all" aria-label="Previous"><ChevronLeft size={18} /></button>
            <button className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:bg-brand-white transition-all" aria-label="Next"><ChevronRight size={18} /></button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {dimension.categories.map((item, index) => (
            <MotionReveal key={item.name} delay={index * 0.06} className="card-soft grid grid-cols-[1fr_0.8fr] overflow-hidden p-0 h-full min-h-[18rem]">
              <div className="flex flex-col gap-5 p-8">
                <h3 className="font-outfit text-2xl text-[#7b4316]">{item.name}</h3>
                <p className="font-sans text-sm text-muted leading-relaxed">{item.description}</p>
                <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-line">
                  {item.pricing.map((price) => (
                    <div key={price.label} className="flex flex-col gap-0.5">
                      <span className="font-sans text-[0.6rem] uppercase tracking-widest text-olive-soft">{price.label}</span>
                      <strong className="font-outfit text-lg text-olive leading-tight">{price.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
              <div className="parallax bg-cover bg-center" style={{ backgroundImage: item.image }} />
            </MotionReveal>
          ))}
        </div>

        {!isLast ? <div className="w-full h-px bg-line mt-12" /> : null}
      </div>
    </section>
  );
}
