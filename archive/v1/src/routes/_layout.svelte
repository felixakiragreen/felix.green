<script>
  import Nav from 'components/Nav.svelte'
  import Main from 'components/Main.svelte'
  import Footer from 'components/Footer.svelte'
  import Global from 'components/Global.svelte'
  import Tailwind from 'components/Tailwind.svelte'

  export let segment
</script>

<style>
  #layout {
    @apply min-h-screen;
    @apply grid;
    grid-template-areas:
      'nav'
      'main'
      'footer';
    grid-template-rows: auto 1fr auto;
  }
</style>

<Tailwind />
<Global />

<div id="layout">
  <Nav {segment} />
  <Main>
    <slot />
  </Main>
  <Footer />
</div>