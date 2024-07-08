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
        c1: "#ffffffbd",
        c2: "#cccccce8",
        c3: "#232323",
        c4: "#ffd501",
      },

      width: {
        'base': '423.875px',
      },

      borderRadius:{
        'base': '3px'
      },

      height:{
        'el': '50px'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },

      aspectRatio: {
        'main': '4 / 5',
      },

      
    },
  },
  plugins: [],
}

