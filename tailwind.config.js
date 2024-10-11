/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {

    
        screens: {
         sm: '640px',     // Small screens
        md: '768px',     // Medium screens
        lg: '1024px',    // Large screens
        xl: '1280px',    // Extra large screens
        '2xl': '1444px', // Custom 2xl starting at 1444px as per your Figma design
        '3xl': '1600px',
       
      },
      
      
      colors: {
        hero: '#F2F0F1',
       card : '#F0EEED',
        browser: '#F0F0F0',
        textColor: 'rgba(0, 0, 0, 0.6)',
        greencricle: '#01AB31',
        yellow: '#FFC633',
        dicoount: '#00000066',
      },
      backgroundColor: {
       

      },
      fontWeight: {
        SectionTitel: '700',
         links:'400'
      },
      fontSize: {
      base: '20px',
        sm: '16px',
        xs:'14px',
      logo: '32px',
        // hero p
        
        
      
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],       
        integralCF: ['Integral CF', 'sans-serif'],
      }
 , 
      maxWidth: {
        '2000': '2000px',
         
      },
    },
  },
  plugins: [],
}
