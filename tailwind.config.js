/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ASRS brand palette derived from the screenshot
        asrs: {
          orange: "#D98A2B",   // hero panel / donate button
          orangeDark: "#C0761E",
          ink: "#2B2B2B",      // navbar text / logo block
          lightInk: "#707070",
          brightInk: "#B8B8B8",
          coral: "#E0552B",    // logo accent
          gold: "#F2B134",     // logo accent
          paper: "#FFFFFF",
        },
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};