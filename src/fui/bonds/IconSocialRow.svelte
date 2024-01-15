<script lang="ts">
	import type { ComponentProps } from 'svelte'
	import {
		IconTheme,
		type PropCss,
		type SocialLink,
		type PropBoolean,
	} from '@/types'

	import Button from './Button.svelte'
	import HStack from './HStack.svelte'
	import LinkIconSocial from './LinkIconSocial.svelte'

	export let socials: SocialLink[]

	export let gap: ComponentProps<HStack>['gap'] = 'sm'
	export let align: ComponentProps<HStack>['align'] = undefined
	type Size = 'sm' | 'md' | 'lg' | 'xl' | '2xl'
	export let look: ComponentProps<Button>['look'] = undefined
	export let size: Size | string = 'md'
	export let css: PropCss = undefined

	export let shape: 'square' | 'hexagon' = 'square'
	export let rounded: PropBoolean = undefined

	// variants
	export let symbol: IconTheme | undefined = IconTheme.Foreground
	export let ground: IconTheme | undefined = IconTheme.Background
	export let hoverSymbol: IconTheme | undefined = undefined
	export let hoverGround: IconTheme | undefined = undefined

	const iconSizes: {
		[key in string]: string
	} = {
		sm: '$space$5',
		md: '$space$6',
		lg: '$space$7',
		xl: '$space$8',
		'2xl': '$space$9',
	}

	$: iconSize = iconSizes[size] || size

	let cssInl: PropCss
	$: cssInl = css
		? { ...css, '> *': { size: iconSize } }
		: { '> *': { size: iconSize } }
</script>

<HStack css={cssInl} {gap} {align}>
	{#each socials as { url, hex, hue, path, transform }}
		<Button {look} size="no">
			<LinkIconSocial
				{url}
				{path}
				{transform}
				{...{ shape, rounded }}
				{...{ symbol, ground, hoverSymbol, hoverGround }}
				brandExact={hex}
				brandHue={hue}
			/>
		</Button>
	{/each}
</HStack>
