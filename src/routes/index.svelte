<script>
  import Index from 'wiki/index.svelte'
  import Hexagon from 'components/Hexagon.svelte'
  import Aside from 'components/Aside.svelte'
  import NoWrap from 'bits/NoWrap.svelte'
</script>

<svelte:head>
  <title>felix ⬡ green</title>
</svelte:head>

<div
  class={`
    relative
    grid
    gap-4
    mt-8
    overflow-hidden
    z-20
  `}
  id="top">
  <Aside>
    <p class="text-orange-300">
      <span class="plain">
        Welcome 🖖
        <br />
        Why does the text look like
      </span>
      <span class="text-gray-100">this</span><span class="plain">?
        <br />
        It's a font based on my <NoWrap>handwriting called
        <a
          href="projects#akira"
          class="plain text-green-300 hover:text-green-400"
        >Akira</a>.</NoWrap>
      </span>
    </p>
  </Aside>
  <Index />
</div>
