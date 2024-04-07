<script lang="ts">
	import type { ComponentProps } from 'svelte'
	import { stitch, InputAtom, Textarea } from '@/fui'
	import type { PropCss, VariantOption } from '@/types'

	export let css: PropCss = undefined
	export let look: VariantOption<typeof ss, 'look'> | undefined = 'holo'
	export let size: VariantOption<typeof ss, 'size'> | undefined = 'md'
	export let rounding: VariantOption<typeof ss, 'rounding'> | undefined =
		'partial'
	export let lines: number | undefined = undefined

	export let value = ''
	export let placeholder = ''
	export let inputType: ComponentProps<InputAtom>['inputType'] = undefined

	const ss = stitch({
		transition: '$1',
		variants: {
			look: {
				holo: {
					bg: '$clear',
					color: '$foreground',
					border: '1px solid $muted',
					fontFamily: '$mono',
					'&:hover': {
						border: '1px solid $worm',
					},
					'&:focus': {
						border: '1px solid $indigo',
						outline: 'none',
					},
				},
			},
			size: {
				sm: {
					px: '$3',
					py: '$1_5',
					text: '$md',
				},
				md: {
					px: '$4',
					py: '$2',
					text: '$lg',
				},
				lg: {
					px: '$6',
					py: '$3',
					text: '$xl',
				},
			},
			rounding: {
				none: {
					borderRadius: '$none',
				},
				partial: {
					borderRadius: '$base',
				},
				full: {
					borderRadius: '$full',
				},
			},
		},
	})
</script>

{#if typeof lines === 'number'}
	<Textarea
		cls={ss}
		vrt={{ look, size, rounding }}
		{css}
		bind:value
		on:input
		on:change
		on:focus
		on:blur
		{placeholder}
		{lines}
	/>
{:else}
	<InputAtom
		cls={ss}
		vrt={{ look, size, rounding }}
		{css}
		bind:value
		on:input
		on:change
		on:focus
		on:blur
		{placeholder}
		{inputType}
	/>
{/if}
