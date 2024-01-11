<script lang="ts">
	import { stitch, Span } from '@/fui'
	import type { PropCss, PropBoolean, VariantOption } from '@/types'

	export let css: PropCss = undefined
	export let all: PropBoolean = undefined
	export let no: PropBoolean = undefined
	export let above: VariantOption<typeof ss, 'above'> | undefined = undefined
	export let below: VariantOption<typeof ss, 'below'> | undefined = undefined

	const ss = stitch({
		variants: {
			all: {
				// breakpoints break
				true: {
					wordBreak: 'break-all',
				},
			},
			no: {
				true: {
					whiteSpace: 'nowrap',
				},
			},
			above: {
				xxs: {},
				xs: {
					display: 'none',
					'@xs': {
						display: 'initial',
					},
				},
				sm: {
					display: 'none',
					'@sm': {
						display: 'initial',
					},
				},
				md: {
					display: 'none',
					'@md': {
						display: 'initial',
					},
				},
				lg: {
					display: 'none',
					'@lg': {
						display: 'initial',
					},
				},
				xl: {
					display: 'none',
					'@xl': {
						display: 'initial',
					},
				},
			},
			below: {
				xxs: {
					'@xs': {
						display: 'none',
					},
				},
				xs: {
					'@sm': {
						display: 'none',
					},
				},
				sm: {
					'@md': {
						display: 'none',
					},
				},
				md: {
					'@lg': {
						display: 'none',
					},
				},
				lg: {
					'@xl': {
						display: 'none',
					},
				},
			},
		},
	})
</script>

<Span cls={ss} vrt={{ all, no, above, below }} {css}>
	{#if $$slots.default}
		<slot />
	{:else}
		<br />
	{/if}
</Span>
