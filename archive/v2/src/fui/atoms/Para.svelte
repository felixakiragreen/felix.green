<script lang="ts">
	import { stitch } from '@/fui'
	import type { PropCss, PropString, PropComponent } from '@/types'

	export let id: PropString = undefined
	export let cls: PropComponent = undefined
	export let css: PropCss = undefined
	export let style: PropString = undefined
	export let vrt = {}

	const ss = cls || stitch({})
</script>

<p {id} class={ss({ ...vrt, css })} {style}>
	<slot />
</p>
