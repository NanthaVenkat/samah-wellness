import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import BubbleButton from "../BubbleButton";

export default function Pillars() {
  const pillars = [
    {
      img: "src/assets/images/BodyRejuvenation.svg",
      title: "Body & Rejuvenation",
      phara: "Return to ease within the body",
    },
    {
      img: "src/assets/images/MindEmotions.svg",
      title: "Mind & Emotions",
      phara: "Soften, understand, and clear within",
    },
    {
      img: "src/assets/images/EnergyPrana.svg",
      title: "Energy & Prana",
      phara: "Restore flow and inner vitality",
    },
    {
      img: "src/assets/images/SoulSpirit.svg",
      title: "Soul & Spirit",
      phara: "Reconnect with meaning and stillness",
    },
    {
      img: "src/assets/images/SocialConnectionCommunity.svg",
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

        <div className="mt-12 flex flex-col md:flex-row lg:h-[80vh]">
          <div className="w-full md:w-1/2 min-h-[460px] overflow-hidden relative group">
            <div className="parallax absolute -top-[10%] left-0 w-full h-[120%] bg-[url('/assets/images/holistic.webp')] bg-center bg-cover transition-transform duration-700 ease-out group-hover:scale-105"></div>
          </div>

          <div className="w-full md:w-1/2 p-5 sm:p-8 lg:p-18 font-albert flex flex-col justify-center">
            <h2 className="text-xl md:text-3xl mb-8 text-[#8A8341]">
              Five Pillars, One you at Samah
            </h2>
            <div className="space-y-6 lg:px-5">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-[#3A391B]"
                >
                  <img
                    src={pillar.img}
                    alt={pillar.title}
                    className="w-[40px] mr-3"
                  />
                  <div className="space-y-1.5">
                    <h1 className="text-xl">{pillar.title}</h1>
                    <p className="font-montserrat font-medium">
                      {pillar.phara}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e9e2d3]">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:order-2 min-h-[460px] overflow-hidden relative group">
            <div className="parallax absolute -top-[10%] left-0 w-full h-[120%] bg-[url('/assets/images/holistic.webp')] bg-center bg-cover transition-transform duration-700 ease-out group-hover:scale-105"></div>
          </div>

          <div className="w-full md:w-1/2 max-w-3xl mx-auto p-5 sm:p-8 lg:p-18 font-albert lg:h-[80vh] flex flex-col justify-center">
            <h2 className="text-xl md:text-4xl mb-6 text-[#68320A]">
              A living house is always evolving.
            </h2>
            <p className="text-[#1F1D1D] font-montserrat font-medium">
              Discover what’s unfolding— fresh experiences, new pathways, and
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
                to="#"
                className="flex items-center justify-center font-montserrat font-medium py-2 px-4 gap-3 text-white bg-[#8A8341] w-full text-center rounded"
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
