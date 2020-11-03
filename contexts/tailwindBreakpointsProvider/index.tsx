import React from "react";
import tailwindDefaultTheme from "tailwindcss/defaultTheme";
import { BreakpointsProvider } from "react-with-breakpoints";

export interface TailwindBreakpoints {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

const parseTailwindBreakpointsToNumbers = (): TailwindBreakpoints => {
  const parsedBreakpoints = Object.values(tailwindDefaultTheme.screens)
    .map((screen: string) => {
      const tailwindBreakpointUnit = "px";

      return (
        Number(screen.split(tailwindBreakpointUnit)[0])
      );
    });

  return {
    sm: parsedBreakpoints[0],
    md: parsedBreakpoints[1],
    lg: parsedBreakpoints[2],
    xl: parsedBreakpoints[3],
  };
};

const parsedTailwindBreakpoints = parseTailwindBreakpointsToNumbers();

const providerBreakpoints = {
  small: parsedTailwindBreakpoints.sm,
  medium: parsedTailwindBreakpoints.md,
  large: parsedTailwindBreakpoints.lg,
  xlarge: parsedTailwindBreakpoints.xl,
};

const TailwindBreakpointsProvider: React.FC = ({ children }) => (
  <BreakpointsProvider breakpoints={providerBreakpoints}>
    {children}
  </BreakpointsProvider>
);

export default TailwindBreakpointsProvider;
