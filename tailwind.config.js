/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      border: "#434344",
      grey: {
        100: "#2E2E2E",
        200: "#1E1E1E",
        300: "#242424",
        400: "#191919",
        500: "#111111",
      },
      white: {
        100: "#F6F6F6",
        200: "#EAEAEA",
        300: "#D9D9D9",
        400: "#B1B1B1",
        500: "#6C6C6C",
      },
      accent: "#f1d302",
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
    fontWeight: {
      m: 500,
      sm: 600,
    },
    extend: {},
  },
  plugins: [],
};
