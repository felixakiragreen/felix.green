<script lang="ts">
	import { stitch } from '@/fui'
	import type { PropCss, PropString, PropComponent, PropBoolean } from '@/types'

	export let id: PropString = undefined
	export let cls: PropComponent = undefined
	export let css: PropCss = undefined
	export let style: PropString = undefined
	export let vrt = {}

	export let disabled: PropBoolean = null

	const ss = cls || stitch({})
</script>

<button {id} class={ss({ ...vrt, css })} {style} {disabled} on:click>
	<slot />
</button>
