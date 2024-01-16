<script lang="ts">
	import type { ComponentProps } from 'svelte'
	import type { PropCss } from '@/types'

	import { socials } from './socials'
	import { IconSocialRow, HStack } from '@/fui/bonds'

	export let gap: ComponentProps<HStack>['gap'] = 'sm'
	export let align: ComponentProps<HStack>['align'] = undefined
	export let size: ComponentProps<IconSocialRow>['size'] = 'md'
	export let css: PropCss = undefined
</script>

<IconSocialRow
	{socials}
	{css}
	{gap}
	{align}
	{size}
	shape="hexagon"
	look="icon"
/>
