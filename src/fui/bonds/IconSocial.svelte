<script lang="ts">
	import { stitch, BoxAtom } from '@/fui'
	import {
		type PropBoolean,
		type PropString,
		type PropCss,
		type SocialLink,
	} from '@/types'

	import SvgSquare from './SvgSquare.svelte'
	import SvgHexagon from './SvgHexagon.svelte'

	export let css: PropCss = undefined

	export let path: PropString = undefined
	export let transform: SocialLink['transform']

	export let shape: 'square' | 'hexagon' = 'square'
	export let rounded: PropBoolean = undefined

	const ss = stitch({
		transition: '$1',

		color: 'var(--ground)',

		'--symbol': 'var(--ICON-symbol)',
		'--ground': 'var(--ICON-ground)',
		'--stroke': 'var(--ICON-stroke)',
		'&:hover': {
			'--symbol': 'var(--ICON-symbol-hover, var(--ICON-symbol))',
			'--ground': 'var(--ICON-ground-hover, var(--ICON-ground))',
			'--stroke': 'var(--ICON-stroke-hover, var(--ICON-stroke))',
		},
	})
</script>

<BoxAtom cls={ss} {css}>
	{#if shape === 'square'}
		<SvgSquare fill="currentcolor">
			<g
				transform={`translate(${transform.translate.x},${transform.translate.y}) scale(${transform.scale})`}
			>
				<path d={path} id="foreground" fill="var(--symbol)" />
			</g>
		</SvgSquare>
	{:else if shape === 'hexagon'}
		<SvgHexagon {rounded} fill="currentcolor" stroke="var(--stroke)">
			<g
				transform={`translate(${transform.translate.x},${transform.translate.y}) scale(${transform.scale})`}
			>
				<path d={path} id="foreground" fill="var(--symbol)" />
			</g>
		</SvgHexagon>
	{/if}
</BoxAtom>
