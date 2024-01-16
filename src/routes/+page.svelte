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
	import cv from '@/assets/felix_green_resume_2023.pdf'

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
					'@sm': {
						width: 'calc(var(--WUnit) * 3)',
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
							backgroundImage: `url(${stretchFlatHexagon})`,
						}}
					/>

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
						textAlign: 'left',
						'@sm': {
							mx: 'calc(var(--WUnit) * -1)',
						},
						'@md': {
							mx: 'calc(var(--WUnit) * -0.5)',
						},
						'& p::first-letter': {
							fontSize: '300%',
							float: 'left',
							lineHeight: 1,
							mb: '-0.5rem',
							mr: '$md',
							'@sm': {
								fontSize: '320%',
								mb: '-0.3rem',
								mt: '0.05rem',
							},
							'@md': {
								mt: '0.2rem',
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
						I design and program digital things. <Break no
							>What I enjoy most is:</Break
						>
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
						my: 'calc(var(--Unit) * 0.33)',
						maxWidth: 'calc(var(--WUnit) * 7)',
						mx: 'auto',
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
						backgroundSize: 'contain',
						zIndex: 2,
					}}
				/>
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
			<LinkButton url={cv} newTab>
				<Text>Download CV</Text>
			</LinkButton>
		</VStack>
		<Socials />
	</VStack>
</Content>
