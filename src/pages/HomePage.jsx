import HeroSection from "../components/Home/HeroSection";
import HomeAbout from "../components/Home/HomeAbout";
import HomeGuide from "../components/Home/HomeGuide";
import Pillars from "../components/Home/Pillars";
import Workshop from "../components/Home/Workshop";
import WhatIsSamah from "../components/Home/WhatSamah";
import ModelTable from "../components/Home/Modeltable";

function HomePage() {
    return (
        <>
            <HeroSection />
            <HomeAbout />
            <HomeGuide />
            <Pillars />
            <Workshop />
            <WhatIsSamah />
            <ModelTable />
        </>
    )
}

export default HomePage;
