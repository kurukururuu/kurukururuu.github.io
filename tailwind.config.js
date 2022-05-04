// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      colors: {
        'black-opa-50': '#0008',
        'gray-main': '#3e3b39',
        'dark-main': '#292929',
        'dark-secondary': '#1e1e1e',
        'dark-tertiary': '#121212'
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'roboto': ['Roboto'],
        'lato': ['Lato'],
        'garamond': ['Garamond']
      },
      screens: {
        mobile: { max: '767px' },
        desktop: { min: '768px' },
        xs: { max: '374px' },
        sm: { min: '375px', max: '767px' },
        md: { min: '768px', max: '1024px' },
        lg: { min: '1025px', max: '1439px' },
        xl: { min: '1440px' }
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
}