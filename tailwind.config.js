// const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: ["class", '[data-mode="light"]'],
  content: [
    // './views//*.{.ejs}
    "./views//*.ejs",
    "./views/components/*.ejs",
    "./views/services/*.ejs",
    // 'node_modules/preline/dist/*.js',
    // "./node_modules/tw-elements/dist/js//*.js",
    // './node_modules/tw-elements/dist/js/*.js'
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1400px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        // quicksand: ["Quicksand", "sans-serif"],
        // concert_One: ["Concert One", "sans-serif"],
       
      },
      colors: {
        theme1: "#053733",
        theme2: "#80b738",
      },
    },
  },
  plugins: [
    // require('preline/plugin'),
    // require('tw-elements/dist/plugin')
  ],
};