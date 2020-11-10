import { HTMLAttributes } from "react";

export enum ButtonVariant {
  "Primary",
  "Secondary"
}

type ButtonElementAttributes = HTMLAttributes<HTMLButtonElement>;

export interface ButtonProps extends Omit<ButtonElementAttributes, "className"> {
  buttonWrapperClassName?: string;
  buttonElementClassName?: ButtonElementAttributes["className"];
  buttonLink?: string;
  variant?: ButtonVariant;
}
