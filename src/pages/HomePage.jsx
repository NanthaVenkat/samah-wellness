import HeroSection from "../components/Home/HeroSection";
import HomeAbout from "../components/Home/HomeAbout";
import HomeGuide from "../components/Home/HomeGuide";
import Pillars from "../components/Home/Pillars";
import Workshop from "../components/Home/Workshop";
import WhatIsSamah from "../components/Home/WhatSamah";
import ModelTable from "../components/Home/Modeltable";
import FadeIn from "../components/FadeIn";

function HomePage() {
    return (
        <>
            <FadeIn delay={0.1} y={20}>
                <HeroSection />
            </FadeIn>
            <FadeIn delay={0.1} y={30}>
                <HomeAbout />
            </FadeIn>
            <FadeIn delay={0.1} y={30}>
                <HomeGuide />
            </FadeIn>
            <FadeIn delay={0.1} y={30}>
                <Pillars />
            </FadeIn>
            <FadeIn delay={0.1} y={30}>
                <Workshop />
            </FadeIn>
            <FadeIn delay={0.1} y={30}>
                <WhatIsSamah />
            </FadeIn>
            <FadeIn delay={0.1} y={30}>
                <ModelTable />
            </FadeIn>
        </>
    )
}

export default HomePage;
