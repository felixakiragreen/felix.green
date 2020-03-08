<script>
  import { solarpunk, golden_circle } from '@f*g/fumonicon'
  import Aside from 'components/Aside.svelte'
  import TxtSolarpunk from 'txt/Solarpunk.svelte'
</script>

<style>
  section, article {
    @apply grid;
    @apply gap-4;
  }
  p {
    @apply px-8;
  }

  abbr {
    @apply text-gray-400;
    text-decoration-style: wavy;
    text-decoration-color: var(--yellow-300);
  }

  nav {
    @apply bg-gray-600;
    @apply grid;
    @apply grid-cols-3;
    @apply mt-16;
    @apply mb-8;
    align-items: stretch;
  }
  nav li {
    @apply grid;
  }

  nav a {
    @apply block;
    @apply p-8;
    @apply text-gray-400;
  }
  nav a:hover {
    @apply bg-gray-700;
    @apply text-gray-200;
  }
  a.selected {
    @apply bg-gray-700;
    @apply text-gray-200;
  }

  ol {
    @apply grid;
    @apply my-4;
    @apply gap-4;
  }
  ol > li {
    @apply grid;
    @apply px-8;
    @apply gap-8;
    grid-template-columns: auto 1fr;
  }
  .text-6xl {
    font-size: 6rem;
  }
</style>

<section>
  <div class="h-64">
    {@html solarpunk.svg}
  </div>

  <blockquote class="mx-auto py-6 px-20" style="width: max-content;">
    <h2 class="text-center">
      <span class="»b">Hope</span>
      for the
      <span class="»g">future</span>
    </h2>
  </blockquote>

  <article class="text-center">
    <p>
      <span class="text-gray-500">
        There are many voices with better words describing Solarpunk.
      </span>
      <span class="text-gray-300">This is what it means to me:</span>
    </p>

    <p class="py-8">
      a
      <span class="»g">solarpunk</span> is
      <span class="»i">anyone</span> that
      <span class="»p">dreams</span> of a
      <span class="»b">better</span>
      <span class="»g">future</span>.
    </p>
  </article>

  <Aside>
    <span class="»o text-center">⚠️ Warning</span>
    <p class="plain -text-1 text-left">
      I am not a words person— I am a visual person. This is my best attempt to
      articulate a specific vision. If you feel it too and can help
      explain or communicate it better please join me. I believe strongly that
      the collective voice is stronger than the singular.
    </p>
  </Aside>

</section>

<nav id="philosophy">
  <li class="-text-2">
    <a href="solarpunk#philosophy" class="selected">
      <div class="text-center">
        <div class="h-12" style="
          --fumonicon-golden-circle-how: var(--grey-700);
          --fumonicon-golden-circle-what: var(--grey-600);
        ">
          {@html golden_circle.svg}
        </div>
        <h4 class="»g">Philosophy</h4>
        <!-- (and Aesthetics)<br /> -->
        Why even dream?
      </div>
    </a>
  </li>
  <li class="-text-2">
    <a href="solarpunk#science">
      <div class="text-center">
        <div class="h-12" style="
          --fumonicon-golden-circle-why: var(--grey-600);
          --fumonicon-golden-circle-how: var(--blue-500);
          --fumonicon-golden-circle-what: var(--grey-700);
        ">
          {@html golden_circle.svg}
        </div>
        <h4 class="»b">Science</h4>
        How does it work?
      </div>
    </a>
  </li>
  <li class="-text-2">
    <a href="solarpunk#technology">
      <div class="text-center">
        <div class="h-12" style="
          --fumonicon-golden-circle-why: var(--grey-700);
          --fumonicon-golden-circle-how: var(--grey-600);
          --fumonicon-golden-circle-what: var(--purple-500);
        ">
          {@html golden_circle.svg}
        </div>
        <h4 class="»p">Technology</h4>
        What is it like?
      </div>
    </a>
  </li>
</nav>

