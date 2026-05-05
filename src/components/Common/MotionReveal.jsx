export default function MotionReveal({ children, className = "", delay = 0 }) {
  return (
    <div
      className={`reveal ${className}`.trim()}
      data-delay={delay}
    >
      {children}
    </div>
  );
}
