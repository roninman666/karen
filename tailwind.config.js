/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html','./karen.html','./pages/**/*.{html,js}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'

    },
    extend: {
      backgroundImage: {
        'back_map': "url('/src/sssa.webp')"
      },
      fontFamily:{
        body:['Outfit']
      }
    },
  },
  plugins: [],
}