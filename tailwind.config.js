/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#51A0D5",
        secondary: "#C488BF",
        primaryBg: "#2E373D",
        secondaryBg: "#232323",
      },
      fontFamily: {
        fancy: ["Roboto Slab", "Verdana", "sans-serif"],
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
