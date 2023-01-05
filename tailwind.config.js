/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // White: "#ffffff",
        // Black: "#161516",
        // Orange: "#D58C51",
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
