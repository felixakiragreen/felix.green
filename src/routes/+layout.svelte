<script lang="ts">
	import '@/fui/style/global.css'
	import '@/fui/style/stitches.css'
	import { stitch, getCssText } from '@/fui/ui'

	const ss = stitch({
		fontFamily: '$main',
		fontSize: '$b',
		display: 'grid',
		gridTemplateRows: 'auto 1fr auto',
		minHeight: '100vh',
		position: 'relative',
		//
		'@sm': {
			$WUnit: 'calc(100vw / 6)',
		},
		'@md': {
			$WUnit: 'calc(100vw / 10)',
		},
		'@lg': {
			$WUnit: 'calc(100vw / 16)',
		},
		$Unit: 'calc(var(--WUnit) * 1.155)',
		$DuodeciUnit: 'calc(var(--Unit) / 12)',
		$HexiUnit: 'calc(var(--Unit) / 6)',
	})

	// export const ssr = true

	const styles = `<${''}style id="stitches">:root { ${getCssText()} }</${''}style>`
	// const styles = `<${''}style id="stitches">${getCssText()}</${''}style>`
	// $: console.log('styles', styles)
</script>

<svelte:head>
	<title>felix green</title>

	<!-- https://discord.com/channels/752614004387610674/752795957674115092/925177257025220658 -->
	<!-- https://stackblitz.com/edit/sveltekit-1sfugv?file=src/routes/__layout.svelte -->
	<!-- for TS projects due to a bug (https://github.com/sveltejs/svelte/issues/5292)-->
	<!-- {@html `<${''}style id="stitches">${getCssText()}</${''}style>`} -->

	<!-- {@html styles} -->
</svelte:head>

<main class={ss()}>
	<div>
		<slot />
	</div>
</main>
