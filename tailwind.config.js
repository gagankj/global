/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['HelveticaCustom', 'sans-serif'], // Adding custom font
      },
      backgroundImage:{
        'program':"url('./program-bg.jpg')"
      }
    },
  },
  plugins: [],
}
