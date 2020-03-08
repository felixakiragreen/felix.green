<script>
  import Nav from 'components/Nav.svelte'
  import Main from 'components/Main.svelte'
  import Footer from 'components/Footer.svelte'
  import Global from 'components/Global.svelte'
  import Tailwind from 'components/Tailwind.svelte'

  import ConditionalCountdown from 'components/ConditionalCountdown.svelte'

  export let segment

  let bday = new Date('2020-03-09')  

  let dev = new Date('2020-03-04T17:24Z')
  let date = bday
  // let date = dev
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
  <ConditionalCountdown {date}>
    <Nav {segment} />
    <Main>
      <slot />
    </Main>
  </ConditionalCountdown>
  <Footer />
</div>