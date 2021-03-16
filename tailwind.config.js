const colors = require('tailwindcss/colors');
const defaultConfig = require('tailwindcss/defaultConfig');

module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Montserrat", ...defaultConfig.theme.fontFamily.sans],
    },
    extend: {
      colors: {
        green: colors.teal,
        gray: colors.gray,
        coolGray: colors.coolGray,
        blueGray: colors.blueGray,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
