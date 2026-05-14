import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Check, ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Navigation, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import BubbleButton from "../BubbleButton";
import reviwersImg from "/src/assets/images/reviwers.png";
import foundImage from "/src/assets/images/founded.png";
import workshopImg4 from '/src/assets/images/home-4.png';

import revealitem1 from "/src/assets/images/founded.png";
import revealitem2 from "/src/assets/images/hero_banner.webp";
import revealitem3 from "/src/assets/images/home-4.png";
import revealitem4 from "/src/assets/images/home-5.png";
import revealitem5 from "/src/assets/images/home-6.png";
import revealitem6 from "/src/assets/images/home-7.png";
import revealitem7 from "/src/assets/images/home-8.png";
import revealitem8 from "/src/assets/images/home-9.png";
import revealitem9 from "/src/assets/images/home-10.png";
import revealitem10 from "/src/assets/images/home-11.png";
import revealitem11 from "/src/assets/images/holistic.webp";

const tableDatas = [
  {
    aspect: "Holistic Approach (Mind, Body, Energy, Soul)",
    samah: true,
    treditionalCare: "",
    revealItem: revealitem1
  },
  {
    aspect: "Integrated Wellness (All modalities in one space)",
    samah: true,
    treditionalCare: "",
    revealItem: revealitem2
  },
  {
    aspect: "Personalised Journeys",
    samah: true,
    treditionalCare: "",
    revealItem: revealitem3
  },
  {
    aspect: "Focus on Root Cause (not just symptoms)",
    samah: true,
    treditionalCare: "Sometimes",
    revealItem: revealitem4
  },
  {
    aspect: "Combination of Multiple Modalities",
    samah: true,
    treditionalCare: "",
    revealItem: revealitem5
  },
  {
    aspect: "Preventive + Restorative Care",
    samah: true,
    treditionalCare: "Sometimes",
    revealItem: revealitem6
  },
  {
    aspect: "Emotional & Mental Wellbeing Integration",
    samah: true,
    treditionalCare: "Sometimes",
    revealItem: revealitem7
  },
  {
    aspect: "Community & Shared Healing Spaces",
    samah: true,
    treditionalCare: "",
    revealItem: revealitem8
  },
  {
    aspect: "Structured Pathways for Transformation",
    samah: true,
    treditionalCare: "",
    revealItem: revealitem9
  },
  {
    aspect: "Lifestyle Integration (beyond sessions)",
    samah: true,
    treditionalCare: "",
    revealItem: revealitem10
  },
  {
    aspect: "Mindful, Intentional Experiences",
    samah: true,
    treditionalCare: "",
    revealItem: revealitem11
  },
];

