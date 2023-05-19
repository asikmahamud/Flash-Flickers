/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'inter' : ['Inter', 'sans-serif'],
        'open-sans' :['Open Sans', 'sans-serif']
      },
      colors :{
          'primary' : '#65a30d',
      }
    },
    container:{
      center: true,
      padding: '1rem',
      screens: {
        sm: '576px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
      }
    }
  },
  plugins: [],
};

