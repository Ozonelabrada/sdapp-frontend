module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: 
      {
     bgLogin: '#8aa291',
     bgAboutL: '#bba7a3',
     bgAboutR: '#ddc3bd',
     bgHome: '#f1f1f1',
   },},
  },
  variants: {
    extend: {
     backgroundAttachment: ['hover', 'focus'],
    }
  },
  plugins: [],
}
