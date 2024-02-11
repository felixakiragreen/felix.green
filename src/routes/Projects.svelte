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

	import miniHexagon from '@/assets/mini-hexagon.svg'
	import stretchFlatHexagon from '@/assets/stretch-flat-hexagon.svg'
	import stretchPointyHexagon from '@/assets/stretch-pointy-hexagon.svg'
	import fancyHexagon from '@/assets/fancy-hexagon.svg'
	import fancyHexagonSm from '@/assets/fancy-hexagon-sm.svg'

	import SvgHexagonFlatStretch from '@/fui/bonds/SvgHexagonFlatStretch.svelte'
	import Divider from '@/lib/components/Divider.svelte'

	const bgSx = {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		pointerEvents: 'none',
	}
</script>

<VStack gap="xl" align="center">
	<Text size="2xl">Projects</Text>

	<!-- Rooted -->
	<HStack
		css={{
			position: 'relative',
			// px: '$3xl',
			// mx: '-$4xl',
			// mx: 'calc(var(--WUnit) * -1)',
			my: '$lg',
			p: '$lg',
			// bg: '$background',
		}}
		gap="xl"
	>
		<!-- 
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
				// p: '$xl',
				// backgroundImage: `url(${stretchFlatHexagon})`,
			}}
		>
			<Image
				url={stretchFlatHexagon}
				css={{ width: '100%', height: '100%' }}
			/>
		</Box>
		-->
		<VStack alignV="center" align="center" bg="red300">
			<Box css={{ width: 'calc(var(--WUnit) * 1)' }}>
				<!-- <SvgHexagon /> -->
			</Box>
		</VStack>
		<VStack gap="md" css={{ zIndex: 3 }}>
			<HStack alignV="baseline" gap="md">
				<Text size="lg" weight="thic">Rooted</Text>
				<Text size="md" color="secondary" weight="thin">iOS app</Text>
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
					2. A reading is given once the cards have been shuffled, layed out,
					and provided to the app.
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

	<Divider />

	<!-- LifeTower -->
	<HStack
		css={{
			position: 'relative',
			my: '$lg',
			p: '$lg',
		}}
		gap="xl"
	>
		<VStack alignV="center" align="center" bg="red300">
			<Box css={{ width: 'calc(var(--WUnit) * 1)' }}>
				<!-- <SvgHexagon /> -->
			</Box>
		</VStack>
		<VStack gap="md" css={{ zIndex: 3 }}>
			<HStack alignV="baseline" gap="md">
				<Text size="lg" weight="thic">LifeTower</Text>
				<Text size="md" color="secondary" weight="thin">iOS app</Text>
			</HStack>

			<VStack gap="sm">
				<HStack gap="md">
					<Text size="sm" weight="medi" css={{ color: '$blue400' }}
						>What it is</Text
					><Text size="sm" color="secondary">↓</Text>
				</HStack>
				<Text size="sm" css={{ color: '$highground', ml: '$lg' }}>
					A Game Interface for Life.
				</Text>
			</VStack>

			<VStack gap="sm">
				<HStack gap="md">
					<Text size="sm" weight="medi" css={{ color: '$purple400' }}
						>How it works</Text
					><Text size="sm" color="secondary">↓</Text>
				</HStack>
				<Text size="sm" css={{ color: '$highground', ml: '$lg' }}>
					1. Each day you build a floor to grow your Tower.<br />
					2. Throughout the day you fill it with your activities.
				</Text>
			</VStack>

			<VStack gap="sm">
				<HStack gap="md">
					<Text size="sm" weight="medi" css={{ color: '$red400' }}
						>Why it's cool</Text
					><Text size="sm" color="secondary">↓</Text>
				</HStack>
				<Text size="sm" css={{ color: '$highground', ml: '$lg' }}>
					You can see your life progression visualized in a fun and
					engaging way that encourages change and growth.
				</Text>
			</VStack>

			<HStack gap="md">
				<Text size="sm" weight="medi" css={{ color: '$orange400' }}
					>What I used</Text
				>
				<Text size="sm" color="secondary">→</Text>
				<Text size="sm">Swift, Elixir, TypeScript</Text>
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
				<Text size="sm">
					<Link
						newTab
						url="https://apps.apple.com/us/app/lifetower/id6464431513"
						look="normal"
					>
						App Store
					</Link>
				</Text>
			</HStack>
		</VStack>
	</HStack>

	<Divider />

	<!-- WaWeGonaDo -->
	<HStack
		css={{
			position: 'relative',
			my: '$lg',
			p: '$lg',
		}}
		gap="xl"
	>
		<VStack alignV="center" align="center" bg="red300">
			<Box css={{ width: 'calc(var(--WUnit) * 1)' }}>
				<!-- <SvgHexagon /> -->
			</Box>
		</VStack>
		<VStack gap="md" css={{ zIndex: 3 }}>
			<HStack alignV="baseline" gap="md">
				<Text size="lg" weight="thic">WaWeGonaDo‽</Text>
				<Text size="md" color="secondary" weight="thin">iOS app</Text>
			</HStack>

			<VStack gap="sm">
				<HStack gap="md">
					<Text size="sm" weight="medi" css={{ color: '$blue400' }}
						>What it is</Text
					><Text size="sm" color="secondary">↓</Text>
				</HStack>
				<Text size="sm" css={{ color: '$highground', ml: '$lg' }}>
					Ranked Choice Voting for Friends
				</Text>
			</VStack>

			<VStack gap="sm">
				<HStack gap="md">
					<Text size="sm" weight="medi" css={{ color: '$purple400' }}
						>How it works</Text
					><Text size="sm" color="secondary">↓</Text>
				</HStack>
				<Text size="sm" css={{ color: '$highground', ml: '$lg' }}>
					1. Send your friends a poll through Messages, and every one
					answers using a head-to-head battle of options.<br />
					2. The winning option is determined in the most democratic way possible.
				</Text>
			</VStack>

			<VStack gap="sm">
				<HStack gap="md">
					<Text size="sm" weight="medi" css={{ color: '$red400' }}
						>Why it's cool</Text
					><Text size="sm" color="secondary">↓</Text>
				</HStack>
				<Text size="sm" css={{ color: '$highground', ml: '$lg' }}>
					It animates the Ranked Voice Alternative Vote process so you can
					see how Run-off votes are distributed.
				</Text>
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
				<Text size="sm">
					<Link
						newTab
						url="https://apps.apple.com/us/app/wawegonado/id6446915201"
						look="normal"
					>
						App Store
					</Link>
				</Text>
			</HStack>
		</VStack>
	</HStack>

	<Divider />

	<!-- VisaViz -->
	<HStack
		css={{
			position: 'relative',
			my: '$lg',
			p: '$lg',
		}}
		gap="xl"
	>
		<VStack alignV="center" align="center" bg="red300">
			<Box css={{ width: 'calc(var(--WUnit) * 1)' }}>
				<!-- <SvgHexagon /> -->
			</Box>
		</VStack>
		<VStack gap="md" css={{ zIndex: 3 }}>
			<HStack alignV="baseline" gap="md">
				<Text size="lg" weight="thic">VisaViz</Text>
				<Text size="md" color="secondary" weight="thin">macOS app</Text>
			</HStack>

			<VStack gap="sm">
				<HStack gap="md">
					<Text size="sm" weight="medi" css={{ color: '$blue400' }}
						>What it is</Text
					><Text size="sm" color="secondary">↓</Text>
				</HStack>
				<Text size="sm" css={{ color: '$highground', ml: '$lg' }}>
					A tool for (data) visualizing ALL of a person's tweets.
				</Text>
			</VStack>

			<VStack gap="sm">
				<HStack gap="md">
					<Text size="sm" weight="medi" css={{ color: '$purple400' }}
						>How it works</Text
					><Text size="sm" color="secondary">↓</Text>
				</HStack>
				<Text size="sm" css={{ color: '$highground', ml: '$lg' }}>
					1. Download your Twitter archive and open it inside the app.<br
					/>
					2. Explore your tweets in giant grid, color-coded by person, likes,
					and retweets.
				</Text>
			</VStack>

			<VStack gap="sm">
				<HStack gap="md">
					<Text size="sm" weight="medi" css={{ color: '$red400' }}
						>Why it's cool</Text
					><Text size="sm" color="secondary">↓</Text>
				</HStack>
				<Text size="sm" css={{ color: '$highground', ml: '$lg' }}>
					I learned how to harness the power of the GPU, in order to
					perfomantly render 100K+ boxes in a single view.
				</Text>
			</VStack>

			<HStack gap="md">
				<Text size="sm" weight="medi" css={{ color: '$orange400' }}
					>What I used</Text
				>
				<Text size="sm" color="secondary">→</Text>
				<Text size="sm">Swift, Metal</Text>
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
				<Text size="sm">
					<Link
						newTab
						url="https://apps.apple.com/us/app/wawegonado/id6446915201"
						look="normal"
					>
						Github
					</Link>
				</Text>
			</HStack>
		</VStack>
	</HStack>

	<Divider />

	<!-- The Worm -->
	<HStack
		css={{
			position: 'relative',
			my: '$lg',
			p: '$lg',
		}}
		gap="xl"
	>
		<VStack alignV="center" align="center" bg="red300">
			<Box css={{ width: 'calc(var(--WUnit) * 1)' }}>
				<!-- <SvgHexagon /> -->
			</Box>
		</VStack>
		<VStack gap="md" css={{ zIndex: 3 }}>
			<HStack alignV="baseline" gap="md">
				<Text size="lg" weight="thic">The Worm</Text>
				<Text size="md" color="secondary" weight="thin">ethereum NFT</Text>
			</HStack>

			<VStack gap="sm">
				<HStack gap="md">
					<Text size="sm" weight="medi" css={{ color: '$blue400' }}
						>What it is</Text
					><Text size="sm" color="secondary">↓</Text>
				</HStack>
				<Text size="sm" css={{ color: '$highground', ml: '$lg' }}>
					An token, a movement, a giant plushy, NOT a cult, a god, a worm.
				</Text>
			</VStack>

			<VStack gap="sm">
				<HStack gap="md">
					<Text size="sm" weight="medi" css={{ color: '$purple400' }}
						>How it works</Text
					><Text size="sm" color="secondary">↓</Text>
				</HStack>
				<Text size="sm" css={{ color: '$highground', ml: '$lg' }}>
					1. The Worm is on a mission to visit every wallet on the Ethereum
					blockchain.<br />
					2. When The Worm visits you it gifts you a Soulbound copy to cherish
					forever.<br />
					3. Anyone can call The Worm to their wallet after it's been idle for
					a week.
				</Text>
			</VStack>

			<VStack gap="sm">
				<HStack gap="md">
					<Text size="sm" weight="medi" css={{ color: '$red400' }}
						>Why it's cool</Text
					><Text size="sm" color="secondary">↓</Text>
				</HStack>
				<Text size="sm" css={{ color: '$highground', ml: '$lg' }}
					>We pioneered the use of soulbound tokens, before they were even
					called that. The Worm has been travelling for nearly 1000 days,
					and has generated a saga of lore involving death, reincarnation,
					and a mechsuit.
				</Text>
			</VStack>

			<HStack gap="md">
				<Text size="sm" weight="medi" css={{ color: '$orange400' }}
					>What I used</Text
				>
				<Text size="sm" color="secondary">→</Text>
				<Text size="sm">Solidity, TypeScript, Svelte, SVG</Text>
			</HStack>

			<HStack gap="md">
				<Text size="sm" weight="medi" css={{ color: '$yellow400' }}
					>What I did</Text
				>
				<Text size="sm" color="secondary">→</Text>
				<Text size="sm">all Development, aid Design, aid Creative</Text>
			</HStack>

			<HStack gap="md">
				<Text size="sm" weight="medi" css={{ color: '$green400' }}
					>Where to find</Text
				>
				<Text size="sm" color="secondary">→</Text>
				<Text size="sm">
					<Link newTab url="https://theworm.wtf" look="normal">
						Website
					</Link>
				</Text>
			</HStack>
		</VStack>
	</HStack>

	<Divider />

	<!-- LilFks -->

	<HStack
		css={{
			position: 'relative',
			my: '$lg',
			p: '$lg',
		}}
		gap="xl"
	>
		<VStack alignV="center" align="center" bg="red300">
			<Box css={{ width: 'calc(var(--WUnit) * 1)' }}>
				<!-- <SvgHexagon /> -->
			</Box>
		</VStack>
		<VStack gap="md" css={{ zIndex: 3 }}>
			<HStack alignV="baseline" gap="md">
				<Text size="lg" weight="thic">Lil Fks</Text>
				<Text size="md" color="secondary" weight="thin">ethereum NFT</Text>
			</HStack>

			<VStack gap="sm">
				<HStack gap="md">
					<Text size="sm" weight="medi" css={{ color: '$blue400' }}
						>What it is</Text
					><Text size="sm" color="secondary">↓</Text>
				</HStack>
				<Text size="sm" css={{ color: '$highground', ml: '$lg' }}>
					An 100% on-chain, generative, and mutable collection.
				</Text>
			</VStack>

			<VStack gap="sm">
				<HStack gap="md">
					<Text size="sm" weight="medi" css={{ color: '$purple400' }}
						>How it works</Text
					><Text size="sm" color="secondary">↓</Text>
				</HStack>
				<Text size="sm" css={{ color: '$highground', ml: '$lg' }}>
					1. Anyone can mint a token on the ethereum blockchain.<br />
					2. The art and metadata are on-chain, viewable through Etherscan.<br
					/>
					3. You can customize the appearance of your token, on-chain.
				</Text>
			</VStack>

			<VStack gap="sm">
				<HStack gap="md">
					<Text size="sm" weight="medi" css={{ color: '$red400' }}
						>Why it's cool</Text
					><Text size="sm" color="secondary">↓</Text>
				</HStack>
				<Text size="sm" css={{ color: '$highground', ml: '$lg' }}
					>We were the first project to allow holders to mutate their
					on-chain NFTs. I condensed the art and metadata of over 200
					traits to under 50kb.
				</Text>
			</VStack>

			<HStack gap="md">
				<Text size="sm" weight="medi" css={{ color: '$orange400' }}
					>What I used</Text
				>
				<Text size="sm" color="secondary">→</Text>
				<Text size="sm">Solidity, TypeScript, Svelte, SVG</Text>
			</HStack>

			<HStack gap="md">
				<Text size="sm" weight="medi" css={{ color: '$yellow400' }}
					>What I did</Text
				>
				<Text size="sm" color="secondary">→</Text>
				<Text size="sm">all Development, aid Design, aid Creative</Text>
			</HStack>

			<HStack gap="md">
				<Text size="sm" weight="medi" css={{ color: '$green400' }}
					>Where to find</Text
				>
				<Text size="sm" color="secondary">→</Text>
				<Text size="sm">
					<Link newTab url="https://lilfks.wtf" look="normal">
						Website
					</Link>
				</Text>
			</HStack>
		</VStack>
	</HStack>

	<Box css={{ height: '$0' }} />
</VStack>
