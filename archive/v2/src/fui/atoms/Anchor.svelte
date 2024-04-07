<script lang="ts">
	import { stitch } from '@/fui'
	import type { PropCss, PropString, PropComponent } from '@/fui'

	export let id: PropString = undefined
	export let cls: PropComponent = undefined
	export let css: PropCss = undefined
	export let style: PropString = undefined
	export let vrt = {}

	export let url: string
	export let fileName: PropString
	let download = fileName
	export let newTab = false
	let target = newTab ? '_blank' : '_self'

	const ss = cls || stitch({})
</script>

<a
	{id}
	href={url}
	{download}
	{target}
	class={ss({ ...vrt, css })}
	{style}
	on:click
>
	<slot />
</a>
