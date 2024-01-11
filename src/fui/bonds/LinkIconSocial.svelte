<script lang="ts">
	import {
		IconTheme,
		type PropBoolean,
		type PropString,
		type SocialLink,
	} from '@/types'

	import Link from './Link.svelte'
	import IconSocial from './IconSocial.svelte'

	export let url: string
	export let newTab = false

	export let brandHue: PropString = undefined
	export let brandExact: PropString = undefined
	export let path: PropString = undefined
	export let transform: SocialLink['transform']

	export let shape: 'square' | 'hexagon' = 'square'
	export let rounded: PropBoolean = undefined

	export let symbol: IconTheme | undefined = IconTheme.Foreground
	export let ground: IconTheme | undefined = IconTheme.Background
	export let hoverSymbol: IconTheme | undefined = undefined
	export let hoverGround: IconTheme | undefined = undefined
</script>

<Link {url} {newTab} look="clean">
	<IconSocial
		{shape}
		{rounded}
		{path}
		{transform}
		{symbol}
		{ground}
		{hoverSymbol}
		{hoverGround}
		{brandHue}
		{brandExact}
	/>
</Link>
