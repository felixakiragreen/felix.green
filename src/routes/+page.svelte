<script lang="ts">
	import { Box, Content, VStack, HStack, Text, Link, Image } from '@/fui'

	import HexagonalScrollBorder from '@/lib/components/HexagonalScrollBorder.svelte'

	import miniHexagon from '@/assets/mini-hexagon.svg'
	import mezoHexagon from '@/assets/mezo-hexagon.svg'
	import stretchFlatHexagon from '@/assets/stretch-flat-hexagon.svg'
	import stretchPointyHexagon from '@/assets/stretch-pointy-hexagon.svg'

	const bgSx = {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		pointerEvents: 'none',
	}
</script>

<Content p="0">
	<HexagonalScrollBorder />
	<VStack>
		<VStack
			fg="felix"
			align="center"
			css={{
				textAlign: 'center',
				marginTop: 'calc(var(--Unit) * 4)',
			}}
		>
			<Text size="lg" css={{ opacity: 0.4 }}>
				I<br />am</Text
			>
			<Text size="2xl" weight="thinn">felix green</Text>
			<VStack
				mt="xl"
				p="lg"
				gap="lg"
				align="center"
				css={{
					position: 'relative',
					'@bp3': {
						width: 'calc(var(--WUnit) * 3)',
					},
					'@bp6': {
						width: 'calc(var(--WUnit) * 6)',
					},
					'@bp9': {
						width: 'calc(var(--WUnit) * 8)',
					},
				}}
			>
				<Box
					css={{
						...bgSx,
					}}
				>
					<Image url={mezoHexagon} />
				</Box>
				<Image url={miniHexagon} css={{ width: 'var(--HexiUnit)' }} />
				<Box
					css={{
						position: 'relative',
						px: '$xl',
						py: '$lg',
					}}
				>
					<Box
						css={{
							...bgSx,
							my: '$-2',
							backgroundColor: '$backgroundest',
							zIndex: 1,
							opacity: 0.8,
						}}
					/>
					<Box
						css={{
							...bgSx,
							zIndex: 2,
						}}
					>
						<Image
							url={stretchFlatHexagon}
							css={{ width: '100%', height: '100%' }}
						/>
					</Box>

					<Text
						color="foreground"
						css={{ position: 'relative', zIndex: 2 }}
						>I live for the <Text color="felix" weight="semi">future</Text
						>. And hexagons!</Text
					>
				</Box>
				<Image url={miniHexagon} css={{ width: 'var(--HexiUnit)' }} />
				<Image
					url={stretchFlatHexagon}
					css={{ width: '100%', height: 'var(--Unit)', p: '$1' }}
				/>
				<Image url={miniHexagon} css={{ width: 'var(--HexiUnit)' }} />
			</VStack>
		</VStack>
		<Box
			css={{
				width: '100px',
				height: '2000px',
				//  red bg with 0.2 alpha,
				backgroundColor: 'rgba(255, 0, 0, 0.2)',
				margin: '0 auto',
			}}
		></Box>
	</VStack>
</Content>
