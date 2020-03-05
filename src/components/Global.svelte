<script>

</script>

<style global>
  body {
    @apply bg-gray-800;
    @apply text-gray-100;
  }
  p {
    @apply text-lg;
  }
  h1 {
    @apply text-3xl !important;
  }
  h2 {
    @apply text-2xl !important;
  }
  h3 {
    @apply text-xl !important;
  }
  h4 {
    @apply text-xl !important;
  }
  @screen sm {
    p {
      @apply text-xl;
    }
    h1 {
      @apply text-4xl !important;
    }
    h2 {
      @apply text-3xl !important;
    }
    h3 {
      @apply text-2xl !important;
    }
    h4 {
      @apply text-xl !important;
    }
  }
  @screen md {
    p {
      @apply text-xl;
    }
    h1 {
      @apply text-5xl !important;
    }
    h2 {
      @apply text-4xl !important;
    }
    h3 {
      @apply text-3xl !important;
    }
    h4 {
      @apply text-2xl !important;
    }
  }
  @screen lg {
    p {
      @apply text-2xl;
    }
    h1 {
      @apply text-6xl !important;
    }
    h2 {
      @apply text-5xl !important;
    }
    h3 {
      @apply text-4xl !important;
    }
    h4 {
      @apply text-3xl !important;
    }
  }

  
  blockquote {
    @apply relative;
    @apply text-gray-200;
    @apply text-2xl;
    @apply text-center;
    @apply -mx-6;
    @apply px-6;
    @apply py-4;
  }
  /* TODO: replace with actual SVG */
  blockquote::before {
    content: ' ';
    background-image: url('../blockquote.svg');
    background-size: 100% 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  /* aside {
    @apply relative;
    @apply text-gray-200;
    @apply text-2xl;
    @apply text-center;
    @apply px-6;
    @apply py-4;
  }
  aside::before {
    content: ' ';
    background-image: url('../aside.svg');
    background-position: center center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  } */
</style>
