<script>
  export let cls = '';
  export let nw = false;
  
  let style = nw ? "white-space: nowrap;" : false
</script>

<span class="text-yellow-300 {cls}" {style}><slot></slot></span>