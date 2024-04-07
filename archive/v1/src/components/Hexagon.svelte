<script>
  export let style
</script>

<div
  class={`
    absolute
    left-0
    right-0
    top-0
    bottom-0
  `}
  {style}
  >
  <svg
    x="0%"
    y="0%"
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <symbol id="symbol-hexagon" viewBox="0 0 240 240" preserveAspectRatio="xMidYMax">
      <path
        d="M120,0l103.923,60l0,120l-103.923,60l-103.923,-60l0,-120l103.923,-60Z"
      />
    </symbol>

    <!-- <rect
      x="0%"
      y="0%"
      width="100%"
      height="100%"
    /> -->

    <use
      xlink:href="#symbol-hexagon"
      x="0"
      y="0"
      height="100%"
      width="100%"
      fill="var(--hexagon-bg, #808080)"
    />

  </svg>
</div>