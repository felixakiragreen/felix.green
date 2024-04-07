<script>
  import { solarpunk, golden_circle } from '@f*g/fumonicon'

  import NavItem from './NavItem.svelte'

  export let id
  export let cssVariablesById = {}
</script>

<style>
  nav {
    align-items: stretch;
  }
  li {
    @apply list-none;
  }
</style>

<nav {id} class={`
  grid
  grid-cols-1
  md:grid-cols-3
  my-8
  md:mt-16
`}>
  <NavItem id="philosophy" selectedId={id}>
    <div class="text-center">
      <div class="h-12" style={cssVariablesById["philosophy"]}>
        {@html golden_circle.svg}
      </div>
      <h2 class="»g text-3xl md:text-2xl lg:text-3xl">Philosophy</h2>
      <p class="text-lg">Why even dream?</p>
    </div>
  </NavItem>
  <NavItem id="science" selectedId={id}>
    <div class="text-center">
      <div class="h-12" style={cssVariablesById["science"]}>
        {@html golden_circle.svg}
      </div>
      <h2 class="»b text-3xl md:text-2xl lg:text-3xl">Science</h2>
      <p class="text-lg">How does it work?</p>
    </div>
  </NavItem>
  <NavItem id="technology" selectedId={id}>
    <div class="text-center">
      <div class="h-12" style={cssVariablesById["technology"]}>
        {@html golden_circle.svg}
      </div>
      <h2 class="»p text-3xl md:text-2xl lg:text-3xl">Technology</h2>
      <p class="text-lg">What is it like?</p>
    </div>
  </NavItem>
</nav>