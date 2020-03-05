<script>
  import Hexagon from './Hexagon.svelte'
</script>

<style>
  :global(.plain) {
    font-family: -apple-system, Helvetica Neue, sans-serif;
  }
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

<aside>
  <Hexagon style="z-index: -1;" />
  ⬢
  <p class="text-orange-300">
    <span class="plain">
      Welcome 👋
      <br />
      Why does the text look like
    </span>
    <span class="text-gray-100">this</span><span class="plain">?
      <br />
      It's a font based on my handwriting called
      <a href="akira" class="plain text-green-300 hover:text-green-400">&#123;Akira&#125;</a>.
    </span>
  </p>
  ⬢
</aside>