import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

import { headerId } from "components/Header/constants";

import { ScrollLinkProps } from "./types";

const ScrollLink: React.FC<ScrollLinkProps> = ({
  to,
  children,
  duration = 500,
  ...rest
}) => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    setHeaderHeight(-(document?.getElementById(headerId)?.offsetHeight));
  }, []);

  const linkHref = `#${to}`;

  return (
    <Link
      to={to}
      smooth
      spy
      href={linkHref}
      offset={headerHeight}
      duration={duration}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default ScrollLink;
