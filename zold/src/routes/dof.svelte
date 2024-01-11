<script>
  import { dof } from '@f*g/fumonicon'

  import Countdown from 'components/Countdown.svelte'
  import Grey from 'bits/Grey.svelte'
  import Green from 'bits/Green.svelte'
  import Blue from 'bits/Blue.svelte'
  import Purple from 'bits/Purple.svelte'

  let hbday = new Date('2020-09-09')  
  let bday = new Date('2021-03-09')  
  let date = bday
</script>

<svelte:head>
  <title>12021.03.09 – the next chapter</title>
</svelte:head>

<div class={`
    relative
    grid
    gap-4
    md:gap-8
    lg:gap-12
    text-center
    mt-8
  `}
  id="top"
>

  <div class="h-40 md:h-64" style="--fumonicon-dof-primary: var(--green-300);">
    {@html dof.svg}
  </div>

  <p class="text-3xl md:text-4xl text-gray-400">
    12021<Green>.</Green>03<Green>.</Green>09
  </p>
  
  <p class="text-2xl md:text-3xl text-gray-300">
    the next chapter:
  </p>
  
  <p class="text-3xl md:text-4xl lg:text-5xl">
    <Purple>Designing</Purple>
    <Blue>Our</Blue>
    <Green>Future</Green>
  </p>
  
  <Countdown {date}>
    <div>TODO</div>
  </Countdown>

</div>