/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          inter: ['Inter']
        }
      }
    },
  },
  plugins: [],
}

