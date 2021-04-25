module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary" : "#6746e6",
        "secondary" : "#f2edff"
      },
      spacing:{
        "70p": "70%",
      },
      maxWidth: {
        "xxs" : "15rem"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
