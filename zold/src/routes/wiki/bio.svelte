<script>
  import { portrait_fag, portrait_meg } from '@f*g/fumonicon'

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
    my-4
    text-center
    text-3xl
    md:text-4xl
    lg:text-5xl
  `
</script>

<style>
  abbr {
    @apply text-gray-400;
    text-decoration-style: wavy;
    text-decoration-color: var(--yellow-300);
  }
</style>

<div class="h-64">
  {@html portrait_fag.svg}
</div>

<section class={sectionCls}>
  <h2 class={h3xCls}>
    <NoWrap>I'm a 🚸 child</NoWrap>
    <NoWrap>of the 🌍 <Blue>world</Blue></NoWrap>
  </h2>

  <p>
    I am an
    <Grey nw>🇺🇸 American</Grey>
    citizen
    <br />
    <span class="ml-4 sm:ml-8 md:ml-16">
      with
      <Grey nw>🇸🇪 Swedish</Grey>
      dna
    </span>
    <br />
    <span class="ml-8 sm:ml-16 md:ml-32">
      born in
      <Grey nw>🇵🇹 Portugal</Grey>
    </span>
    <br />
    <span class="ml-12 sm:ml-24 md:ml-48">
      that grew up in
      <Grey nw>🇲🇿🇿🇼 Africa</Grey>.
    </span>
  </p>

  <p>
    My friends joke that 
    <Guillemet cls="»g"
      ><Grey>I'll claim I’m from anywhere</Grey
    ></Guillemet>.
    <br />
    But after
    <Yellow>changing</Yellow>
    <NoWrap>🏫 schools</NoWrap>
    13 times,
    I'm
    <Red>not</Red>
    <Orange>attached</Orange> to
    <Grey nw>🗺 places</Grey>.
    Instead, I’m
    <Orange>attached</Orange> to what they
    <Purple>represent</Purple>.
  </p>

  <div class={`
    grid
    gap-2
    grid-flow-col
    items-baseline
    justify-center
  `}>
    <h2 class={h3xCls}>
      I am a
      <Purple>xeno</Purple><Red>phile</Red>
    </h2>
    <Grey>
      <NoWrap>= <Red>love</Red></NoWrap>
      <NoWrap>+ <Purple>foreign</Purple></NoWrap>
    </Grey>
  </div>
  <p>
    There are so many 
    <Green>🏛 beautiful</Green>
    <Purple nw>⛩ cultures 🕌</Purple> across our
    <Blue nw>🌏 planet</Blue>
    that 
    <Green>inspire</Green> and
    <Blue>fill</Blue>
    me with 
    <Purple>awe</Purple>. I can say 
    <Orange>confidently</Orange> that
    <Yellow>visiting</Yellow>
    <Grey nw>🇯🇵 Tokyo</Grey> and
    <Grey nw>🇸🇪 Stockholm</Grey>
    <Yellow>changed</Yellow> my life for the 
    <Green>better</Green>. The next place I want to
    <Yellow>visit</Yellow>
    is
    <Grey nw>🇸🇬 Singapore</Grey>.
  </p>

</section>

<section class={sectionCls}>

  <h2 class={h3xCls}>I don't deserve this</h2>

  <p>
    I 
    <Red>feel</Red>
    like I hit some
    <NoWrap>🌠 <span class="»i">cosmic</span></NoWrap>
    <NoWrap>🎰 lottery:</NoWrap>
  </p>

  <ul class={`
    grid
    gap-4
    my-4
    ml-4
    md:ml-8
    mr-2
    md:mr-4
  `}>
    <li>
      I got
      <Blue>everything</Blue>
      I
      <Red>needed</Red> from the
      <Orange>most</Orange>
      <Purple>😻 loving</Purple>
      <Blue>👨‍👩‍👧‍👦 family</Blue>.
    </li>
    <li>
      <Green>Growing</Green>
      up in
      <Grey>🏚 developing</Grey>
      countries gave me a front row seat to the
      <Orange>extremity</Orange>
      of my
      <Blue>privilege</Blue>.
    </li>
    <li>
      I am
      <Orange>incredibly</Orange>
      <Blue>grateful</Blue>
      for my
      <Green>🌱 childhood</Green>. 
      It laid the
      <Red>critical</Red>
      <Green>🏗 foundation</Green>
      <Red>needed</Red> to
      <Green>🗿 invent</Green> myself.
    </li>
    <li>
      I am one of the
      <Purple>🍀 lucky</Purple>
      few
      <Blue>humans</Blue>
      that has the
      <Blue>freedom</Blue> to
      <Purple>pursue</Purple>
      <Green>self-actualization</Green>.
    </li>
  </ul>

  <p>
    And I just have this
    <Red>feeling</Red>, that if
    <Blue>everyone</Blue> could, it would
    <Green>solve</Green> all the
    <Blue>🌎 world</Blue>'s
    <Orange>problems</Orange>.
  </p>

  <p class='»grey -text-1'>
    (Or create
    <Red>different</Red> ones. But they'd be the
    <Orange>problems</Orange> we
    <Purple>wanted</Purple> to
    <Green>solve</Green>.)
  </p>

  <div class={`
    grid
    gap-4
    grid-row-col
    md:grid-flow-col
  `}>
    
    <div>
      <p>
        I currently live in
        <Grey nw>🇺🇸 Indianapolis</Grey> with my
        <Red>partner</Red> & our 3 🐈 cats.
      </p>
      <p>
        I split my time between:
      </p>
      <ul class='mt-2 md:mt-4 ml-2 md:ml-4'>
        <li>
          . being a 👨🏻‍💻 Front-end Developer with an awesome team at
            <SpiffyLink href="https://www.trabian.com/" target="_blank" color="red">
              Trabian<Grey>&#123;</Grey>
            </SpiffyLink>
        </li>
        <li>
          . and working on any of my
            <SpiffyLink href="projects#top" color="blue">projects</SpiffyLink>
        </li>
      </ul>
    </div>

    <div class="h-64 mr-8 order-first md:order-1">
      {@html portrait_meg.svg}
    </div>

  </div>

  <p>
    I love 
    <Green>creating</Green> and 
    <Blue>building</Blue> things but I move on to the next thing before I can
    <Purple>master</Purple> it.
  </p>

  <p>
    Maybe I just need to
    <Orange>accept</Orange>
    that I'll never finish anything.
  </p>  

  <p>
    On the
    <Orange>bright</Orange>
    side, I did achieve my first
    <Guillemet cls="text-green-600"
      ><Green>life ambition</Green
    ></Guillemet>,
    <details>
      <summary>buying a 🚗 <Red>Tesla</Red>.</summary>

      <p class="ml-4">My life changed forever on
        <abbr title="August 2020 AD/CE">12018.08</abbr>
        and my license plate is: <span class="»i">model 3</span>.
      </p>
    </details>
  </p>

  <p>
    My next life ambition is to
    <details>
      <summary>convert the <Grey nw>🇺🇸 American</Grey> people to the
      <Purple>Metric</Purple>
      <Green>📏 system</Green>.</summary>
      <p class="ml-4">
        Ideally, within the next decade.
        <br />
        Realistically it could take two or more.
        But I have no doubt it's
        <Blue>going</Blue>
        to happen, it is the <Green>future</Green>.
      </p>
    </details>
  </p>

</section>

<section class={sectionCls}>

  <h2 class={h3xCls}>I am <Red>not ❌</Red> special</h2>

  <p>
    But I have a
    <Orange>bright</Orange>
    <Green>future</Green> ahead of me.
  </p>

  <p>
    My
    <Green>future</Green> is
    <Blue>🌏 humanity</Blue>'s
    <Green>future</Green>.
  </p>

  <p>
    I deserve
    <span class="»i">no</span>
    credit for anything I
    <Blue>accomplish</Blue> in
    <Green>life</Green>.
  </p>

  <p>
    I am a ⛓ slave to my 🧠
    <Purple>brain</Purple>.
    Most of the time, I
    <Orange>barely</Orange>
    <Red>feel</Red> in
    <Blue>control</Blue> of myself.
    It
    <Blue>does</Blue>
    things and my 🥩 meatbag is along for the 🎢 ride.
  </p>

  <p>
    I can’t explain
    <Green>why</Green> I
    <Blue>do</Blue> the things I
    <Blue>do</Blue>: I
    <Purple>be</Purple> what it 🧠 
    <Blue>do</Blue>.
  </p>

  <p>
    My <Red>partner</Red>
    likes to call me
    <Guillemet cls="»g"
      ><Grey>an 👽 alien from another planet</Grey>
    </Guillemet>.
    Many days, I
    <Red>feel</Red> like one. But that doesn’t
    <Blue>explain</Blue>
    <Green>why</Green> I have such a
    <Purple>deep</Purple>
    <Red>love</Red> for the
    <Blue>human</Blue> 🧬 species.
    Far more than any 👤 individual, even myself.
  </p>

  <p>
    A more
    <Blue>rational</Blue> explanation is that I am
    <Purple>neurodivergent</Purple>.
    Though this does make it
    <Orange>difficult</Orange>
    for me to understand the
    <Guillemet cls="»g"
      ><Grey>intents of others</Grey
    ></Guillemet>
    in addition to
    <Guillemet cls="»g"
      ><Grey>communicating my own</Grey
    ></Guillemet>;
    I
    <Purple>truly</Purple>
    <Blue>believe</Blue> that I am a
    <Orange>better</Orange>
    <Green>person</Green>
    because of it.
  </p>

</section>

<section class={sectionCls}>
  <h2 class={h3xCls}>Cannot live without</h2>
  <!-- <p class="text-center"><Grey>...</Grey></p> -->
  <ul>
    <li><Yellow>🍋 Lemons</Yellow></li>
    <li><Yellow>🧄 Garlic</Yellow></li>
    <li><Green>🥑 Avocados</Green></li>
    <li><Orange>🥟 Dumplings</Orange></li>
    <li><Orange>🥔 Potatoes</Orange> <Grey>(Mashed)</Grey></li>
  </ul>
</section>