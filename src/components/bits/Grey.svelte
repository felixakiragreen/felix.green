<script>
  export let cls = '';
  export let nw = false;
  
  let style = nw ? "white-space: nowrap;" : false
</script>

<span class="text-gray-400 {cls}" {style}><slot></slot></span>