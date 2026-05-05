import { useRef } from "react";
import { usePageEffects } from "../hooks/usePageEffects";

// Common
import PageHero from "../components/Common/PageHero";

// Sections
import DimensionSection from "../components/Offerings/DimensionSection";
import OfferingsCTA from "../components/Offerings/OfferingsCTA";

const dimensions = [
  {
    title: "Body & Rejuvenation",
    lead: "Return to your body as a place of strength, ease, and vitality.",
    copy: "From movement to therapeutic touch, this dimension is about reconnecting with your physical self and feeling truly alive again.",
    downloadLabel: "Body",
    categories: [
      {
        name: "Body",
        description: "Movement practices designed to support grounding, stamina, and graceful recovery.",
        image: "url('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80')",
        pricing: [{ label: "Group session", value: "₹499" }, { label: "1-month offline", value: "₹3499" }, { label: "1:1 online", value: "₹750" }],
      },
      {
        name: "Rejuvenation",
        description: "Slow, restorative bodywork that helps the nervous system soften and the body recalibrate.",
        image: "url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80')",
        pricing: [{ label: "Single session", value: "₹2500" }, { label: "3-session pack", value: "₹6900" }, { label: "6-session pack", value: "₹12900" }],
      },
    ],
  },
  {
    title: "Mind & Emotions",
    lead: "Understand your inner world and move through it with clarity and compassion.",
    copy: "Led by thoughtful practitioners, this space supports emotional resilience, mental clarity, and deeper self-awareness.",
    downloadLabel: "Brain Spa",
    categories: [
      {
        name: "Brain Spa",
        description: "A gentle reset for overstimulation, helping the mind settle and the body feel safe again.",
        image: "url('https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80')",
        pricing: [{ label: "1 session", value: "₹1500" }, { label: "3 sessions", value: "₹4200" }, { label: "8 sessions", value: "₹10800" }],
      },
    ],
  },
];

export default function OfferingsPage() {
  const scope = useRef(null);
  usePageEffects(scope);

  return (
    <div ref={scope} className="page-root">
      <PageHero 
        title="Samah experiences. Structured offerings."
        body="Wellbeing is not approached in parts here. Our offerings are designed across five dimensions so you can enter where you are and expand gently from there."
        cta="Book a trial session now"
        image="url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80')"
      />
      {dimensions.map((dimension, index) => (
        <DimensionSection 
          key={dimension.title} 
          dimension={dimension} 
          sectionIndex={index}
          isLast={index === dimensions.length - 1}
        />
      ))}
      <OfferingsCTA />
    </div>
  );
}
