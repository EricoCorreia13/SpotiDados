/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    
    extend: {
      animation:{
        'fadeIn': 'animate-fade-down'
      }
    }
    
    
    
  },
  variants: {
      extend: {},
    },
  plugins: [],
}