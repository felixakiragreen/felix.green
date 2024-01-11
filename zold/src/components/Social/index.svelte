<script>
  import { socials } from './_socials.js'

  import HexIcon from './HexIcon.svelte'
</script>

<style>
  .socials {
    justify-self: center;
    @apply max-w-md;
    @apply my-8;
  }
  ul {
    @apply grid;
    grid-template-rows: repeat(3, 1fr);
  }
  li {
    @apply grid;
    @apply -mt-2;
    grid-template-columns: repeat(12, 1fr);
  }
</style>

<div class="socials">
  <ul>

    <li>
      <div style="grid-column: 1 / span 3;" />
      {#each socials[2] as social}
        <HexIcon {social} />
      {/each}
    </li>

    <li>
      <div style="grid-column: 1 / span 2;" />
      {#each socials[1] as social}
        <HexIcon {social} />
      {/each}
    </li>

    <li>
      <div style="grid-column: 1 / span 1;" />
      {#each socials[0] as social}
        <HexIcon {social} />
      {/each}
    </li>

  </ul>
</div>
