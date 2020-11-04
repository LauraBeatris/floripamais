import React from "react";
import clsx from "clsx";
import { BsArrowRight } from "react-icons/bs";

import styles, { buttonVariantsStyles } from "./styles";
import { ButtonProps, ButtonVariant } from "./types";

const Button: React.FC<ButtonProps> = ({
  buttonElementClassName,
  buttonContainerClassName,
  variant = ButtonVariant.Primary,
  children,
  ...rest
}) => {
  const concatenateButtonElementClassNames = clsx([
    styles.element,
    styles.elementAnimation,
    buttonElementClassName,
    buttonVariantsStyles[variant],
  ]);

  const concatenateButtonContainerClassNames = clsx([
    styles.container,
    buttonContainerClassName,
  ]);

  return (
    <div role="button" className={concatenateButtonContainerClassNames}>
      <button
        type="button"
        className={concatenateButtonElementClassNames}
        {...rest}
      >
        {children}

        <BsArrowRight className={styles.icon} />
      </button>
    </div>
  );
};

export default Button;
