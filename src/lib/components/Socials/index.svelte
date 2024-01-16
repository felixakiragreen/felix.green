<script lang="ts">
	import type { ComponentProps } from 'svelte'
	import type { PropCss } from '@/types'
	import { HStack } from '@/fui'

	import { socials } from './socials'
	import IconSocialRow from './IconSocialRow.svelte'

	export let gap: ComponentProps<HStack>['gap'] = 'sm'
	export let align: ComponentProps<HStack>['align'] = undefined
	export let size: ComponentProps<IconSocialRow>['size'] = 'md'
	export let css: PropCss = undefined

	export let shape: 'square' | 'hexagon' = 'square'
</script>

<IconSocialRow {socials} {css} {gap} {align} {size} {shape} />
