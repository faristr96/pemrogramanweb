/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container:{
      center: true,
      padding:'16px',
    },
    extend: {
      colors:{
        utama: '#f59e0b',
        isi: '#6b7280'
      },
      screens: {'2xl' : '1320px'
    }, 
    fontFamily: {
      garamond: ['EB Garamond', 'serif'],
    }
  },
  plugins: [],
}
}
