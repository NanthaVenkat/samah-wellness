import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const SmoothScroll = ({ children, ease = 0.08 }) => {
  const containerRef = useRef(null);
  const state = useRef({ current: 0, target: 0, ease });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const setBodyHeight = () => {
      document.body.style.height = `${container.getBoundingClientRect().height}px`;
    };

    setBodyHeight();
    window.addEventListener("resize", setBodyHeight);

    const onScroll = () => {
      state.current.target = window.scrollY || window.pageYOffset;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    const setY = gsap.quickSetter(container, "y", "px");

    const tick = () => {
      state.current.current += (state.current.target - state.current.current) * state.current.ease;
      setY(-Math.round(state.current.current));
    };

    gsap.ticker.add(tick);

    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener("resize", setBodyHeight);
      window.removeEventListener("scroll", onScroll);
      document.body.style.height = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ position: "fixed", top: 0, left: 0, width: "100%", willChange: "transform" }}
    >
      {children}
    </div>
  );
};

export default SmoothScroll;
