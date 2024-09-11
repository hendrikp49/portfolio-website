/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
      },

      fontFamily: {
        heading: ["Playfair Display, serif"],
        content: ["Raleway, sans-serif"],
      },
    },
  },
  plugins: [],
};
