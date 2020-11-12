import React from "react";
import clsx from "clsx";
import { BsArrowRight } from "react-icons/bs";

import styles from "./styles";
import { TouchableProps } from "./types";

const Touchable: React.FC<TouchableProps> = ({
  touchableElementClassName,
  touchableWrapperClassName,
  touchableHref,
  children,
  ...rest
}) => {
  const concatenateButtonElementClassNames = clsx(
    styles.element,
    styles.elementAnimation,
    touchableElementClassName,
  );

  const concatenateButtonWrapperClassNames = clsx(
    styles.wrapper,
    touchableWrapperClassName,
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
        {touchableHref ? (
          <a
            target="_blank"
            href={touchableHref}
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

export default Touchable;
