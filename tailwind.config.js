/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px'
    },
    extend: {
      colors: {
        'teal': '#3EE9E5',
        'ocean': '#093F68',
        'grey': '#777F98',
        'white': '#FFFFFF',
        'navy': '#080C20',
        'pink': '#FF2965',
      },
      fontFamily: {
        Manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}