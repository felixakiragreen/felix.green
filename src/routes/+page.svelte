<script lang="ts">
	import { Box, Content, VStack, HStack, Text, Link, Image } from '@/fui'

	import HexagonalScrollBorder from '@/lib/components/HexagonalScrollBorder.svelte'

	import miniHexagon from '@/assets/mini-hexagon.svg'
	import mezoHexagon from '@/assets/mezo-hexagon.svg'
	import stretchFlatHexagon from '@/assets/stretch-flat-hexagon.svg'
	import stretchPointyHexagon from '@/assets/stretch-pointy-hexagon.svg'
	import fancyHexagon from '@/assets/fancy-hexagon.svg'

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
			align="center"
			css={{
				marginTop: 'calc(var(--Unit) * 4)',
				marginBottom: 'calc(var(--Unit) * 4)',
			}}
		>
			<VStack
				fg="felix"
				gap="lg"
				css={{
					textAlign: 'center',
				}}
			>
				<Text size="lg" css={{ opacity: 0.4 }}>
					I<br />am</Text
				>
				<Text size="2xl" weight="thinn">felix green</Text>
			</VStack>
			<VStack
				my="xl"
				p="lg"
				gap="lg"
				align="center"
				css={{
					position: 'relative',
					'@bp3': {
						width: 'calc(var(--WUnit) * 3)',
						paddingBottom: 'calc(var(--Unit) * 1)',
					},
					'@bp6': {
						width: 'calc(var(--WUnit) * 6)',
						paddingBottom: 'calc(var(--Unit) * 1.5)',
					},
					'@bp9': {
						width: 'calc(var(--WUnit) * 8)',
						paddingBottom: 'calc(var(--Unit) * 2)',
					},
				}}
			>
				<Box
					css={{
						...bgSx,
						backgroundImage: `url(${stretchPointyHexagon})`,
					}}
				/>
				<Image url={miniHexagon} css={{ width: 'var(--HexiUnit)' }} />
				<Box
					css={{
						position: 'relative',
						px: '$xl',
						py: '$lg',
						textAlign: 'center',
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
							backgroundImage: `url(${stretchFlatHexagon})`,
						}}
					/>

					<Text css={{ position: 'relative', zIndex: 2 }}
						>I live for the <Text color="felix" weight="semi">future</Text
						>. And hexagons!</Text
					>
				</Box>
				<Image url={miniHexagon} css={{ width: 'var(--HexiUnit)' }} />
				<Box
					css={{
						position: 'relative',
						px: '$2xl',
						py: '$sm',
						textAlign: 'left',
						'& p::first-letter': {
							float: 'left',
							fontSize: '$3xl',
							lineHeight: 1,
							marginRight: '$md',
						},
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
							backgroundImage: `url(${stretchFlatHexagon})`,
						}}
					/>
					<Text
						as="p"
						size="md"
						css={{
							position: 'relative',
							zIndex: 2,
							lineHeight: '1.65rem',
						}}
					>
						I design and program digital things. What I enjoy most is:
					</Text>
				</Box>
				<Box
					css={{
						p: '$md',
						display: 'grid',
						gridTemplateColumns: 'auto 1fr',
						gap: '$lg',
						alignItems: 'center',
					}}
				>
					<Box>
						<Image
							url={miniHexagon}
							css={{
								width: 'var(--HexiUnit)',
								transform: 'rotate(90deg)',
							}}
						/>
					</Box>
					<Text size="sm">
						Reducing complexity with systems design, especially interfaces
						and workflows
					</Text>
					<Box>
						<Image
							url={miniHexagon}
							css={{
								width: 'var(--HexiUnit)',
								transform: 'rotate(90deg)',
							}}
						/>
					</Box>
					<Text size="sm">
						Informing and transforming user behavior through data
						visualization
					</Text>
					<Box>
						<Image
							url={miniHexagon}
							css={{
								width: 'var(--HexiUnit)',
								transform: 'rotate(90deg)',
							}}
						/>
					</Box>
					<Text size="sm">
						Accomplishing the previously impossible by standing on the
						shoulders of giants
					</Text>
				</Box>
			</VStack>
			<VStack
				css={{
					position: 'relative',
					'@bp3': {
						width: 'calc(var(--WUnit) * 3)',
						marginTop: 'calc(var(--Unit) * -1)',
					},
					'@bp6': {
						width: 'calc(var(--WUnit) * 6)',
						marginTop: 'calc(var(--Unit) * -1.5)',
					},
					'@bp9': {
						width: 'calc(var(--WUnit) * 8)',
						marginTop: 'calc(var(--Unit) * -2)',
					},
				}}
			>
				<Box
					css={{
						...bgSx,
						my: '$-2',
						mx: 'calc(var(--WUnit) * 1)',
						// backgroundColor: '$red400',
						backgroundColor: '$backgroundest',
						zIndex: 1,
						opacity: 0.8,
					}}
				/>
				<Box
					css={{
						...bgSx,
						backgroundImage: `url(${fancyHexagon})`,
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'top center',
						backgroundSize: 'fill',
						zIndex: 2,
					}}
				/>
				<VStack
					p="lg"
					gap="lg"
					align="center"
					css={{
						position: 'relative',
						zIndex: 2,
						textAlign: 'center',
						lineHeight: '$lg',
					}}
				>
					<Image url={miniHexagon} css={{ width: 'var(--HexiUnit)' }} />
					<Text>
						I <Text weight="semi" css={{ color: '$blue400' }}>aspire</Text
						><br />
						to use <Text weight="semi" css={{ color: '$purple400' }}
							>technology</Text
						> for<br />
						<Text weight="semi" css={{ color: '$red400' }}>creating</Text>
						<Text weight="semi" css={{ color: '$orange400' }}
							>magical</Text
						><br />
						<Text weight="semi" css={{ color: '$yellow400' }}
							>experiences</Text
						><br />
					</Text>
					<Image url={miniHexagon} css={{ width: 'var(--HexiUnit)' }} />
					<Text
						>thus<br />
						becoming a<br />
						<Text weight="semi" css={{ color: '$green400' }}
							>technomancer</Text
						>
					</Text>
					<Image url={miniHexagon} css={{ width: 'var(--HexiUnit)' }} />
				</VStack>
			</VStack>
		</VStack>
		<!-- <Box
			css={{
				width: '100px',
				height: '2000px',
				//  red bg with 0.2 alpha,
				backgroundColor: 'rgba(255, 0, 0, 0.2)',
				margin: '0 auto',
			}}
		></Box> -->
	</VStack>
</Content>
