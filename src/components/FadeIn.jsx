import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FadeIn({ children, delay = 0, y = 30 }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: y,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.trigger === el && t.kill());
    };
  }, [delay, y]);

  return <div ref={elementRef}>{children}</div>;
}
