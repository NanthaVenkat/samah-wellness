import HomePage from "./pages/HomePage.jsx";
import OfferingsPage from "./pages/OfferingsPage.jsx";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "../src/layouts/Header.jsx"
import Footer from "../src/layouts/Footer.jsx"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function App() {
  const smoothWrapper = useRef(null);
  const smoothContent = useRef(null);

  useEffect(() => {
    let smoother = ScrollSmoother.create({
      wrapper: smoothWrapper.current,
      content: smoothContent.current,
      smooth: 1.5,
      effects: true,
    });

    const refreshTimer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 50);

    return () => {
      window.clearTimeout(refreshTimer);
      smoother.kill();
    };
  }, []);


  return (
    <div id="smooth-wrapper" ref={smoothWrapper}>
      <Header />
      <div id="smooth-content" ref={smoothContent}>
        <div className="pt-[88px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/offerings" element={<OfferingsPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}
