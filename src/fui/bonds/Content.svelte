<script lang="ts">
	import { stitch } from '@/fui'
	import type { PropCss, VariantOption } from '@/fui'
	import { stitching } from './Box.svelte'

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

	const ss = stitch(stitching, {
		// TODO: should this be enabled?
		// backgroundColor: "$background",
		// color: "$foreground",

		mx: 'auto',
		maxWidth: '$screen-lg',
		p: '$md',
	})
</script>

<section
	class={ss({
		...{
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
		},
		css,
	})}
>
	<slot />
</section>
