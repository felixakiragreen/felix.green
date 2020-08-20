<script>
  import { golden_circle, time } from '@f*g/fumonicon'

  import SpiffyLink from 'bits/SpiffyLink.svelte'
  import Red from 'bits/Red.svelte'
  import Orange from 'bits/Orange.svelte'
  import Yellow from 'bits/Yellow.svelte'
  import Green from 'bits/Green.svelte'
  import Blue from 'bits/Blue.svelte'
  import Purple from 'bits/Purple.svelte'
  import Invert from 'bits/Invert.svelte'
  import Grey from 'bits/Grey.svelte'
  import NoWrap from 'bits/NoWrap.svelte'

  let bday = new Date('2020-03-09')  

  const isToday = (inputDate) => {
    const d = new Date()
    return inputDate.getDate() == d.getDate() && inputDate.getMonth() == d.getMonth() && inputDate.getFullYear() == d.getFullYear();
  }

  const sectionCls = `
    grid
    gap-4
    md:gap-8
    mx-4
    md:mx-8
    text-lg
    md:text-xl
    lg:text-2xl
  `
  const h3xCls = `
    grid
    gap-2
    md:gap-4
    my-4
    md:my-8
    text-3xl
    md:text-4xl
    lg:text-5xl
  `
</script>

<style>
  h2 {
    grid-template-columns: 1fr max-content 1fr;
    align-items: center;
  }
  abbr {
    @apply text-gray-400;
    text-decoration-style: wavy;
    text-decoration-color: var(--yellow-300);
  }
  .h-icon {
    @apply h-16;
    @apply w-16;
  }
</style>

<section class={sectionCls}>
  <h2 class={h3xCls}>
    <span class="»g" style="justify-self: end;">Why</span>
    <div class="h-icon" style="
      --fumonicon-golden-circle-how: var(--grey-700);
      --fumonicon-golden-circle-what: var(--grey-600);
    ">
      {@html golden_circle.svg}
    </div>
    <span style="justify-self: start;">
      I am
      <SpiffyLink
        href="about#top"
        color="yellow"
        cls="hidden md:inline text-2xl"
      >
        my story
      </SpiffyLink>
    </span>
  </h2>

  <blockquote class="-mx-4 md:-mx-8">
    <div class={`
      absolute
      top-0
      bottom-0
      left-0
      right-0
      opacity-25
    `} style="
      --fumonicon-time-past: var(--red-800);
      --fumonicon-time-present: var(--yellow-800);
      --fumonicon-time-future: var(--green-800);
      z-index: -1;
    ">
      {@html time.svg}
    </div>
    <Purple>Learn</Purple> from the
    <Red>past</Red>.
    <br />
    <Purple>Be</Purple> in the
    <Yellow>present</Yellow>.
    <br />
    The <Green>future</Green> is
    <Blue>everything</Blue> else.
  </blockquote>

  <p>
    Nothing <Purple>inspires</Purple> me more than
    <Blue>our</Blue>
    <Green nw>🌍 future</Green>.
    <br />
    In the lifespan of <Blue>humanity</Blue>,
    <Blue>we</Blue>'re only teenagers.
    <br />
    And naturally it’s a 
    <Orange nw>🔥 hot</Orange>
    <Red nw>💩 mess</Red>.
  </p>

  <p>
    I am a single
    <NoWrap>⚛️ atom</NoWrap>
    in the
    <Blue>human</Blue>
    organism, wholly
    <span class="»i">insignificant</span> but to a few other atoms with whom I have connections.
  </p>

  <p>
    I want to be alive to
    <Purple>experience</Purple>
    <Blue>humanity</Blue>'s
    <Orange>bright</Orange>
    <Green>future</Green> and
    <Purple>play</Purple> a role in
    <Purple>building</Purple> it.
  </p>
</section>

