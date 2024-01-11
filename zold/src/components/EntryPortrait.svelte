<script>
  import { onMount } from 'svelte'
  import { fade, draw, fly } from 'svelte/transition'

  $: w = '100vw'
  $: h = '100vh'

  $: portraitHalf = 120
  $: mounted = false

  onMount(async () => {
    // console.warn({ w, h })

    mounted = true
  })
</script>

<style>
  .portrait {
    @apply absolute;
  }

  @keyframes scaleIn {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  .scale-in {
    transform: scale(0);
    transform-origin: 120px 120px;
    animation: scaleIn 0.6s ease-out;
    animation-fill-mode: forwards;
  }
</style>

<div class="portrait" id="portrait" bind:clientWidth={w} bind:clientHeight={h}>
  <svg width={w} height={h} id="svg-portrait">
    {#if mounted}
      <g
        id="group-all"
        transform="translate({w / 2 - portraitHalf}, {h / 2 - portraitHalf})"
        transition:fade>
        <g class="scale-in">
          <path
            d="M120,0l103.923,60l0,120l-103.923,60l-103.923,-60l0,-120l103.923,-60Z"
            style="fill:#808080;" />
          <g id="body">
            <path
              d="M42.058,195l51.961,-30l51.962,0l51.961,30l-77.942,45l-77.942,-45Z" />
            <path
              d="M76.699,175l43.301,25l43.301,-25l-17.32,-10l-51.962,0l-17.32,10Z"
              style="fill:#e6e6e6;" />
          </g>
          <path
            id="head"
            d="M120,60l51.962,30l0,60l-51.962,30l-51.962,-30l0,-60l51.962,-30Z"
            style="fill:#fff;" />
          <g id="hair">
            <path
              d="M120,32l17.321,10l0,20l-17.321,10l-17.321,-10l0,-20l17.321,-10Z"
              style="fill:#553e23;" />
            <path
              d="M94.019,75l25.981,-15l25.981,15l-25.981,15l-25.981,-15Z"
              style="fill:#73542f;" />
          </g>
          <g id="darken" style="fill-opacity:0.12; mix-blend-mode: luminosity;">
            <path d="M120,32l17.321,10l0,20l-6.929,4l-10.392,-6l0,-28Z" />
            <path d="M120,90l25.981,-15l-25.981,-15l0,30Z" />
            <path d="M120,180l51.962,-30l0,-60l-25.981,-15l-25.981,15l0,90Z" />
            <path d="M120,200l43.301,-25l-17.32,-10l-25.981,15l0,20Z" />
            <path
              d="M120,240l-77.942,-45l34.641,-20l43.301,25l0,40Z"
              fill="#fff" />
          </g>
        </g>
      </g>
    {/if}
  </svg>
</div>
