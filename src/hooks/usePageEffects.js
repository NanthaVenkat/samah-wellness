import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function usePageEffects(scope) {
  useGSAP(
    () => {
      const revealItems = gsap.utils.toArray(".reveal");
      revealItems.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 42 },
          {
            opacity: 1,
            y: 0,
            duration: 1.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 86%",
            },
          }
        );
      });

      const parallaxItems = gsap.utils.toArray(".parallax");
      parallaxItems.forEach((item) => {
        gsap.fromTo(
          item,
          { yPercent: -7, scale: 1.04 },
          {
            yPercent: 7,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      });

      gsap.to(".hero-image", {
        scale: 1.06,
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    },
    { scope }
  );
}
