<script>
  import { projects, fag, dof, doorway, uniform, ha_tsume, union_nordic, yin_yang } from '@f*g/fumonicon'

  import Aside from 'components/Aside.svelte'
  import Red from 'style/Red.svelte'
  import Orange from 'style/Orange.svelte'
  import Yellow from 'style/Yellow.svelte'
  import Green from 'style/Green.svelte'
  import Blue from 'style/Blue.svelte'
  import Purple from 'style/Purple.svelte'
  import Invert from 'style/Invert.svelte'
  import Grey from 'style/Grey.svelte'
</script>

<style>
  section, article {
    @apply grid;
    @apply gap-4;
  }

  section > p, article > p {
    @apply px-8;
  }

  blockquote {
    @apply mx-auto;
  }

  abbr {
    @apply text-gray-400;
    text-decoration-style: wavy;
    text-decoration-color: var(--yellow-300);
  }

  h2 {
    @apply text-center;
    @apply py-8;
  }

  ul {
    @apply my-4;
    @apply ml-16;
    @apply grid;
    @apply gap-4;
  }
</style>

<div class="h-64">
  {@html projects.svg}
</div>

<section>
  <p>
    I have more
    💡 ideas than I could ever
    accomplish in one or even a dozen lifetimes.
    At first I thought it was a
    blessing and then I thought it was a
    curse.
    Now I've just accepted that it's my 🧠
    brain.
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

<section>

  <article id="akira">

    <h2>Akira</h2>
    <blockquote class="mx-auto -mt-8 mb-4 px-12">
      A font based on my own handwriting.
    </blockquote>

    <p>
      This project started when I was a child. 
    </p>
    <p>
      I was not satisfied with the efficiency of writing, so I learned Gregg shorthand.
    </p>
    <p>
      But the problem was no one else could read it.
    </p>

    <ul>
      <li>
        <h3>
          <span class="text-green-600">Step <Green>1</Green>.</span>
          Single stroke
          <Grey cls="-text-1">
            (began <abbr title="2004">12004</abbr>)
          </Grey>
        </h3>
        <p class="-ml-8">
          I started modifying how I wrote all the letters
          so it only used a single stroke,
          but still be quite legible to others.
        </p>
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
    
    <h2>
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

    <h2>A Story About Shapes</h2>
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

    <h2>Felix Akira Green</h2>
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