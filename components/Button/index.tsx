import React from "react";
import clsx from "clsx";
import ConditionalWrap from "conditional-wrap";
import { BsArrowRight } from "react-icons/bs";

import styles, { buttonVariantsStyles } from "./styles";
import { ButtonProps, ButtonVariant } from "./types";

const Button: React.FC<ButtonProps> = ({
  buttonElementClassName,
  buttonWrapperClassName,
  buttonLink,
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
      <ConditionalWrap
        wrap={(buttonChildren) => (
          <a
            target="_blank"
            href={buttonLink}
            rel="noreferrer"
          >
            {buttonChildren}
          </a>
        )}
        condition={Boolean(buttonLink)}
      >
        <div className={styles.container}>
          <button
            type="button"
            className={concatenateButtonElementClassNames}
            {...rest}
          >
            {children}

            <BsArrowRight aria-hidden className={styles.icon} />
          </button>
        </div>
      </ConditionalWrap>
    </div>
  );
};

export default Button;
