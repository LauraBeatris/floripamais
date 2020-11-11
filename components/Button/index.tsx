import React from "react";
import clsx from "clsx";
import ConditionalWrap from "conditional-wrap";
import { BsArrowRight } from "react-icons/bs";

import styles from "./styles";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  buttonElementClassName,
  buttonWrapperClassName,
  buttonLink,
  children,
  ...rest
}) => {
  const concatenateButtonElementClassNames = clsx(
    styles.element,
    styles.elementAnimation,
    buttonElementClassName,
  );

  const concatenateButtonWrapperClassNames = clsx(
    styles.wrapper,
    buttonWrapperClassName,
  );

  const buttonTabIndex = buttonLink && -1;

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
            tabIndex={buttonTabIndex}
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
