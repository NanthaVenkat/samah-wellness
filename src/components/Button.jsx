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
      solid: "bg-[#68320A] text-white border-[#68320A]",
      outline: "border-[#68320A] text-[#68320A] bg-transparent",
    },
    secondary: {
      solid: "bg-[#8A8341] text-white border-[#8A8341]",
      outline: "border-[#8A8341] text-[#8A8341] bg-transparent",
    },
    brownishPink: {
      solid: "bg-[#BF7F81] text-white border-[#BF7F81]",
      outline: "border-[#BF7F81] text-[#BF7F81] bg-transparent",
    },
  };

  let activeVariant = "primary"; 

  if (secondary) activeVariant = "secondary";
  if (brownishPink) activeVariant = "brownishPink";

  const styleType = outline ? "outline" : "solid";

  const baseClasses =
    "inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold border transition-all duration-200";

  const finalClass = twMerge(
    clsx(
      baseClasses,
      variantStyles[activeVariant][styleType],
      rounded ? "rounded-full" : "rounded-md",
      fullWidth && "w-full",
      disabled
        ? "opacity-50 cursor-not-allowed"
        : "cursor-pointer hover:opacity-90",
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
    return (
      <Link to={href} className={finalClass}>
        {content}
      </Link>
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
