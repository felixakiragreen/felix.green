import { createStitches } from '@stitches/core'
import type * as Stitches from '@stitches/core'

import { tokens, utils } from '@/fui/style/theme'

export const {
	css,
	globalCss,
	keyframes,
	getCssText,
	theme,
	createTheme,
	config,
} = createStitches({
	prefix: '',
	theme: {
		...tokens,
	},
	media: {
		xxs: '(min-width: 240px)',
		xs: '(min-width: 320px)',
		sm: '(min-width: 480px)',
		md: '(min-width: 640px)',
		lg: '(min-width: 1024px)',
		xl: '(min-width: 1280px)',
		xxl: '(min-width: 1536px)',
	},
	utils,
})

export type CSS = Stitches.CSS<typeof config>
