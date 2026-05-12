import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import BubbleButton from "../BubbleButton";
import piller2Image from '/src/assets/images/home-9.png'
import piller1Icon from '/src/assets/images/BodyRejuvenation.svg'
import piller2Icon from '/src/assets/images/MindEmotions.svg'
import piller3Icon from '/src/assets/images/EnergyPrana.svg'
import piller4Icon from '/src/assets/images/SoulSpirit.svg'
import piller5Icon from '/src/assets/images/SocialConnectionCommunity.svg'
import piller1Banner from '/src/assets/images/home-1.png'
import piller2Banner from '/src/assets/images/home-3.png'
import piller3Banner from '/src/assets/images/home-9.png'
import piller4Banner from '/src/assets/images/home-11.png'
import piller5Banner from '/src/assets/images/Memberships.png'

gsap.registerPlugin(ScrollTrigger);

export default function Pillars() {
  const slideDuration = 5000;
  const pinSectionRef = useRef(null);
  const contentRef = useRef(null);
  const triggerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const pillars = [
    {
      banner: piller1Banner,
      icon: piller1Icon,
      title: "Body & Rejuvenation",
      phara: "Return to ease within the body",
    },
    {
      banner: piller2Banner,
      icon: piller2Icon,
      title: "Mind & Emotions",
      phara: "Soften, understand, and clear within",
    },
    {
      banner: piller3Banner,
      icon: piller3Icon,
      title: "Energy & Prana",
      phara: "Restore flow and inner vitality",
    },
    {
      banner: piller4Banner,
      icon: piller4Icon,
      title: "Soul & Spirit",
      phara: "Reconnect with meaning and stillness",
    },
    {
      banner: piller5Banner,
      icon: piller5Icon,
      title: "Social Connection & Community",
      phara: "Feel held, seen, and belong",
    },
  ];

  const evolving = [
    { phara: "Newly opened class batches" },
    { phara: "Upcoming circles and workshops" },
    { phara: "Seasonal retreats" },
    { phara: "New therapeutic offerings" },
    { phara: "Community gatherings" },
    { phara: "Limited‑seat immersions" },
  ];

  // Auto-rotation for mobile/tablet
  useEffect(() => {
    if (isDesktop) return; // Only run on mobile/tablet

    const timeout = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % pillars.length);
    }, slideDuration);

    return () => clearTimeout(timeout);
  }, [activeIndex, pillars.length, isDesktop]);

  // Check viewport size
  useEffect(() => {
    const checkViewport = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Progress widths for desktop version
  const progressWidths = () => {
    if (pillars.length === 1) return [100];

    return pillars.map((_, index) => {
      const segmentSize = 1 / pillars.length;
      const start = index * segmentSize;
      const end = start + segmentSize;

      if (scrollProgress <= start) return 0;
      if (scrollProgress >= end) return 100;

      return ((scrollProgress - start) / segmentSize) * 100;
    });
  };

  // Handle pillar selection for desktop version
  const handlePillarSelect = (index) => {
    const trigger = triggerRef.current;
    if (!trigger) {
      setActiveIndex(index);
      return;
    }

    const targetProgress = pillars.length === 1 ? 0 : index / Math.max(pillars.length - 1, 1);
    const targetScroll = trigger.start + (trigger.end - trigger.start) * targetProgress;

    const smoother = gsap.core.globals().ScrollSmoother?.get();

    if (smoother) {
      smoother.scrollTo(targetScroll, true);
      return;
    }

    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  // Desktop ScrollTrigger animation
  useGSAP(
    () => {
      if (!isDesktop) return;

      // Kill existing trigger if any
      if (triggerRef.current) {
        triggerRef.current.kill();
        triggerRef.current = null;
      }

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        if (!pinSectionRef.current || !contentRef.current) return;

        // Wait for images to load
        setTimeout(() => {
          const trigger = ScrollTrigger.create({
            trigger: pinSectionRef.current,
            start: "top top",
            end: () => `+=${window.innerHeight * Math.max(pillars.length - 1, 1)}`,
            pin: contentRef.current,
            pinSpacing: true,
            scrub: 0.35,
            anticipatePin: 1,
            invalidateOnRefresh: true,

            snap: pillars.length > 1
              ? {
                snapTo: (value) => {
                  const steps = pillars.length - 1;
                  return Math.round(value * steps) / steps;
                },
                duration: 0.2,
                ease: "power1.out",
              }
              : false,

            onUpdate: (self) => {
              const nextIndex = Math.min(
                pillars.length - 1,
                Math.round(self.progress * (pillars.length - 1))
              );
              setScrollProgress(self.progress);
              setActiveIndex(nextIndex);
            },
          });

          triggerRef.current = trigger;
          ScrollTrigger.refresh();
        }, 100);
      });

      const handleResize = () => {
        setTimeout(() => ScrollTrigger.refresh(), 100);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        mm.revert();
        window.removeEventListener("resize", handleResize);
        if (triggerRef.current) {
          triggerRef.current.kill();
          triggerRef.current = null;
        }
      };
    },
    {
      scope: pinSectionRef,
      dependencies: [pillars.length, isDesktop],
      revertOnUpdate: true
    }
  );

  // Force refresh on route changes for desktop
  useEffect(() => {
    if (isDesktop) {
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isDesktop]);

  // Desktop Layout (with ScrollTrigger)
  if (isDesktop) {
    return (
      <>
        <section className="bg-white">
          <div className="px-3 pt-18 text-center">
            <h2 className="text-title text-[#8A8341]">THE 5 SAMAH PILLARS</h2>
            <h1 className="text-title-xl mx-auto text-[#68320A]">
              A Trailblazer in Integrative Wellness
            </h1>
            <p className="mx-auto max-w-[480px] font-montserrat text-[#3A391B] md:text-lg">
              We are reimagining wellbeing not as something to chase, but
              something to return to.
            </p>
          </div>

          <div ref={pinSectionRef} className="mt-12 lg:min-h-[500vh]">
            <div
              ref={contentRef}
              className="flex flex-col bg-white md:flex-row lg:h-screen"
            >
              <div className="relative min-h-[460px] w-full overflow-hidden md:w-1/2 lg:min-h-screen">
                {pillars.map((pillar, index) => (
                  <div
                    key={pillar.title}
                    className={`absolute inset-0 h-[120%] w-full origin-center bg-cover bg-center transition-all duration-500 ease-out ${activeIndex === index
                      ? "scale-[1.08] opacity-100"
                      : "scale-100 opacity-0"
                      }`}
                    style={{
                      backgroundImage: `url(${pillar.banner})`,
                      top: "-10%",
                    }}
                  />
                ))}
              </div>

              <div className="mx-auto flex w-full max-w-3xl flex-col justify-center p-5 font-albert sm:p-8 md:w-1/2 lg:p-18">
                <h2 className="mb-8 text-xl text-[#8A8341] md:text-3xl">
                  Five Pillars, One you at Samah
                </h2>

                <div className="space-y-3 lg:px-3">
                  {pillars.map((pillar, index) => (
                    <button
                      key={pillar.title}
                      type="button"
                      onClick={() => handlePillarSelect(index)}
                      aria-pressed={activeIndex === index}
                      className="group/item flex w-full cursor-pointer items-center gap-3 py-4 text-left text-[#3A391B] transition-all duration-300"
                    >
                      <img
                        src={pillar.icon}
                        alt={pillar.title}
                        className={`mr-3 w-[50px] transition-transform duration-300 ${activeIndex === index ? "scale-105" : "scale-100"
                          }`}
                        loading="eager"
                      />
                      <div className="w-full space-y-1.5">
                        <h1 className="text-xl">{pillar.title}</h1>
                        <p className="font-montserrat text-sm font-medium opacity-80">
                          {pillar.phara}
                        </p>

                        {activeIndex === index && (
                          <div className="mt-3 h-[5px] w-full overflow-hidden rounded-full bg-[#F3EDD9]">
                            <div
                              className="h-full bg-[#68320A] transition-[width] duration-200 ease-out"
                              style={{ width: `${progressWidths()[index]}%` }}
                            />
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#e9e2d3]">
          <div className="flex flex-col md:flex-row">
            <div className="group relative min-h-[460px] w-full overflow-hidden md:order-2 md:w-1/2 lg:min-h-screen">
              <div
                className="parallax absolute -top-[10%] left-0 h-[120%] w-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${piller2Image})` }}
              />
            </div>

            <div className="mx-auto flex w-full max-w-3xl flex-col justify-center p-5 font-albert sm:p-8 md:w-1/2 lg:p-18">
              <h2 className="mb-6 text-xl text-[#68320A] md:text-4xl">
                A living house is always evolving.
              </h2>
              <p className="font-montserrat font-medium text-[#1F1D1D]">
                Discover what&apos;s unfolding fresh experiences, new pathways, and
                evolving journeys.
              </p>
              <div className="mt-8 space-y-4">
                <div className="mb-5 flex flex-col items-start text-[#3A391B]">
                  {evolving.map((evolve, index) => (
                    <p
                      key={index}
                      className="mb-0 flex w-full border-t py-4 font-montserrat font-medium"
                    >
                      <span className="mr-8 inline-block">/0{index + 1}</span>
                      {evolve.phara}
                    </p>
                  ))}
                </div>

                <BubbleButton
                  to="/"
                  btnType="link"
                  className="flex w-full items-center justify-center gap-3 rounded bg-[#8A8341] px-4 py-3 text-center font-montserrat font-medium text-white"
                >
                  Explore what's new <ArrowRight />
                </BubbleButton>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Mobile/Tablet Layout (Original functionality with auto-rotation)
  return (
    <>
      <section className="bg-white">
        <div className="text-center px-3 pt-18">
          <h2 className="text-title text-[#8A8341]">THE 5 SAMAH PILLARS</h2>
          <h1 className="text-title-xl mx-auto text-[#68320A]">
            A Trailblazer in Integrative Wellness
          </h1>
          <p className="text-[#3A391B] font-medium font-montserrat md:text-lg mx-auto max-w-[480px]">
            We are reimagining wellbeing— not as something to chase, but
            something to return to.
          </p>
        </div>

        {/* Five Pillars section - Mobile/Tablet version */}
        <div className="mt-12 flex flex-col md:flex-row lg:h-[80vh]">
          {/* LEFT SIDE: BANNER SLIDESHOW */}
          <div className="w-full md:w-1/2 min-h-[460px] overflow-hidden relative group">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={false}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  scale: activeIndex === index ? 1.08 : 1,
                }}
                transition={{
                  opacity: { duration: 0.7, ease: "easeInOut" },
                  scale: activeIndex === index
                    ? { duration: slideDuration / 1000, ease: "linear" }
                    : { duration: 0.6, ease: "easeInOut" },
                }}
                className="parallax absolute inset-0 w-full h-[120%] bg-center bg-cover origin-center"
                style={{ backgroundImage: `url(${pillar.banner})`, top: '-10%' }}
              />
            ))}
          </div>

          {/* RIGHT SIDE: CONTENT */}
          <div className="w-full md:w-1/2 p-5 sm:p-8 lg:p-18 font-albert flex flex-col justify-center max-w-3xl mx-auto">
            <h2 className="text-xl md:text-3xl mb-8 text-[#8A8341]">
              Five Pillars, One you at Samah
            </h2>

            <div className="space-y-3 lg:px-3">
              {pillars.map((pillar, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  aria-pressed={activeIndex === index}
                  className={`flex w-full items-start gap-3 py-4 text-left text-[#3A391B] transition-all duration-300 cursor-pointer group/item`}
                >
                  <img
                    src={pillar.icon}
                    alt={pillar.title}
                    className={`mr-3 w-[50px] transition-transform duration-300 ${activeIndex === index ? "scale-105" : "scale-100"
                      }`}
                  />
                  <div className="space-y-1.5 w-full">
                    <h1 className="text-xl">{pillar.title}</h1>
                    <p className="font-montserrat font-medium text-sm opacity-80">
                      {pillar.phara}
                    </p>

                    {activeIndex === index && (
                      <div className="mt-3 h-[5px] w-full overflow-hidden rounded-full bg-[#F3EDD9]" aria-hidden={false}>
                        <motion.div
                          key={`progress-${index}-${activeIndex}`}
                          className="h-full origin-left bg-[#68320A]"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: slideDuration / 1000, ease: "linear" }}
                        />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e9e2d3]">
        {/* A Living House */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:order-2 min-h-[460px] overflow-hidden relative group">
            <div
              className="parallax absolute -top-[10%] left-0 w-full h-[120%] bg-center bg-cover transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ backgroundImage: `url(${piller2Image})` }}
            />
          </div>

          <div className="w-full md:w-1/2 max-w-3xl mx-auto p-5 sm:p-8 lg:p-18 font-albert lg:h-[80vh] flex flex-col justify-center">
            <h2 className="text-xl md:text-4xl mb-6 text-[#68320A]">
              A living house is always evolving.
            </h2>
            <p className="text-[#1F1D1D] font-montserrat font-medium">
              Discover what's unfolding— fresh experiences, new pathways, and
              evolving journeys.
            </p>
            <div className="space-y-4 mt-8">
              <div className="flex flex-col mb-5 items-start text-[#3A391B]">
                {evolving.map((evolve, index) => (
                  <p
                    key={index}
                    className="flex font-montserrat font-medium py-4 border-t w-full mb-0"
                  >
                    <span className="inline-block mr-8">/0{index + 1}</span>{" "}
                    {evolve.phara}
                  </p>
                ))}
              </div>

              <BubbleButton
                to="/"
                btnType="link"
                className="flex items-center justify-center font-montserrat font-medium py-3 px-4 gap-3 text-white bg-[#8A8341] w-full text-center rounded"
              >
                Explore what's new <ArrowRight />
              </BubbleButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}