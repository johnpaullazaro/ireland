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
        'parallax': 'url("https://preen.ph/wp-content/blogs.dir/38/files/2015/12/Aldub.jpg")',
      }

    },
  },
  plugins: [],
}