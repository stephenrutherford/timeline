/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#261C2C",
        "brand-secondary": "#3E2C41",
        "brand-tertiary": "#5C527F",
        "brand-quaternary": "#a855f7",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
