const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '5px',

      // default breakpoints but with 40px removed
      screens: {
        xsm: '100%',
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    },
    extend: {
      colors: {
        'bodybg': '#1D1D1D',
        'bgsecondery': '#262626',
        'clrthird': '#626262',
        'primarytxt': '#ffffff',
        'brand': '#ff045c',
      },
      animation: {
        'showLogin': 'showLogin .6s linear ',
        'showReg': 'showReg .6s linear ',
      },
      keyframes: {
        showLogin: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        showReg: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        }
      },
    },
    fontFamily: {
      'aldrich': ["Aldrich", 'sans-serif'],
      'ubuntu': ["Ubuntu", "sans-serif"],
    }
  },
  plugins: [],
});
