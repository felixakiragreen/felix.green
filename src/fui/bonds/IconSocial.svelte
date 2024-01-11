<script lang="ts">
	import { stitch, Box } from '@/fui'
	import {
		type PropBoolean,
		type PropString,
		type PropCss,
		type SocialLink,
		IconTheme,
	} from '@/types'

	import SvgSquare from './SvgSquare.svelte'
	import SvgHexagon from './SvgHexagon.svelte'

	export let css: PropCss = undefined

	export let brandHue: PropString = undefined
	export let brandExact: PropString = undefined
	export let path: PropString = undefined
	export let transform: SocialLink['transform']

	export let shape: 'square' | 'hexagon' = 'square'
	export let rounded: PropBoolean = undefined

	export let symbol: IconTheme | undefined = IconTheme.Foreground
	export let ground: IconTheme | undefined = IconTheme.Background
	export let hoverSymbol: IconTheme | undefined = undefined
	export let hoverGround: IconTheme | undefined = undefined

	const ss = stitch({
		transition: '$1',

		color: 'var(--ground)',

		'--symbol': 'var(--stillSymbol)',
		'--ground': 'var(--stillGround)',
		'&:hover': {
			'--symbol': 'var(--hoverSymbol, var(--stillSymbol))',
			'--ground': 'var(--hoverGround, var(--stillGround))',
		},

		variants: {
			symbol: {
				[IconTheme.Clear]: {
					'--stillSymbol': '$colors$clear',
				},
				[IconTheme.CurrentColor]: {
					'--stillSymbol': 'var(--currentColor)',
				},
				[IconTheme.Foreground]: {
					'--stillSymbol': '$colors$foreground',
				},
				[IconTheme.Background]: {
					'--stillSymbol': '$colors$background',
				},
				[IconTheme.Highlight]: {
					'--stillSymbol': '$colors$highlight',
				},
				[IconTheme.Lowlight]: {
					'--stillSymbol': '$colors$lowlight',
				},
				[IconTheme.BrandExact]: {
					'--stillSymbol': 'var(--brandExact)',
				},
				[IconTheme.BrandHue]: {
					'--stillSymbol': 'var(--brandHue400)',
				},
			},
			ground: {
				//
				[IconTheme.Clear]: {
					'--stillGround': '$colors$clear',
				},
				[IconTheme.CurrentColor]: {
					'--stillGround': 'var(--currentColor)',
				},
				[IconTheme.Foreground]: {
					'--stillGround': '$colors$foreground',
				},
				[IconTheme.Background]: {
					'--stillGround': '$colors$background',
				},
				[IconTheme.Highlight]: {
					'--stillGround': '$colors$highlight',
				},
				[IconTheme.Lowlight]: {
					'--stillGround': '$colors$lowlight',
				},
				[IconTheme.BrandExact]: {
					'--stillGround': 'var(--brandExact)',
				},
				[IconTheme.BrandHue]: {
					'--stillGround': 'var(--brandHue400)',
				},
			},
			hoverSymbol: {
				//
				[IconTheme.Clear]: {
					'--hoverSymbol': '$colors$clear',
				},
				[IconTheme.CurrentColor]: {
					'--hoverSymbol': 'var(--currentColor)',
				},
				[IconTheme.Foreground]: {
					'--hoverSymbol': '$colors$foreground',
				},
				[IconTheme.Background]: {
					'--hoverSymbol': '$colors$background',
				},
				[IconTheme.Highlight]: {
					'--hoverSymbol': '$colors$highlight',
				},
				[IconTheme.Lowlight]: {
					'--hoverSymbol': '$colors$lowlight',
				},
				[IconTheme.BrandExact]: {
					'--hoverSymbol': 'var(--brandExact)',
				},
				[IconTheme.BrandHue]: {
					'--hoverSymbol': 'var(--brandHue400)',
				},
			},
			hoverGround: {
				//
				[IconTheme.Clear]: {
					'--hoverGround': '$colors$clear',
				},
				[IconTheme.CurrentColor]: {
					'--hoverGround': 'var(--currentColor)',
				},
				[IconTheme.Foreground]: {
					'--hoverGround': '$colors$foreground',
				},
				[IconTheme.Background]: {
					'--hoverGround': '$colors$background',
				},
				[IconTheme.Highlight]: {
					'--hoverGround': '$colors$highlight',
				},
				[IconTheme.Lowlight]: {
					'--hoverGround': '$colors$lowlight',
				},
				[IconTheme.BrandExact]: {
					'--hoverGround': 'var(--brandExact)',
				},
				[IconTheme.BrandHue]: {
					'--hoverGround': 'var(--brandHue400)',
				},
			},
		},
	})
</script>

<Box
	cls={ss}
	vrt={{ symbol, ground, hoverSymbol, hoverGround }}
	style="
		--brandExact: {brandExact};
		--brandHue: {brandHue};
		--brandHue400: var(--colors-{brandHue}400);
	"
	{css}
>
	{#if shape === 'square'}
		<SvgSquare fill="currentcolor">
			<g
				transform={`translate(${transform.translate.x},${transform.translate.y}) scale(${transform.scale})`}
			>
				<path d={path} id="foreground" fill="var(--symbol)" />
			</g>
		</SvgSquare>
	{:else if shape === 'hexagon'}
		<SvgHexagon fill="currentcolor" {rounded}>
			<g
				transform={`translate(${transform.translate.x},${transform.translate.y}) scale(${transform.scale})`}
			>
				<path d={path} id="foreground" fill="var(--symbol)" />
			</g>
		</SvgHexagon>
	{/if}
</Box>
