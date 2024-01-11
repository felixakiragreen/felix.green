<script lang="ts">
	import type { ComponentProps } from 'svelte'

	import type { PropCss, PropString, PropBoolean } from '@/types'

	import Link from './Link.svelte'
	import Button from './Button.svelte'

	export let css: PropCss = undefined

	export let url: string
	export let fileName: PropString = undefined
	export let newTab = false

	export let look: ComponentProps<Button>['look'] = undefined
	export let size: ComponentProps<Button>['size'] = undefined
	export let rounding: ComponentProps<Button>['rounding'] = undefined
	export let disabled: PropBoolean = undefined
</script>

<Link {url} {fileName} {newTab} look="clean">
	<Button {css} {look} {size} {rounding} {disabled}>
		<slot />
	</Button>
</Link>
