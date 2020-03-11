<script>
  import { solarpunk, golden_circle } from '@f*g/fumonicon'
  
  import Aside from 'components/Aside.svelte'
  import NavSolarpunk from 'components/Solarpunk/Nav.svelte'
  import LgNumListItem from 'components/Solarpunk/LgNumListItem.svelte'
  import SmColList from 'components/Solarpunk/SmColList.svelte'
  
  import TxtSolarpunk from 'bits/Solarpunk.svelte'
  import Red from 'bits/Red.svelte'
  import Orange from 'bits/Orange.svelte'
  import Yellow from 'bits/Yellow.svelte'
  import Green from 'bits/Green.svelte'
  import Blue from 'bits/Blue.svelte'
  import Purple from 'bits/Purple.svelte'
  import Invert from 'bits/Invert.svelte'
  import Grey from 'bits/Grey.svelte'
  import NoWrap from 'bits/NoWrap.svelte'
  import Guillemet from 'bits/Guillemet.svelte'

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
    text-3xl
    md:text-4xl
    lg:text-5xl
  `
  const h2xCls = `
    text-2xl
    sm:text-3xl
    md:text-4xl
    lg:text-5xl
  `
  const h4xCls = `
    text-4xl
    sm:text-5xl
    text-6xl
  `
</script>

<style>
  /* section, article {
    @apply grid;
    @apply gap-4;
  } */

  abbr {
    @apply text-gray-400;
    text-decoration-style: wavy;
    text-decoration-color: var(--yellow-300);
  }

  nav {
    /* @apply bg-gray-600; */
    @apply grid;
    /* @apply grid-cols-3; */
    /* @apply mt-16; */
    /* @apply mb-8; */
    align-items: stretch;
  }
  nav li {
    /* @apply grid; */
    @apply list-none;
  }

  nav a {
    /* @apply block;
    @apply p-8;
    @apply text-gray-400; */
  }
  /* nav a:hover {
    @apply bg-gray-700;
    @apply text-gray-200;
  } */
  /* a.selected {
    @apply bg-gray-700;
    @apply text-gray-200;
  } */

  /* ol {
    @apply grid;
    @apply my-4;
    @apply gap-4;
  } */
  ol > li {
    @apply grid;
    grid-template-columns: auto 1fr;
  }

  @screen md {
    .text-6xl {
      font-size: 6rem;
    }
  }
</style>

<section class={sectionCls}>
  <div class="h-40 md:h-64">
    {@html solarpunk.svg}
  </div>

  <blockquote>
    <h2 class="{h2xCls} text-center">
      <Blue>Hope</Blue>
      for the
      <Green>future</Green>
    </h2>
  </blockquote>

  <article class="grid gap-4 md:gap-8 text-center">
    <p>
      <span class="text-gray-500">
        There are many voices with better words describing Solarpunk.
      </span>
      <br />
      <Grey>This is what it means to me:</Grey>
    </p>

    <p>
      a
      <Green>solarpunk</Green> is
      <span class="»i">anyone</span> that
      <NoWrap>
        <Purple>dreams</Purple> of a
        <Blue>better</Blue>
        <Green>future</Green>.
      </NoWrap>
    </p>
  </article>

  <Aside>
    <h5 class="»o text-center text-2xl md:text-3xl">⚠️ Warning</h5>
    <p class="plain -text-2 text-left">
      I am not a words person— I am a visual person. This is my best attempt to
      articulate a specific vision. If you feel it too and can help
      explain or communicate it better please join me. I believe strongly that
      the collective voice is stronger than the singular.
    </p>
  </Aside>

</section>

<NavSolarpunk
  id="philosophy"
  cssVariablesById={{
    philosophy: `
      --fumonicon-golden-circle-how: var(--grey-700);
      --fumonicon-golden-circle-what: var(--grey-600);
    `,
    science: `
      --fumonicon-golden-circle-why: var(--grey-600);
      --fumonicon-golden-circle-how: var(--blue-500);
      --fumonicon-golden-circle-what: var(--grey-700);
    `,
    technology: `
      --fumonicon-golden-circle-why: var(--grey-700);
      --fumonicon-golden-circle-how: var(--grey-600);
      --fumonicon-golden-circle-what: var(--purple-500);
    `,
  }}
/>

<section class={sectionCls}>

  <blockquote class="-mx-4 md:-mx-8">
    In order to
    <Purple>build</Purple> a
    <Blue>better</Blue>
    <Green>future</Green>,
    <NoWrap>
      we must first
      <Purple>imagine</Purple>
      it.
    </NoWrap>
  </blockquote>

  <article class="grid gap-4">
    <p class="text-center">
      The 🌏 world <span class="»i">is</span> getting better.
    </p>

    <p class="text-right">
      But it doesn't always <Red>feel</Red> like it.
    </p>

    <p>
      We have more 
      <Yellow>awareness</Yellow> of the world's 
      <Orange>problems</Orange> than ever before,
      but most of us 
      <Red>struggle</Red> with
      <Purple>making</Purple> a 
      <Green>meaningful</Green> impact.
    </p>
  </article>

  <blockquote class="-mx-4 md:-mx-8">
    You musn't be
    <Orange>afraid</Orange> to
    <Purple>dream</Purple> a little
    <Blue>bigger</Blue>, darling 🥰
  </blockquote>

  <article class="grid gap-4">
    <p>
      <TxtSolarpunk /> is
      <Red>removing</Red> the limits to our imaginations.
    </p>

    <p>
      <TxtSolarpunk /> is a
      <Orange>movement</Orange> to reclaim our lost optimism.
    </p>

    <p>
      <TxtSolarpunk /> is a
      <Yellow>choice</Yellow> because the only other options are denial or despair.
    </p>

    <p>
      <TxtSolarpunk /> is a
      <Green>vision</Green> of a future that embodies the best of what humanity can achieve.
    </p>

    <p>
      <TxtSolarpunk /> is
      <Blue>inspiration</Blue> for those who have lost hope.
    </p>

    <p>
      <TxtSolarpunk /> is a
      <Purple>meme</Purple> to bring together enough people to create 
      the systematic reinvention needed to build a neotopian future.
    </p>
  </article>

</section>

<NavSolarpunk
  id="science"
  cssVariablesById={{
    philosophy: `
      --fumonicon-golden-circle-why: var(--green-500);
      --fumonicon-golden-circle-how: var(--grey-600);
      --fumonicon-golden-circle-what: var(--grey-700);
    `,
    science: `
      --fumonicon-golden-circle-why: var(--grey-700);
      --fumonicon-golden-circle-what: var(--grey-600);
    `,
    technology: `
      --fumonicon-golden-circle-why: var(--grey-700);
      --fumonicon-golden-circle-how: var(--grey-600);
      --fumonicon-golden-circle-what: var(--purple-500);
    `,
  }}
/>

<section class={sectionCls}>

  <article class="grid gap-4">

    <h2 class="{h3xCls} text-center"><Orange>First</Orange> Principles</h2>

    <p> 
      When approaching something
      <Yellow>new</Yellow>,
      the
      <Purple>framework</Purple>
      used for
      <Blue><NoWrap>💭 thinking</NoWrap></Blue>
      determines what is
      <Purple>possible</Purple>.
    </p>

    <p>
      Generally there are 2 ways to
      <Blue><NoWrap>🧠 reason</NoWrap></Blue>:
    </p>

    <ol class="grid">
      <li
        class="gap-4 md:gap-8 md:px-4"
        style="align-items: first baseline;"
      >
        <dt class="text-4xl sm:text-5xl text-red-500">1</dt>
        <dd>
          <h4 class={h2xCls}>by <Red>analogy</Red></h4>
          <span class="-text-1 text-gray-300">
            Essentially 
            <Purple>copying</Purple> 🎨 what has been done
            <Red>before</Red> with slight variations.
          </span>
        </dd>
      </li>
      <li
        class="gap-4 md:gap-8 md:px-4"
        style="align-items: first baseline;"
      >
        <dt class="text-4xl sm:text-5xl text-orange-500">2</dt>
        <dd>
          <h4 class={h2xCls}>using <Orange>first</Orange> principles</h4>
          <span class="-text-1 text-gray-300">
            Boil things down to their
            <NoWrap>⚛️ <span class="»i">fundamental</span></NoWrap>
            <Green>truths</Green> and
            <Blue>reason</Blue> up from there.  
          </span>
        </dd>
      </li>
    </ol>

    <p>
      We all get through
      <Green>life</Green> reasoning through
      <Red>analogy</Red>
      because it comes
      <Purple>naturally</Purple> and is far more
      <Green>efficient</Green>.
    </p>
    <p>
      <span class="text-orange-500"
        >«</span><Orange>In fact</Orange><span class="text-orange-500"
        >»</span> it
      <Red>has</Red> to be done because otherwise
      <Blue>mentally</Blue>,
      a person couldn't get through a
      <Yellow>day</Yellow>. 
    </p>
    <p> 
      But when trying to
      <Purple>create</Purple>,
      <Blue>design</Blue>, or
      <Green>invent</Green> anything
      <Yellow>new</Yellow>,
      using the 📏
      <Blue>physics</Blue> approach of
      <NoWrap>🧠 <Green>reasoning</Green></NoWrap> by
      <Orange>first</Orange> principles,
      <Green>helps</Green> reach
      <Blue>solutions</Blue> that are
      <span class="»i">counter</span>intuitive
      and would never have been
      <Purple>discovered</Purple>
      by iterating on what already exists.
    </p>

  </article>

  <blockquote>Everything is a system.</blockquote>

  <Aside>
    <h5 class="»o text-center text-2xl md:text-3xl">⚠️ Warning</h5>
    <p class="plain -text-2 text-left">
      I know very little about systems.
      I find them incredibly fascinating and love studying them.
      This is my best attempt to articulate the first principles
      of designing and building solarpunk systems.
      If you can boil these down to more basic truths or suggest alternatives,
      please share them with me!
    </p>
  </Aside>

  <ol class="grid gap-4 md:my-4">

    <LgNumListItem
      color="red"
      number="1"
      title="Self-correction"
    >
      <Guillemet cls="text-red-600"
        ><Red>Take the actions that are most likely to make the
          <Green>future</Green> better.
            <NoWrap>Then <Blue>re-evaluate</Blue>.</NoWrap></Red>
      </Guillemet> -Elon
      <p class="px-4 md:px-0">
        <Grey cls="block my-2">Similar concepts:</Grey>
        <SmColList>
          <span>🔄 Feedback Loops</span>
          <span>🚼 Self-learning</span>
          <span>🔨 Adaptation</span>
          <span>🧬 Evolution</span>
          <span>🧰 Bayesian reasoning</span>
          <span>📐 Design thinking</span>
          <span>🕸 Systems thinking</span>
          <span>⚖️ Checks & balances</span>
        </SmColList>
      </p>
      <!-- <span>
        Everything can be improved- no system is without flaws.
      </span> -->
    </LgNumListItem>

    <LgNumListItem
      color="orange"
      number="2"
      title="Open"
    >
      <Guillemet cls="text-red-600"
        ><Orange>Information is the currency of the universe.
        <NoWrap>The freer</NoWrap> it is, the more everyone benefits.</Orange>
      </Guillemet>
      <p class="px-4 md:px-0">
        <Grey cls="block my-2">Similar concepts:</Grey>
        <SmColList>
          <span>Transparency</span>
          <span>Accountability</span>
          <span>Freedom</span>
          <span>Public Domain</span>
        </SmColList>
        <Grey cls="block my-2">In the 
        <Green>future</Green>,
        everything will be open:</Grey>
        <SmColList>
          <span>💡 Ideas</span>
          <span>🖼 Art</span>
          <span>📜 Knowledge</span>
          <span>🔭 Processes</span>
          <span>🕸 Systems</span>
          <span>👁‍🗨 Privacy</span>
          <span>🆔 Identification & Auth</span>
          <span>💻 Digital Code</span>
          <span>🧬 Genetic Code</span>
          <span>🗃 Data</span>
          <span>🔏 Patents</span>
          <span>⛓ Copyright</span>
          <span>🛂 Borders</span>
          <span>⚖️ Justice</span>
          <span>📜 Legislation & Regulation</span>
          <span>🗳
            <abbr title="Organizational, Corporate, National, Global" >
              <span class="text-gray-100">
                Governance
              </span>
            </abbr>
          </span>
          <span>💰 Wealth</span>
          <span>🔋 Energy</span>
        </SmColList>
      </p>
    </LgNumListItem>


    <LgNumListItem
      color="yellow"
      number="3"
      title="Sustainability"
    >
      <Guillemet cls="text-yellow-600"
        ><Yellow>It's all one big problem: to make civilization sustainable.</Yellow
      ></Guillemet> -Boyan
      <p class="px-4 md:px-0">
        <Grey cls="block my-2">Similar concepts:</Grey>
        <SmColList>
          <span>♻️ Permaculture</span>
          <span>🗓 Long-term thinking</span>
          <span>🏞 7 generation stewardship</span>
          <span>🛸 Futurism</span>
        </SmColList>
      </p>
      <!-- <span>
        We need to start making decisions today,
        based on how it will affect the tomorrow.
      </span> -->
    </LgNumListItem>

    <LgNumListItem
      color="green"
      number="4"
      title="Egalitarian"
    >
      <Guillemet cls="text-green-600"
        ><Green>It is self-evident that all humans are born equal.</Green>
      </Guillemet>
      <p class="px-4 md:px-0">
        <Grey cls="block my-2">Similar concepts:</Grey>
        <SmColList>
          <span>Equal Representation</span>
          <span>Indiviudal Freedom & Rights</span>
          <span>Social & Climate Justice</span>
          <span>Sociocracy</span>
          <span>Democracy</span>
          <span>Communism</span>
        </SmColList>
      </p>
      <!-- <span>
        From billionaires to slave-owners, serial killers to genociders, all are human
      </span> -->
    </LgNumListItem>

    <LgNumListItem
      color="blue"
      number="5"
      title="Xenophilic"
    >
      <Guillemet cls="text-blue-600"
        ><Blue>Every culture has beautiful aspects of humanity.
            The diverse array of patterns amongst us
            is what makes the individual special.</Blue>
      </Guillemet>
      <p class="px-4 md:px-0">
        <Grey cls="block my-2">Similar concepts:</Grey>
        <SmColList>
          <span>Diversity</span>
          <span>Local communities</span>
          <span>Social justice</span>
          <span>Effective altruism</span>
        </SmColList>
      </p>
    </LgNumListItem>

    <LgNumListItem
      color="purple"
      number="6"
      title="Inspirational"
    >
      <Guillemet cls="text-purple-600"
        ><Purple>High-tech backends with simple, elegant outputs</Purple>
      </Guillemet>
      <p class="px-4 md:px-0">
        <Grey cls="block my-2">Similar concepts:</Grey>
        <SmColList>
          <span>Idealism</span>
          <span>Optimism</span>
          <span>Benevolent Technology</span>
          <span>Resourcefulness</span>
          <span>Inventiveness</span>
          <span>Ingenuinity</span>
          <span>Exploration</span>
          <span>Futurism</span>
        </SmColList>
      </p>
      <!-- <span>
        Making the future <abbr tile="Musk + Tesla = Model S, 3, X, Y">SEXY</abbr>.
        Utopian. 
      </span> -->
    </LgNumListItem>

  </ol>

</section>

<NavSolarpunk id="technology"
  cssVariablesById={{
    philosophy: `
      --fumonicon-golden-circle-why: var(--green-500);
      --fumonicon-golden-circle-how: var(--grey-600);
      --fumonicon-golden-circle-what: var(--grey-700);
    `,
    science: `
      --fumonicon-golden-circle-why: var(--grey-600);
      --fumonicon-golden-circle-how: var(--blue-500);
      --fumonicon-golden-circle-what: var(--grey-700);
    `,
    technology: `
      --fumonicon-golden-circle-why: var(--grey-700);
      --fumonicon-golden-circle-how: var(--grey-600);
    `,
  }}
/>

<section class="{sectionCls} text-center">

  <blockquote class="-mx-4 md:-mx-8">
    <!-- <div class={`
      absolute
      top-0
      bottom-0
      left-0
      right-0
    `} style="
      --fumonicon-time-past: var(--red-800);
      --fumonicon-time-present: var(--yellow-800);
      --fumonicon-time-future: var(--green-800);
      z-index: -1;
      opacity: 0.1;
    ">
      {@html solarpunk.svg}
    </div> -->
    <Purple>What</Purple> does a 
    <Green>solarpunk future</Green>
    look like?
    <br />
    And
    <Blue>how</Blue> do we get 
    <Green>there</Green> from
    <Yellow>here</Yellow>?
  </blockquote>

  <!-- know what question to ask. Like it took us a long time to even frame the question correctly. But once we could frame the question correctly, the answer was, I wouldn't say easy, but, the answer flowed once the question could be framed with precision. Framing that question with precision was very difficult. -->

  <p>
    I
    <Red>don't</Red> have the
    <Blue>answers</Blue>. It's up to
    <Purple>you</Purple>. And
    <Green>us</Green>.
  </p>

  <p>
    In the end,
    <TxtSolarpunk /> is a
    <Red>question</Red>.
  </p>

  <blockquote class="-mx-4 md:-mx-8">
    What small thing can I do
    <Yellow>today</Yellow>, to make
    <Green>tomorrow</Green>
    <Orange>better</Orange>?
  </blockquote>

  <blockquote class="-mx-4 md:-mx-8">
    What does my
    <Green>utopia</Green>
    look like?
  </blockquote>
  
  <blockquote class="-mx-4 md:-mx-8">
    What does
    <Blue>humanity</Blue>
    need to do to
    <Purple>move</Purple> in that
    <Green>direction</Green>?
  </blockquote>

  <blockquote class="-mx-4 md:-mx-8">
    What can I
    <Purple>do</Purple> for
    <Blue>humanity</Blue>?
  </blockquote>

  <!-- <blockquote>Solarpunk is about imagining the system </blockquote> -->

  <!-- In the end, it's all about survival.
  1. Individual.
  2. Tribe
  3. Species -->
  
  <!-- Solarpunks are not anarchists.  -->
  
  <!-- We believe humanity has the capability to imagine and build beautiful systems.
  Look at the metric system. Look at LANGUAGE. -->
  
  <!-- This decade is going to be huge for the Solarpunk movement. -->
  
  <p class="-text-2 »grey plain">
    <Orange>🔗 TODO:</Orange> I'm working on compiling the
    best solarpunk resources,
    and they'll go here.
  </p>

</section>

<!-- TODO: share links -->

<!-- 
"Is it in the future or not?"
"If it's not in the future, who cares?"

"Question your constraints."
-->

<!-- <blockquote class="px-8">
  I think the single best piece of advice is to have a feedback loop:
  question yourself and constantly think about how you
  could be doing things better. ~ Elon Musk
</blockquote> -->