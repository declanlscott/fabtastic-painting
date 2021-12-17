module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E6C279',
          light: '#e9cb8d'
        },
        'secondary': '#403520',
        tertiary: {
          DEFAULT: '#8A7345',
          dark: '#75613a'
        }
      },
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif']
      },
      zIndex: {
        'neg': -1
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
