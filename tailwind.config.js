/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    extend: {
      backgroundImage: {
        'parallax': 'url("assets/image/png/header-pic.jpg")',
      }

    },
  },
  plugins: [],
}