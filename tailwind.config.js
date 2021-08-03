module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      green: {
        100: '#006534',
        200: '#32CD37'
      },
      brown: {
        100: '#976734',
        200: '#955723',
      },
      pink: {
        100: '#FD0165'
      },
      orange: {
        100: '#FD6504'
      },
      purple: {
        100: '#9502C9'
      }

    },
    extend: {
      backgroundImage: theme => ({
        'header-bg': "url('../public/images/mobile/header-bg.jpg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}