<script>
  export let href
  export let target = "_self"
  export let color
  export let inline = false
  export let cls = '' 
</script>

<a {href} {target} class={`
  p-0
  ${inline ? "md:px-1" : "sm:p-1 md:p-2"}
  rounded
  text-${color}-300
  bg-gray-800
  hover:text-${color}-900
  hover:bg-${color}-300
  ${cls}
`}>
  &#123;<slot></slot>&#125;
</a>