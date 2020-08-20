<script>
  import {
    projects,
    fag,
    dof,
    // doorway,
    // uniform,
    // ha_tsume,
    // union_nordic,
    // yin_yang
  } from '@f*g/fumonicon'

  import Aside from 'components/Aside.svelte'

  import Red from 'bits/Red.svelte'
  import Orange from 'bits/Orange.svelte'
  import Yellow from 'bits/Yellow.svelte'
  import Green from 'bits/Green.svelte'
  import Blue from 'bits/Blue.svelte'
  import Purple from 'bits/Purple.svelte'
  import Invert from 'bits/Invert.svelte'
  import Grey from 'bits/Grey.svelte'
  import WorkInProgress from 'bits/WorkInProgress.svelte'

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
</script>

<style>
  li {
    grid-template-rows: auto 1fr;
  }

  @screen sm {
    li {
      grid-template-columns: auto 1fr;
    }
    .text-6xl {
      font-size: 6rem;
    }
  }

  abbr {
    @apply text-gray-400;
    text-decoration-style: wavy;
    text-decoration-color: var(--yellow-300);
  }
</style>

<div class="h-40 md:h-64">
  {@html projects.svg}
</div>

<WorkInProgress />

<section class={sectionCls}>
  <p>
    I have more
    <Yellow>💡 ideas</Yellow> than I could ever
    accomplish in one or even a dozen lifetimes.
    At first I thought it was a
    <Purple>blessing</Purple> and then I thought it was a
    <Red>curse</Red>.
    Now I've just accepted that it's my
    <Blue>🧠 brain</Blue>.
  The 🧠
    be what it 
    do.
  </p>
  <p>
    I have found success in collaboration.
    And the best part of working together
    is that different perspectives often make something better than a single one ever could do.
  </p>
  <p>
    If any of these are interesting to you,
    join me on github (where this is all open source)
    or reach out to me by email at work @ felix.green
  </p>
</section>

