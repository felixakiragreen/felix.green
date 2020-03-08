<script>
  export let leftTip = true;
  export let rightTip = true;

  let mask = {
    mask: "url(#hex-hor-scaling-mask-full)"
  }
  if (!leftTip && !rightTip) {
    mask = {}
  } else if (!leftTip) {
    mask = {
      mask: "url(#hex-hor-scaling-mask-right)"
    }
  } else if (!rightTip) {
    mask = {
      mask: "url(#hex-hor-scaling-mask-left)"
    }
  }

</script>

<style>
  :root {
    --bg: var(--grey-700);
  }
</style>

<svg x="0%" y="0%" width="100%" height="100%"
  xmlns="http://www.w3.org/2000/svg" 
  xmlns:xlink="http://www.w3.org/1999/xlink">

  <symbol id="hex-hor-scaling-tip" viewBox="0 0 69.3 240" preserveAspectRatio="xMinYMid">
    <path d="M69.282,0l2.718,0l0,240l-2.718,0l-69.282,-120l69.282,-120Z" />
  </symbol>
  <symbol id="hex-hor-scaling-tip-bounds" viewBox="0 0 69.3 240" preserveAspectRatio="xMinYMid">
    <rect x="0%" y="0%" width="100%" height="240" />
  </symbol>

  <mask id="hex-hor-scaling-mask-full" viewBox="0 0 240 240">
    <rect x="0%" y="0%" width="100%" height="100%" fill="white" />

    <use xlink:href="#hex-hor-scaling-tip-bounds" x="0%" y="0%" height="100%" width="50%" fill="black" />
    <use xlink:href="#hex-hor-scaling-tip-bounds" x="-100%" y="0%" height="100%" width="50%" fill="black" transform="scale(-1,1)" />
  </mask>
  
  <mask id="hex-hor-scaling-mask-left" viewBox="0 0 240 240">
    <rect x="0%" y="0%" width="100%" height="100%" fill="white" />
    <use xlink:href="#hex-hor-scaling-tip-bounds" x="0%" y="0%" height="100%" width="50%" fill="black" />
  </mask>

  <mask id="hex-hor-scaling-mask-right" viewBox="0 0 240 240">
    <rect x="0%" y="0%" width="100%" height="100%" fill="white" />
    <use xlink:href="#hex-hor-scaling-tip-bounds" x="-100%" y="0%" height="100%" width="50%" fill="black" transform="scale(-1,1)" />
  </mask>

  <rect {...mask} x="0%" y="0%" width="100%" height="100%" fill="var(--bg, #808080)" />

  {#if leftTip}
    <use xlink:href="#hex-hor-scaling-tip" x="0%" y="0%" height="100%" width="50%" fill="var(--bg, #808080)" />
  {/if}
  {#if rightTip}
    <use xlink:href="#hex-hor-scaling-tip" x="-100%" y="0%" height="100%" width="50%" fill="var(--bg, #808080)" transform="scale(-1,1)" />
  {/if}

</svg>
