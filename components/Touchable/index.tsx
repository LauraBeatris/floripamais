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
  const concatenateTouchableElementClassNames = clsx(
    styles.element,
    styles.elementAnimation,
    touchableElementClassName,
  );

  const concatenateTouchableWrapperClassNames = clsx(
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
    className: concatenateTouchableElementClassNames,
  };

  return (
    <div className={concatenateTouchableWrapperClassNames}>
      <div className={styles.container}>
        {
          touchableHref ? (
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
          )
        }
      </div>
    </div>
  );
};

export default Touchable;
