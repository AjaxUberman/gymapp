/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-bg": "#FEFAF6",
        "wheat-bg": "#FFFBDA",
        "dark-bg": "#352F44",
        "gray-bg": "#D27685",
        "blue-item": "#7BC9FF",
        "item-text-cof": "#8B322C",
        "macro-value": "#B3C8CF",
      },
      boxShadow: {
        "mavi-neon": "0 20px 50px #C4D7B2;",
      },
      fontFamily: {
        nato: ("Noto Sans", "sans - serif"),
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
