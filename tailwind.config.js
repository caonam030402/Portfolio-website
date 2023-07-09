/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')
module.exports = {
  darkMode: 'class',
  darkLight: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('./src/assets/herobg.png')"
      },
      colors: {
        primary: '#0ea5e9',
        backgroundDark: '#111827',
        secondaryDark: '#1f2937'
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          maxWidth: theme('columns.7xl'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.5'),
          paddingRight: theme('spacing.5')
        }
      })
    })
  ]
}
