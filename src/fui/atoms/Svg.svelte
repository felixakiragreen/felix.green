<script lang="ts">
	import { stitch } from '@/fui'
	import type { PropCss, PropString, PropComponent } from '@/types'

	export let id: PropString = undefined
	export let cls: PropComponent = undefined
	export let css: PropCss = undefined
	export let style: PropString = undefined
	export let vrt = {}

	export let viewBox: string

	const ss = cls || stitch({})
</script>

<svg
	{id}
	class={ss({ ...vrt, css })}
	{viewBox}
	x="0%"
	y="0%"
	width="100%"
	height="100%"
	{...$$props}
	{style}
>
	<slot />
</svg>
