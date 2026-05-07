import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function BubbleButton({
  children,
  className,
  to,
  onClick,
  type = "button",
  as = "button",
  bubbleColor = "bg-white/20",
}) {
  const buttonRef = useRef(null);
  const bubbleRef = useRef(null);

  const handleMouseEnter = (e) => {
    const btn = buttonRef.current;
    const bubble = bubbleRef.current;
    if (!btn || !bubble) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Kill any ongoing animation
    gsap.killTweensOf(bubble);

    // Set position first
    gsap.set(bubble, {
      left: x,
      top: y,
      x: "-50%",
      y: "-50%",
    });

    // Animate bubble expansion
    gsap.to(bubble, {
      width: "300%",
      paddingTop: "300%",
      duration: 0.3,
      ease: "power2.out",
      overwrite: true,
    });
  };

  const handleMouseLeave = (e) => {
    const btn = buttonRef.current;
    const bubble = bubbleRef.current;
    if (!btn || !bubble) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Kill any ongoing animation
    gsap.killTweensOf(bubble);

    // Set new position
    gsap.set(bubble, {
      left: x,
      top: y,
      x: "-50%",
      y: "-50%",
    });

    // Animate bubble collapse
    gsap.to(bubble, {
      width: "0",
      paddingTop: "0",
      duration: 0.3,
      ease: "power2.in",
      overwrite: true,
    });
  };

  const commonClasses = `relative overflow-hidden ${className}`;

  const content = (
    <>
      <span
        ref={bubbleRef}
        className={`absolute ${bubbleColor} rounded-full pointer-events-none z-0`}
        style={{
          width: "0",
          paddingTop: "0",
        }}
      />
      <span className="relative z-10 w-full flex items-center justify-center gap-2">
        {children}
      </span>
    </>
  );

  if (to) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
        className={
          className.includes("w-max") || className.includes("w-full")
            ? className
                .split(" ")
                .filter((c) => c.startsWith("w-"))
                .join(" ")
            : ""
        }
      >
        <Link
          to={to}
          ref={buttonRef}
          className={commonClasses}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  if (as === "a") {
    return (
      <motion.a
        ref={buttonRef}
        className={commonClasses}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      ref={buttonRef}
      className={commonClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      {content}
    </motion.button>
  );
}
