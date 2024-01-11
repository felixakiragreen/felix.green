<script lang="ts">
	import { stitch } from '@/fui'
	import type { PropCss, PropString, PropComponent } from '@/types'

	export let id: PropString = undefined
	export let cls: PropComponent = undefined
	export let css: PropCss = undefined
	export let style: PropString = undefined
	export let vrt = {}

	export let value = ''
	export let placeholder = ''
	export let lines: number | undefined = undefined
	let rows = lines

	const ss = cls || stitch({})
</script>

<textarea
	{id}
	class={ss({ ...vrt, css })}
	{style}
	bind:value
	on:input
	on:change
	on:blur
	{placeholder}
	{rows}
/>
