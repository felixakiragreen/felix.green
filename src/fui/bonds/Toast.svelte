<script lang="ts">
	import { stitch, BoxAtom } from '@/fui'
	import type { PropCss, PropString, VariantOption, Color } from '@/types'
	// import { Box } from '@/fui/atoms'

	import Text from './Text.svelte'
	import HStack from './HStack.svelte'
	import Link from './Link.svelte'
	import Button from './Button.svelte'

	// import { abbrev } from '@/lib/funcs/abbrev'

	export const id: PropString = undefined
	export let hue: Color | undefined = undefined

	type ToastType =
		| 'info'
		| 'requesting'
		| 'pending'
		| 'confirmed'
		| 'failed'
		| 'error'
		| 'warning'
		| 'new mint'
		| 'transfer'

	export let type: ToastType | string = 'info'
	export let memo = 'memo'
	export let hash: PropString = undefined
	export let url: PropString = undefined

	type CloseFunction = (e: MouseEvent) => void

	export let onClose: CloseFunction | undefined = undefined

	const getColor = () => {
		switch (true) {
			case typeof hue !== 'undefined':
				return hue
			case type == 'requesting':
			case type == 'warning':
				return 'orange'
			case type == 'pending':
				return 'blue'
			case type == 'failed':
			case type == 'error':
				return 'red'
			case type == 'confirmed':
			case type == 'new mint':
			case type == 'cart':
			case type == 'success':
				return 'green'
			case type == 'transfer':
				return 'purple'
			default:
				return 'grey'
		}
	}

	$: clr = type && getColor()
</script>

<HStack
	css={{
		mx: '$0',
		'@md': {
			mx: '$8',
		},
		background: '$grey700',
		'--cur': `$colors$${clr}400`,
		fontFamily: '$mono',
		p: '$4',
		borderRadius: '$base',
	}}
>
	<BoxAtom
		css={{
			width: '$2',
			bg: 'var(--cur)',
			m: '$-4',
			mr: '$4',
			borderRadius: '$base 0 0 $base',
		}}
	/>
	<HStack alignV="center" css={{ flex: 1 }}>
		<Text
			css={{
				fontFamily: '$mono',
				fontSize: '$sm',
				color: 'var(--cur)',
				flex: 1,
			}}
		>
			<Text weight="thic">
				{type}
			</Text>
			<Text css={{ color: '$grey300', wordWrap: 'break-all' }}>
				{memo}
			</Text>
			{#if hash && url}
				<Link
					newTab
					{url}
					css={{
						color: '$purple300',
						borderColor: '$purple300',
						'&:hover': {
							bg: '$purple500',
							color: '$white',
						},
					}}
				>
					<!-- {abbrev(hash, false, 8)} -->
				</Link>
				<!-- <Text css={{ color: '$muted', fontSize: '$xs' }}>
					(etherscan link, can take ~30 secs)
				</Text> -->
			{/if}
		</Text>
		{#if onClose}
			<Button
				on:click={onClose}
				look="holo"
				css={{
					size: '$10',
					p: '$0',
					fontSize: '$4xl',
					fontFamily: '$mono',
					lineHeight: '34px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'baseline',
				}}>×</Button
			>
		{/if}
	</HStack>
</HStack>
