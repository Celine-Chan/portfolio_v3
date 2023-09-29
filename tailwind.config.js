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
        'libreBaskerville': ['Libre Baskerville', 'serif'],
      },
    },
  },
  plugins: [],
}

