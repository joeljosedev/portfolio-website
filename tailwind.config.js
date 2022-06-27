module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./icons/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["'Dancing Script'", "cursive"],
        roboto: ["'Roboto Condensed'", "sans-serif"],
      }
    },
  },
  plugins: [],
};
