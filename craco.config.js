  module.exports = {
      style: {
        postcss: {
          plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
          ],
        },
      },
        theme: {
        extend: {
          backgroundImage: {
           'homeImage': "url('/images/OIP.JFIF')",
          }
        }
      }
  }