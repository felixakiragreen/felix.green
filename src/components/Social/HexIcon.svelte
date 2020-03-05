<script>
  import HexBackground from './HexBackground.svelte'

  export let social

  const { url, color, path } = social

  let OFFSET = 9
</script>

<style>
  a {
    grid-column: span 2;
    --hex-bg: var(--base-hex-bg);
    --fill: var(--base-fill);
  }
  a:hover {
    --hex-bg: var(--hover-hex-bg);
    --fill: var(--hover-fill);
  }
</style>

<a href={url} target="_blank" 
style="--base-hex-bg: var(--{color}-700);
  --base-fill: var(--grey-300);
  --hover-hex-bg: var(--{color}-300);
  --hover-fill: var(--grey-700);">
  <HexBackground fill="var(--hex-bg)">
    <g transform={`translate(${OFFSET},${OFFSET}) scale(0.75)`}>
      <path d={path} fill="var(--fill)"  />
    </g>
  </HexBackground>
</a>