<section>

  <blockquote class="mx-4">
    In order to
    <span class="»p">build</span> a
    <span class="»b">better</span>
    <span class="»g">future</span>, we must first
    <span class="»p">imagine</span>
    it.
  </blockquote>

  <article>
    <p class="text-center">
      The 🌏 world <span class="»i">is</span> getting better.
    </p>

    <p class="text-right">
      But it doesn't always <span class="»r">feel</span> like it.
    </p>

    <p>
      We have more 
      <span class="»y">awareness</span> of the world's 
      <span class="»o">problems</span> than ever before,
      but most of us 
      <span class="»r">struggle</span> with
      <span class="»p">making</span> a 
      <span class="»g">meaningful</span> impact.
    </p>
  </article>

  <blockquote class="mx-4">
    You musn't be
    <span class="»o">afraid</span> to
    <span class="»p">dream</span> a little
    <span class="»b">bigger</span>, darling 🥰
  </blockquote>

  <article>
    <p>
      <span class="text-green-100">S</span
      ><span class="text-green-200">o</span
      ><span class="text-green-300">l</span
      ><span class="text-green-400">a</span
      ><span class="text-green-500">r</span
      ><span class="text-green-600">punk</span
      >
      is
      <span class="»r">removing</span> the limits to our imaginations.
    </p>

    <p>
      <span class="text-green-100">S</span
      ><span class="text-green-200">o</span
      ><span class="text-green-300">l</span
      ><span class="text-green-400">a</span
      ><span class="text-green-500">r</span
      ><span class="text-green-600">punk</span
      >
      is a
      <span class="»o">movement</span> to reclaim our lost optimism.
    </p>

    <p>
      <span class="text-green-100">S</span
      ><span class="text-green-200">o</span
      ><span class="text-green-300">l</span
      ><span class="text-green-400">a</span
      ><span class="text-green-500">r</span
      ><span class="text-green-600">punk</span
      >
      is a
      <span class="»y">choice</span> because the only other options are denial or despair.
    </p>

    <p>
      <span class="text-green-100">S</span
      ><span class="text-green-200">o</span
      ><span class="text-green-300">l</span
      ><span class="text-green-400">a</span
      ><span class="text-green-500">r</span
      ><span class="text-green-600">punk</span
      >
      is a
      <span class="»g">vision</span> of a future that embodies the best of what humanity can achieve.
    </p>

    <p>
      <span class="text-green-100">S</span
      ><span class="text-green-200">o</span
      ><span class="text-green-300">l</span
      ><span class="text-green-400">a</span
      ><span class="text-green-500">r</span
      ><span class="text-green-600">punk</span
      >
      is
      <span class="»b">inspiration</span> for those who have lost hope.
    </p>

    <p>
      <span class="text-green-100">S</span
      ><span class="text-green-200">o</span
      ><span class="text-green-300">l</span
      ><span class="text-green-400">a</span
      ><span class="text-green-500">r</span
      ><span class="text-green-600">punk</span
      >
      is a
      <span class="»p">meme</span> to bring together enough people to create 
      the systematic reinvention needed to build a neotopian future.
    </p>
  </article>

</section>

<nav id="science">
  <li class="-text-2">
    <a href="solarpunk#philosophy">
      <div class="text-center">
        <div class="h-12" style="
          --fumonicon-golden-circle-why: var(--green-500);
          --fumonicon-golden-circle-how: var(--grey-600);
          --fumonicon-golden-circle-what: var(--grey-700);
        ">
          {@html golden_circle.svg}
        </div>
        <h4 class="»g">Philosophy</h4>
        Why even dream?
      </div>
    </a>
  </li>
  <li class="-text-2">
    <a href="solarpunk#science" class="selected">
      <div class="text-center">
        <div class="h-12" style="
          --fumonicon-golden-circle-why: var(--grey-700);
          --fumonicon-golden-circle-what: var(--grey-600);
        ">
          {@html golden_circle.svg}
        </div>
        <h4 class="»b">Science</h4>
        How does it work?
      </div>
    </a>
  </li>
  <li class="-text-2">
    <a href="solarpunk#technology">
      <div class="text-center">
        <div class="h-12" style="
          --fumonicon-golden-circle-why: var(--grey-700);
          --fumonicon-golden-circle-how: var(--grey-600);
          --fumonicon-golden-circle-what: var(--purple-500);
        ">
          {@html golden_circle.svg}
        </div>
        <h4 class="»p">Technology</h4>
        What is it like?
      </div>
    </a>
  </li>
