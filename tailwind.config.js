// const { tailwindConfig } = require('@fag/felix')
const { tailwindConfig } = require('./src/node_modules/@fag/felix')

module.exports = {
  theme: {
    extend: {
      colors: {
        ...tailwindConfig,
      },
    },
  },
  variants: {
    color: ['hover'],
  },
  plugins: [],
}
