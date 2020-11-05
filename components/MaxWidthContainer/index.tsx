import React, { HTMLAttributes } from "react";
import clsx from "clsx";

const MaxWidthContainer: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}) => {
  const concatenateClassName = clsx("max-w-screen-lg mx-auto w-full", className);

  return (
    <div {...rest} className={concatenateClassName}>
      {children}
    </div>
  );
};

export default MaxWidthContainer;
