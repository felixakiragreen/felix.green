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
	} from '@/fui'

	import HexagonalScrollBorder from '@/lib/components/HexagonalScrollBorder.svelte'
	import Socials from '@/lib/components/Socials/index.svelte'

	import miniHexagon from '@/assets/mini-hexagon.svg'
	import stretchFlatHexagon from '@/assets/stretch-flat-hexagon.svg'
	import stretchPointyHexagon from '@/assets/stretch-pointy-hexagon.svg'
	import fancyHexagon from '@/assets/fancy-hexagon.svg'
	import fancyHexagonSm from '@/assets/fancy-hexagon-sm.svg'
	import cv from '@/assets/felix_green_resume_2024.pdf'

	import SvgHexagonFlatStretch from '@/fui/bonds/SvgHexagonFlatStretch.svelte'

	import Projects from './Projects.svelte'

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
				mt: 'calc(var(--Unit) * 4)',
				'@sm': {
					mb: 'calc(var(--Unit) * 1)',
				},
				'@md': {
					mb: 'calc(var(--Unit) * 1.5)',
				},
				'@lg': {
					mb: 'calc(var(--Unit) * 3)',
				},
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
			<!-- MAIN HEXAGON -->
			<VStack
				my="xl"
				p="lg"
				gap="lg"
				align="center"
				css={{
					position: 'relative',
					// mx: '$-4',
					'@sm': {
						width: 'calc(var(--WUnit) * 4)',
						pb: 'calc(var(--Unit) * 1)',
					},
					'@md': {
						width: 'calc(var(--WUnit) * 6)',
						pb: 'calc(var(--Unit) * 1.5)',
					},
					'@lg': {
						width: 'calc(var(--WUnit) * 8)',
						pb: 'calc(var(--Unit) * 2)',
					},
				}}
			>
				<!-- LIVE FOR FUTURE -->
				<Box
					css={{
						...bgSx,
						// backgroundImage: `url(${stretchPointyHexagon})`,
					}}
				>
					<Image
						url={stretchPointyHexagon}
						css={{ width: '100%', height: '100%' }}
					/>
				</Box>
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
							m: '$-3',
							'--StretchFlatHexagonFill': '$colors$backgroundest',
							zIndex: 1,
							opacity: 0.8,
						}}
					>
						<SvgHexagonFlatStretch />
					</Box>
					<Box
						css={{
							...bgSx,
							zIndex: 2,
							// backgroundImage: `url(${stretchFlatHexagon})`,
						}}
					>
						<Image
							url={stretchFlatHexagon}
							css={{ width: '100%', height: '100%' }}
						/>
					</Box>

					<Text css={{ position: 'relative', zIndex: 2 }}
						>I live for the <Text color="felix" weight="semi">future</Text
						>. <Break no>And hexagons!</Break></Text
					>
				</Box>
				<Image url={miniHexagon} css={{ width: 'var(--HexiUnit)' }} />

				<!-- DESIGN & PROGRAM -->
				<Box
					css={{
						position: 'relative',
						px: '$3xl',
						py: '$sm',
						// mx: 'auto',
						// textAlign: 'left',
						'@sm': {
							mx: 'calc(var(--WUnit) * -1)',
						},
						'@md': {
							mx: 'calc(var(--WUnit) * -1)',
						},
						'@media (min-width: 600px) and (max-width: 680px)': {
							mx: 'calc(var(--WUnit) * -1.5)',
						},
						'@media (min-width: 800px) and (max-width: 1150px)': {
							mx: 'calc(var(--WUnit) * -0.75)',
						},
						'& p::first-letter': {
							fontSize: '280%',
							float: 'left',
							lineHeight: 1,
							mt: '0.2rem',
							mr: '$md',
							'@sm': {
								fontSize: '300%',
								mb: '-0.4rem',
								mt: '0.25rem',
							},
							'@md': {
								mt: '0.35rem',
							},
							'@media (min-width: 1760px)': {
								fontSize: '100%',
								m: '0',
								float: 'none',
							},
						},
					}}
				>
					<Box
						css={{
							...bgSx,
							m: '$-3',
							'--StretchFlatHexagonFill': '$colors$backgroundest',
							zIndex: 1,
							opacity: 0.8,
						}}
					>
						<SvgHexagonFlatStretch />
					</Box>
					<Box
						css={{
							...bgSx,
							zIndex: 2,
							// backgroundImage: `url(${stretchFlatHexagon})`,
						}}
					>
						<Image
							url={stretchFlatHexagon}
							css={{ width: '100%', height: '100%' }}
						/>
					</Box>
					<Text
						as="p"
						size="md"
						css={{
							position: 'relative',
							zIndex: 2,
							lineHeight: '1.65rem',
							// backgroundColor: '$red400',
							'@sm': {
								mx: '$xl',
							},
						}}
					>
						<Break no
							>I design and program <Break below="sm" /><Break no
								>digital things.</Break
							></Break
						>
						<Break no>What I enjoy most is:</Break>
					</Text>
				</Box>
				<!-- ENJOY LIST -->
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
			<!-- FANCY HEXAGON -->
			<VStack
				css={{
					position: 'relative',
					width: '100%',
					'@sm': {
						mt: 'calc(var(--Unit) * -1)',
						mb: 'calc(var(--Unit) * 0.5)',
					},
					'@md': {
						mt: 'calc(var(--Unit) * -1.5)',
						mb: 'calc(var(--Unit) * 1)',
					},
					'@lg': {
						mt: 'calc(var(--Unit) * -2)',
						mb: 'calc(var(--Unit) * 1.5)',
					},
				}}
			>
				<Box
					css={{
						...bgSx,
					}}
				>
					<Box
						css={{
							// width: '100%',
							// height: '100%',
							...bgSx,
							mt: 'calc(var(--Unit) * 0.33)',
							height: 'calc(100% - (var(--Unit) * 0.66))',
							aspectRatio: '9.4 / 7',
							'@sm': {
								aspectRatio: '9.2 / 7',
							},
							mx: 'auto',
							backgroundColor: '$backgroundest',
							// backgroundColor: '$red400',
							zIndex: 1,
							opacity: 0.8,
						}}
					/>
					<Image
						url={fancyHexagonSm}
						css={{
							position: 'relative',
							zIndex: 2,
							display: 'none',
							'@sm': {
								display: 'block',
								width: '100%',
								height: '100%',
							},
						}}
					/>
					<Image
						url={fancyHexagon}
						css={{
							position: 'relative',
							zIndex: 2,
							'@sm': { display: 'none' },
							width: '100%',
							height: '100%',
						}}
					/>
				</Box>
				<VStack
					p="xl"
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
			<!-- BELOW -->
			<Projects />

			<LinkButton url={cv} newTab>
				<Text>Download CV</Text>
			</LinkButton>
		</VStack>
		<Socials />
	</VStack>
</Content>
