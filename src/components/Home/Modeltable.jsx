import { Check, ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Navigation, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import BubbleButton from "../BubbleButton";

const tableDatas = [
  {
    aspect: "Holistic Approach (Mind, Body, Energy, Soul)",
    samah: true,
    treditionalCare: "",
  },
  {
    aspect: "Integrated Wellness (All modalities in one space)",
    samah: true,
    treditionalCare: "",
  },
  {
    aspect: "Personalised Journeys",
    samah: true,
    treditionalCare: "",
  },
  {
    aspect: "Focus on Root Cause (not just symptoms)",
    samah: true,
    treditionalCare: "Sometimes",
  },
  {
    aspect: "Combination of Multiple Modalities",
    samah: true,
    treditionalCare: "",
  },
  {
    aspect: "Preventive + Restorative Care",
    samah: true,
    treditionalCare: "Sometimes",
  },
];

const founderSlider = [
  {
    image: "src/assets/images/founded.png",
    title: "From our Founder",
    phara:
      "Born from lived experiences,<br/> Samah is a space we once searched for— and chose to create.",
    link: "/about",
  },
  {
    image: "src/assets/images/founded.png",
    title: "From our Founder",
    phara:
      "Born from lived experiences,<br/> Samah is a space we once searched for— and chose to create.",
    link: "/about",
  },
];

const quoteSlider = [
  {
    quote: "For the first time, my body feels supported instead of pushed.",
    name: "Sophia Loren",
    location: "Coimbatore",
  },
  {
    quote: "For the Second time, my body feels supported instead of pushed.",
    name: "Nista Srinivasan",
    location: "Coimbatore",
  },
];

export default function ModelTable() {
  return (
    <>
      <section className="py-20">
        <div className="container text-center mx-auto px-4">
          <h2 className="text-title text-[#8A8341]">why samah</h2>
          <h1 className="text-title-xl text-[#68320A] max-w-[560px] mx-auto">
            A different model of care
          </h1>
          <p className="text-[#3A391B] text-[clamp(0.85rem,0.98rem+0.2vw,1.125rem)] font-medium font-montserrat">
            See how Samah compares to traditional wellness centres.
          </p>

          <div class="mt-8 overflow-auto">
            <table className="model-table relative font-montserrat w-full text-lg font-medium">
              <thead className="z-[2] relative font-albert text-[#1F1D1D]">
                <tr className="">
                  <th className="p-5">Aspect</th>
                  <th className="p-5">Samah</th>
                  <th className="p-5">Traditional Care</th>
                </tr>
              </thead>
              <tbody className="z-[2] relative text-[#3A391B]">
                {tableDatas.map((tableData, index) => (
                  <tr key={index} className="relative">
                    <td className="p-5 min-w-2xs w-2/4">{tableData.aspect}</td>
                    <td className="p-5 w-1/4 text-[#1F1D1D]">
                      {tableData.samah ? <Check className="mx-auto" /> : ""}
                    </td>
                    <td className="p-5 w-1/4">{tableData.treditionalCare}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div class="container mx-auto">
          <Swiper
            modules={[Navigation, EffectFade]}
            navigation={true}
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            className="founder-slider w-full"
          >
            {founderSlider.map((founderSlide, index) => (
              <SwiperSlide className="w-full">
                <div
                  key={index}
                  class="bg-[#D5CFBA] rounded-xl group overflow-hidden"
                >
                  <div class="grid lg:grid-cols-2">
                    <div className="p-18 overflow-hidden">
                      <img
                        src={founderSlide.image}
                        alt=""
                        className="rounded-xl w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                    </div>
                    <div class="flex flex-col gap-8 p-18 font-montserrat">
                      <div>
                        <h1 className="text-title-xl !text-left text-[#68320A]">
                          From our Founder
                        </h1>
                        <p
                          className="text-[#3A391B] text-[clamp(1.3rem,0.98rem+0.2vw,1.125rem)] font-medium"
                          dangerouslySetInnerHTML={{
                            __html: founderSlide.phara,
                          }}
                        />
                      </div>

                      <BubbleButton
                        to={founderSlide.link}
                        className="flex items-center gap-3 text-[clamp(1.3rem,0.98rem+0.2vw,1.125rem)] rounded-full bg-[#68320A] text-white px-5 py-2 w-max mt-auto"
                      >
                        Begin Your Journey <ArrowRight width={20} />
                      </BubbleButton>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="py-20 px-4 w-full overflow-hidden">
        <div class="container mx-auto">
          <div class="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="flex items-center text-[#3A391B] gap-3 mb-12 font-medium font-montserrat text-2xl">
                <img
                  src="src/assets/images/reviwers.png"
                  alt=""
                  className="h-[50px]"
                />
                Clients Feedback
              </p>
              <h1 className="text-title-xl !text-left text-[#68320A]">
                What Our Community Is Experiencing
              </h1>
              <p className="text-[#3A391B] text-[clamp(0.85rem,0.98rem+0.2vw,1.125rem)] font-medium font-montserrat">
                Samah was envisioned as a space where movement, recovery,
                emotional wellbeing and community could exist under one
                thoughtful roof.
              </p>
            </div>

            <div className="min-w-0">
              <Swiper
                modules={[Navigation, EffectFade]}
                navigation={true}
                spaceBetween={30}
                slidesPerView={1}
                effect="fade"
                fadeEffect={{
                  crossFade: true,
                }}
                className="review-slider bg-[#CAD8D8] rounded-xl"
              >
                {quoteSlider.map((slide, index) => (
                  <SwiperSlide key={index} className="p-8 text-center">
                    <div className="max-w-[520px] mx-auto my-12">
                      <Quote className="text-red mx-auto mb-8" />
                      <h4 className="text-xl md:text-3xl mb-8 font-light">
                        “{slide.quote}”
                      </h4>

                      <div className="text-center space-y-1.5">
                        <p className="text-2xl md:text-3xl">{slide.name}</p>
                        <p className="font-montserrat font-medium opacity-80">
                          {slide.location}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
