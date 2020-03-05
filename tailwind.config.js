const { tailwindConfig } = require('@f*g/felix')

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
