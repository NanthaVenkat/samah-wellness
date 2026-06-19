import { useRef } from "react";
import HeroSection from "../layouts/HeroSection";
import EventAbout from "../components/Events/EventAbout";
import Workshop from "../components/Events/Workshop";
import Social from "../components/Events/Social";
import { usePageEffects } from "../hooks/usePageEffects";

import HomeHeroBannerImage from "../assets/images/hero_banner.webp"

function HomePage() {
    const container = useRef(null);
    usePageEffects(container);

    return (
        <div ref={container}>
            <div className="reveal" data-delay="0.1">
                <HeroSection
                    bannerImage={HomeHeroBannerImage}
                    subtitle="Not sure where to begin?"
                    title="Start with a gentle conversation."
                    description="Tell us what your body has been experiencing..."
                />
            </div>
            <div className="reveal" data-delay="0.1">
                <Workshop />
            </div>
            <div className="reveal" data-delay="0.1">
                <Social />
            </div>
            <div className="reveal" data-delay="0.1">
                <EventAbout />
            </div>
        </div>
    )
}

export default HomePage;
