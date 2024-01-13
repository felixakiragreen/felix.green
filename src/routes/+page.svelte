<script lang="ts">
	import { Box, Content, VStack, HStack, Text, Link, Image } from '@/fui'

	import HexagonalScrollBorder from '@/lib/components/HexagonalScrollBorder.svelte'

	import miniHexagon from '@/assets/mini-hexagon.svg'
	import mezoHexagon from '@/assets/mezo-hexagon.svg'
	import stretchFlatHexagon from '@/assets/stretch-flat-hexagon.svg'
	import stretchPointyHexagon from '@/assets/stretch-pointy-hexagon.svg'
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
				p="0"
				m="0"
				align="center"
				css={{
					position: 'relative',
					height: 'calc(var(--Unit) * 6)',
					width: 'calc(var(--WUnit) * 6)',
					// red with opacity
					// backgroundColor: 'rgba(255, 0, 0, 0.2)',
				}}
			>
				<Box
					css={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						// backgroundColor: 'rgba(0, 0, 255, 0.2)',
					}}
				>
					<Image
						url={mezoHexagon}
						css={{ width: 'calc(var(--WUnit) * 6)' }}
					/>
				</Box>
				<Image url={miniHexagon} css={{ width: 'var(--HexiUnit)' }} />
				<Image
					url={stretchPointyHexagon}
					css={{
						width: 'var(--Unit)',
						height: 'calc(var(--Unit) * 6)',
						p: '$1',
					}}
				/>
				<Image
					url={stretchFlatHexagon}
					css={{ width: '100%', height: 'var(--Unit)', p: '$1' }}
				/>
			</VStack>
		</VStack>
		<Box
			css={{
				width: '100px',
				height: '2000px',
				backgroundColor: 'red',
				margin: '0 auto',
			}}
		></Box>
	</VStack>
</Content>
