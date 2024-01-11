import type * as Stitches from '@stitches/core'
import { colors } from './color'

import { fontSizes, space, sizes } from '../fluid'

// TODO: import fluid fonts
// TODO: import fluid spacing
// TODO: import fluid sizes
// TODO: fluid space 0-9 size 10-19

// create a util...

const radii = {
	'0': '0px', // 0px
	'1': '0.125rem', // 2px
	'2': '0.25rem', // 4px
	'3': '0.375rem', // 6px
	'4': '0.5rem', // 8px
	'5': '0.75rem', // 12px
	'6': '1rem', // 16px
	'7': '1.5rem', // 24px
	'8': '2rem', // 32px
	'9': '2.5rem', // 40px
	'10': '9999px', // 9999px
}

const borderWidths = {
	'0': '0px',
	'1': '1px',
	'2': '2px',
	'3': '3px',
	'4': '4px',
	'5': '6px',
	'6': '8px',
	'7': '10px',
	'8': '12px',
	'9': '16px',
}

const fontWeights = {
	'100': '100', // thin
	'200': '200', // extra light, ultra light
	'300': '300', // light
	'400': '400', // normal, book, regular
	'500': '500', // medium
	'600': '600', // semi bold, demi bold
	'700': '700', // bold
	'800': '800', // extra bold, ultra bold
	'900': '900', // black, heavy
}

export const tokens = {
	colors,
	space: {
		...space,
		// ...spacing,
	},
	sizes: {
		// ...space,
		...sizes,
		// ...max,
	},
	fontSizes,
	fonts: {
		main: 'Inter, georgia, apple-system, sans-serif',
		mono: '"Azeret Mono", menlo, monospace',
		sans: 'Inter, georgia, apple-system, sans-serif',
	},
	fontWeights: {
		thinnn: '100', // thin
		thinn: '200', // extra light, ultra light
		thin: '300', // light
		book: '400', // normal, book, regular
		medi: '500', // medium
		semi: '600', // semi bold, demi bold
		thic: '700', // bold
		thicc: '800', // extra bold, ultra bold
		thiccc: '900', // black, heavy
	},
	// TODO: redo line heights

	//
	// letterSpacings: {},
	borders: {
		no: '0',
		muted: '1px solid $colors$muted',
	},
	borderWidths: {
		...borderWidths,
		no: borderWidths['0'],
		xs: borderWidths['1'],
		sm: borderWidths['2'],
		md: borderWidths['3'],
		lg: borderWidths['4'],
		xl: borderWidths['5'],
		'2xl': borderWidths['6'],
		'3xl': borderWidths['7'],
		'4xl': borderWidths['8'],
		'5xl': borderWidths['9'],
	},
	borderStyles: {},
	radii: {
		...radii,
		no: radii['0'],
		xs: radii['1'],
		sm: radii['2'],
		md: radii['3'],
		lg: radii['4'],
		xl: radii['5'],
		'2xl': radii['6'],
		'3xl': radii['7'],
		'4xl': radii['8'],
		'5xl': radii['9'],
		full: radii['10'],
	},
	// TODO: redo shadows
	shadows: {
		popup: '0 0 6px 0 rgba(0, 0, 0, 0.67)',
		sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
		hard: '4px 4px 0px 0 $colors$black',
		base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
		md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
		lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
		xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
		'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
		'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
		inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
		none: 'none',
	},
	// zIndices: {},
	// TODO: redo transitions
	transitions: {
		1: 'all cubic-bezier(0.4, 0, 0.2, 1) 150ms',
		2: 'opacity cubic-bezier(0.4, 0, 0.2, 1) 150ms',
		3: 'all cubic-bezier(0.4, 0, 0.2, 1) 350ms',
	},
}

type SpaceOrPx = Stitches.ScaleValue<'space'> | `${number}px`

export const utils = {
	m: (value: SpaceOrPx) => ({
		marginTop: value,
		marginBottom: value,
		marginLeft: value,
		marginRight: value,
	}),
	mt: (value: SpaceOrPx) => ({
		marginTop: value,
	}),
	mr: (value: SpaceOrPx | 'auto') => ({
		marginRight: value,
	}),
	mb: (value: SpaceOrPx) => ({
		marginBottom: value,
	}),
	ml: (value: SpaceOrPx | 'auto') => ({
		marginLeft: value,
	}),
	mx: (value: SpaceOrPx | 'auto') => ({
		marginLeft: value,
		marginRight: value,
	}),
	my: (value: SpaceOrPx) => ({
		marginTop: value,
		marginBottom: value,
	}),
	p: (value: SpaceOrPx) => ({
		paddingTop: value,
		paddingBottom: value,
		paddingLeft: value,
		paddingRight: value,
	}),
	pt: (value: SpaceOrPx) => ({
		paddingTop: value,
	}),
	pr: (value: SpaceOrPx) => ({
		paddingRight: value,
	}),
	pb: (value: SpaceOrPx) => ({
		paddingBottom: value,
	}),
	pl: (value: SpaceOrPx) => ({
		paddingLeft: value,
	}),
	px: (value: SpaceOrPx) => ({
		paddingLeft: value,
		paddingRight: value,
	}),
	py: (value: SpaceOrPx) => ({
		paddingTop: value,
		paddingBottom: value,
	}),
	text: (value: string) => ({
		fontSize: value,
		lineHeight: value,
	}),
	w: (value: Stitches.ScaleValue<'sizes'>) => ({
		width: value,
	}),
	h: (value: Stitches.ScaleValue<'sizes'>) => ({
		height: value,
	}),
	size: (value: Stitches.ScaleValue<'sizes'>) => ({
		w: value,
		h: value,
	}),
	s: (value: Stitches.ScaleValue<'space'>) => ({
		// Unfortunately gap doesn't work on mobile Safari
		gap: value,
		// '& > * + *': {
		// 	ml: value,
		// },
	}),
	sx: (value: Stitches.ScaleValue<'space'>) => ({
		// Unfortunately gap doesn't work on mobile Safari
		columnGap: value,
		// '& > * + *': {
		// 	ml: value,
		// },
	}),
	sy: (value: Stitches.ScaleValue<'space'>) => ({
		// Unfortunately gap doesn't work on mobile Safari
		rowGap: value,
		// '& > * + *': {
		// 	mt: value,
		// },
	}),
	backdropFilter: (value: string) => ({
		backdropFilter: value,
		'-webkit-backdrop-filter': value,
	}),
	linearGradient: (value: string) => ({
		backgroundImage: `linear-gradient(${value})`,
	}),
	blur: (value: string) => ({
		filter: `blur(${value})`,
	}),
	bg: (value: Stitches.PropertyValue<'color'>) => ({
		backgroundColor: value,
	}),
	br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
		borderRadius: value,
	}),
	clip: (value: string) => {
		const values: {
			[key: string]: string
		} = {
			hexagon:
				'polygon(50% 0, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)',
		}

		return {
			clipPath: values[value] || value,
		}
	},
	b: (value: Stitches.PropertyValue<'color'>) => {
		// TODO: rework
		// const [value1, value2] = value.split('-')
		// `${}-${
		// type BorderValue = Stitches.PropertyValue<'color'>

		return {
			border: `1px solid ${value}`,
		}
	},
	truncate: (value: any) => ({
		overflow: 'hidden',
		whiteSpace: 'nowrap',
		textOverflow: 'ellipsis',
	}),
}

// --tw-space-y-reverse: 0;
// margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
// margin-bottom: calc(0px * var(--tw-space-y-reverse));
