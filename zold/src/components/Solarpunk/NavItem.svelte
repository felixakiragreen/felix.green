<script>
  export let id
  export let selectedId
</script>

<style>
  li {
    @apply list-none;
  }
</style>

<li class="{selectedId !== id && "hidden md:inline"} -text-2">
  <a href="solarpunk#{id}" class={`
    block
    p-4
    md:p-8
    bg-gray-700
    ${selectedId === id ? "text-gray-200" : "text-gray-400"}
    ${selectedId !== id && "md:bg-gray-600 hover:bg-gray-700 hover:text-gray-200"}
  `}>
    <slot></slot>
  </a>
</li>