<script lang="ts">
	import { Box, HStack, Image } from '@/fui'

	import miniHexagon from '@/assets/mini-hexagon.svg'
</script>

<HStack
	css={{
		width: '100%',
	}}
	alignV="center"
	gap="md"
	px="lg"
>
	<Box
		css={{
			height: '1px',
			flex: '1',
			bg: '$felix',
		}}
	/>
	<Image
		url={miniHexagon}
		css={{ width: 'var(--HexiUnit)', transform: 'rotate(90deg)' }}
	/>
	<Box
		css={{
			height: '1px',
			flex: '1',
			bg: '$felix',
		}}
	/>
</HStack>
