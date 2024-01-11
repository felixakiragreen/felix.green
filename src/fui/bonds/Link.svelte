<script lang="ts">
	import { stitch, Anchor } from '@/fui'
	import type { PropCss, PropString, VariantOption } from '@/types'

	export let url: string
	export let fileName: PropString = undefined
	export let newTab = false

	export let css: PropCss = undefined
	export let look: VariantOption<typeof ss, 'look'> | undefined = 'blocky'

	const ss = stitch({
		variants: {
			look: {
				clean: {
					textDecoration: 'none',
					color: 'inherit',
				},
				blocky: {
					// text: '$lg',
					// fontWeight: '$bold',
					color: '$foreground',
					textDecoration: 'none',
					borderBottom: '2px solid $highlight',
					display: 'inline-block',
					py: '$2',
					transition: '$1',

					// '& span': {
					// 	display: 'inline-block',
					// 	// transition: '$1',
					// 	// py: '$1',
					// 	// my: '$-1',
					// },

					'&:hover': {
						px: '$2',
						mx: '$-2',
						// backgroundColor: '$felix',
						// color: '$indigo',
						// color: '$background',
						cursor: 'pointer',
						backgroundColor: '$highlight',

						'& span': {},
					},
				},
				blockinho: {
					// color: '$highlight',
					// textDecoration: 'underline',
					color: '$foreground',
					textDecoration: 'none',
					display: 'inline-block',
					borderBottom: '1px solid currentcolor',
					// transition: '$1',

					'& span': {
						display: 'inline-block',
						transition: '$1',

						// py: '$1',
						// my: '$-1',
					},

					'&:hover': {
						// color: '$background',
						cursor: 'pointer',
						borderBottom: '1px solid transparent',

						'& span': {
							color: '$lowlight',
							backgroundColor: '$highlight',
							px: '$1',
							mx: '$-1',
						},
					},
				},
			},
			// textTransform: {
			// 	initial: {
			// 		textTransform: "initial"
			// 	},
			// 	uppercase: {
			// 		textTransform: 'uppercase',
			// 	},
			// }
		},
	})
</script>

<Anchor cls={ss} vrt={{ look }} {css} {url} {fileName} {newTab}>
	<span>
		<slot />
	</span>
</Anchor>
