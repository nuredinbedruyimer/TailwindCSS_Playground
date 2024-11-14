/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        72: "20rem",
        80: "30rem",
      },
      colors: {
        "nure-button": "#DAA06D",
        "nure-primary": "#966919",
        "nure-secondary": "#9A2A2A",
        "nure-text": "#016396",
      },
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    container: {
      center: true,
      padding: "3rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
};
