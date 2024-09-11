/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Playfair Display, serif"],
        content: ["Raleway, sans-serif"],
      },
    },
  },
  plugins: [],
};