<section class={sectionCls}>

  <article id="akira">

    <h2 class="{h3xCls} text-center">Akira</h2>

    <blockquote class="mb-4 px-12">
      A font based on my own handwriting.
    </blockquote>

    <p>
      This project began when I was a
      👦 child. 
    </p>
    <p>
      I was unsatisfied with the
      ⚙️ efficiency of
      📝 writing, so I learned Gregg shorthand.
    </p>
    <p>
      But the problem was no one else could
      🔮 read
      it.
    </p>

    <ul class="grid gap-4 my-4" style="align-items: baseline;">

      <li>
        <p class="text-green-600">Step <Green>1</Green>.</p>
        <h3 class={h3xCls}>
          Single stroke
        </h3>
      </li>

      <li class="">
        <div class="text-right">
          <Grey cls="-text-1 mt-4">
            began <abbr title="2004">12004</abbr>
          </Grey>
        </div>
        <div>
          <p>
            I started modifying how I wrote all the letters
            so it only used a single stroke,
            but still be quite legible to others.
          </p>
        </div>
      </li>

      <li>
        <h3>
          <span class="text-green-600">Step <Green>2</Green>.</span>
          Symmetry & geometry
          <Grey cls="-text-1">
            (began <abbr title="2013">12013</abbr>)
          </Grey>
        </h3>
        <p class="-ml-8">
          Once I was the only person reading it,
          I experimented aesthetically with many different forms.
          I doubled the number of letters that are mirror versions of each other.
        </p>
      </li>
      <li>
        <h3>
          <span class="text-green-600">Step <Green>3</Green>.</span>
          Futuristic
          <Grey cls="-text-1">
            (began <abbr title="2018">12018</abbr>)
          </Grey>
        </h3>
        <p class="-ml-8">
          Then I wanted to turn it into a font.
          It's currently on v2.2.6-
          <br />
          as you can see it's got:
          lowercase, uppercase, numbers, & essential punctuation.
        </p>
      </li>
    </ul>

    <Aside>
      <Orange>Seeking</Orange>
      <p>
        type designers that like this direction
      </p>
    </Aside>

  </article>

  <article id="fumonicons">
    
    <h2 class={h3xCls}>
      Fumonicons
      <Grey cls="-text-1">(name of step 1)</Grey>
    </h2> 
    <blockquote class="mx-auto -mt-8 mb-4 px-12">
      ⬣ Hexagons ⬢ Hexagons everywhere ⬣
    </blockquote>
    
    <p>
      This project is still in its infancy.
      <br />
      And it's a story for another time.
    </p>

    <ul>
      <li>
        <span class="text-green-600">Step <Green>1</Green>.</span>
        Hexagonal icons
        <Grey cls="-text-1">
          (began <abbr title="2019">12019</abbr>)
        </Grey>
      </li>
      <li>
        <span class="text-green-600">Step <Green>2</Green>.</span>
        Futurisitc interfaces with rich and complex geometric and vector grid systems.
      </li>
    </ul>
    
    <Aside>
      <Orange>Seeking</Orange>
      <p>
        designers & developers with
        <br />
        a fanatical affinity for hexagons
      </p>
    </Aside>

  </article>

  <article id="story">

    <h2 class={h3xCls}>A Story About Shapes</h2>
    <blockquote class="mx-auto -mt-8 mb-4 px-12">
      Yeah... I need a title
    </blockquote>

    <p>
      A collaborative science-fiction story set in base reality,
      which is kind of two dimensional.
      <br>
      It follows the hero's journey and attempts to be insightfully amusing.
    </p>
    <p>
      I know I'm selling this really well.
    </p>  

    <Aside>
      <Orange>Seeking</Orange>
      <p>
        people that have a gift with words
      </p>
    </Aside>

  </article>


  <article id="fag">

    <div class="h-20 mt-8 -mb-8" style="--fumonicon-fag-primary: var(--grey-500);">
      {@html fag.svg}
    </div>

    <h2 class={h3xCls}>Felix Akira Green</h2>
    <blockquote class="mx-auto -mt-8 mb-4 px-12">
      Inventing myself
    </blockquote>

    <p>
      As a child, I explored the idea of changing my name,
      eager to become something, someone else.
    </p>
    <p>
      It wasn't until university (<abbr title="2009 - 2013">12009-13</abbr>)
      that I embraced my birth name.
    </p>
    <p>
      I couldn't choose a name for myself until I knew who I wanted to become.
    </p>
    <p>
      That took me over 10 years. Which ended up being good, since my personality, 
      or more specifically, my prefrontal cortex, was still developing.
    </p>
  
    <ul>
      <li>
        <span class="text-green-600">Step <Green>0</Green>.</span>
        Discover myself
        <Grey cls="-text-1">
          (began in <abbr title="1991">11991</abbr>)
        </Grey>
      </li>
      <li>
        <span class="text-green-600">Step <Green>1</Green>.</span>
        Choose my name
        <Grey cls="-text-1">
          (on <abbr title="September 9th, 2018">12018.09.09</abbr>)
        </Grey>
      </li>
      <li>
        <span class="text-green-600">Step <Green>2</Green>.</span>
        Launch this website
        <Grey cls="-text-1">
          (on <abbr title="March 9th, 2020">12020.03.09</abbr>)
        </Grey>
      </li>
      <li>
        <span class="text-green-600">Step <Green>3</Green>.</span>
        Next update
        <Grey cls="-text-1">
          (expected <abbr title="March 9th, 2020">12021.03.09</abbr>)
        </Grey>
      </li>
    </ul>
    
  </article>

</section>

<!--
<section>

  <h2>Active</h2>
  
  <article class="grid grid-cols-2">
    <div class="h-64 mt-8 -mb-8" style="--fumonicon-fag-primary: var(--grey-500);">
      {@html uniform.svg}
    </div>
    <ul>
      <Grey>Collaborators:</Grey>
      <li>
        - Jess West
      </li>
      <li>
        - Phil Dragash
      </li>
    </ul>

  </article>

  <article>
    <div class="h-64 mt-8 -mb-8" style="--fumonicon-fag-primary: var(--grey-500);">
      {@html doorway.svg}
    </div>
    <ul>
      <Grey>Collaborators:</Grey>
      <li>
        - Jake Rupp
      </li>
    </ul>
  </article>

  <article>
    <div class="h-64 mt-8 -mb-8" style="--fumonicon-fag-primary: var(--grey-500);">
      {@html dof.svg}
    </div>
    <ul>
      <Grey>Collaborators:</Grey>
      <li>
        - Kurt Schroeder
      </li>
      <li>
        - Meg McNames
      </li>
    </ul>
  </article>

</section>
-->

<!-- 
<section>

  <h2>Eventually</h2>

  <article>
    Bleep Bloop:
      Collaborators:
      - Trenton McBeth
  </article>
  
  <article>
    Ha Tsume
  </article>
  
  <article>
    Nordic Union
  </article>

</section>
-->