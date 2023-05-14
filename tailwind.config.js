/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}","index.html"],
  theme: {
    extend: {
      colors: {
        dark: "#0f172a",
      },
      margin: {
        'mauto': '0px -0.5rem',
      },
      backgroundImage: {
        'welcome': "url('/assets/img/welcome.jpg')"
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
