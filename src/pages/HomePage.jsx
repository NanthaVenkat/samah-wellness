import { useRef } from "react";
import HeroSection from "../components/Home/HeroSection";
import HomeAbout from "../components/Home/HomeAbout";
import HomeGuide from "../components/Home/HomeGuide";
import Pillars from "../components/Home/Pillars";
import Workshop from "../components/Home/Workshop";
import WhatIsSamah from "../components/Home/WhatSamah";
import ModelTable from "../components/Home/Modeltable";
import { usePageEffects } from "../hooks/usePageEffects";

function HomePage() {
    const container = useRef(null);
    usePageEffects(container);

    return (
        <div ref={container}>
            <div className="reveal" data-delay="0.1">
                <HeroSection />
            </div>
            <div className="reveal" data-delay="0.1">
                <HomeAbout />
            </div>
            <div className="reveal" data-delay="0.1">
                <HomeGuide />
            </div>
            <div className="reveal" data-delay="0.1">
                <Pillars />
            </div>
            <div className="reveal" data-delay="0.1">
                <Workshop />
            </div>
            <div className="reveal" data-delay="0.1">
                <WhatIsSamah />
            </div>
            <div className="reveal" data-delay="0.1">
                <ModelTable />
            </div>
        </div>
    )
}

export default HomePage;
