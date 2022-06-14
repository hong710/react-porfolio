/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'google': ['Roboto','sans-serif'],
      'logo':['Pacifico', 'cursive']
    },
    extend: {
      colors:{
      'primary':'#5651e5',
      'bg-color':'#ecf0f3',
      'my-gradient':'#709dff',
      'darkMode': '#0f172a',
      'darkFont' : 'white',
      'darkGradient1': '#8D1EEE',
      'darkGradient2': '#E70BAB',
    },
    },
  },
  plugins: [],
}
