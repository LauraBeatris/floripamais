import { HTMLAttributes } from "react";

type ButtonElementAttributes = HTMLAttributes<HTMLButtonElement>;

export interface ButtonProps extends Omit<ButtonElementAttributes, "className"> {
  buttonWrapperClassName?: string;
  buttonElementClassName?: ButtonElementAttributes["className"];
  buttonLink?: string;
}
