/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'midnight': {
          50: '#f0f2ff',
          100: '#e6e8ff',
          200: '#d0d4ff',
          300: '#a5acf5',
          400: '#7b85eb',
          500: '#5c66dc',
          600: '#4c55c9',
          700: '#3d46a8',
          800: '#32398a',
          900: '#2d3570',
          950: '#1a1d41',
        },
      },
    },
  },
  plugins: [],
}