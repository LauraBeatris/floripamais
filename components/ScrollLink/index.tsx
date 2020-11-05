import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

import { headerId } from "components/Header";

import { ScrollLinkProps } from "./types";
import { defaultScrollDuration } from "./constants";

const ScrollLink: React.FC<ScrollLinkProps> = ({
  to,
  children,
  duration = defaultScrollDuration,
  ...rest
}) => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    setHeaderHeight(-(document?.querySelector<HTMLHeadingElement>(`#${headerId}`)?.offsetHeight));
  }, []);

  return (
    <Link
      to={to}
      smooth
      spy
      offset={headerHeight}
      duration={duration}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default ScrollLink;
