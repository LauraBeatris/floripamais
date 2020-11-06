import React from "react";
import clsx from "clsx";
import { BsArrowRight } from "react-icons/bs";

import styles, { buttonVariantsStyles } from "./styles";
import { ButtonProps, ButtonVariant } from "./types";

const Button: React.FC<ButtonProps> = ({
  buttonElementClassName,
  buttonWrapperClassName,
  variant = ButtonVariant.Primary,
  children,
  ...rest
}) => {
  const concatenateButtonElementClassNames = clsx(
    styles.element,
    styles.elementAnimation,
    buttonVariantsStyles[variant],
    buttonElementClassName,
  );

  const concatenateButtonWrapperClassNames = clsx(
    styles.wrapper,
    buttonWrapperClassName,
  );

  return (
    <div className={concatenateButtonWrapperClassNames}>
      <div role="button" className={styles.container}>
        <button
          type="button"
          className={concatenateButtonElementClassNames}
          {...rest}
        >
          {children}

          <BsArrowRight className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default Button;
