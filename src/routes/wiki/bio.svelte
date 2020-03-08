<script>
  import { portrait_fag, portrait_meg } from '@f*g/fumonicon'

  import SpiffyLink from 'components/SpiffyLink.svelte'
</script>

<style>
  section {
    @apply grid;
    @apply gap-4;
  }

  p {
    @apply px-8;
  }

  h2 {
    @apply text-center;
    @apply py-8;
  }

  abbr {
    @apply text-gray-400;
    text-decoration-style: wavy;
    text-decoration-color: var(--yellow-300);
  }

  ul {
    @apply my-4;
    @apply ml-16;
    @apply grid;
    @apply gap-4;
  }
</style>

<div class="h-64">
  {@html portrait_fag.svg}
</div>

<section>
  <h2>I'm a 🚸 child of the 🌍 world</h2>

  <p>
    I am an 🇺🇸 <span class="»grey">American</span> citizen
    <br />
    <span class="ml-8">with 🇸🇪 <span class="»grey">Swedish</span> dna</span>
    <br />
    <span class="ml-16">born in 🇵🇹 <span class="»grey">Portugal</span></span>
    <br />
    <span class="ml-24">that grew up in 🇲🇿🇿🇼 <span class="»grey">Africa</span>.</span>
  </p>

  <p>
    My friends joke that 
    <span class="»g">«</span><span class="»grey"
      >I'll claim I’m from anywhere</span><span class="»g"
    >»</span>
    <br />
    But after changing schools 13 times, I'm not too attached to places.
    Instead, I’m attached to what they represent.
  </p>

  <div class={`
    grid
    gap-2
    grid-flow-col
    items-baseline
    justify-center
  `}>
    <h2>
      I am a
      <span class="»p">xeno</span><span class="»r">phile</span>
    </h2>
    <span class="»grey">
      = <span class="»r">love</span> + <span class="»p">foreign</span>
    </span>
  </div>
  <p>
    There are so many 🏛
    <span class="»g">beautiful</span> ⛩
    <span class="»b">cultures</span> 🕌 across our 🌏 planet that 
    <span class="»p">inspire</span> and fill me with 
    <span class="»r">awe</span>. I can say 
    <span class="»o">confidently</span> that visiting
    🇯🇵 <span class="»grey">Tokyo</span> and
    🇸🇪 <span class="»grey">Stockholm</span>
    <span class="»y">changed</span> my life for the 
    <span class="»g">better</span>. The next place I want to visit is
    🇸🇬 <span class="»grey">Singapore</span>.
  </p>

</section>

