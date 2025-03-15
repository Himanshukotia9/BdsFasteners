/** @type {import('tailwindcss').Config} */

export default{
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#FFCE1A",
        'secondary': "#0D0842",
        'favorite': "#FF5841",
      },
      fontFamily: {
        'heading': ['Big Shoulders', 'sans-serif'],
        'primary': ['Roboto Condensed', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

