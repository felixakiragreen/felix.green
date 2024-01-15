<script lang="ts">
	import type { ComponentProps } from 'svelte'
	import type { PropCss } from '@/types'
	import { IconTheme } from '@/types'

	import { socials } from './socials'
	import { IconSocialRow, HStack } from '@/fui/bonds'

	export let gap: ComponentProps<HStack>['gap'] = 'sm'
	export let align: ComponentProps<HStack>['align'] = undefined
	export let size: ComponentProps<IconSocialRow>['size'] = 'md'
	export let css: PropCss = undefined

	// variants
	export let symbol: IconTheme | undefined = IconTheme.Foreground
	export let ground: IconTheme | undefined = IconTheme.Background
	export let hoverSymbol: IconTheme | undefined = undefined
	export let hoverGround: IconTheme | undefined = undefined
</script>

<IconSocialRow
	{socials}
	{css}
	{gap}
	{align}
	{size}
	{symbol}
	shape="hexagon"
	look="icon"
	{ground}
	{hoverSymbol}
	{hoverGround}
/>
