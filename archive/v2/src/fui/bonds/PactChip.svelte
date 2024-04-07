<script lang="ts">
	import { stitch, BoxAtom } from '@/fui'
	import type { PropCss, VariantOption } from '@/types'

	import Text from './Text.svelte'

	export let css: PropCss = undefined
	export let look: VariantOption<typeof ss, 'look'> | undefined = 'base'

	// TODO: rename / rework to CHIP

	const ss = stitch({
		position: 'relative',
		px: '$2',
		pb: '3px',
		borderRadius: '$xl',

		variants: {
			look: {
				base: {},
				green: {
					bg: '$felix',
					color: '$black',
				},
				black: {
					bg: '$black',
					color: '$felix',
					border: '2px solid $felix',
				},
				blue: {
					bg: '$pact_blue',
					color: '$black',
				},
				purple: {
					bg: '$indigo',
					color: '$white',
				},
				red: {
					bg: '$wriggler',
					color: '$black',
				},
				orange: {
					bg: '$orange400',
					color: '$black',
				},
				gold: {
					bg: '$worm_halo_gold',
					color: '$black',
				},
				pink: {
					bg: '$worm',
					color: '$black',
				},
			},
		},
	})
</script>

<BoxAtom cls={ss} vrt={{ look }} {css}>
	<Text size="xs">
		<slot />
	</Text>
</BoxAtom>
