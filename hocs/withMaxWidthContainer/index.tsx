/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import MaxWidthContainer from "components/MaxWidthContainer";

const withMaxWidthContainer = (
  Component: React.FC,
  className?: string,
) => (): JSX.Element => (
  <MaxWidthContainer className={className}>
    <Component />
  </MaxWidthContainer>
);

export default withMaxWidthContainer;
