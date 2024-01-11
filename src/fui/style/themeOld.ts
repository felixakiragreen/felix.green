import type * as Stitches from '@stitches/core'
import { colors } from './color'

const space = {
	0: '0px', // 0px
	px: '1px', // 1px
	'0_5': '0.125rem', // 2px
	1: '0.25rem', // 4px
	'1_5': '0.375rem', // 6px
	2: '0.5rem', // 8px
	'2_5': '0.625rem', // 10px
	3: '0.75rem', // 12px
	'3_5': '0.875rem', // 14px
	4: '1rem', // 16px
	5: '1.25rem', // 20px
	6: '1.5rem', // 24px
	7: '1.75rem', // 28px
	8: '2rem', // 32px
	9: '2.25rem', // 36px
	10: '2.5rem', // 40px
	11: '2.75rem', // 44px
	12: '3rem', // 48px
	14: '3.5rem', // 56px
	16: '4rem', // 64px
	20: '5rem', // 80px
	24: '6rem', // 96px
	28: '7rem', // 112px
	32: '8rem', // 128px
	36: '9rem', // 144px
	40: '10rem', // 160px
	44: '11rem', // 176px
	48: '12rem', // 192px
	52: '13rem', // 208px
	56: '14rem', // 224px
	60: '15rem', // 240px
	64: '16rem', // 256px
	72: '18rem', // 288px
	80: '20rem', // 320px
	96: '24rem', // 384px
	112: '28rem', // 448px
	128: '32rem', // 512px
	144: '36rem', // 576px
	160: '40rem', // 640px
	'-px': '-1px', // 1px
	'-0_5': '-0.125rem', // 2px
	'-1': '-0.25rem', // 4px
	'-1_5': '-0.375rem', // 6px
	'-2': '-0.5rem', // 8px
	'-2_5': '-0.625rem', // 10px
	'-3': '-0.75rem', // 12px
	'-3_5': '-0.875rem', // 14px
	'-4': '-1rem', // 16px
	'-5': '-1.25rem', // 20px
	'-6': '-1.5rem', // 24px
	'-7': '-1.75rem', // 28px
	'-8': '-2rem', // 32px
	'-9': '-2.25rem', // 36px
	'-10': '-2.5rem', // 40px
	'-11': '-2.75rem', // 44px
	'-12': '-3rem', // 48px
	'-14': '-3.5rem', // 56px
	'-16': '-4rem', // 64px
	'-20': '-5rem', // 80px
	'-24': '-6rem', // 96px
	'-28': '-7rem', // 112px
	'-32': '-8rem', // 128px
	'-36': '-9rem', // 144px
	'-40': '-10rem', // 160px
	'-44': '-11rem', // 176px
	'-48': '-12rem', // 192px
	'-52': '-13rem', // 208px
	'-56': '-14rem', // 224px
	'-60': '-15rem', // 240px
	'-64': '-16rem', // 256px
	'-72': '-18rem', // 288px
	'-80': '-20rem', // 320px
	'-96': '-24rem', // 384px
	'-112': '-28rem', // 448px
	'-128': '-32rem', // 512px
	'-144': '-36rem', // 576px
	'-160': '-40rem', // 640px
}

const spacing = {
	no: space[0],
	xs: space[1],
	sm: space[2],
	md: space[4],
	lg: space[6],
	xl: space[8],
	'2xl': space[10],
	'3xl': space[12],
	'4xl': space[16],
	'5xl': space[20],
	'6xl': space[24],
	'7xl': space[28],
	'8xl': space[32],
	'9xl': space[36],
}

// create a util...

const max = {
	full: '100%',
	min: 'min-content',
	max: 'max-content',
	prose: '65ch', // characters
	'screen-vw': '100vw',
	'screen-vh': '100vh',
	'screen-sm': '480px',
	'screen-md': '640px',
	'screen-lg': '1024px',
	'screen-xl': '1280px',
	'screen-xxl': '1536px',
}

const radii = {
	no: '0px', // 0px
	xs: '0.125rem', // 2px
	sm: '0.25rem', // 4px
	md: '0.375rem', // 6px
	lg: '0.5rem', // 8px
	xl: '0.75rem', // 12px
	'2xl': '1rem', // 16px
	'3xl': '1.5rem', // 24px
	'4xl': '2rem', // 32px
	'5xl': '2.5rem', // 40px
	full: '9999px', // 9999px
}

export const tokens = {
	colors,
	space: {
		...space,
		...spacing,
	},
	sizes: {
		...space,
		...max,
	},
	fontSizes: {
		xs: '0.75rem',
		sm: '0.875rem',
		md: '1rem',
		lg: '1.125rem',
		xl: '1.25rem',
		'2xl': '1.5rem',
		'3xl': '1.875rem',
		'4xl': '2.25rem',
		'5xl': '3rem',
		'6xl': '3.75rem',
		'7xl': '4.5rem',
		'8xl': '6rem',
		'9xl': '8rem',
	},
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
	lineHeights: {
		xs: '1rem',
		sm: '1.25rem',
		md: '1.5rem',
		lg: '1.75rem',
		xl: '2rem',
		'2xl': '2.25rem',
		'3xl': '2.5rem',
		'4xl': '2.75rem',
		'5xl': '1',
		'6xl': '1',
		'7xl': '1',
		'8xl': '1',
		'9xl': '1',
	},
	//
	// letterSpacings: {},
	// sizes: {},
	borders: {
		no: '0',
		muted: '1px solid $colors$muted',
	},
	borderWidths: {
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
	},
	borderStyles: {},
	radii: {
		...radii,
		'0': radii['no'],
		'1': radii['xs'],
		'2': radii['sm'],
		'3': radii['md'],
		'4': radii['lg'],
		'5': radii['xl'],
		'6': radii['2xl'],
		'7': radii['3xl'],
		'8': radii['4xl'],
		'9': radii['5xl'],
		'10': radii['full'],
	},
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
