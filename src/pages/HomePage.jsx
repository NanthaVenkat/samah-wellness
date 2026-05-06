import HeroSection from "../components/Home/HeroSection";
import HomeAbout from "../components/Home/HomeAbout";
import HomeGuide from "../components/Home/HomeGuide";
import Pillars from "../components/Home/Pillars";
import Workshop from "../components/Home/Workshop";

function HomePage() {
    return (
        <>
            <HeroSection />
            <HomeAbout />
            <HomeGuide />
            <Pillars />
            <Workshop />
        </>
    )
}

export default HomePage;
