import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import netlify from '@sveltejs/adapter-netlify'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],

	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess()],

	kit: {
		adapter: netlify(),
		alias: {
			'@': '/src',
		},
	},
}

export default config
