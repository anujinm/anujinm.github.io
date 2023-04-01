/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        'black': '#0f1108',
        'black-blue': '#040f16',
        'dark-gray': '#2d2d2a',
        'gray': '#342e37',
        'light-blue': '#848fa5',
        'dark-purple': '#2d3047',
        'gray-purple': '#2b2d42',
        'red': '#c14953',
        'dark-red': '#732727',
        'raspberry': '#b6465f',
        'rosy': '#BB8F85',
        'beige': '#e5dcc5',
        'light-yellow': '#efcb68',
        'dark-yellow': '#edae49',
        'light-beige': '#dfe0e2',
      },
      fontFamily: {
        burtons: "burtons",
      }
      , height: {
        '96/100': '96%',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}