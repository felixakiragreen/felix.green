<script lang="ts">
	import type { ComponentProps } from 'svelte'
	import type { PropCss, SocialLink, PropBoolean } from '@/types'

	import { HStack, Button } from '@/fui'
	import IconSocialLink from './IconSocialLink.svelte'

	export let socials: SocialLink[]

	export let gap: ComponentProps<HStack>['gap'] = 'sm'
	export let align: ComponentProps<HStack>['align'] = undefined
	export let css: PropCss = undefined

	export let shape: 'square' | 'hexagon' = 'square'
	export let rounded: PropBoolean = undefined

	let cssInl: PropCss
	$: cssInl = css
		? { ...css, '> *': { size: 'var(--ICON-size, $space$6)' } }
		: { '> *': { size: 'var(--ICON-size, $space$6)' } }
</script>

<HStack css={cssInl} {gap} {align}>
	{#each socials as { url, hex, hue, path, transform }}
		<Button look="icon" size="no">
			<IconSocialLink
				{url}
				{path}
				{transform}
				{...{ shape, rounded }}
				newTab={true}
			/>
		</Button>
	{/each}
</HStack>
