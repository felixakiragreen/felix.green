<script>
  import { onMount } from 'svelte'
  import Socials from './Social/index.svelte'

  let mounted = false

  onMount(async () => {
    // This is to prevent flashing
    mounted = true
  })
</script>

<style>
  footer {
    @apply grid;
    @apply z-30;
    grid-area: footer;
  }
</style>

{#if mounted}
  <footer>
    <Socials />
  </footer>
{/if}