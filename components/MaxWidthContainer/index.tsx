import React from "react";
import clsx from "clsx";

import { MaxWidthContainerProps } from "./types";

const MaxWidthContainer: React.FC<MaxWidthContainerProps> = ({
  children,
  className,
  maxWidth = "max-w-screen-lg",
  ...rest
}) => {
  const concatenateClassName = clsx("mx-auto w-full", maxWidth, className);

  return (
    <div {...rest} className={concatenateClassName}>
      {children}
    </div>
  );
};

export default MaxWidthContainer;
