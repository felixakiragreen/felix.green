<script lang="ts">
	import { stitch } from '@/fui'
	import type { PropCss, PropString, PropComponent } from '@/types'

	export let id: PropString = undefined
	export let cls: PropComponent = undefined
	export let css: PropCss = undefined
	export let style: PropString = undefined
	export let vrt = {}

	type InputTypes = `password` | `email` | `text` | `number` | `date` | `time`

	export let inputType: InputTypes = 'text'
	export let value = ''
	export let placeholder = ''

	const ss = cls || stitch({})
</script>

{#if inputType === 'password'}
	<input
		{id}
		type="password"
		class={ss({ ...vrt, css })}
		{style}
		bind:value
		on:input
		on:change
		on:focus
		on:blur
		{placeholder}
	/>
{:else if inputType === 'email'}
	<input
		{id}
		type="email"
		class={ss({ ...vrt, css })}
		{style}
		bind:value
		on:input
		on:change
		on:focus
		on:blur
		{placeholder}
	/>
{:else if inputType === 'number'}
	<input
		{id}
		type="number"
		class={ss({ ...vrt, css })}
		{style}
		bind:value
		on:input
		on:change
		on:focus
		on:blur
		{placeholder}
	/>
{:else if inputType === 'date'}
	<input
		{id}
		type="date"
		class={ss({ ...vrt, css })}
		{style}
		bind:value
		on:input
		on:change
		on:focus
		on:blur
		{placeholder}
	/>
{:else if inputType === 'time'}
	<input
		{id}
		type="time"
		class={ss({ ...vrt, css })}
		{style}
		bind:value
		on:input
		on:change
		on:focus
		on:blur
		{placeholder}
	/>
{:else}
	<input
		{id}
		type="text"
		class={ss({ ...vrt, css })}
		{style}
		bind:value
		on:input
		on:change
		on:focus
		on:blur
		{placeholder}
	/>
{/if}
