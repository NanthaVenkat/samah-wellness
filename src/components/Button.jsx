import { Link } from "react-router-dom";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const Button = ({
  text = "Button",
  href,
  onClick,

  secondary = false,
  brownishPink = false,
  outline = false,

  iconPrefix: IconPrefix,
  iconSuffix: IconSuffix,

  rounded = false,
  fullWidth = false,
  disabled = false,

  className,
}) => {
  const variantStyles = {
    primary: {
      solid: "bg-brown text-white border-brown",
      outline: "border-brown text-brown bg-transparent",
    },
    secondary: {
      solid: "bg-olive-soft text-white border-olive-soft",
      outline: "border-olive-soft text-olive-soft bg-transparent",
    },
    brownishPink: {
      solid: "bg-blush text-white border-blush",
      outline: "border-blush text-blush bg-transparent",
    },
  };

  let activeVariant = "primary"; 

  if (secondary) activeVariant = "secondary";
  if (brownishPink) activeVariant = "brownishPink";

  const styleType = outline ? "outline" : "solid";

  const baseClasses =
    "inline-flex items-center justify-center gap-2 px-6 py-3 font-sans font-semibold border transition-all duration-500 ease-relaxed";

  const finalClass = twMerge(
    clsx(
      baseClasses,
      variantStyles[activeVariant][styleType],
      rounded ? "rounded-full" : "rounded-xl",
      fullWidth && "w-full",
      disabled
        ? "opacity-50 cursor-not-allowed"
        : "cursor-pointer hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] hover:shadow-brand-hover",
      className
    )
  );

  const content = (
    <>
      {IconPrefix && <IconPrefix size={18} />}
      {text}
      {IconSuffix && <IconSuffix size={18} />}
    </>
  );

  if (href) {
    if (href.startsWith("/")) {
      return (
        <Link to={href} className={finalClass}>
          {content}
        </Link>
      );
    }
    return (
      <a href={href} className={finalClass}>
        {content}
      </a>
    );
  }

  return (
    <button
      className={finalClass}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;
