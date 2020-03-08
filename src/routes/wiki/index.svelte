<script>
  import { golden_circle, time } from '@f*g/fumonicon'

  import SpiffyLink from 'components/SpiffyLink.svelte'

  let bday = new Date('2020-03-09')  

  const isToday = (inputDate) => {
    const d = new Date()
    return inputDate.getDate() == d.getDate() && inputDate.getMonth() == d.getMonth() && inputDate.getFullYear() == d.getFullYear();
}
</script>

<style>
  section {
    @apply grid;
    @apply gap-4;
  }
  h2 {
    @apply grid;
    @apply gap-4;
    @apply py-4;
    grid-template-columns: 1fr max-content 1fr;
    align-items: center;
  }
  p {
    @apply px-8;
  }
  
  abbr {
    @apply text-gray-400;
    text-decoration-style: wavy;
    text-decoration-color: var(--yellow-300);
  }
  .h-icon {
    @apply h-16;
  }
</style>

<section>
  <h2>
    <span class="»g" style="justify-self: end;">Why</span>
    <div class="h-icon" style="
      --fumonicon-golden-circle-how: var(--grey-700);
      --fumonicon-golden-circle-what: var(--grey-600);
    ">
      {@html golden_circle.svg}
    </div>
    <span style="justify-self: start;">
      I am
      <SpiffyLink href="about#top" color="yellow" cls="text-2xl">my story</SpiffyLink>
    </span>
  </h2>

  <blockquote>
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
    <span class="»p">Learn</span> from the <span class="»r">past</span>.
    <br />
    <span class="»p">Be</span> in the <span class="»y">present</span>.
    <br />
    The <span class="»g">future</span> is <span class="»b">everything</span> else.
  </blockquote>

  <p>
    Nothing <span class="»p">inspires</span> me more than
    <span class="»b">our</span> 🌍 <span class="»g">future</span>.
    <br />
    In the lifespan of <span class="»b">humanity</span>,
    <span class="»b">we</span>'re only teenagers.
    <br />
    And naturally it’s a 🔥 <span class="»o">hot</span> 💩 mess.
  </p>

  <p>
    I am a single ⚛️ atom in the <span class="»b">human</span> organism, wholly
    <span class="»i">insignificant</span> but to a few other atoms with whom I have connections.
  </p>

  <p>
    I want to be alive to
    <span class="»p">experience</span>
    <span class="»b">humanity</span>'s
    <span class="»o">bright</span>
    <span class="»g">future</span> and
    <span class="»p">play</span> a role in
    <span class="»p">building</span> it.
  </p>
</section>

<section>
  <h2>
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
      <SpiffyLink href="solarpunk#top" color="green" cls="text-2xl">solarpunk</SpiffyLink>
    </span>
  </h2>

  <!-- <blockquote>
    Technology is the improvement of arranging raw materials.
  </blockquote> -->
  <!-- <blockquote>
    Technology is the optimization of systemization.
  </blockquote> -->

  <p>
    I am a <span class="»g">solarpunk futurist</span> that <span class="»p">believes</span>
    that through 🛰 technology, <span class="»b">humanity</span>
    can <span class="»p">build</span> a <span class="»g">utopia</span>.
  </p>

  <p>
    In the <span class="»g">future</span> we will <span class="»p">solve</span> 99% of the biggest problems
    <span class="»b">we</span> face <span class="»y">today</span>:
    🦠 disease, 💸 poverty, ⚖️ inequality, crime, 📈 short-term thinking, and even 🧬 <span class="»i">death</span>.
  </p>

  <p>But <span class="»b">we</span>’re stuck here
    <span class="»y">today</span>, in the
    <abbr title="2020 AD/CE = 12020 HE - 10k years of human history">12020th</abbr> year of the
    <span class="»b">Holocene</span> Era. I have no 💡 how we're going to get there.
  </p>
  <p class="text-right">
    But I'm pretty sure <span class="»g">⬢ hexagons</span> are involved.
  </p>
</section>

<section>
  <h2>
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
      <SpiffyLink href="projects#top" color="blue" cls="text-2xl">projects</SpiffyLink>
    </span>
  </h2>

  <p>
    {#if isToday(bday)}
      Today
    {:else}
      On <abbr title="March 9th, 2020">12020.03.09</abbr>
    {/if}
    I began a
    <span class="»g">new</span> chapter of my
    <span class="»b">life</span>.
  </p>

  <p>
    My
    <span class="»o">greatest</span>
    <span class="»r">fear</span> is that I will spend most of my
    <span class="»b">life</span>
    <span class="»p">dreaming</span> and
    <span class="»r">never</span>
    <span class="»p">accomplish</span>
    <span class="»b">anything</span>.
    I can’t stop
    <span class="»p">dreaming</span>, so this website is me
    <span class="»b">doing</span>.
  </p>

  <p>
    I am looking for 
    <span class="»y">collaborators</span>
    that want to
    <span class="»p">work</span>
    <span class="»g">together</span> on
    <SpiffyLink href="projects#top" color="blue">projects</SpiffyLink>
    <span class="»r">focused</span> on
    <span class="»p">building</span> a
    <span class="»o">better</span>
    <span class="»g">future</span>.
  </p>

  <p class="-text-2 »grey plain my-4">
    <span class="»o">🚧 TODO:</span>
    Site is WIP; if you find any mistakes
    🙏 pls let me know on
    <SpiffyLink
      color="gray"
      href="https://github.com/felixakiragreen/felix.green/issues">Github
    </SpiffyLink>
  </p>

</section>