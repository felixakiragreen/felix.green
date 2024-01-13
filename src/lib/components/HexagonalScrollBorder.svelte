<script lang="ts">
	import { VStack, Image } from '@/fui'

	import header360 from '@/assets/header-360.svg'
	import header600 from '@/assets/header-600.svg'
	import header960 from '@/assets/header-960.svg'

	import center360 from '@/assets/center-360.svg'
	import center600 from '@/assets/center-600.svg'
	import center960 from '@/assets/center-960.svg'

	import footer360 from '@/assets/footer-360.svg'
	import footer600 from '@/assets/footer-600.svg'
	import footer960 from '@/assets/footer-960.svg'
</script>

<VStack
	css={{
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		'& img': {
			width: '100%',
		},
		pointerEvents: 'none',
	}}
>
	<!-- HEADER -->

	<Image
		url={header360}
		css={{
			display: 'none',
			height: 'auto',
			'@bp3': {
				display: 'block',
			},
		}}
	/>
	<Image
		url={header600}
		css={{
			display: 'none',
			'@bp6': {
				display: 'block',
			},
		}}
	/>
	<Image
		url={header960}
		css={{
			display: 'none',
			'@bp9': {
				display: 'block',
			},
		}}
	/>

	<!-- CENTER -->

	<Image
		url={center360}
		css={{
			display: 'none',
			flexGrow: 1,
			'@bp3': {
				display: 'block',
			},
		}}
	/>
	<Image
		url={center600}
		css={{
			display: 'none',
			flexGrow: 1,
			'@bp6': {
				display: 'block',
			},
		}}
	/>
	<Image
		url={center960}
		css={{
			display: 'none',
			flexGrow: 1,
			'@bp9': {
				display: 'block',
			},
		}}
	/>

	<!-- FOOTER -->

	<Image
		url={footer360}
		css={{
			display: 'none',
			height: 'auto',
			'@bp3': {
				display: 'block',
			},
		}}
	/>
	<Image
		url={footer600}
		css={{
			display: 'none',
			height: 'auto',
			'@bp6': {
				display: 'block',
			},
		}}
	/>
	<Image
		url={footer960}
		css={{
			display: 'none',
			height: 'auto',
			'@bp9': {
				display: 'block',
			},
		}}
	/>
</VStack>
