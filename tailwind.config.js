/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    colors: {
      'light': '#F8F5FF',
      'dark': '#B28AF8',
      'dark2': '#956AE1',
      'font-light': '#51495F',
      'dark-font': '#FFFFFF',
      'shadow-clr': '#C4A3FD',
      'header-clr': '#956AE1',
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xxs:"50px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};