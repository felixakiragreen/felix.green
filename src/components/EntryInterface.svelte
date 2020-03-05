<script>
  import { onMount } from 'svelte'
  import { fade, draw, fly } from 'svelte/transition'

  import {
    hexPropsFromWidth,
    createPath_hexATip,
    createPath_hexBTip,
  } from '@fag/hexagonal'

  import { widthInner, widthOuter } from '../stores'

  // Screen
  // Outer (area with margin)
  // Inner (content block)

  let metrexOuter,
    metrexInner,
    xOffset = 100,
    hexPathOuterA,
    hexPathOuterB,
    hexPathInnerA,
    hexPathInnerB,
    hexPathOuter,
    mounted = false

  $: hScreen = 0
  $: wScreen = 0
  $: wOuter = 0
  $: wInner = 0

  onMount(async () => {
    mounted = true

    createShit()
  })

  const createShit = () => {
    console.warn('createShit()', { wInner, wOuter })
    // update stores
    if (widthInner !== wInner) {
      widthInner.set(wInner)
    }
    if (widthOuter !== wOuter) {
      widthOuter.set(wOuter)
    }

    // update hexagon sizes
    metrexInner = hexPropsFromWidth({ width: wInner })
    metrexOuter = hexPropsFromWidth({ width: wOuter })
    xOffset = (wOuter - wInner) / 2

    // update paths
    hexPathOuterA = createPath_hexATip(metrexOuter)
    hexPathOuterB = createPath_hexBTip(metrexOuter)
    hexPathInnerA = createPath_hexATip(metrexInner)
    hexPathInnerB = createPath_hexBTip(metrexInner)
  }

  const resizeShit = () => {
    console.log('resizeBitch()', { wScreen, wOuter, wInner })
    // TODO: would be nice to debounce this
    createShit()
  }
</script>

<style>

</style>

<svelte:window
  bind:innerWidth={wScreen}
  bind:innerHeight={hScreen}
  on:resize={resizeShit}
/>

<!-- <svg x="0%" y="0%" width="100%" height="100%" id="svg-interface"> -->

<div
  id="interface"
  class={`
    absolute
    top-0
    bottom-0
    left-0
    right-0
    flex
    opacity-50
  `}>
  <div
    bind:clientWidth={wOuter}
    class={`
      container
      flex
      flex-1
      mx-auto
      bg-gray-600
    `}>
    <!-- top : outer -->
    <div class="absolute">
      {#if mounted}
        <svg
          x="0"
          y="0"
          height={metrexOuter.a}
          width={wOuter}
          id="svg-interface"
          class="mx-auto">
          <rect
            x="0"
            y="0"
            height={metrexOuter.a}
            width={wOuter}
            fill="var(--grey-800, --oops)" />
          <path d={hexPathOuterA} fill="var(--grey-600, --oops)" />

        </svg>
      {/if}
    </div>

    <!-- bottom : outer -->
    <div class="absolute bottom-0">
      {#if mounted}
        <svg
          x="0"
          y="0"
          height={metrexOuter.a}
          width={wOuter}
          id="svg-interface"
          class="mx-auto">
          <rect
            x="0"
            y="0"
            height={metrexOuter.a}
            width={wOuter}
            fill="var(--grey-800, --oops)" />
          <path d={hexPathOuterB} fill="var(--grey-600, --oops)" />
        </svg>
      {/if}

      <!-- bottom : inner -->
      <div
        class={`
          absolute
          bottom-0
          left-0
          right-0
        `}>
        <div
          class={`
            mx-3
            sm:mx-12
            md:mx-24
          `}>
          <div
            bind:clientWidth={wInner}
            class={`
              max-w-screen-md
              mx-auto
              z-20
            `}>

            {#if mounted}
              <svg
                x="0"
                y="0"
                height={metrexInner.a}
                width={wInner}
                id="svg-interface"
                class="mx-auto">
                <rect
                  x="0"
                  y="0"
                  height={metrexInner.a}
                  width={wOuter}
                  fill="var(--grey-800, --oops)" />
                <path d={hexPathInnerA} fill="var(--grey-900, --oops)" />
                <path d={hexPathInnerB} fill="var(--grey-700, --oops)" />
              </svg>
            {/if}
          </div>
        </div>
      </div>
    </div>

    <!-- top: inner -->
    <div
      class={`
        mx-3
        sm:mx-12
        md:mx-24
        flex
        flex-1
      `}>
      <div
        bind:clientWidth={wInner}
        class={`
          max-w-screen-md
          mx-auto
          flex-1
          bg-gray-700
          z-10
        `}>
        <div class="absolute">
          {#if mounted}
            <svg
              x="0"
              y="0"
              height={metrexInner.a}
              width={wInner}
              id="svg-interface"
              class="mx-auto">
              <rect
                x="0"
                y="0"
                height={metrexInner.a}
                width={wOuter}
                fill="var(--grey-800, --oops)" />
              <path d={hexPathInnerB} fill="var(--grey-900, --oops)" />
              <path d={hexPathInnerA} fill="var(--grey-700, --oops)" />
            </svg>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
