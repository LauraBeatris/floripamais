const fallbackFonts = ["Arial", "sans-serif"];

module.exports = {
  purge: [
    "./pages/*.{ts,tsx}",
    "./components/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange-100": "#FB8F0A",
        "orange-200": "#FC9414",
        "background-light": "#F2F2F2",
      },
    },
    fontFamily: {
      semibold: ["Montserrat-SemiBold", ...fallbackFonts],
      medium: ["Montserrat-Medium", ...fallbackFonts],
      light: ["Montserrat-Light", ...fallbackFonts],
    },
  },
  variants: {},
  plugins: [],
};
