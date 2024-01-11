<script lang="ts">
	import { stitch, BoxAtom } from '@/fui'
	import type { PropCss, PropString, VariantOption } from '@/fui'
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
	//
	export let gap: VariantOption<typeof ss, 'gap'> | undefined = undefined
	export let align: VariantOption<typeof ss, 'align'> | undefined = undefined
	export let alignV: VariantOption<typeof ss, 'alignV'> | undefined = undefined

	const ss = stitch(stitching, {
		display: 'flex',
		flexDirection: 'column',

		variants: {
			gap: generateSpaceVariants('sy'),
			align: {
				leading: {
					alignItems: 'flex-start',
				},
				trailing: {
					alignItems: 'flex-end',
				},
				center: {
					alignItems: 'center',
				},
				baseline: {
					alignItems: 'baseline',
				},
			},
			alignV: {
				top: {
					justifyContent: 'start',
				},
				bottom: {
					justifyContent: 'end',
				},
				center: {
					justifyContent: 'center',
				},
			},
		},
	})
</script>

<BoxAtom
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
		align,
		alignV,
	}}
	{css}
	{id}
>
	<slot />
</BoxAtom>
