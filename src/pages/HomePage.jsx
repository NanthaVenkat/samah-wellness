import { useRef } from "react";
import { usePageEffects } from "../hooks/usePageEffects";

// Common
import PageHero from "../components/Common/PageHero";

// Sections
import AboutSection from "../components/Home/AboutSection";
import PhilosophySection from "../components/Home/PhilosophySection";
import PillarsSection from "../components/Home/PillarsSection";
import WhatsNewSection from "../components/Home/WhatsNewSection";
import EventsSection from "../components/Home/EventsSection";
import IndulgeSection from "../components/Home/IndulgeSection";
import DifferenceSection from "../components/Home/DifferenceSection";
import ComparisonSection from "../components/Home/ComparisonSection";
import FounderSection from "../components/Home/FounderSection";
import CommunitySection from "../components/Home/CommunitySection";

export default function HomePage() {
  const scope = useRef(null);
  usePageEffects(scope);

  return (
    <div ref={scope} className="page-root">
      <PageHero
        title="A softer way back to yourself."
        body="Samah is a holistic wellness house for those seeking movement, recovery, emotional steadiness, and belonging in one deeply considered space."
        cta="Book a 15-minute call"
        image="url('src/assets/images/hero_banner.webp')"
      />
      <AboutSection />
      <PhilosophySection />
      <PillarsSection />
      <WhatsNewSection />
      <EventsSection />
      <IndulgeSection />
      <DifferenceSection />
      <ComparisonSection />
      <FounderSection />
      <CommunitySection />
    </div>
  );
}
