<script>
  import { dof } from '@f*g/fumonicon'
  import Countdown from '../components/Countdown.svelte'

  let hbday = new Date('2020-09-09')  

  let date = hbday
</script>

<svelte:head>
  <title>12020.09.09 – the next chapter</title>
</svelte:head>

<div class={`
    relative
    grid
    gap-12
    text-center
    mt-8
    -mb-8
  `}
  id="top"
>

  <div class="h-64" style="--fumonicon-dof-primary: var(--green-300);">
    {@html dof.svg}
  </div>

  <p class="text-4xl text-gray-400">
    12020<span class="text-green-300">.</span>09<span class="text-green-300">.</span>09
  </p>
  <p class="text-5xl">
    <span class="text-3xl text-gray-300">the next chapter:</span>
    <br />
    <span class="»p">Designing</span> 
    <span class="»b">Our</span>
    <span class="»g">Future</span>
  </p>
  <Countdown {date}>
    <div>TODO</div>
  </Countdown>

</div>

