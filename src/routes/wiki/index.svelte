<script>
  import { golden_circle } from '@f*g/fumonicon'

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
    grid-template-columns: 1fr max-content 1fr;
    align-items: center;
  }
  p {
    @apply px-8;
  }

  abbr {
    @apply text-gray-400;
    text-decoration-style: wavy;
    text-decoration-color: var(--orange-300);
  }

  .h-icon {
    @apply h-16;
  }
  .fade-why {
    --fumonicon-golden-circle-why: var(--grey-600);
  }
  .fade-how {
    --fumonicon-golden-circle-how: var(--grey-700);
  }
  .fade-what {
    --fumonicon-golden-circle-what: var(--grey-600);
  }

  .tag-yellow {
    @apply text-yellow-300;
  }
  /* .tag-yellow::before {
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
  .tag-yellow::after {
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
  .tag-green {
    @apply text-green-300;
  }
  .tag-red {
    @apply text-red-300;
  }
  .tag-blue {
    @apply text-blue-300;
  }
  .tag-purple {
    @apply text-purple-300;
  }
  .tag-orange {
    @apply text-orange-300;
  }
  .tag-invert {
    @apply text-gray-900;
    @apply bg-gray-400;
    @apply rounded;
    @apply p-1;
  }
</style>

<section>
  <h2>
    <span class="tag-green" style="justify-self: end;">Why</span>
    <div class="h-icon" style="
      --fumonicon-golden-circle-how: var(--grey-700);
      --fumonicon-golden-circle-what: var(--grey-600);
    ">
      {@html golden_circle.svg}
    </div>
    <span style="justify-self: start;">
      I am
      <!-- <a href="future" class="text-green-300 hover:text-green-400 text-2xl">
        &#123;future&#125;
      </a> -->
    </span>
  </h2>

  <blockquote>
    <span class="tag-purple">Learn</span> from the <span class="tag-red">past</span>.
    <br />
    <span class="tag-purple">Be</span> in the <span class="tag-yellow">present</span>.
    <br />
    The <span class="tag-green">future</span> is <span class="tag-blue">everything</span> else.
  </blockquote>

  <p>
    Nothing <span class="tag-purple">inspires</span> me more than
    <span class="tag-blue">our</span> 🌍 <span class="tag-green">future</span>.
    <br />
    In the lifespan of <span class="tag-blue">humanity</span>,
    <span class="tag-blue">we</span>'re only teenagers.
    <br />
    And naturally it’s a 🔥 <span class="tag-orange">hot</span> 💩 mess.
  </p>

  <p>
    I am a single ⚛️ atom in the <span class="tag-blue">human</span> organism, wholly
    <span class="tag-invert">insignificant</span> but to a few other atoms with whom I have connections.
  </p>

  <p>
    I want to be alive to <span class="tag-purple">experience</span>
    <span class="tag-blue">humanity</span>'s <span class="tag-green">bright future</span> and
    <span class="tag-purple">play</span> a role in <span class="tag-purple">building</span> it.
  </p>
</section>

<section>
  <h2>
    <span class="tag-purple" style="justify-self: end;">How</span>
    <div class="h-icon" style="
      --fumonicon-golden-circle-why: var(--grey-700);
      --fumonicon-golden-circle-how: var(--purple-300);
      --fumonicon-golden-circle-what: var(--grey-600);
    ">
      {@html golden_circle.svg}
    </div>
    <span style="justify-self: start;">
      I be
      <!-- <a href="solarpunk" class="text-green-300 hover:text-green-400 text-2xl">
        &#123;solarpunk&#125;
      </a> -->
    </span>
  </h2>

  <!-- <blockquote>
    Technology is the improvement of arranging raw materials.
  </blockquote> -->
  <!-- <blockquote>
    Technology is the optimization of systemization.
  </blockquote> -->

  <p>
    I am a <span class="tag-green">solarpunk futurist</span> that <span class="tag-purple">believes</span> that through technology,
    <span class="tag-blue">humanity</span>
    can <span class="tag-purple">build</span> a <span class="tag-green">utopia</span>.
  </p>

  <p>
    In the <span class="tag-green">future</span> we will <span class="tag-purple">solve</span> 99% of the biggest problems
    <span class="tag-blue">we</span> face <span class="tag-yellow">today</span>:
    🦠 disease, 💸 poverty, ⚖️ inequality, crime, 📈 short-term thinking, and even 🧬 <span class="tag-invert">death</span> .
  </p>

  <p>But <span class="tag-blue">we</span>’re stuck here
    <span class="tag-yellow">today</span>, in the
    <abbr title="2020 AD/CE">12020th</abbr> year of the
    <span class="tag-blue">Holocene</span> Era. I have no 💡 how we're going to get there.
  </p>
  <p class="text-right">
    But I'm pretty sure <span class="tag-green">⬢ hexagons</span> are involved.
  </p>
</section>

<section>
  <h2>
    <span class="tag-blue" style="justify-self: end;">What</span>
    <div class="h-icon" style="
      --fumonicon-golden-circle-why: var(--grey-600);
      --fumonicon-golden-circle-how: var(--grey-700);
      --fumonicon-golden-circle-what: var(--blue-300);
    ">
      {@html golden_circle.svg}
    </div>
    <span style="justify-self: start;">
      I do
      <!-- <a href="projects" class={`
        p-2
        rounded
        text-2xl
        text-green-300
        bg-gray-800
        hover:text-green-400
        hover:bg-green-900
      `}>
        &#123;projects&#125;
      </a> -->
    </span>
  </h2>

  <p>
    {#if isToday(bday)}
      Today
    {:else}
      On <abbr title="9th of March, 2020">12020.03.09</abbr>
    {/if}
    I began a new chapter of my life.
  </p>

  <p>
    My <span class="tag-invert">greatest fear</span> is that I will spend most of my life dreaming and never
    accomplish anything. I can’t stop dreaming, so this site is my
    <span class="tag-purple">attempt</span> to start <span class="tag-blue">doing</span>.
  </p>

  
  
  <p>
    I have far more ideas than I can ever accomplish in a lifetime.
    I am looking for similar-minded collaborators that want to work together
    on projects focused on building a better future.
  </p>
</section>