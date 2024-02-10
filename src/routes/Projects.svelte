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
	import Heading from '@/fui/atoms/Heading.svelte'

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
			mx: '-$4xl',
			my: '$lg',
			py: '$lg',
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
		<Box css={{ width: '200px', height: '200px' }}>
			<SvgHexagon />
		</Box>
		<VStack gap="md">
			<HStack alignV="baseline" gap="md">
				<Text size="lg">Rooted</Text>
				<Text size="md" color="secondary">iOS app</Text>
			</HStack>

			<VStack gap="sm">
				<HStack gap="md">
					<Text size="sm" weight="medi" css={{ color: '$blue400' }}
						>What it is</Text
					><Text size="sm" color="secondary">↓</Text>
				</HStack>
				<Text size="sm" css={{ color: '$highground', ml: '$lg' }}>
					A magically guided Tarot Reading experience.
				</Text>
			</VStack>

			<VStack gap="sm">
				<HStack gap="md">
					<Text size="sm" weight="medi" css={{ color: '$purple400' }}
						>How it works</Text
					><Text size="sm" color="secondary">↓</Text>
				</HStack>
				<Text size="sm" css={{ color: '$highground', ml: '$lg' }}>
					1. A spread is suggested based upon a provided topic or
					intention.<br />
					2. After the cards are shuffled, layed out, and provided to the app,
					they are interpreted and a reading is given.
				</Text>
			</VStack>

			<VStack gap="sm">
				<HStack gap="md">
					<Text size="sm" weight="medi" css={{ color: '$red400' }}
						>Why it's cool</Text
					><Text size="sm" color="secondary">↓</Text>
				</HStack>
				<Text size="sm" css={{ color: '$highground', ml: '$lg' }}>
					The secret to the magic is ChatGPT & prompt engineering</Text
				>
			</VStack>

			<HStack gap="md">
				<Text size="sm" weight="medi" css={{ color: '$orange400' }}
					>What I used</Text
				>
				<Text size="sm" color="secondary">→</Text>
				<Text size="sm">Swift</Text>
			</HStack>

			<HStack gap="md">
				<Text size="sm" weight="medi" css={{ color: '$yellow400' }}
					>What I did</Text
				>
				<Text size="sm" color="secondary">→</Text>
				<Text size="sm">Design & Development</Text>
			</HStack>

			<HStack gap="md">
				<Text size="sm" weight="medi" css={{ color: '$green400' }}
					>Where to find</Text
				>
				<Text size="sm" color="secondary">→</Text>
				<Text size="sm">Coming Feb 2024</Text>
			</HStack>
		</VStack>
	</HStack>
</VStack>
