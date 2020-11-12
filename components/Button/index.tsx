import React from "react";
import clsx from "clsx";
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

  const touchableContent = (
    <>
      {children}
      <BsArrowRight aria-hidden className={styles.icon} />
    </>
  );

  const touchableAttributes = {
    className: concatenateButtonElementClassNames,
  };

  return (
    <div className={concatenateButtonWrapperClassNames}>
      <div className={styles.container}>
        {buttonLink ? (
          <a
            target="_blank"
            href={buttonLink}
            rel="noreferrer"
            {...touchableAttributes}
          >
            {touchableContent}
          </a>
        ) : (
          <button
            type="button"
            {...touchableAttributes}
            {...rest}
          >
            {touchableContent}
          </button>
        )}
      </div>
    </div>
  );
};

export default Button;
