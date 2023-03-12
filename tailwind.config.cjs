/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // primary: "#050816", //whole page color
        // secondary: "#aaa6c3", //text color
        // tertiary: "#151030", //cards color
        primary: "#0c152a", //whole page color
        secondary: "#9ba0c5", //text color
        tertiary: "#161b42", //cards color
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        //"hero-pattern": "url('/src/assets/oooscillate.svg')",
        "hero-pattern": "url('/src/assets/uuundulate.svg')",
      },
    },
  },
  plugins: [],
};