const founderSlider = [
  {
    image: foundImage,
    title: "From our Founder",
    phara: "Born from lived experiences,<br/> Samah is a space we once searched for— and chose to create.",
    link: "/about",
  },
  {
    image: workshopImg4,
    title: "From our Founder",
    phara: "Born from lived experiences,<br/> Samah is a space we once searched for— and chose to create.",
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
  {
    quote: "For the third time, my body feels supported instead of pushed.",
    name: "Shruti Parthasarathy",
    location: "Coimbatore",
  },
];

export default function ModelTable() {
  const tableRef = useRef(null);
  
  // GSAP Reveal Effect Hook
  useEffect(() => {
    // Get all table rows
    const rows = document.querySelectorAll('.reveal-row');
    let activeAnimations = new Map(); // Store animation frames per row
    
    rows.forEach((row) => {
      const revealBox = row.querySelector('.reveal-box');
      const revealWrapper = row.querySelector('.reveal-box-wrr');
      
      if (!revealBox || !revealWrapper) return;
      
      let currentMouseX = 0;
      let currentMouseY = 0;
      let targetX = 0;
      let targetY = 0;
      let animationFrame = null;
      
      // Set initial state
      gsap.set(revealBox, {
        x: -100,
        y: -100,
        opacity: 0,
        scale: 0.8,
        rotationX: -15,
        rotationY: -15,
        transformOrigin: 'center center'
      });
      
      // Mouse move handler for this row
      const onMouseMove = (e) => {
        const rect = row.getBoundingClientRect();
        
        // Calculate position relative to the row
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        // Update target position
        targetX = mouseX;
        targetY = mouseY;
        
        // Show the box
        if (gsap.getProperty(revealBox, 'opacity') === 0) {
          gsap.to(revealBox, {
            opacity: 1,
            scale: 1,
            rotationX: 0,
            rotationY: 0,
            duration: 0.3,
            ease: 'back.out(0.3)'
          });
        }
      };
      
      // Mouse enter handler
      const onMouseEnter = () => {
        // Start smooth following animation
        if (animationFrame) cancelAnimationFrame(animationFrame);
        
        const followMouse = () => {
          // Smooth easing
          currentMouseX += (targetX - currentMouseX) * 0.15;
          currentMouseY += (targetY - currentMouseY) * 0.15;
          
          gsap.set(revealBox, {
            x: currentMouseX + 15,
            y: currentMouseY + 15
          });
          
          animationFrame = requestAnimationFrame(followMouse);
        };
        
        followMouse();
        activeAnimations.set(row, animationFrame);
      };
      
      // Mouse leave handler
      const onMouseLeave = () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
          animationFrame = null;
          activeAnimations.delete(row);
        }
        
        gsap.to(revealBox, {
          opacity: 0,
          scale: 0.8,
          rotationX: -15,
          rotationY: -15,
          duration: 0.25,
          ease: 'back.in(0.5)',
          onComplete: () => {
            currentMouseX = 0;
            currentMouseY = 0;
            targetX = 0;
            targetY = 0;
          }
        });
      };
      
      // Add event listeners
      row.addEventListener('mousemove', onMouseMove);
      row.addEventListener('mouseenter', onMouseEnter);
      row.addEventListener('mouseleave', onMouseLeave);
      
      // Store for cleanup
      row._listeners = { onMouseMove, onMouseEnter, onMouseLeave };
    });
    
    // Cleanup
    return () => {
      rows.forEach((row) => {
        if (row._listeners) {
          row.removeEventListener('mousemove', row._listeners.onMouseMove);
          row.removeEventListener('mouseenter', row._listeners.onMouseEnter);
          row.removeEventListener('mouseleave', row._listeners.onMouseLeave);
        }
      });
      
      activeAnimations.forEach((animationFrame) => {
        if (animationFrame) cancelAnimationFrame(animationFrame);
      });
    };
  }, []); // Empty dependency array since tableDatas is static
  
  return (
    <>
      <section className="py-20 ">
        <div className="container overflow-x-hidden text-center mx-auto px-4">
          <h2 className="text-title text-[#8A8341]">why samah</h2>
          <h1 className="text-title-xl text-[#68320A] max-w-[560px] mx-auto">
            A different model of care
          </h1>
          <p className="text-[#3A391B] text-[clamp(0.85rem,0.98rem+0.2vw,1.125rem)] font-medium font-montserrat">
            See how Samah compares to traditional wellness centres.
          </p>
          
          <div className="mt-8 overflow-auto" ref={tableRef}>
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
                  <tr
                    key={index}
                    className="reveal-row relative cursor-pointer hover:bg-gray-50 transition-colors duration-300"
                  >
                    <td className="reveal-box-wrr p-8 min-w-2xs w-2/4 relative">
                      {tableData.aspect}
                      <div className="reveal-box fixed pointer-events-none z-[9999]">
                        {tableData.revealItem && (
                          <img
                            src={tableData.revealItem}
                            alt=""
                            className="w-48 h-48 object-cover rounded-lg shadow-2xl border-2 border-white"
                          />
                        )}
                      </div>
                    </td>
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
        <div className="container mx-auto">
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
              <SwiperSlide key={index} className="w-full">
                <div className="bg-[#D5CFBA] rounded-xl group overflow-hidden">
                  <div className="grid lg:grid-cols-2">
                    <div className="p-5 lg:p-18 overflow-hidden">
                      <img
                        src={founderSlide.image}
                        alt=""
                        className="rounded-xl w-full h-full max-h-[340px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col gap-8 p-5 lg:p-18 font-montserrat">
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
                        btnType="link"
                        className="flex items-center gap-3 text-[clamp(1.3rem,0.98rem+0.2vw,1.125rem)] rounded-full bg-[#68320A] text-white w-max mt-auto"
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
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="flex items-center text-[#3A391B] gap-3 mb-12 font-medium font-montserrat text-2xl">
                <img
                  src={reviwersImg}
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
                      <Quote fill="#212121" size={45} stroke="0" className="text-red mx-auto mb-8 rotate-180" />
                      <h4 className="text-xl md:text-[28px] mb-8 font-light">
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