/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      
      fontFamily:{
        Work: ["Work Sans", "sans-serif"] ,
        factum: ["Faktum Test", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        Robot:["Roboto"," sans-serif"],
        inter:['Inter', 'sans-serif'],
        WhyteRegular:["WhyteInktrap-Regular" , "sans-serif"],
        WhyteMedI:["WhyteInktrap-MediumItalic" , "sans-serif"],
        WhyteMed:["WhyteInktrap-Medium" , "sans-serif"],
        WhyteBold:["WhyteInktrap-Bold" , "sans-serif"],
        Whyte:["WhyteInktrap-Heavy" , "sans-serif"],
        DelBold:["Delvona-Bold", "sans-serif"]
    
      },
      colors: {
        'black-3':'#14171F',
        'blue': '#858EAD',
        'out':'#E0E3EB',
        'sky':'#2947A9',
        'white':'#FFFFFF',
        'blue-2':'#2947A9',
        'salt':'#F6F8F7',
        'blue-3':'#667299',
        'black-2':'#292E3D',
        'brown':'#C2C7D6',
        'earth':'#A3AAC2',
        'orange':'#F9995D',
        'red':'#ED6565',
        'navcls': '#F5F5F5',
        'gray': '#525B7A',
        'neutral':'#E0E3EB',
        'bg-footer':'#2B2D3C',
        'black-text':'#2E3234',
        'black':'#222222',
      },
      boxShadow:{
        '2xl': '0px 20px 24px -4px rgba(17, 24, 39, 0.1), 0px 8px 8px -4px rgba(17, 24, 39, 0.04);',
        '3xl':'0px 20px 24px -4px rgba(17, 24, 39, 0.1), 0px 8px 8px -4px rgba(17, 24, 39, 0.04);',
        '4xl':' 0px 0px 7.96163px rgba(105, 185, 157, 0.58)',
        '5xl': ' 0px 0px 37px -2px rgba(17, 24, 39, 0.05)',
        '6xl':' 0px 12px 16px -4px rgba(17, 24, 39, 0.1), 0px 4px 6px -2px rgba(17, 24, 39, 0.05)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      transitionProperty:{ 
        'height':"height"
      },
      
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwindcss-animated'),
],
}