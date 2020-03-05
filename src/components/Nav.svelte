<script>
  import { onMount } from 'svelte'
  import { fade, fly } from 'svelte/transition'
  import { quintOut } from 'svelte/easing'
  import { fag, portrait_fag, solarpunk, dof, projects } from '@fag/fumonicon'

  import {
    hexPropsFromWidth,
    hexPropsFromInside,
    createPath_hexFull,
  } from '@fag/hexagonal'

  import navSegments from './_nav'

  // import { heightNav } from '../stores'
  import Bar from './Bar.svelte'
  import Hexagon from './Hexagon.svelte'
  import FelixAkiraGreen from './FelixAkiraGreen.svelte'
  import EntryPortrait from './EntryPortrait.svelte'
  import HexagonHorizontalScaling from './HexagonHorizontalScaling.svelte'

  export let segment

  let navElements = navSegments,
    mounted = false

  $: hScreen = 0
  $: wScreen = 0
  $: heightHex = 0
  $: widthHex = 0

  onMount(async () => {
    mounted = true

    createShit()

    if (segment !== undefined) {
      console.log("TODO")
    }
  })

  $: metrex = hexPropsFromInside({
    width: wScreen,
    height: hScreen,
  })

  const createShit = () => {
    metrex = hexPropsFromInside({
      width: wScreen,
      height: hScreen,
    })

    heightHex = Math.floor(metrex.h)
    widthHex = Math.floor(metrex.w)
  }

  const resizeShit = () => {
    // TODO: would be nice to debounce this
    createShit()
  }

  let delay = 600
  let staggerHex = 300
  let staggerText = 900
</script>

