import React from "react";
import { BreakpointsProvider } from "react-with-breakpoints";

import { tailwindBreakpoints } from "styles/tailwind";

const TailwindBreakpointsProvider: React.FC = ({ children }) => (
  <BreakpointsProvider breakpoints={tailwindBreakpoints}>
    {children}
  </BreakpointsProvider>
);

export default TailwindBreakpointsProvider;
