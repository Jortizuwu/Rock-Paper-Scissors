module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        '6': '14px',
        '8': "24px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
