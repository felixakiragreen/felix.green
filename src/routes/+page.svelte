<script lang="ts">
	import { Box, Content, VStack, HStack, Text, Link, Image } from '@/fui'

	import websiteSvg from '@/assets/website2024.svg'
	import hexagonTop from '@/assets/hexagon_top.svg'
	import website360 from '@/assets/website_360.svg'
	import website600 from '@/assets/website_600.svg'
	import website960 from '@/assets/website_960.svg'
</script>

<Content bg="grey800" p="0">
	<Box
		css={{
			position: 'absolute',
			top: 40,
			left: 0,
			width: '100%',
			// height: '100%',
			// overflow: 'hidden',
			// display: 'flex',
			// alignItems: 'center',
			// justifyContent: 'center',
		}}
	>
		<Image
			url={website360}
			css={{
				display: 'none',
				// css breakpoint only show below 600px
				'@media (max-width: 600px)': {
					display: 'block',
				},
			}}
		/>
		<Image
			url={website600}
			css={{
				display: 'none',
				// css breakpoint only show between 600px and 960px
				'@media (min-width: 600px) and (max-width: 960px)': {
					display: 'block',
				},
			}}
		/>
		<Image
			url={website960}
			css={{
				display: 'none',
				// css breakpoint only show above 960px
				'@media (min-width: 960px)': {
					display: 'block',
				},
			}}
		/>
	</Box>
	<VStack>
		<Image
			url={websiteSvg}
			css={{
				opacity: 0.1,
			}}
		/>
	</VStack>
</Content>
