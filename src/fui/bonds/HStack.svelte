<script lang="ts">
	import { stitch, BoxAtom } from '@/fui'
	import type {
		PropCss,
		PropString,
		VariantOption,
		VariantOptionBool,
	} from '@/fui'
	import { generateSpaceVariants } from '@/fui/style/variants'
	import { stitching } from './Box.svelte'

	export let id: PropString = undefined
	export let css: PropCss = undefined

	// padding
	export let p: VariantOption<typeof ss, 'p'> | undefined = undefined
	export let px: VariantOption<typeof ss, 'px'> | undefined = undefined
	export let py: VariantOption<typeof ss, 'py'> | undefined = undefined
	export let pt: VariantOption<typeof ss, 'pt'> | undefined = undefined
	export let pr: VariantOption<typeof ss, 'pr'> | undefined = undefined
	export let pb: VariantOption<typeof ss, 'pb'> | undefined = undefined
	export let pl: VariantOption<typeof ss, 'pl'> | undefined = undefined
	// margin
	export let m: VariantOption<typeof ss, 'm'> | undefined = undefined
	export let mx: VariantOption<typeof ss, 'mx'> | undefined = undefined
	export let my: VariantOption<typeof ss, 'my'> | undefined = undefined
	export let mt: VariantOption<typeof ss, 'mt'> | undefined = undefined
	export let mr: VariantOption<typeof ss, 'mr'> | undefined = undefined
	export let mb: VariantOption<typeof ss, 'mb'> | undefined = undefined
	export let ml: VariantOption<typeof ss, 'ml'> | undefined = undefined
	// color
	export let bg: VariantOption<typeof ss, 'bg'> | undefined = undefined
	export let fg: VariantOption<typeof ss, 'fg'> | undefined = undefined
	// gap, gapV, align, alignV, collapse
	export let gap: VariantOption<typeof ss, 'gap'> | undefined = undefined
	export let gapV: VariantOption<typeof ss, 'gapV'> | undefined = undefined
	export let align: VariantOption<typeof ss, 'align'> | undefined = undefined
	export let alignV: VariantOption<typeof ss, 'alignV'> | undefined = undefined
	export let collapse: VariantOption<typeof ss, 'collapse'> | undefined =
		undefined
	export let wrap: VariantOptionBool<typeof ss, 'wrap'> | undefined = undefined

	const ss = stitch(stitching, {
		display: 'flex',

		variants: {
			gap: generateSpaceVariants('sx'),
			gapV: generateSpaceVariants('sy'),
			align: {
				leading: {
					justifyContent: 'flex-start',
				},
				trailing: {
					justifyContent: 'flex-end',
				},
				center: {
					justifyContent: 'center',
				},
				between: {
					justifyContent: 'space-between',
				},
			},
			alignV: {
				top: {
					alignItems: 'flex-start',
				},
				bottom: {
					alignItems: 'flex-end',
				},
				center: {
					alignItems: 'center',
				},
				baseline: {
					alignItems: 'baseline',
				},
			},
			collapse: {
				sm: {
					flexDirection: 'column',
					'@sm': {
						flexDirection: 'row',
					},
				},
				md: {
					flexDirection: 'column',
					'@md': {
						flexDirection: 'row',
					},
				},
				lg: {
					flexDirection: 'column',
					'@lg': {
						flexDirection: 'row',
					},
				},
			},
			wrap: {
				true: {
					flexWrap: 'wrap',
				},
			},
		},
	})
</script>

<BoxAtom
	{id}
	cls={ss}
	vrt={{
		p,
		px,
		py,
		pt,
		pb,
		pl,
		pr,
		//
		m,
		mx,
		my,
		mt,
		mb,
		ml,
		mr,
		//
		bg,
		fg,
		//
		gap,
		gapV,
		align,
		alignV,
		collapse,
		wrap,
	}}
	{css}
>
	<slot />
</BoxAtom>
