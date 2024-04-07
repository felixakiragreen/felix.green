<script lang="ts">
	import type { PropBoolean, PropString, SocialLink } from '@/types'

	import { Link } from '@/fui'
	import IconSocial from './IconSocial.svelte'

	export let url: string
	export let newTab = false

	export let path: PropString = undefined
	export let transform: SocialLink['transform']

	export let shape: 'square' | 'hexagon' = 'square'
	export let rounded: PropBoolean = undefined
</script>

<Link {url} {newTab} look="clean">
	<IconSocial {shape} {rounded} {path} {transform} />
</Link>
