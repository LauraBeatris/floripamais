import { HTMLAttributes } from "react";

export enum ButtonVariant {
  "Primary",
  "Secondary"
}

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
}
