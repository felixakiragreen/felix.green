const { tailwindConfig } = require('@fag/felix')

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
