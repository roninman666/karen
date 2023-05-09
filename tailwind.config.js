/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html','./karen.html','./pages/**/*.{html,js}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily:{
        body:['Outfit']
      }
    },
  },
  plugins: [],
}