<section class={sectionCls}>
  <h2 class={h3xCls}>
    <span class="»p" style="justify-self: end;">How</span>
    <div class="h-icon" style="
      --fumonicon-golden-circle-why: var(--grey-700);
      --fumonicon-golden-circle-how: var(--purple-300);
      --fumonicon-golden-circle-what: var(--grey-600);
    ">
      {@html golden_circle.svg}
    </div>
    <span style="justify-self: start;">
      I be
      <SpiffyLink
        href="solarpunk#top"
        color="green"
        cls="hidden md:inline text-2xl"
      >
        solarpunk
      </SpiffyLink>
    </span>
  </h2>

  <!-- <blockquote>
    Technology is the improvement of arranging raw materials.
  </blockquote> -->
  <!-- <blockquote>
    Technology is the optimization of systemization.
  </blockquote> -->

  <p>
    I am a
    <Green>solarpunk futurist</Green>
    that
    <Purple>believes</Purple>
    that through
    <NoWrap>🛰 technology,</NoWrap>
    <Blue>humanity</Blue>
    can
    <Purple>build</Purple> a
    <Green>utopia</Green>.
  </p>

  <p>
    In the
    <Green>future</Green>
    we will
    <Purple>solve</Purple>
    99% of the biggest problems
    <Blue>we</Blue> face <Yellow>today</Yellow>:
    <NoWrap>🦠 disease,</NoWrap>
    <NoWrap>💸 poverty,</NoWrap>
    <NoWrap>⚖️ inequality,</NoWrap>
    crime,
    <NoWrap>📈 short-term thinking,</NoWrap> and even
    <NoWrap>🧬 <span class="»i">death</span>.</NoWrap>
  </p>

  <p>
    But
    <Blue>we</Blue>’re
    stuck here
    <Yellow>today</Yellow>, in the
    <abbr title="2020 AD/CE = 12020 HE - 10k years of human history">12020th</abbr> year of the
    <Blue>Holocene</Blue>
    Era. I have no 💡 how we're going to get there.
  </p>
  <p class="text-right px-4 md:px-8">
    But I'm pretty sure 
    <NoWrap><Green>⬢ hexagons</Green></NoWrap>
    are involved.
  </p>
</section>

<section class={sectionCls}>
  <h2 class={h3xCls}>
    <span class="»b" style="justify-self: end;">What</span>
    <div class="h-icon" style="
      --fumonicon-golden-circle-why: var(--grey-600);
      --fumonicon-golden-circle-how: var(--grey-700);
      --fumonicon-golden-circle-what: var(--blue-300);
    ">
      {@html golden_circle.svg}
    </div>
    <span style="justify-self: start;">
      I do
      <SpiffyLink
        href="projects#top"
        color="blue"
        cls="hidden md:inline text-2xl"
      >
        projects
      </SpiffyLink>
    </span>
  </h2>

  <p>
    {#if isToday(bday)}
      Today
    {:else}
      On <abbr title="March 9th, 2020">12020.03.09</abbr>
    {/if}
    I began a
    <Green>new</Green> chapter of my
    <Blue>life</Blue>.
  </p>

  <p>
    My
    <Orange>greatest</Orange>
    <Red>fear</Red> is that I will spend most of my
    <Blue>life</Blue>
    <Purple>dreaming</Purple> and
    <Red>never</Red>
    <Purple>accomplish</Purple>
    <Blue>anything</Blue>.
    I can’t stop
    <Purple>dreaming</Purple>, so this website is me
    <Blue>doing</Blue>.
  </p>

  <p>
    I am looking for 
    <Yellow>collaborators</Yellow>
    that want to
    <Purple>work</Purple>
    <Green>together</Green> on
    <SpiffyLink
      inline
      color="blue"
      href="projects#top"
    >
      projects
    </SpiffyLink>
    <Red>focused</Red> on
    <Purple>building</Purple> a
    <Orange>better</Orange>
    <Green>future</Green>.
  </p>

  <p class="-text-2 »grey plain my-4">
    <Orange>🚧 TODO:</Orange>
    Site is WIP; if you find any mistakes
    <NoWrap>
      🙏 pls
    </NoWrap>
    let me know on
    <SpiffyLink
      inline
      color="gray"
      href="https://github.com/felixakiragreen/felix.green/issues"
    >
      Github
    </SpiffyLink>
  </p>

</section>