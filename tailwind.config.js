/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#191723",
        "brand-secondary": "#13111C",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
