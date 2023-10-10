/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      cormorant: ['Cormorant SC', 'serif'],
      imperial: ['Imperial Script', 'cursive']
    },
    extend: {
      backgroundImage: {
        'parallax': 'url("assets/image/png/header-pic.jpg")',
      }

    },
  },
  plugins: [],
}