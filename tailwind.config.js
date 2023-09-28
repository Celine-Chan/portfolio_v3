/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'homePage': "url('/assets/img/skyNight_opacity70.jpg')",
      }
    },
  },
  plugins: [],
}

