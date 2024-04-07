<script lang="ts">
	import { stitch } from '@/fui'
	import type { PropCss, PropString, PropComponent } from '@/types'

	export let id: PropString = undefined
	export let cls: PropComponent = undefined
	export let css: PropCss = undefined
	export let style: PropString = undefined
	export let vrt = {}

	export let h = 1

	const ss = cls || stitch({})
</script>

{#if h === 6}
	<h6 {id} class={ss({ ...vrt, css })} {style}>
		<slot />
	</h6>
{:else if h === 5}
	<h5 {id} class={ss({ ...vrt, css })} {style}>
		<slot />
	</h5>
{:else if h === 4}
	<h4 {id} class={ss({ ...vrt, css })} {style}>
		<slot />
	</h4>
{:else if h === 3}
	<h3 {id} class={ss({ ...vrt, css })} {style}>
		<slot />
	</h3>
{:else if h === 2}
	<h2 {id} class={ss({ ...vrt, css })} {style}>
		<slot />
	</h2>
{:else}
	<h1 {id} class={ss({ ...vrt, css })} {style}>
		<slot />
	</h1>
{/if}
