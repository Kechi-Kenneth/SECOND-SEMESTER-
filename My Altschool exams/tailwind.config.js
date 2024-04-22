/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,jsx,js, tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        mainBlack: "#181717",
        mainGray: "#606060",
        secondary: "#2429AF",
      },
    },
  },
  plugins: [],
};
