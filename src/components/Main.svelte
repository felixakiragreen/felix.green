<script>
  import { onMount } from 'svelte'
  import { fade, fly } from 'svelte/transition'
  import { quintOut } from 'svelte/easing'

  import {
    hexPropsFromWidth,
    createPath_hexATip,
    createPath_hexBTip,
  } from '@fag/hexagonal'

  import { getBreakpoint } from './_breakpoint.js'

  let
    metrexOuter,
    metrexInner,
    hexPathOuterA,
    hexPathOuterB,
    hexPathInnerA,
    hexPathInnerB,
    mounted = false

  $: hScreen = 0
  $: wScreen = 0
  $: hexOuter = 0
  $: hexInner = 0
  $: hexOffsetX = 0
  $: hexOffsetYInner = 0
  $: hexOffsetYOuter = 0

  onMount(async () => {
    mounted = true

    createShit()

    console.log("sup nerds.")
  })

  const createShit = () => {
    hexOuter = wScreen < 768
      ? wScreen
      : getBreakpoint(wScreen)
    hexInner = hexOuter > 768
      ? 768
      : getBreakpoint(hexOuter - 24)
    
    // update hexagon sizes
    metrexInner = hexPropsFromWidth({ width: hexInner })
    metrexOuter = hexPropsFromWidth({ width: hexOuter })

    // update offsets
    hexOffsetX = (hexOuter - hexInner) / 2
    hexOffsetYInner = Math.floor(metrexInner.a)
    hexOffsetYOuter = Math.floor(metrexOuter.a)
    
    // update paths
    hexPathOuterA = createPath_hexATip(metrexOuter)
    hexPathOuterB = createPath_hexBTip(metrexOuter)
    hexPathInnerA = createPath_hexATip(metrexInner)
    hexPathInnerB = createPath_hexBTip(metrexInner)
  }

  const resizeShit = () => {
    // TODO: would be nice to debounce this
    createShit()
  }

  let delay = 1800
  let duration = 1800
</script>

<style>
  main {
    @apply relative;
    @apply z-10;
    @apply grid;

    grid-area: main;
    grid-template-columns:
      minmax(0, 1fr)
      var(--offset-hex)
      minmax(var(--inner-hex), min-content)
      var(--offset-hex)
      minmax(0,1fr);
    grid-template-areas: ". left center right .";
  }
  .ui-outer {
    grid-column: 2 / span 3;
    grid-row: 1;
  }
  .ui-inner {
    grid-column: 3 / span 1;
    grid-row: 1;
  }
  .bottom {
    grid-row: -1;
  }
</style>

<svelte:window
  bind:innerWidth={wScreen}
  bind:innerHeight={hScreen}
  on:resize={resizeShit}
/>

{#if mounted}
  <main
    transition:fly="{{ delay: delay, duration: duration, y: hexOffsetYInner, opacity: 0, easing: quintOut }}"
    style="--outer-hex: {hexOuter}px; 
      --inner-hex: {hexInner}px;
      --offset-hex: {hexOffsetX}px;
      margin-top: -{hexOffsetYInner}px;
    ">
    <div class="ui-outer">
      <svg
        x="0" y="0"
        height={hexOffsetYOuter}
        width={hexOuter}
      >
        <path d={hexPathOuterA} fill="var(--grey-600, --oops)" />
      </svg>
    </div>
    <div class="ui-inner">
      <svg
        x="0" y="0"
        height={hexOffsetYInner}
        width={hexInner}
      >
        <path d={hexPathInnerA} fill="var(--grey-700, --oops)" />
      </svg>
    </div>
    <div class="ui-outer bg-gray-600" style="margin-top: {hexOffsetYOuter}px;">
    
    </div>
    <div class="ui-inner bg-gray-700" style="margin-top: {hexOffsetYInner}px;">
      <div style="margin-top: -{hexOffsetYInner}px;">
        <slot />
      </div>
    </div>
    <div class="ui-outer bottom" style="margin-bottom: -{hexOffsetYOuter}px;">
      <svg
        x="0" y="0"
        height={hexOffsetYOuter}
        width={hexOuter}
      >

        <path d={hexPathOuterB} fill="var(--grey-600, --oops)" />
      </svg>
    </div>
    <div class="ui-inner bottom">
      <svg
        x="0" y="0"
        height={hexOffsetYOuter}
        width={hexInner}
      >
        <rect
          x="0"
          y="0"
          height={hexOffsetYOuter - hexOffsetYInner}
          width={hexInner}
          fill="var(--grey-700, --oops)"
        />
        <path d={hexPathInnerB} fill="var(--grey-700, --oops)" style="transform: translate(0, {hexOffsetYOuter - hexOffsetYInner}px);" />
      </svg>
    </div>
  </main>
{/if}