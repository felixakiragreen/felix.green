<script lang="ts">
	import {
		Box,
		Content,
		VStack,
		HStack,
		Text,
		Link,
		LinkButton,
		Image,
		Break,
		SvgHexagon,
	} from '@/fui'

	import stretchFlatHexagon from '@/assets/stretch-flat-hexagon.svg'
	import SvgHexagonFlatStretch from '@/fui/bonds/SvgHexagonFlatStretch.svelte'

	const bgSx = {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		pointerEvents: 'none',
	}
</script>

<VStack align="center">
	<Text size="2xl">Projects</Text>

	<HStack
		css={{
			position: 'relative',
			px: '$3xl',
			py: '$sm',
			bg: '$background',
		}}
	>
		<Box
			css={{
				...bgSx,
				zIndex: 2,
				// p: '$xl',
				// backgroundImage: `url(${stretchFlatHexagon})`,
			}}
		>
			<Image
				url={stretchFlatHexagon}
				css={{ width: '100%', height: '100%' }}
			/>
		</Box>
		<SvgHexagon />
		<VStack>
			<Text size="lg">Rooted</Text>
			<Text size="md">iOS app</Text>
			<Text size="sm" color="secondary"
				>a magical Tarot Reading experience (the secret to the magic is
				ChatGPT + prompt engineering)</Text
			>

			<Text size="sm">Frontend → iOS app → Swift</Text>

			<Text size="sm">Design & Development</Text>
		</VStack>
	</HStack>
</VStack>
