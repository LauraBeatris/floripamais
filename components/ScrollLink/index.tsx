import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

import { headerId } from "components/Header";

import { ScrollLinkProps } from "./types";

const ScrollLink: React.FC<ScrollLinkProps> = ({
  to,
  children,
  duration = 500,
  ...rest
}) => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    setHeaderHeight(-(document?.querySelector<HTMLElement>(`#${headerId}`)?.offsetHeight));
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
