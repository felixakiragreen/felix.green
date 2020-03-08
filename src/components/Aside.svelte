<script>
  import Hexagon from './Hexagon.svelte'

  export let cx = null;
</script>

<style>
  aside {
    --hexagon-bg: var(--yellow-800);
    @apply relative;
    @apply text-orange-200;
    @apply mx-auto;
    @apply text-2xl;
    @apply text-center;
    @apply px-6;
    @apply py-4;
    @apply z-10;
  }
</style>

<aside class={cx}>
  <Hexagon style="z-index: -1;" />
  ⬢
  <br />
  <slot></slot>
  ⬢
</aside>