<section>

  <h2>
    I don't deserve this
  </h2>
  <p>
    I feel like I hit some 🌠
    <span class="»i">cosmic</span>
    🎰 lottery:
  </p>
  <ul class="mr-8">
    <li>
      I grew up with one of the
      <span class="»g">best</span>
      <span class="»r">childhoods</span> I could
      <span class="»p">hope</span>
      for.
    </li>
    <li>
      I got everything I needed from the most
      <span class="»p">loving</span>
      <span class="»b">family</span>.
    </li>
    <li>
      Growing up in
      <span class="»o">developing</span>
      countries gave me a front row seat to the
      <span class="»r">extremity</span> of my
      <span class="»p">privilege</span>.
    </li>
    <li>
      I am one of the
      <span class="»b">lucky</span>
      few humans that has the freedom to pursue
      <span class="»i">self</span><span class="»g">actualization</span>.
    </li>
  </ul>
  <p>
    And I just have this
    <span class="»r">feeling</span>, that if
    <span class="»b">everyone</span> could, it would
    <span class="»g">solve</span> all the
    <span class="»n">world</span>'s
    <span class="»o">problems</span>.
  </p>
  <p class='»grey -text-1'>
    (Or create
    <span class="»r">different</span> ones. But they'd be the
    <span class="»o">problems</span> we
    <span class="»p">wanted</span> to
    <span class="»b">solve</span>.)
  </p>

  <div class={`
    grid
    gap-4
    grid-flow-col
  `}>
    
    <div>
      <p>
        I currently live in
        🇺🇸 <span class="»grey">Indianapolis</span> with my
        <span class="»p">partner</span> & our 3 🐈 cats.
      </p>
      <p>
        I split my time between:
      </p>
      <ul>
        <li>
          . being a 👨🏻‍💻 Front-end Developer with an awesome team at
            <SpiffyLink href="https://www.trabian.com/" target="_blank" color="red">
              Trabian<span class="»grey">&#123;</span>
            </SpiffyLink>
        </li>
        <li>
          . and working on any of my
            <SpiffyLink href="projects#top" color="blue">projects</SpiffyLink>
        </li>
      </ul>
    </div>

    <div class="h-64 mr-8">
      {@html portrait_meg.svg}
    </div>

  </div>
  <p>
    I love 
    <span class="»g">creating</span> and 
    <span class="»b">building</span> things but I move on to the next thing before I can
    <span class="»p">master</span> it.
  </p>

  <p>
    Maybe I just need to
    <span class="»o">accept</span>
    that I'll never finish anything.
  </p>  

  <p>
    On the
    <span class="»o">bright</span>
    side, I did achieve my first
    <span class="text-green-600">«</span><span class="»g">life ambition</span><span class="text-green-600">»</span>,
    <details>
      <summary>buying a 🚗 <span class="»r">Tesla</span>.</summary>

      <p>I got it <abbr title="August 2020 AD/CE">12018.08</abbr>
        my license plate is: <span class="»i">model 3</span>.
      </p>
    </details>
  </p>

  <p>
    My next life ambition is to
    <details>
      <summary>convert the 🇺🇸 <span class="»grey">American</span> people to the
      <span class="»g">Metric</span>
      <span class="»b">system</span>.</summary>
      <p>
      Ideally, within the next decade.
        <br />
        But realistically it could take two or more.
        It's going to happen, it is the <span class="»g">future</span>.
      </p>
    </details>
  </p>

</section>

<section>

  <h2>I am not special</h2>

  <p>
    But I have a
    <span class="»o">bright</span>
    <span class="»g">future</span> ahead of me.
  </p>

  <p>
    My
    <span class="»g">future</span> is
    <span class="»b">humanity</span>'s
    <span class="»g">future</span>.
  </p>

  <p>
    I deserve
    <span class="»i">no</span>
    credit for anything I
    <span class="»b">accomplish</span> in
    <span class="»g">life</span>.
  </p>

  <p>
    I am a ⛓ slave to my 🧠
    <span class="»p">brain</span>.
    Most of the time, I
    <span class="»o">barely</span>
    <span class="»r">feel</span> in
    <span class="»b">control</span> of myself.
    It
    <span class="»b">does</span>
    things and I’m along for the 🎢 ride.
  </p>

  <p>
    I can’t explain
    <span class="»g">why</span> I
    <span class="»b">do</span> the things I
    <span class="»b">do</span>: I
    <span class="»p">be</span> what it 🧠 
    <span class="»b">do</span>.
  </p>

  <p>
    My partner likes to call me
    <span class="»g">«</span><span class="»grey"
      >an 👽 alien from another planet</span><span class="»g"
    >»</span>.
    Many days, I
    <span class="»r">feel</span> like one. But that doesn’t
    <span class="»b">explain</span>
    <span class="»g">why</span> I have such a
    <span class="»p">deep</span>
    <span class="»r">love</span> for the
    <span class="»b">human</span> 🧬 species.
    Far more than any 👤 individual, even myself.
  </p>

  <p>
    A more
    <span class="»b">rational</span> explanation is that I am
    <span class="»p">neurodivergent</span>.
    Though this does make it
    <span class="»o">difficult</span>
    for me to understand the
    <span class="»g">«</span><span class="»grey"
      >intents of others</span><span class="»g"
    >»</span>
    in addition to
    <span class="»g">«</span><span class="»grey"
      >communicating my own</span><span class="»g"
    >»</span>;
    I
    <span class="»p">truly</span>
    <span class="»b">believe</span> that I am a
    <span class="»o">better</span>
    <span class="»g">person</span>
    because of it.
  </p>

</section>