</nav>

<!-- 
"Is it in the future or not?"
"If it's not in the future, who cares?"

"Question your constraints."
-->

<section>

  <article>

    <h2 class="text-center"><span class="»o">First</span> Principles</h2>

    <p> 
      When approaching something
      <span class="»y">new</span>,
      the
      <span class="»p">framework</span>
      used for
      <br />
      💭 <span class="»b">thinking</span>
      determines what is
      <span class="»p">possible</span>.
      <br />
      Generally there are 2 ways to 🧠
      <span class="»b">reason</span>:
    </p>

    <ol>
      <li style="align-items: first baseline;">
        <dt class="text-5xl text-red-500">1</dt>
        <dd>
          <h4>by <span class="»r">analogy</span></h4>
          <span class="text-lg text-gray-300">
            Essentially 
            <span class="»p">copying</span> 🎨 what has been done
            <span class="»r">before</span> with slight variations.
          </span>
        </dd>
      </li>
      <li style="align-items: first baseline;">
        <dt class="text-5xl text-orange-500">2</dt>
        <dd>
          <h4>using <span class="»o">first</span> principles</h4>
          <span class="text-lg text-gray-300">
            Boil things down to their ⚛️
            <span class="»i">fundamental</span>
            <span class="»g">truths</span> and
            <span class="»b">reason</span> up from there.  
          </span>
        </dd>
      </li>
    </ol>

    <p>
      We all get through
      <span class="»g">life</span> reasoning through
      <span class="»r">analogy</span>
      because it comes
      <span class="»p">naturally</span> and is far more
      <span class="»g">efficient</span>.
    </p>
    <p>
      <span class="text-orange-500">«</span><span class="»o">In fact</span><span class="text-orange-500">»</span> it
      <span class="»r">has</span> to be done because otherwise
      <span class="»b">mentally</span>,
      a person couldn't get through a
      <span class="»y">day</span>. 
    </p>
    <p> 
      But when trying to
      <span class="»p">create</span>,
      <span class="»b">design</span>, or
      <span class="»g">invent</span> anything
      <span class="»y">new</span>,
      <br />
      Using the 📏
      <span class="»b">physics</span> approach of 🧠
      <span class="»g">reasoning</span> by
      <span class="»o">first</span> principles,
      <span class="»g">helps</span> reach
      <span class="»b">solutions</span> that are
      <span class="»i">counter</span>intuitive
      <br />
      And would never have been
      <span class="»p">discovered</span>
      by iterating on what already exists.
    </p>

  </article>

  <blockquote class="mx-auto py-6 px-20">Everything is a system.</blockquote>

  <Aside>
    <span class="»o text-center">⚠️ Warning</span>
    <p class="plain -text-1 text-left">
      I know very little about systems.
      I find them incredibly fascinating and love studying them.
      This is my best attempt to articulate the first principles
      of designing and building solarpunk systems.
      If you can boil these down to more basic truths or suggest alternatives,
      please share them with me!
    </p>
  </Aside>

  <ol>
    <li>
      <dt class="text-6xl text-red-600">1</dt>
      <dd>
        <h3>Self-correction</h3>
        <span class="text-red-600">«</span><span class="»r"
          >Take the actions that are most likely to
          <br />
          make the
          <span class="»g">future</span>
          better. Then
          <span class="»b">re-evaluate</span>
          .</span><span class="text-red-600"
        >»</span> -Elon
        <br />
        <span class="»grey">Similar concepts:</span>
        <div class="grid grid-cols-2">
          <span>🔄 Feedback Loops</span>
          <span>🚼 Self-learning</span>
          <span>🔨 Adaptation</span>
          <span>🧬 Evolution</span>
          <span>🧰 Bayesian reasoning</span>
          <span>📐 Design thinking</span>
          <span>🕸 Systems thinking</span>
          <span>⚖️ Checks & balances</span>
        </div>
        <!-- <span>
          Everything can be improved- no system is without flaws.
        </span> -->
      </dd>
    </li>
  </ol>

  <!-- <blockquote class="px-8">
    I think the single best piece of advice is to have a feedback loop:
    question yourself and constantly think about how you
    could be doing things better. ~ Elon Musk
  </blockquote> -->
  
  <ol>
    <li>
      <dt class="text-6xl text-orange-600">2</dt>
      <dd>
        <h3>Open</h3>
        <span class="text-orange-600">«</span><span class="»o"
          >Information is the currency of the universe. Counter-intuitively, the freer it is, the more everyone benefits.</span><span class="text-orange-600"
        >»</span>
        <br />
        <span class="»grey">Similar concepts:</span>
        <div class="grid grid-cols-2">
          <span>Transparency</span>
          <span>Accountability</span>
          <span>Freedom</span>
          <span>Public Domain</span>
        </div>
        <span class="»grey">In the 
        <span class="»g">future</span>,
        everything will be open:</span>
        <div class="grid grid-cols-2">
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
        </div>
      </dd>
    </li>
    <li>
      <dt class="text-6xl text-yellow-600">3</dt>
      <dd>
        <h3>Sustainability</h3>
          <span class="text-yellow-600">«</span><span class="»y"
            >It's all one big problem:
            <br />
            To make civilization sustainable.</span><span class="text-yellow-600"
          >»</span> -Boyan
          <br />
          <span class="»grey">Similar concepts:</span>
          <div class="grid grid-cols-2">
            <span>♻️ Permaculture</span>
            <span>🗓 Long-term thinking</span>
            <span>🏞 7 generation stewardship</span>
            <span>🛸 Futurism</span>
          </div>
          <!-- <span>
            We need to start making decisions today,
            based on how it will affect the tomorrow.
          </span> -->
      </dd>
    </li>
    <li>
      <dt class="text-6xl text-green-600">4</dt>
      <dd>
        <h3>Egalitarian</h3>
        <span class="text-green-600">«</span><span class="»g"
          >It is self-evident that all humans are born equal.</span><span class="text-green-600"
        >»</span>
        <span class="»grey">Similar concepts:</span>
        <div class="grid grid-cols-2">
          <span>Equal Representation</span>
          <span>Indiviudal Freedom & Rights</span>
          <span>Social & Climate Justice</span>
          <span>Sociocracy</span>
          <span>Democracy</span>
          <span>Communism</span>
        </div>
        <!-- <span>
          From billionaires to slave-owners, serial killers to genociders, all are human
        </span> -->
      </dd>
    </li>
    <li>
      <dt class="text-6xl text-blue-600">5</dt>
      <dd>
        <h3>Xenophilic</h3>
        <span class="text-blue-600">«</span><span class="»b"
          >Every culture has beautiful aspects of humanity.
          The diverse array of patterns amongst us
          is what makes the individual special.</span><span class="text-blue-600"
        >»</span>
        <br />
        <span class="»grey">Similar concepts:</span>
        <div class="grid grid-cols-2">
          <span>Diversity</span>
          <span>Local communities</span>
          <span>Social justice</span>
          <span>Effective altruism</span>
        </div>
      </dd>
    </li>
    <li>
      <dt class="text-6xl text-purple-600">6</dt>
      <dd>
        <h3>Inspirational</h3>
        <span class="text-purple-600">«</span><span class="»p"
          >High-tech backends with simple, elegant outputs</span><span class="text-purple-600"
        >»</span>
        <br />
        <span class="»grey">Similar concepts:</span>
        <div class="grid grid-cols-2">
          <span>Idealism</span>
          <span>Optimism</span>
          <span>Benevolent Technology</span>
          <span>Resourcefulness</span>
          <span>Inventiveness</span>
          <span>Ingenuinity</span>
          <span>Exploration</span>
          <span>Futuristic</span>
        </div>
        <!-- <span>
          Making the future <abbr tile="Musk + Tesla = Model S, 3, X, Y">SEXY</abbr>.
          Utopian. 
        </span> -->
      </dd>
    </li>
  </ol>

