export enum BackgroundVariant {
  Primary,
  Secondary,
}

export const backgroundVariantsStyles = {
  [BackgroundVariant.Primary]: "text-black bg-white-shade",
  [BackgroundVariant.Secondary]: "text-white bg-black",
};

export const backgroundStyles = {
  container: "text-center w-full py-16 px-5 md:px-20",
};
