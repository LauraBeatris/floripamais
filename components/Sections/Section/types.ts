import { HTMLAttributes } from "react";

export enum SectionVariant {
  Primary,
  Secondary
}

export interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  emojiSymbol?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: SectionVariant;
  title: string;
  text: string;
}
