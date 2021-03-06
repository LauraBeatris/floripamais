/* eslint-disable @typescript-eslint/no-var-requires */
const { shade } = require("polished");
const { fontFamily } = require("tailwindcss/defaultTheme");

const purgeExtensions = "*.{js,ts,jsx,tsx}";

const reuseColors = {
  "orange-100": "#D77600",
};

const reuseComponentsLengths = {
  "header-desktop": "8rem",
  "header-mobile": "5rem",
};

module.exports = {
  purge: {
    layers: ["base", "components", "utilities"],
    content: [
      `./pages/**/${purgeExtensions}`,
      `./components/**/${purgeExtensions}`,
    ],
  },
  variants: {
    margin: ({ after }) => after(["last"]),
    padding: ({ after }) => after(["first"]),
    borderWidth: ({ after }) => after(["hover"]),
  },
  theme: {
    extend: {
      colors: {
        black: "#0d0c0f",
        "white-200": "#F7FAFC",
        "yellow-100": "#DDA158",
        "orange-100": reuseColors["orange-100"],
        "orange-200": "#FC9414",
        "orange-shade": shade(0.1, reuseColors["orange-100"]),
        "white-shade": "#F2F2F2",
        "white-light": "#FAFAFA",
      },
      height: {
        ...reuseComponentsLengths,
        "desktop-screen": `calc(100vh - ${reuseComponentsLengths["header-desktop"]})`,
        "mobile-screen": `calc(100vh - ${reuseComponentsLengths["header-mobile"]})`,
      },
      width: {
        22: "22rem",
        30: "30rem",
      },
      spacing: {
        ...reuseComponentsLengths,
      },
      minHeight: {
        "slider-item": "24rem",
      },
      inset: {
        2: "2rem",
        "1/2": "0.5rem",
      },
    },
    fontFamily: {
      body: ["Inter", ...fontFamily.sans],
    },
  },
  plugins: [],
};
