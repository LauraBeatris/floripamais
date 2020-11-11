import { ButtonVariant } from "./types";

const buttonStyles = {
  icon: "text-2xl ml-8",

  wrapper: "inline-block",

  element: "flex flex-1 justify-between flex-wrap border-none text-xs md:text-lg items-center bg-orange-100 hover:bg-orange-shade transition-colors duration-200 py-2 px-5 rounded-full",

  container: "flex pr-5 items-start justify-center py-0 border border-orange-100 hover:border-orange-shade rounded-full",

  elementAnimation: "transform transition-transform duration-200 md:hover:translate-x-6 hover:translate-x-0",
};

export const buttonVariantsStyles = {
  [ButtonVariant.Primary]: "text-black",
  [ButtonVariant.Secondary]: "text-white",
};

export default buttonStyles;
