// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'bodybg': '#1D1D1D',
        'bgsecondery': '#262626',
        'clrthird': '#626262',
        'primarytxt': '#ffffff',
        'brand': '#ff045c',
      },
    },
    fontFamily: {
      'aldrich': ["Aldrich", 'sans-serif'],
      'ubuntu': ["Ubuntu", "sans-serif"],
    }
  },
  plugins: [],
});
