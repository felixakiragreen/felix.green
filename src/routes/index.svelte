<script>
  import Index from './wiki/index.svelte'
  import Hexagon from 'components/Hexagon.svelte'
  import FelixAkiraGreen from 'components/FelixAkiraGreen.svelte'
  import PlainTextWarning from 'components/PlainTextWarning.svelte'
</script>

<svelte:head>
  <title>felix ⬡ green</title>
</svelte:head>

<div
  class={`
    relative
    grid
    gap-4
    mt-8
    overflow-hidden
    z-20
  `}
  id="top"
>
  <PlainTextWarning />
  <Index />
</div>
