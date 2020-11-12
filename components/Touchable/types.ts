import { HTMLAttributes } from "react";

type TouchableElementProps = HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>;

export interface TouchableProps extends Omit<TouchableElementProps, "className"> {
  touchableWrapperClassName?: string;
  touchableElementClassName?: string;
  touchableHref?: string;
}
