import panda from '@pandacss/dev/postcss'

/** @type {import('postcss-load-config').Config} */
const config = {
	plugins: [panda()],
}

export default config
