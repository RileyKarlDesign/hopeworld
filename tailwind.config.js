/** @type {import('tailwindcss').Config} */

module.exports = {
  content:{
    relative: true, 
    files: [
    "./assets/**/*.{js,ts,jsx,tsx,mdx,liquid}",
    "./theme/**/*.{js,ts,jsx,tsx,mdx,liquid}", 
    "./sections/**/*.{js,ts,jsx,tsx,mdx,liquid}",
    "./snippets/**/*.{js,ts,jsx,tsx,mdx,liquid}",
    
   
 
  ],},
  theme: {
    extend: {
      colors: {
        c1: "#ececec",
        c2: "#f4f4f4e8",
        c3: "#1f1f1f",
        c4: "#7b7b7b",
      },

      width: {
        'base': '423.875px',
      },

      height:{
        'el': '40px'
      },


      aspectRatio: {
        'main': '4 / 5',
      },
    },
  },
  plugins: [],
}

