/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: "5px",

      // default breakpoints but with 40px removed
      screens: {
        sm: "500px",
        md: "700px",
        lg: "900px",
        xl: "1100px",
        "2xl": "1300px",
      },
    },
    extend: {
      colors: {
        PrimaryDark: "#2d2d30",
        SeconderyDark: "#3e3e42",
        bgsecondery: "#262626",
        clrthird: "#626262",
        primarytxt: "#ffffff",
        brand: "#ff045c",
      },
      animation: {
        showLogin: "showLogin .4s linear ",
        showReg: "showReg .4s linear ",
        animloader: "animloader 1s linear infinite",
      },
      keyframes: {
        showLogin: {
          "0%": { right: "-3%", opacity: "0" },
          "100%": { right: "0%", opacity: "1" },
        },
        showReg: {
          "0%": { left: "-3%", opacity: "0" },
          "100%": { left: "0%", opacity: "1" },
        },
        animloader: {
          '0%' : { transform: 'scale(0)', opacity: '1' },
          '100%' : { transform: 'scale(1.5)', opacity: '0'}
        },
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        gridMenu: "1fr 1fr",
        story: "repeat(9 , 1fr)",
        // 'postoptions': '1fr 1fr 1fr',
      },
      backgroundImage: {
        // 'Chatbg': "url('./src/assets/images/ctbg.jpg')",
      },
    },
    fontFamily: {
      aldrich: ["Aldrich", "sans-serif"],
      ubuntu: ["Ubuntu", "sans-serif"],
    },
  },
  plugins: [],
};
