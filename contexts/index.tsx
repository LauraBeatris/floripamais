import React from "react";

import TailwindBreakpointsProvider from "./tailwindBreakpointsProvider";

const ContextProviders: React.FC = ({ children }) => (
  <TailwindBreakpointsProvider>
    {children}
  </TailwindBreakpointsProvider>
);

export default ContextProviders;
