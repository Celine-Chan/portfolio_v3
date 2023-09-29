/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebasNeue': ['Bebas neue', 'sans-serif'],
        'playfairDisplay': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}

