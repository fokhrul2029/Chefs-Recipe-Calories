/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*.jsx", "./src/components/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#282828",
        primaryGray: "#150B2B",
        lightGray: "#878787",
        primaryGreen: "#0BE58A",
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};
