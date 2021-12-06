module.exports = {
  purge: [],
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
          100: "#f45081",
          200: "#f23d73",
          300: "#f12b66",
          400: "#f01959",
          500: "#e60f4f",
          600: "#d40e49",
          700: "#c10d42",
          800: "#af0b3c",
          900: "#9c0a36",
        },
        tealish: {
          100: "#61e4cc",
          200: "#50e1c7",
          300: "#3fdec2",
          400: "#2edbbc",
          500: "#24d2b3",
          600: "#21c1a5",
          700: "#1eb196",
          800: "#1ba088",
          900: "#167e6c",
        },
        yellowish: {
          100: "#fac748",
          200: "#f9c135",
          300: "#f9bb22",
          400: "#f8b50f",
          500: "#fac748",
          600: "#edab06",
          700: "#da9d06",
          800: "#c78f05",
          900: "#a83d00", // For WCAG AA compliance
        },
      },
    },
    underlineOffset: {
      'medium': '30px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [  require('tailwind-underline-utils')
],
};
