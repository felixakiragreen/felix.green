<script lang="ts">
	import { VStack, Image } from '@/fui'

	import header360 from '@/assets/header-360.svg'
	import header600 from '@/assets/header-600.svg'
	import header960 from '@/assets/header-960.svg'

	import stretchPointyHexagon from '@/assets/stretch-pointy-hexagon.svg'
	import stretchPointyHexagonTop from '@/assets/stretch-pointy-hexagon-top.svg'
</script>

<VStack
	css={{
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		pointerEvents: 'none',
	}}
>
	<!-- HEADER -->

	<Image
		url={header360}
		css={{
			display: 'none',
			height: 'auto',
			'@sm': {
				display: 'block',
			},
		}}
	/>
	<Image
		url={header600}
		css={{
			display: 'none',
			'@md': {
				display: 'block',
			},
		}}
	/>
	<Image
		url={header960}
		css={{
			display: 'none',
			'@lg': {
				display: 'block',
			},
		}}
	/>

	<!-- CENTER -->

	<Image
		url={stretchPointyHexagon}
		css={{
			flexGrow: 1,
			marginBottom: 'calc(-1.1vw)',
			'@sm': {
				mt: 'calc(var(--Unit) * -5 - 0.65vw)',
				ml: 'calc(var(--WUnit) * 0.5 - 0.3px)',
				width: 'calc(var(--WUnit) * 5 + 0.6px)',
			},
			'@md': {
				mt: 'calc(var(--Unit) * -6 - 0.6vw)',
				ml: 'calc(var(--WUnit) * 1 - 0.3px)',
				width: 'calc(var(--WUnit) * 8 + 0.6px)',
			},
			'@lg': {
				mt: 'calc(var(--Unit) * -7 - 0.55vw)',
				ml: 'calc(var(--WUnit) * 2 - 0.3px)',
				width: 'calc(var(--WUnit) * 12 + 0.6px)',
			},
		}}
	/>

	<!-- FOOTER -->

	<Image
		url={stretchPointyHexagonTop}
		css={{
			'@sm': {
				ml: 'calc(var(--WUnit) * 1 - 0.3px)',
				height: 'calc(var(--Unit) * 1)',
				width: 'calc(var(--WUnit) * 4 + 0.6px)',
			},
			'@md': {
				ml: 'calc(var(--WUnit) * 1 - 0.3px)',
				height: 'calc(var(--Unit) * 2)',
				width: 'calc(var(--WUnit) * 8 + 0.6px)',
			},
			'@lg': {
				ml: 'calc(var(--WUnit) * 2 - 0.3px)',
				height: 'calc(var(--Unit) * 3)',
				width: 'calc(var(--WUnit) * 12 + 0.6px)',
			},
		}}
	/>
</VStack>
