<script>

</script>

<style global>
  body {
    @apply bg-gray-800;
    @apply text-gray-100;
  }
  /* p, li, blockquote {
    @apply text-lg;
  } */
  .-text-1 { @apply text-base; }
  .-text-2 { @apply text-xs; }
  /* h1 { @apply text-3xl !important; }
  h2 { @apply text-2xl !important; }
  h3 { @apply text-xl !important; }
  h4 { @apply text-xl !important; } */
  @screen sm {
    /* p, li, blockquote {
      @apply text-xl;
    } */
    .-text-1 { @apply text-base; }
    .-text-2 { @apply text-xs; }
    /* h1 { @apply text-4xl !important; }
    h2 { @apply text-3xl !important; }
    h3 { @apply text-2xl !important; }
    h4 { @apply text-xl !important; } */
  }
  @screen md {
    /* p, li, blockquote {
      @apply text-xl;
    } */
    .-text-1 { @apply text-lg; }
    .-text-2 { @apply text-base; }
    /* h1 { @apply text-5xl !important; }
    h2 { @apply text-4xl !important; }
    h3 { @apply text-3xl !important; }
    h4 { @apply text-2xl !important; } */
  }
  @screen lg {
    /* p, li, blockquote {
      @apply text-2xl;
    } */
    .-text-1 { @apply text-xl; }
    .-text-2 { @apply text-lg; }
    /* h1 { @apply text-6xl !important; }
    h2 { @apply text-5xl !important; }
    h3 { @apply text-4xl !important; }
    h4 { @apply text-3xl !important; } */
  }

  abbr {
    @apply text-gray-400;
    text-decoration-style: wavy;
    text-decoration-color: var(--yellow-300);
  }

  blockquote {
    @apply relative;
    @apply text-gray-200;
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

  .»y { @apply text-yellow-300; } /* tag yellow */
  .»g { @apply text-green-300; } /* tag green */
  .»r { @apply text-red-300; } /* tag red */
  .»b { @apply text-blue-300; } /* tag blue */
  .»p { @apply text-purple-300; } /* tag purple */
  .»o { @apply text-orange-300; } /* tag orange */
  .»i {
    @apply text-gray-900;
    @apply bg-gray-400;
    @apply rounded;
    @apply px-1;
  }
  @screen md {
    .»i {
      @apply px-2;
      @apply py-1;
    }
  }

  .»grey {
    @apply text-gray-400;
  }

  .plain {
    font-family: -apple-system, Helvetica Neue, sans-serif;
  }

  /* Idea to style tags more */

  /* .»y {
    @apply text-yellow-300;
  } */
  /* .»y::before {
    content: " ";
    position: absolute;
    z-index: -1;
    top: 0;
    left: -0.4625rem;
    width: 0;
    height: 0;
    border-top: 0.925rem solid transparent;
    border-bottom: 0.925rem solid transparent;
    border-right: 0.4625rem solid var(--yellow-800);
  }
  .»y::after {
    content: " ";
    position: absolute;
    z-index: -1;
    top: 0;
    right: -0.4625rem;
    width: 0;
    height: 0;
    border-top: 0.925rem solid transparent;
    border-bottom: 0.925rem solid transparent;
    border-left: 0.4625rem solid var(--yellow-800);
  } */
</style>


