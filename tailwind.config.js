const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/*.html'
  ],
  darkMode: false,  // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        6: '6px'
      },
      colors: {
        'cyan':colors.cyan,
        'emerald':colors.emerald,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
