const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./**/**/*.html', './**/**/*.css', './**/**/*.svelte'],

  whitelistPatterns: [/svelte-/],

  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
})

const tailwind = require('tailwindcss')

const production = process.env.NODE_ENV !== 'development'

module.exports = {
  plugins: [tailwind, ...(production ? [purgecss] : [])],
}