</section>

<nav id="technology">
  <li class="-text-2">
    <a href="solarpunk#philosophy">
      <div class="text-center">
        <div class="h-12" style="
          --fumonicon-golden-circle-why: var(--green-500);
          --fumonicon-golden-circle-how: var(--grey-600);
          --fumonicon-golden-circle-what: var(--grey-700);
        ">
          {@html golden_circle.svg}
        </div>
        <h4 class="»g">Philosophy</h4>
        Why even dream?
      </div>
    </a>
  </li>
  <li class="-text-2">
    <a href="solarpunk#science">
      <div class="text-center">
        <div class="h-12" style="
          --fumonicon-golden-circle-why: var(--grey-600);
          --fumonicon-golden-circle-how: var(--blue-500);
          --fumonicon-golden-circle-what: var(--grey-700);
        ">
          {@html golden_circle.svg}
        </div>
        <h4 class="»b">Science</h4>
        How does it work?
      </div>
    </a>
  </li>
  <li class="-text-2">
    <a href="solarpunk#technology" class="selected">
      <div class="text-center">
        <div class="h-12" style="
          --fumonicon-golden-circle-why: var(--grey-700);
          --fumonicon-golden-circle-how: var(--grey-600);
        ">
          {@html golden_circle.svg}
        </div>
        <h4 class="»p">Technology</h4>
        What is it like?
      </div>
    </a>
  </li>
