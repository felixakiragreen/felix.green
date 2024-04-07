<script lang="ts">
	import { stitch } from '@/fui'
	import type { PropCss, PropString, PropComponent } from '@/types'

	export let id: PropString = undefined
	export let cls: PropComponent = undefined
	export let css: PropCss = undefined
	export let style: PropString = undefined
	export let vrt = {}

	export let alt: PropString = 'image description'
	export let url: string
	export let url2x: PropString = undefined

	const ss = cls || stitch({})
</script>

<img
	{id}
	class={ss({ ...vrt, css })}
	src={url}
	{...url2x ? { srcset: `${url2x} 2x` } : {}}
	{style}
	{alt}
/>
