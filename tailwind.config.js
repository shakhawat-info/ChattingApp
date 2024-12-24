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
        sm: '500px',
        md: '700px',
        lg: '900px',
        xl: '1100px',
        '2xl': '1300px',
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
        'showMenuSM': 'showMenuSM .4s linear ',
        'hideMenu': 'hideMenu .4s linear ',
        'hideMenuSM': 'hideMenuSM .4s linear ',
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
          '0%': { right: '-30%' },
          '100%': { right: '0%' },
        },
        showMenuSM: {
          '0%': { right: '-110%' },
          '100%': { right: '0%' },
        },
        hideMenu: {
          '0%': { right: '0%' },
          '100%': { right: '-30%' },
        },
        hideMenuSM: {
          '0%': { right: '0%' },
          '100%': { right: '-110%' },
        },
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        'gridMenu': '1fr 1fr',
        'story': 'repeat(9 , 1fr)',
        // 'postoptions': '1fr 1fr 1fr',
      },
      backgroundImage: {
        // 'Chatbg': "url('./src/assets/images/ctbg.jpg')",
      }
    },
    fontFamily: {
      'aldrich': ["Aldrich", 'sans-serif'],
      'ubuntu': ["Ubuntu", "sans-serif"],
    }
  },
  plugins: [],
});
