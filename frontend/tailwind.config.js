/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8f53ef',
        secondary: '#d782f9',
        header: '#000000',
        paraText: '#68696b',
        lightGrey: '#ededed',
        lightViolet: '#ede9ff',
        brown: '#eedbca',
        red: '#ed5c49',
        lightRed: '#f8e5e7'
      }
    },
  },
  plugins: [],
}
