import React from "react";
import clsx from "clsx";
import { BsArrowRight } from "react-icons/bs";

import { ButtonProps, ButtonVariant } from "./types";

const iconClasses = "text-2xl ml-8";

const buttonClasses = "flex outline-none focus:outline-none text-lg items-center bg-orange-100 hover:bg-orange-shade transition-colors duration-200 py-2 px-5 rounded-full";

const buttonVariantsStyles = {
  [ButtonVariant.Primary]: "text-black",
  [ButtonVariant.Secondary]: "text-white",
};

const Button: React.FC<ButtonProps> = ({
  className,
  variant = ButtonVariant.Primary,
  children,
  ...rest
}) => {
  const concatenateClassName = clsx([
    className,
    buttonClasses,
    buttonVariantsStyles[variant],
  ]);

  return (
    <button type="button" className={concatenateClassName} {...rest}>
      {children}

      <BsArrowRight className={iconClasses} />
    </button>
  );
};

export default Button;
