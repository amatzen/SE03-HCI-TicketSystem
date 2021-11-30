module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        indigo: {
          100: "#a8b1fb",
          200: "#9ba6fb",
          300: "#8f9bfa",
          400: "#8390fa",
          500: "#8390fa",
          600: "#7581e1",
          700: "#6873c8",
          800: "#5b64af",
          900: "#4e5696",
        },
        crimson: {
          500: "#e60f4f",
        },
        tealish: {
          500: "#24d2b3",
        },
        yellowish: {
          500: "#fac748",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
