import tailwindDefaultTheme from "tailwindcss/defaultTheme";

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

export const tailwindBreakpoints = {
  small: parsedTailwindBreakpoints.sm,
  medium: parsedTailwindBreakpoints.md,
  large: parsedTailwindBreakpoints.lg,
  xlarge: parsedTailwindBreakpoints.xl,
};
