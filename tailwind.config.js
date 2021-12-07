module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#E6C279',
        'secondary': '#403520',
        'tertiary': '#8A7345',
        'tertiary-darken': '#75613a',
      },
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
