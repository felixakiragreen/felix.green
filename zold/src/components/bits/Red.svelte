<script>
  export let cls = '';
  export let nw = false;
  
  let style = nw ? "white-space: nowrap;" : false
</script>

<span class="text-red-300 {cls}" {style}><slot></slot></span>