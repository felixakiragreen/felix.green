<script>
  export let color
  export let number
  export let title
</script>

<style>
  li {
    grid-template-rows: auto 1fr;
  }
  @screen sm {
    li {
      grid-template-columns: auto 1fr;
    }
  }
  @screen md {
    .text-6xl {
      font-size: 6rem;
    }
  }
</style>

<li class="grid sm:gap-4 md:gap-8 sm:px-4 md:px-8">
  <dt class="text-4xl sm:text-5xl text-6xl text-{color}-600 text-center">{number}</dt>
  <dd>
    <h3 class="text-3xl md:text-4xl lg:text-5xl text-center sm:text-left">{title}</h3>
    <slot></slot>
  </dd>
</li>