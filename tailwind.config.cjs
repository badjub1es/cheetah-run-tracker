/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'cheetah': '#328b21',
        'asphalt': '#0c0a09',
        'slate': '#BABAA8',
        'ice': '#90D8D4'
      },
      keyframes: {
        colorWave: {
          '0%': { color: '#FFFFFF' },
          '25%': { color: '#65BD84' },
          '50%': { color: '#134F28' },
          '75%': { color: '#BAEBCB' },
          '100%': { color: '#FFFFFF' },
        },
      },
      animation: {
        'color-wave': 'colorWave 10s linear infinite',
      },
    },
  },
  plugins: [],
}