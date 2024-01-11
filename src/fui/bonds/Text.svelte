<script lang="ts">
	import { stitch } from '@/fui'
	import type { PropCss, PropString, PropBoolean, VariantOption } from '@/types'
	import { Span, Para, Heading } from '@/fui/atoms'

	type TextType = 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	export let as: TextType = 'span'

	export let id: PropString = undefined
	export let css: PropCss = undefined

	export let size: VariantOption<typeof ss, 'size'> | undefined = undefined
	export let weight: VariantOption<typeof ss, 'weight'> | undefined = undefined
	export let look: VariantOption<typeof ss, 'look'> | undefined = undefined
	export let color: VariantOption<typeof ss, 'color'> | undefined = undefined
	export let br: PropBoolean = undefined
	export let nobr: PropBoolean = undefined
	export let pre: PropBoolean = undefined

	const ss = stitch({
		variants: {
			size: {
				xs: {
					text: '$xs',
				},
				sm: {
					text: '$sm',
				},
				md: {
					text: '$md',
				},
				lg: {
					text: '$lg',
				},
				xl: {
					text: '$xl',
				},
				'2xl': {
					text: '$2xl',
				},
				'3xl': {
					text: '$3xl',
				},
				'4xl': {
					text: '$4xl',
				},
				'5xl': {
					text: '$5xl',
				},
				'6xl': {
					text: '$6xl',
				},
				'7xl': {
					text: '$7xl',
				},
				'8xl': {
					text: '$8xl',
				},
				'9xl': {
					text: '$9xl',
				},
			},
			weight: {
				thinnn: {
					// thin, 100
					fontWeight: '$thinnn',
				},
				thinn: {
					// extra light, ultra light, 200
					fontWeight: '$thinn',
				},
				thin: {
					// light, 300
					fontWeight: '$thin',
				},
				book: {
					// normal, book, regular, 400
					fontWeight: '$book',
				},
				medi: {
					// medium, 500
					fontWeight: '$medi',
				},
				semi: {
					// semi bold, demi bold, 600
					fontWeight: '$semi',
				},
				thic: {
					// bold, 700
					fontWeight: '$thic',
				},
				thicc: {
					// extra bold, ultra bold, 800
					fontWeight: '$thicc',
				},
				thiccc: {
					// black, heavy, 900
					fontWeight: '$thiccc',
				},
			},
			// mdx: {
			// 	h1: {
			// 		fontWeight: '$bold',
			// 		text: '$4xl',
			// 		'@md': {
			// 			text: '$5xl',
			// 		},
			// 	},
			// 	h2: {
			// 		fontWeight: '$bold',
			// 		my: '$3',
			// 		text: '$3xl',
			// 		'@md': {
			// 			text: '$4xl',
			// 		},
			// 	},
			// 	h3: {
			// 		fontWeight: '$bold',
			// 		text: '$2xl',
			// 		'@md': {
			// 			text: '$3xl',
			// 		},
			// 	},
			// 	h4: {
			// 		text: '$xl',
			// 		'@md': {
			// 			text: '$2xl',
			// 		},
			// 	},
			// 	h5: {
			// 		fontWeight: '$bold',
			// 		text: '$lg',
			// 		'@md': {
			// 			text: '$xl',
			// 		},
			// 	},
			// 	h6: {
			// 		fontWeight: '$bold',
			// 		text: '$md',
			// 		'@md': {
			// 			text: '$lg',
			// 		},
			// 	},
			// 	p: {
			// 		display: 'block',
			// 		py: '$2',
			// 		// text: '$lg',
			// 		// fontWeight: '$semi',
			// 		lineHeight: '$lg',
			// 		text: '$sm',
			// 		'@sm': {
			// 			text: '$md',
			// 		},
			// 		'@md': {
			// 			text: '$lg',
			// 		},
			// 	},
			// 	a: {
			// 		text: '$lg',
			// 		fontWeight: '$bold',
			// 		color: '$highlight',
			// 		textDecoration: 'none',
			// 		display: 'inline-block',
			// 		transition: '$1',
			// 		'&:hover': {
			// 			// backgroundColor: '$felix',
			// 			// color: '$indigo',
			// 			backgroundColor: '$highlight',
			// 			color: '$lowlight',
			// 			cursor: 'pointer',
			// 			px: '$1',
			// 			mx: '$-1',
			// 		},
			// 	},
			// 	ul: {
			// 		display: 'block',
			// 		py: '$2',
			// 		text: '$lg',
			// 		fontFamily: '$main',
			// 		// fontWeight: '$semi',
			// 		// lineHeight: '$2xl',
			// 	},
			// 	li: {
			// 		fontWeight: '$semi',
			// 	},
			// },
			color: {
				worm: {
					color: '$worm',
				},
				felix: {
					color: '$felix',
				},
				muted: {
					color: '$muted',
				},
				gold: {
					color: '$worm_halo_gold',
				},
				highlight: {
					color: '$highlight',
				},
				lowlight: {
					color: '$lowlight',
				},
				foreground: {
					color: '$foreground',
				},
				background: {
					color: '$background',
				},
			},
			look: {
				// subtitle: {
				// 	color: '$gold',
				// 	textTransform: 'uppercase',
				// 	fontWeight: '$semi',
				// },

				captionHeading: {
					text: '$md',
					fontWeight: '$thicc',
				},
				caption: {
					text: '$xs',
					color: '$muted',
					fontWeight: '$book',
				},

				mono: {
					// textTransform: 'uppercase',
					fontFamily: '$mono',
				},
			},
			// TODO: maybe breakpoints could be better

			br: {
				// breakpoints break
				true: {
					wordBreak: 'break-all',
				},
			},
			nobr: {
				true: {
					whiteSpace: 'nowrap',
				},
			},
			pre: {
				true: {
					whiteSpace: 'pre-line',
				},
			},
		},
	})
</script>

{#if as.startsWith('h')}
	<Heading
		{id}
		cls={ss}
		vrt={{ size, weight, color, look, br, nobr, pre }}
		{css}
		h={parseInt(as.slice(-1))}
	>
		<slot />
	</Heading>
{:else if as === 'p'}
	<Para {id} cls={ss} vrt={{ size, weight, color, look, br, nobr, pre }} {css}>
		<slot />
	</Para>
{:else}
	<Span {id} cls={ss} vrt={{ size, weight, color, look, br, nobr, pre }} {css}>
		<slot />
	</Span>
{/if}
