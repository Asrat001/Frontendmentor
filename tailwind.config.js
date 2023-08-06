/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      fontFamily:{
        outfit:['outfit', 'san-serif'],
      }
   
    },
    colors:{
      'Grayishblue':'#D5E1EF',
      Lightgray :'rgb(123, 135, 157)',
      Darkblue:' hsl(218, 44%, 22%)',
      shadow:' hsl(220, 15%, 55%)'
    }
  },
  plugins: [],
}
