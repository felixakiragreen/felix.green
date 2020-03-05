<script>
  import { fade } from 'svelte/transition'
  import { calculateTimeLeft, onInterval } from './_countdown.js'

  import { fag } from '../fag/fumonicon'

  import Countdown from './Countdown.svelte'
  import Socials from './Social/index.svelte'

  export let date = new Date()
  export let showCountdown = true

  let countingDownTo = new Date(Date.parse(date) + 2000)

  $: timeLeft = calculateTimeLeft(countingDownTo)

	onInterval(
    () => timeLeft = calculateTimeLeft(countingDownTo), 1000
  );
</script>

<style>
  .fag {
    --fumonicon-fag-primary: var(--grey-500);
  }
  .layout {
    display: grid;
  }
</style>

{#if timeLeft.done}
  <div transition:fade>
    <slot></slot>
  </div>
{:else if showCountdown}
  <div class="layout" transition:fade>
    <div class="container mx-auto text-center grid gap-4">
      <div class="fag py-4 h-48 md:56 lg:64">
        {@html fag.svg}
      </div>
      <p class="text-4xl text-gray-400">
        12020<span class="text-green-300">.</span>03<span class="text-green-300">.</span>09
      </p>
      <p class="text-5xl">
        the story begins
      </p>
      <Countdown {date}>
        <h1 class="text-green-300">hb 🥳 029</h1>
      </Countdown>
    </div>
  </div>
  <Socials />
{/if}
