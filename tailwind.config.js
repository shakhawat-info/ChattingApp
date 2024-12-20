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
        'showLogin': 'showLogin .4s linear ',
        'showReg': 'showReg .4s linear ',
        'showMenu': 'showMenu .4s linear ',
      },
      keyframes: {
        showLogin: {
          '0%': { right: '-3%', opacity: '0' },
          '100%': { right: '0%' , opacity: '1' },
        },
        showReg: {
          '0%': { left: '-3%', opacity: '0' },
          '100%': { left: '0%' , opacity: '1' },
        },
        showMenu: {
          '0%': { right: '-20%' },
          '100%': { right: '0%' },
        },
      },
      gridTemplateColumns: {
        'home': '10% 85% 5%',
      }
    },
    fontFamily: {
      'aldrich': ["Aldrich", 'sans-serif'],
      'ubuntu': ["Ubuntu", "sans-serif"],
    }
  },
  plugins: [],
});
