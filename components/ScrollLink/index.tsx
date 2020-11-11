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
    setHeaderHeight(-(document?.querySelector<HTMLElement>(`#${headerId}`)?.offsetHeight));
  }, []);

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link
      to={to}
      smooth
      href=""
      spy
      offset={headerHeight}
      duration={duration}
      tabIndex={0}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default ScrollLink;
