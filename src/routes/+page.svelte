<script lang="ts">
	import { Box, Content, VStack, HStack, Text, Link, Image } from '@/fui'

	import websiteSvg from '@/assets/website2024.svg'
	import hexagonTop from '@/assets/hexagon_top.svg'

	import header360 from '@/assets/header-360.svg'
	import header600 from '@/assets/header-600.svg'
	import header960 from '@/assets/header-960.svg'

	import center360 from '@/assets/center-360.svg'
	// import center600 from '@/assets/center-600.svg'
	// import center960 from '@/assets/center-960.svg'
	import footer360 from '@/assets/footer-360.svg'
	// import footer600 from '@/assets/footer-600.svg'
	// import footer960 from '@/assets/footer-960.svg'
</script>

<Content p="0">
	<VStack
		css={{
			// bg="grey500"
			position: 'absolute',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			// make all nested images width 100%
			'& img': {
				width: '100%',
			},
		}}
	>
		<Image
			url={header360}
			css={{
				display: 'none',
				height: 'auto',
				// css breakpoint only show below 600px
				'@media (max-width: 600px)': {
					display: 'block',
				},
			}}
		/>
		<Image
			url={header600}
			css={{
				display: 'none',
				// css breakpoint only show between 600px and 960px
				'@media (min-width: 600px) and (max-width: 960px)': {
					display: 'block',
				},
			}}
		/>
		<Image
			url={header960}
			css={{
				display: 'none',
				// css breakpoint only show above 960px
				'@media (min-width: 960px)': {
					display: 'block',
				},
			}}
		/>
		<Image
			url={center360}
			css={{
				display: 'none',
				flexGrow: 1,
				// css breakpoint only show below 600px
				'@media (max-width: 600px)': {
					display: 'block',
				},
			}}
		/>
		<Image
			url={footer360}
			css={{
				display: 'none',
				height: 'auto',
				// css breakpoint only show below 600px
				'@media (max-width: 600px)': {
					display: 'block',
				},
			}}
		/>
	</VStack>
	<VStack>
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
