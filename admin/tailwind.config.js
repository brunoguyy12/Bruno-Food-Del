/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ["Outfit", 'sans-serif'],
      },
      colors: {
        'tomato': '#ff6347',
      },
      keyframes:{
        fadeIn: {
          '0%': { opacity: '0'},
          '100%': { opacity: '1' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s',
        fadeInSlow: 'fadeIn 0.5s'
      },
      fontSize:{
        'ten': '10px',
        'thirty': '30px',
        'fifty': '50px',
      },
      spacing:{
        'ten': '10px',
        'thirty': '30px',
        'fifty': '50px',
        'hundred': '100px'
      }
    },
  },
  plugins: [],
}

