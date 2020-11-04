module.exports = {
  purge: [
    "./pages/*.tsx",
    "./components/*.ts",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0d0c0f",
        "yellow-100": "#DDA158",
        "orange-100": "#FB8F0A",
        "orange-200": "#FC9414",
        "background-light": "#F2F2F2",
      },
    },
    fontFamily: {
      body: ["Montserrat", "Arial", "sans-serif"],
    },
  },
  variants: {},
  plugins: [],
};
