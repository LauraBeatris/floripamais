import React from "react";
import clsx from "clsx";
import { BsArrowRight } from "react-icons/bs";

import { ButtonProps, ButtonVariant } from "./types";

const iconClassNames = "text-2xl ml-8";
const buttonElementClassNames = "flex border-none outline-none focus:outline-none text-lg items-center bg-orange-100 hover:bg-orange-shade transition-colors duration-200 py-2 px-5 rounded-full";
const buttonContainerClassNames = "flex pr-5 items-start justify-center py-0 border border-orange-100 hover:border-orange-shade rounded-full";

const buttonElementVariantClassNames = {
  [ButtonVariant.Primary]: "text-black",
  [ButtonVariant.Secondary]: "text-white",
};

const Button: React.FC<ButtonProps> = ({
  buttonElementClassName,
  buttonContainerClassName,
  variant = ButtonVariant.Primary,
  children,
  ...rest
}) => {
  const concatenateButtonElementClassNames = clsx([
    buttonElementClassNames,
    buttonElementClassName,
    buttonElementVariantClassNames[variant],
  ]);

  const concatenateButtonContainerClassNames = clsx([
    buttonContainerClassNames,
    buttonContainerClassName,
  ]);

  return (
    <div role="button" className={concatenateButtonContainerClassNames}>
      <button type="button" className={concatenateButtonElementClassNames} {...rest}>
        {children}

        <BsArrowRight className={iconClassNames} />
      </button>
    </div>
  );
};

export default Button;
