/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./node_modules/react-tailwindcss-select/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        'green-1': '#748B17',
        'green-2': '#93AD18',
        'gray-1': 'rgb(189, 185, 185)',
      },
      fontFamily: {
        Kanit: ['Kanit', 'sans-serif'],
      },
      height: {
        "lg": "26.875rem"
      }
    },
  },
  plugins: [],
})