<style>
  nav {
    --fumonicon-fag-primary: var(--grey-500);
    --fumonicon-dof-primary: var(--grey-700);
    --fumonicon-dof-secondary: var(--grey-600);
    --bar-bg: var(--grey-600);
    --nav-hex-bg: var(--grey-900);
  }

  nav {
    @apply relative;
    @apply grid;

    grid-area: nav;
    max-height: 100vh;
    max-width: 100vw;
    height: var(--height-hex, 100vh);
    grid-template-rows: repeat(12, 1fr);
    grid-template-columns:
      minmax(0, 1fr)
      repeat(3, var(--width-hex)) 
      minmax(0,1fr);
  }

  a {
    @apply relative;
    @apply z-30;
  }
  .title {
    @apply text-gray-400;
    @apply transition;
    @apply duration-300;
    @apply ease-in-out;
  }
  a:hover .title {
    @apply text-gray-100;
  }
  .nav-item-bg {
    @apply absolute;
    @apply inset-0;
    @apply transition;
    @apply duration-300;
    @apply ease-in-out;
    @apply opacity-0;
    z-index: -1;
  }
  a:hover .nav-item-bg {
    @apply opacity-50;
  }
  .header {
    grid-column: 2 / span 3;
    grid-row: 1 / span 3;
    align-self: center;
  }
  .fag {
    grid-column: 3;
    grid-row: 5 / span 4;
  }
  .about {
    grid-column: 1 / span 2;
    grid-row: 3 / span 4;
    display: grid;
    grid-template-columns: auto var(--width-hex);
    grid-template-areas: '. hex';
  }
  .solarpunk {
    grid-column: 4 / span 2;
    grid-row: 3 / span 4;
    display: grid;
    grid-template-columns: var(--width-hex) auto;
    grid-template-areas: 'hex .';
  }
  .projects {
    grid-column: 1 / span 2;
    grid-row: 7 / span 4;
    display: grid;
    grid-template-columns: auto var(--width-hex);
    grid-template-areas: '. hex';
  }
  .dof {
    grid-column: 4 / span 2;
    grid-row: 7 / span 4;
    display: grid;
    grid-template-columns: var(--width-hex) auto;
    grid-template-areas: 'hex .';
  }

  .nav-hex-svg-bg {
    @apply mx-auto;
  }

  .nav-hex-bg {
    @apply absolute;
    @apply inset-0;
    z-index: -1;
  }

  .smaller-hex {
    grid-area: hex;
    @apply p-4;
  }

  .label {
    @apply opacity-0;
    grid-area: hex;
  }
  .about .label,
  .solarpunk .label {
    align-self: end;
    justify-self: center;
  }
  .projects .label,
  .dof .label {
    align-self: start;
    justify-self: center;
  }
  @screen sm {
    .label {
      @apply opacity-100;
    }
  }
  @screen md {
    .smaller-hex {
      @apply p-6;
    }
  }
  @screen lg {
    .smaller-hex {
      @apply p-8;
    }
  }

  @keyframes scaleIn {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  .nav-scale-in {
    transform: scale(0);
    transform-origin: 50% 50%;
    animation: scaleIn 0.6s ease-out;
    animation-fill-mode: forwards;
  }
  .item-scale-in {
    transform: scale(0);
    animation: scaleIn 0.6s ease-out 0.6s;
    animation-fill-mode: forwards;
  }
</style>

<svelte:window
  bind:innerWidth={wScreen}
  bind:innerHeight={hScreen}
  on:resize={resizeShit}
/>

{#if mounted}
  <nav
    transition:fade
    style="--height-hex: {heightHex}px;
      --width-hex: {Math.floor(widthHex / 3)}px;">
    <div class="nav-hex-bg nav-scale-in">
      <svg
        x="0"
        y="0"
        height={metrex.h}
        width={metrex.w}
        class="nav-hex-svg-bg">
        <path
          d={createPath_hexFull(metrex)}
          fill="var(--nav-hex-bg, --oops)" />
      </svg>
    </div>

    <div
      class="header"
      transition:fly="{{ delay: delay, duration: 1800, y: -100, opacity: 0, easing: quintOut }}"
    >
      <FelixAkiraGreen />
    </div>

    <div class="fag nav-scale-in">
      {@html fag.svg}
    </div>
    <a href="about" class="about" transition:fade="{{delay: delay + staggerHex}}">
      <div class="nav-item-bg">
        <HexagonHorizontalScaling leftTip={false} />
      </div>
      <div class="label flex flex-col justify-center items-end">
        <h3 class="title" transition:fade="{{delay: delay + staggerText}}">about</h3>
      </div>
      <div class="smaller-hex item-scale-in" style="transform-origin: 100% 100%;">
        {@html portrait_fag.svg}
      </div>
    </a>
    <a href="solarpunk" class="solarpunk" transition:fade="{{delay: delay + staggerHex}}">
      <div class="nav-item-bg">
        <HexagonHorizontalScaling rightTip={false} />
      </div>
      <div class="smaller-hex item-scale-in" style="transform-origin: 0% 100%;">
        {@html solarpunk.svg}
      </div>
      <div class="label flex flex-col justify-center items-start">
        <h3 class="title" transition:fade="{{delay: delay + staggerText}}">solarpunk</h3>
      </div>
    </a>
    <a href="projects" class="projects" transition:fade="{{delay: delay + staggerHex}}">
      <div class="nav-item-bg">
        <HexagonHorizontalScaling leftTip={false} />
      </div>
      <div class="label flex flex-col justify-center items-end">
        <h3 class="title" transition:fade="{{delay: delay + staggerText}}">projects</h3>
      </div>
      <div class="smaller-hex item-scale-in" style="transform-origin: 100% 0%;">
        {@html projects.svg}
      </div>
    </a>
    <a href="dof" class="flex dof" transition:fade="{{delay: delay + staggerHex}}">
      <div class="nav-item-bg">
        <HexagonHorizontalScaling rightTip={false} />
      </div>
      <div class="smaller-hex item-scale-in" style="transform-origin: 0% 0%;">
        {@html dof.svg}
      </div>
      <div class="label flex flex-col justify-center items-start">
        <h3 class="title" transition:fade="{{delay: delay + staggerText}}">future</h3>
      </div>
    </a>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
      the blog data when we hover over the link or tap it on a touchscreen -->
    <!-- <li>
        <a rel="prefetch" class:selected={segment === 'blog'} href="blog">
          blog
        </a>
         style="--fumonicon-fag-0: var(--grey-100);"
      </li> -->

    <!-- </div> -->
  </nav>
{/if}
