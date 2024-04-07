<script lang="ts">
	import { Svg } from '@/fui'
</script>

<Svg
	{...{
		xmlns: 'http://www.w3.org/2000/svg',
		'xmlns:xlink': 'http://www.w3.org/1999/xlink',
	}}
>
	<symbol id="tip" viewBox="0 0 69.3 240" preserveAspectRatio="xMinYMid">
		<path d="M69.282,0l2.718,0l0,240l-2.718,0l-69.282,-120l69.282,-120Z" />
	</symbol>
	<symbol id="tip-rect" viewBox="0 0 69.3 240" preserveAspectRatio="xMinYMid">
		<rect x="0%" y="0%" width="100%" height="240" />
	</symbol>

	<mask id="mask" viewBox="0 0 240 240">
		<rect x="0%" y="0%" width="100%" height="100%" fill="white" />

		<use
			xlink:href="#tip-rect"
			x="0%"
			y="0%"
			height="100%"
			width="50%"
			fill="black"
		/>
		<use
			xlink:href="#tip-rect"
			x="-100%"
			y="0%"
			height="100%"
			width="50%"
			fill="black"
			transform="scale(-1,1)"
		/>
	</mask>

	<rect
		mask="url(#mask)"
		x="0%"
		y="0%"
		width="100%"
		height="100%"
		fill="var(--StretchFlatHexagonFill, #808080)"
	/>

	<use
		xlink:href="#tip"
		x="0%"
		y="0%"
		height="100%"
		width="50%"
		fill="var(--StretchFlatHexagonFill, #808080)"
	/>
	<use
		xlink:href="#tip"
		x="-100%"
		y="0%"
		height="100%"
		width="50%"
		fill="var(--StretchFlatHexagonFill, #808080)"
		transform="scale(-1,1)"
	/>
</Svg>
