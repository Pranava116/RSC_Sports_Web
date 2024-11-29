/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        keyframes: {
            'fade-in-up': {
                '0%': {
                    opacity: '0',
                    transform: 'translateY(10px)'
                },
                '100%': {
                    opacity: '1',
                    transform: 'translateY(0)'
                },
            },
            'slide': {
              '0%': {
                opacity: '1',
                transform: 'translateX(-400px)'
              },
              '100%':{
                opacity: '1',
                transform: 'translateX(0px)'
              }
            }
        },
        animation: {
            'fade-in-up': 'fade-in-up 1s ease-out',
            'slide': 'slide 0.7s'
        },
    },
  },
  plugins: [],
}