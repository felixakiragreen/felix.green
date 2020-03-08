<script>
  export let href
  export let target = "_self"
  export let color 
</script>

<a {href} {target} class={`
  p-2
  rounded
  text-2xl
  text-${color}-300
  bg-gray-800
  hover:text-${color}-900
  hover:bg-${color}-300
`}>
  &#123;<slot></slot>&#125;
</a>