</nav>

<section class="text-center">

  <blockquote class="mx-auto py-6 px-20">
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
    <span class="»p">What</span> does a 
    <span class="»g">solarpunk future</span>
    look like?
    <br />
    And
    <span class="»b">how</span> do we get 
    <span class="»g">there</span> from
    <span class="»y">here</span>?
  </blockquote>

  <!-- know what question to ask. Like it took us a long time to even frame the question correctly. But once we could frame the question correctly, the answer was, I wouldn't say easy, but, the answer flowed once the question could be framed with precision. Framing that question with precision was very difficult. -->

  <p class="my-4">
    I
    <span class="»r">don't</span> have the
    <span class="»b">answers</span>. It's up to
    <span class="»p">you</span>. And
    <span class="»g">us</span>.
  </p>

  <p class="my-4">
    In the end,
    <TxtSolarpunk /> is a
    <span class="»r">question</span>.
  </p>

  <blockquote class="m-4">
    What small thing can I do
    <span class="»y">today</span>, to make
    <span class="»g">tomorrow</span>
    <span class="»o">better</span>?
  </blockquote>

  <blockquote class="m-4">
    What does my
    <span class="»g">utopia</span>
    look like?
  </blockquote>
  
  <blockquote class="m-4">
    What does
    <span class="»b">humanity</span>
    need to do to
    <span class="»p">move</span> in that
    <span class="»g">direction</span>?
  </blockquote>

  <blockquote class="m-4">
    What can I
    <span class="»p">do</span> for
    <span class="»b">humanity</span>?
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
  
  <p class="-text-2 »grey plain my-4">
    <span class="»o">TODO:</span> I'm working on compiling the
    best solarpunk resources,
    and they'll go here.
  </p>

</section>

<!-- TODO: share links -->