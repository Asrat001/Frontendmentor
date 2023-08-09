/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      fontFamily:{
        Robotobold:"Roboto-bold",
        Robotoregular:"Roboto-regular",
      },
      colors:{
        white:"#FFFEFE",
        btncolor:"#232742"

      }
      
    },
  
  },
  
  plugins: [],
}

