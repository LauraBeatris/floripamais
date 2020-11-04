/* eslint-disable @typescript-eslint/no-var-requires */
const { shade } = require("polished");

const purgeExtensions = "*.{js,ts,jsx,tsx}";

const reuseColors = {
  "orange-100": "#FB8F0A",
};

const reuseComponentsLengths = {
  "header-desktop": "130px",
  "header-mobile": "85px",
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
        "background-light": "#F2F2F2",
      },
      height: {
        ...reuseComponentsLengths,
        "section-introduction": "450px",
      },
      width: {
        22: "22rem",
        30: "30rem",
      },
      spacing: {
        ...reuseComponentsLengths,
      },
    },
    fontFamily: {
      body: ["Montserrat", "Arial", "sans-serif"],
    },
  },
  plugins: [],
};
