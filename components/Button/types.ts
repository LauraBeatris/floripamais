import { HTMLAttributes } from "react";

export enum ButtonVariant {
  "Primary",
  "Secondary"
}

type ButtonElementAttributes = HTMLAttributes<HTMLButtonElement>;

export interface ButtonProps extends Omit<ButtonElementAttributes, "className"> {
  buttonContainerClassName?: string;
  buttonElementClassName?: ButtonElementAttributes["className"];
  variant?: ButtonVariant;
}
