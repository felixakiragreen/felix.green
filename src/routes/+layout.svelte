<script lang="ts">
	import '@/fui/style/global.css'
	import { stitch, getCssText } from '@/fui/ui'

	const ss = stitch({
		display: 'grid',
		gridTemplateRows: 'auto 1fr auto',
		minHeight: '100vh',
		position: 'relative',
	})

	// export const ssr = false
</script>

<svelte:head>
	<title>felix green</title>
</svelte:head>

<!-- https://discord.com/channels/752614004387610674/752795957674115092/925177257025220658 -->
<!-- https://stackblitz.com/edit/sveltekit-1sfugv?file=src/routes/__layout.svelte -->
<!-- for TS projects due to a bug (https://github.com/sveltejs/svelte/issues/5292)-->
{@html `<${''}style id="stitches">${getCssText()}</${''}style>`}

<main class={ss()}>
	<div>
		<slot />
	</div>
</main>
