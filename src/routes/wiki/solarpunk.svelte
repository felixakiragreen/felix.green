<script>
  import { solarpunk, golden_circle } from '@f*g/fumonicon'
</script>

<style>
  section, article {
    @apply grid;
    @apply gap-4;
  }

  p {
    @apply px-8;
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

  ol > li {
    @apply grid;
    @apply px-8;
    @apply gap-4;
    align-items: first baseline;
    grid-template-columns: auto 1fr;
  }
  .text-8xl {
    font-size: 8rem;
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

  <aside>
    <span class="»o">Warning:</span>
    I am not a words person- I am a visual person. This is my best attempt to
    articulate a specific vision. If you share a similar vision and can help
    explain or communicate it better please join me. I believe strongly that
    the collective voice is far more powerful than the singular.
  </aside>

</section>

<nav id="philosophy">
  <li>
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
  <li>
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
  <li>
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
        What does it look like?
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
  <li>
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
  <li>
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
  <li>
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
        What does it look like?
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

  <h2 class="text-center"><span class="»r">First</span> Principles</h2>

    <p> 
      When approaching something
      <span class="»y">new</span>,
      the
      <span class="»p">framework</span>
      used for 💭 
      <span class="»g">thinking</span>
      determines what is
      <span class="»p">possible</span>.
      <br />
      Generally there are 2 ways to 🧠
      <span class="»g">reason</span>:
    </p>

    <ol>
      <li>
        <dt class="text-5xl text-blue-500">1</dt>
        <dd>
          <h4>by <span class="»b">analogy</span></h4>
          <span class="text-lg text-gray-300">
            Essentially 
            <span class="»p">copying</span> 🎨 what has been done
            <span class="»r">before</span> with slight variations.
          </span>
        </dd>
      </li>
      <li>
        <dt class="text-5xl text-red-500">2</dt>
        <dd>
          <h4>using <span class="»r">first</span> principles</h4>
          <span class="text-lg text-gray-300">
            Boil things down to their ⚛️
            <span class="»r">fundamental</span>
            <span class="»g">truths</span> and
            <span class="»g">reason</span> up from there.  
          </span>
        </dd>
      </li>
    </ol>

    <p>
      We all get through life reasoning through
      <span class="»b">analogy</span>
      because it comes
      <span class="»p">naturally</span> and is far more
      <span class="»g">efficient</span>.
      <br />
      <span class="text-orange-500">«</span><span class="»o">In fact</span><span class="text-orange-500">»</span> it
      <span class="»r">has</span> to be done because otherwise mentally,
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
      <span class="»b">physics</span> approach of 🧠 reasoning by
      <span class="»r">first</span> principles,
      <span class="»g">helps</span> reach solutions that are
      <span class="»i">counter</span>intuitive
      <br />
      And would never have been
      <span class="»p">discovered</span>
      by iterating on what already exists.
    </p>

    <blockquote>Solarpunk is about imagining the system </blockquote>

  </article>

  <blockquote class="mx-auto py-6 px-20">Everything is a system.</blockquote>

  <p>
    <span class="»o">Warning:</span>
    I know very little about systems.
    I find them incredibly fascinating and love studying them.
    This is my best attempt to articulate the first principles
    of designing and building solarpunk systems.
    If you can boil these down to more basic truths or suggest alternatives,
    please share them with me!
  </p>

  <div class="principle">
    <div class="text-8xl">
      1.
    </div>
    <div class="content">
      <h3>Self-correction</h3>
      <p class="text-gray-400 text-lg">Similar concepts: Feedback Loops, Self-learning,
    Adaptation, Evolution, Bayesian reasoning, Design thinking, Checks & balances</p>
      <p>
        Everything can be improved- no system is without flaws. Adaptation correlates with survival. 
      </p>
    </div>
  </div>

  <blockquote>
    I think the single best piece of advice is to have a feedback loop:
    question yourself and constantly think about how you
    could be doing things better. ~ Elon Musk
  </blockquote>
  
  <div class="principle">
    <div class="text-8xl">
      2.
    </div>
    <div class="content">
      <h3>Open</h3>
      <p class="text-gray-400 text-lg">Similar concepts: Transparency, Accountability</p>
      <p>"Information wants to be free."</p>
      <p>open source, open government (democracy), open p</p>
    </div>
  </div>
  
  <div class="principle">
    <div class="text-8xl">
      3.
    </div>
    <div class="content">
      <h3>Sustainable</h3>
      <p class="text-gray-400 text-lg">Similar concepts: Permaculture, Long-term thinking, Seven generation stewardship, Futuristic</p>
      <p>We need to start making decisions today, based on how it will
  affect the tomorrow.</p>
    </div>
  </div>
  
  <div class="principle">
    <div class="text-8xl">
      4.
    </div>
    <div class="content">
      <h3>Egalitarian</h3>
      <p class="text-gray-400 text-lg">Similar concepts: Equal Representation, Indiviudal Freedom & Privacy, Social & Climate Justice, Sociocracy, Communism</p>
      <p>From billionaires to slave-owners, serial killers to genociders, all are human</p>
    </div>
  </div>
  
  <div class="principle">
    <div class="text-8xl">
      5.
    </div>
    <div class="content">
      <h3>Xenophilic</h3>
      <p class="text-gray-400 text-lg">Similar concepts: Diversity</p>
      <p></p>
    </div>
  </div>
  
  <div class="principle">
    <div class="text-8xl">
      6.
    </div>
    <div class="content">
      <h3>Inspirational</h3>
      <p class="text-gray-400 text-lg">Similar concepts: Idealism, Technological, Resourceful, Inventive, Ingenuinity. </p>
      <p>
        Making the future <abbr tile="Musk + Tesla = Model S, 3, X, Y">SEXY</abbr>.
        Utopian. High-tech backends with simple, elegant outputs.
      </p>
    </div>
  </div>

</section>

<nav id="technology">
  <li>
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
  <li>
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
  <li>
    <a href="solarpunk#technology" class="selected">
      <div class="text-center">
        <div class="h-12" style="
          --fumonicon-golden-circle-why: var(--grey-700);
          --fumonicon-golden-circle-how: var(--grey-600);
        ">
          {@html golden_circle.svg}
        </div>
        <h4 class="»p">Technology</h4>
        What does it look like?
      </div>
    </a>
  </li>
</nav>

<section>

  <h2>tech</h2>

  In the end, it's all about survival.
  1. Individual.
  2. Tribe
  3. Species

  Solarpunk: - Philosophy (& Aesthetics) - Science - Technology
  
  Solarpunks are not anarchists. 
  
  Everything is a system.
  
  We believe humanity has the capability to imagine and build beautiful systems.
  Look at the metric system.
  
  
  Look at LANGUAGE.
  
  Solarpunk is a reaction to the science-fiction dystopias with harmful technology.

  Solarpunk is a reaction to the accumulation of wealth and it's connection to survival.
  
  Solarpunk is a reaction to the destruction & exploitation of our home planet,
  it's resources, and most importantly, it's humans.
  
  We can get more people to change their habits by ,
  than with messages of doom.
  
  Solarpunk is the movement to organize collective human action.
  
  This decade is going to be huge for the Solarpunk movement.
  
  Millenials and Zoomers are waking up to the real shit show that the world is
  in.
  
  Everything is chaos and no one is controlling anything. We need limits.
  fundamentally anti-establishment (broken establishment) It’s hard out here for
  futurists under 30,” declares one manifesto. “We’re solarpunks because the
  only other options are denial or despair.” Solarpunk is the spear head of the
   Restoration.
</section>

<!-- TODO: share links -->

what does it look like

different for every persom

find the small thing you can do today, to make tomorrow better.

Solarpunk is a question. 