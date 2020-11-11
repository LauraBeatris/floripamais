import React from "react";
import { BreakpointsProvider } from "react-with-breakpoints";

import useHasMounted from "hooks/useIsMounted";
import { tailwindBreakpoints } from "styles/tailwind";

const TailwindBreakpointsProvider: React.FC = ({ children }) => {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return <>{children}</>;
  }

  return (
    <BreakpointsProvider breakpoints={tailwindBreakpoints}>
      {children}
    </BreakpointsProvider>
  );
};

export default TailwindBreakpointsProvider;
