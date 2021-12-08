  module.exports = {
      style: {
        postcss: {
          plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
          ],
          theme: {
            extend: { padding: { "fluid-video": "56.25%" } },
          },
        },
      },
  }