import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Send } from "lucide-react";
import gsap from "gsap";

export default function BubbleButton({
  children,
  className,
  to,
  onClick,
  type = "button",
  btnType = "default",
  as = "button",
  bubbleColor = "bg-white/10",
  textColor = "",
  classBeside = 'px-4 py-3'
}) {
  const buttonRef = useRef(null);
  const bubbleRef = useRef(null);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const hasCustomCursor = btnType === "link" || btnType === "submit";

  const updatePointerPosition = (e) => {
    const btn = buttonRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

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

    if (hasCustomCursor) {
      updatePointerPosition(e);
      setCursorVisible(true);
    }
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

    setCursorVisible(false);
  };

  const cursorClass =
    hasCustomCursor ? "cursor-none" : "cursor-default";
  const commonClasses = `relative overflow-visible ${cursorClass} ${className}`;

  const content = (
    <>
      <span class={`inline-block w-full relative overflow-hidden ${classBeside}`}>
        <span
          ref={bubbleRef}
          className={`absolute ${bubbleColor} rounded-full pointer-events-none z-0`}
          style={{
            width: "0",
            paddingTop: "0",
          }}
        />
        <span className={`relative z-10 w-full flex items-center justify-center gap-2 hover:${textColor}`}>
          {children}
        </span>
      </span>
      {hasCustomCursor ? (
        <motion.span
          aria-hidden="true"
          className={`pointer-events-none absolute z-20 flex h-10 w-10 items-center justify-center rounded-full text-white shadow-xl ${btnType === "submit" ? "bg-[#68320A]" : "bg-[#8A8341]"
            }`}
          animate={{
            opacity: cursorVisible ? 1 : 0,
            scale: cursorVisible ? 1 : 0.7,
            x: cursorPosition.x,
            y: cursorPosition.y,
          }}
          transition={{
            opacity: { duration: 0.18, ease: "easeOut" },
            scale: { duration: 0.18, ease: "easeOut" },
            x: { type: "spring", stiffness: 500, damping: 35 },
            y: { type: "spring", stiffness: 500, damping: 35 },
          }}
          style={{ left: 0, top: 0, translateX: "-50%", translateY: "-50%" }}
        >
          {btnType === "submit" ? <Send size={14} /> : <ArrowUpRight size={16} />}
        </motion.span>
      ) : null}
    </>
  );

  if (to) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
        className={
          className.includes("w-max mt-auto") || className.includes("w-full")
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
          onMouseMove={updatePointerPosition}
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
        onMouseMove={updatePointerPosition}
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
      onMouseMove={updatePointerPosition}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      {content}
    </motion.button>
  );
}
