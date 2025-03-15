/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fbf7ed',
          100: '#f5ecd5',
          200: '#e9d4a7',
          300: '#deb970',
          400: '#d4a144',
          500: '#c68a2f',
          600: '#b47024',
          700: '#95571f',
          800: '#7a4720',
          900: '#653c1d',
        },
        dark: {
          50: '#f7f7f8',
          100: '#eeeef0',
          200: '#d9d9dd',
          300: '#b7b7bf',
          400: '#8f8f9d',
          500: '#717182',
          600: '#5b5b6b',
          700: '#4a4a57',
          800: '#40404a',
          900: '#383840',
          950: '#25252a',
        },
      },
    },
  },
  plugins: [],
};