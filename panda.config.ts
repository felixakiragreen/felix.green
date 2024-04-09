import { defineConfig } from '@pandacss/dev'
import theme from './src/style/theme'

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: [
		'./src/**/*.{js,jsx,ts,tsx,astro}',
		'./pages/**/*.{js,jsx,ts,tsx,astro}',
	],

	// Files to exclude
	exclude: [],

	conditions: {
		extend: {
			dark: '.dark &, [data-theme="dark"] &',
			light: '.light &',
			supportsBackdrop:
				'@supports ((-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)))',
		},
	},

	// Useful for theme customization
	theme: {
		extend: {
			...theme,
		},
	},

	// The output directory for your css system
	outdir: 'styled-system',

	jsxFramework: 'astro',
})
