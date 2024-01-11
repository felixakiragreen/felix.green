<script lang="ts">
	import { stitch, Box } from '@/fui'
	import type { PropCss, PropBoolean, VariantOption } from '@/types'

	export let css: PropCss = undefined
	export let below: VariantOption<typeof ss, 'below'> | undefined = undefined
	export let above: VariantOption<typeof ss, 'above'> | undefined = undefined
	export let inline = true

	const ss = stitch({
		variants: {
			inline: {
				true: {
					display: 'inline-block',
				},
				false: {
					display: 'block',
				},
			},
			below: {
				xxs: {
					display: 'none',
					'@xxs': {
						display: 'initial',
					},
				},
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
			},
			above: {
				xxs: {
					display: 'initial',
					'@xxs': {
						display: 'none',
					},
				},
				xs: {
					display: 'initial',
					'@xs': {
						display: 'none',
					},
				},
				sm: {
					display: 'initial',
					'@sm': {
						display: 'none',
					},
				},
				md: {
					display: 'initial',
					'@md': {
						display: 'none',
					},
				},
				lg: {
					display: 'initial',
					'@lg': {
						display: 'none',
					},
				},
			},
		},
	})
</script>

<Box cls={ss} vrt={{ inline, above, below }} {css}>
	<slot />
</Box>
