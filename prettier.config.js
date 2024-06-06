/** @type {import("prettier").Config} */
const config = {
	plugins: ['prettier-plugin-astro'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
	astroAllowShorthand: true,
	semi: false,
	singleQuote: true,
	tabWidth: 3,
	trailingComma: 'all',
	useTabs: true,
}

export default config
