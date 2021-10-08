// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'black-opa-50': '#0008',
        'gray-main': '#3e3b39'
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'roboto': ['Roboto'],
        'lato': ['Lato'],
        'garamond': ['Garamond']
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
}