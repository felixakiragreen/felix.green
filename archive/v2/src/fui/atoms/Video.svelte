<script lang="ts">
	import { stitch } from '@/fui'
	import type { PropCss, PropString, PropComponent } from '@/types'

	export let id: PropString = undefined
	export let cls: PropComponent = undefined
	export let css: PropCss = undefined
	export let style: PropString = undefined
	export let vrt = {}

	export let url: string
	export let loop = true
	export let autoPlay = true
	export let type = 'video/mp4'

	const ss = cls || stitch({})
</script>

<video {id} class={ss({ ...vrt, css })} {style} {loop} autoplay={autoPlay}>
	<source src={url} {type} />
	<track default kind="captions" />
</video>
