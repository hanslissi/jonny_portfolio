/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#51A0D5",
        secondary: "#C070EA",
        primaryBg: "#2E373D",
        brightSecondaryBg: "#3331320D",
        darkSecondaryBg: "#121212CC",
        darkTertiaryBg: "#12121246",
        whiteHighlight: "#FFFFFF80",
      },
      borderColor: {
        DEFAULT: "#717171",
      },
      fontFamily: {
        fancy: ["Urbanist", "Roboto Slab", "sans-serif"],
        sans: ["Roboto", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
