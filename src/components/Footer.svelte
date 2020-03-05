<script>
  import { onMount } from 'svelte'
  // import { fade, fly } from 'svelte/transition'
  // import { quintOut } from 'svelte/easing'

  // import {
  //   hexPropsFromWidth,
  //   createPath_hexATip,
  //   createPath_hexBTip,
  // } from '@fag/hexagonal'

  let mounted = false

  onMount(async () => {
    mounted = true
  })
</script>

{#if mounted}
  <footer class="bg-red-200" style="grid-area: footer;">
    TODO: make this a hexagon
  </footer>
{/if}