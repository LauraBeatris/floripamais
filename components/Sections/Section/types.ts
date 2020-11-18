import { HTMLAttributes } from "react";

import { BackgroundVariant } from "styles/variants";

export interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  emojiSymbol?: string;
  buttonText?: string;
  touchableHref?: string;
  variant?: BackgroundVariant;
  title: string;
  text: string;
}
