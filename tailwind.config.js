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
      },

      colors: {
        'main-color': '#383838',
        'secondary-color': '#A84A4A',
        'how-to-go-color': '#FFCCCC',

      },
    }
  },
  plugins: [require("daisyui")],
}