<script>
  import { calculateTimeLeft, onInterval } from './_countdown.js'
  
  export let date = new Date()
  export let showPlain = true

  let countingDownTo = date

  $: timeLeft = calculateTimeLeft(countingDownTo)

	onInterval(
    () => timeLeft = calculateTimeLeft(countingDownTo), 1000
  );
</script>

<div>
  {#if timeLeft.done}
    <slot></slot>
  {:else}
    <h1 class="text-3xl md:text-4xl lg:text-5xl">
      {timeLeft.d} <span class="text-blue-300">d</span>
      {timeLeft.h} <span class="text-purple-300">h</span>
      {timeLeft.m} <span class="text-red-300">m</span>
      {timeLeft.s} <span class="text-orange-300">s</span>
    </h1>
    {#if showPlain}
      <p class="plain text-xs text-gray-400">
        {timeLeft.d} <span class="text-blue-600">day(s)</span>
        {timeLeft.h} <span class="text-purple-600">hour(s)</span>
        {timeLeft.m} <span class="text-red-600">minute(s)</span>
        {timeLeft.s} <span class="text-orange-600">second(s)</span>
      </p>
    {/if}
  {/if}
</div>