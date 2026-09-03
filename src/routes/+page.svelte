<script lang="ts">
  import { SectionHeading, CallToAction } from 'lily-design-system-svelte-headless';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta
    name="description"
    content="Free open source HTML fixtures for practicing browser automation: find elements by id, name, class, link text, and XPath, and interact with form inputs."
  />
</svelte:head>

<div class="page-header">
  <h1>Welcome to Testing Examples</h1>
  <p>Free, open source browser automation examples — and a stable page to practice on.</p>
</div>

<section class="section prose">
  <p>
    If you're new to browser automation, you're in the right place. Testing Examples is a small,
    free, open source site built for anyone learning to make a browser do things automatically —
    click, type, search, wait, assert — whether you've never written a line of code or you already
    know the ropes and just want a quick reference or somewhere reliable to try something out.
  </p>
  <p>
    The site has grown a bit since it started as just the fixture page below. There's now a
    <a href="/learn/">Learn</a> section covering what automatic testing actually is, a step-by-step
    path for getting started, the everyday tools and concepts that surround it, and where AI fits
    in today. There's an <a href="/examples/">Examples</a> section with nine real implementations
    each of a Google Search and a Google Maps walkthrough, spread across three testing tools and
    three programming languages, so you can compare the same task written different ways. There's
    an <a href="/about/">About</a> page describing the project and the eleven-plus sibling demo
    repos that build on it. And right below this welcome, there's the fixture playground this site
    started as — a page built to be practiced on.
  </p>
  <p style="margin-top: 2rem;">
    <CallToAction class="button button-primary" href="/learn/">New here? Start with Learn</CallToAction>
    <CallToAction class="button button-secondary" href="/checklist/" style="margin-left: 0.75rem;"
      >Not sure what to learn first? Try the Checklist</CallToAction
    >
  </p>
</section>

<section class="section prose">
  <SectionHeading
    class="section-heading-start"
    eyebrow="Hands-on"
    heading="Practice on this page"
    level={2}
  />
  <p>
    Everything below is a stable fixture playground: fixed ids, names, classes, and text that
    automation tools can reliably find every time, which is exactly what makes it useful to
    practice on directly — point your script at it, find an element, interact with it, and see
    what happens. The exact contract this page keeps is documented in this repo's
    <code>spec/index.md</code>.
  </p>
</section>

<hr />

<section class="site-fixtures">

  <h2>Id Examples</h2>

  <p id="id-example-1">Id Example 1</p>
  <p id="id-example-2">Id Example 2</p>
  <p id="id-example-3">Id Example 3</p>

  <h2>Name Examples</h2>

  <!-- svelte-check flags `name` as an unknown attribute on <p> — it is not
       a standard HTML attribute for this element, but it is exactly what
       the fixture contract (spec/index.md) requires: sibling repos locate
       this element with `[name="name-example-1"]`. The spread below emits
       the identical DOM attribute while sidestepping the type error;
       nothing about the rendered markup changes. -->
  <p {...{ name: 'name-example-1' }}>Name Example 1</p>
  <p {...{ name: 'name-example-2' }}>Name Example 2</p>
  <p {...{ name: 'name-example-3' }}>Name Example 3</p>

  <h2>Class Examples</h2>

  <p class="class-example-1">Class Example 1</p>
  <p class="class-example-2">Class Example 2</p>
  <p class="class-example-3">Class Example 3</p>

  <h2>Link Examples</h2>

  <p><a href="https://1.example.com">Link Example 1</a></p>
  <p><a href="https://2.example.com">Link Example 2</a></p>
  <p><a href="https://3.example.com">Link Example 3</a></p>

  <h2>Ordered List Example</h2>

  <ol id="ol-example-1">
   <li id="ol-example-1-li-1">alfa</li>
   <li id="ol-example-1-li-2">bravo</li>
   <li id="ol-example-1-li-3">charlie</li>
  </ol>

  <h2>Unordered List Example</h2>

  <ul id="ul-example-1">
   <li id="ul-example-1-li-1">alfa</li>
   <li id="ul-example-1-li-2">bravo</li>
   <li id="ul-example-1-li-3">charlie</li>
  </ul>

  <h2>Form Input Examples</h2>

  <form id="form-1">

    <h3>Text Example</h3>

    <label for="text-example-1-id">Text Example 1</label>
    <input type="text" id="text-example-1-id" name="text-example-1-name" value="Text Example 1 Value">

    <h3>Checkbox Example</h3>

    <label for="checkbox-example-1-id">Checkbox Example 1</label>
    <input type="checkbox" id="checkbox-example-1-id" name="checkbox-example-1-name" value="1" />

    <h3>Radio Example</h3>

    <input type="radio" id="radio-example-1-option-1-id" name="radio-example-1-name" value="1" />1
    <input type="radio" id="radio-example-1-option-2-id" name="radio-example-1-name" value="2" />2
    <input type="radio" id="radio-example-1-option-3-id" name="radio-example-1-name" value="3" />3

    <h3>Select Example</h3>

    <select id="select-example-1-id" name="select-example-1-name">
      <option id="select-example-1-option-1-id" value="a">alfa</option>
      <option id="select-example-1-option-2-id" value="b">bravo</option>
      <option id="select-example-1-option-3-id" value="c">charlie</option>
    </select>

    <h3>Submit Example</h3>

    <input type="submit" value="Submit">

  </form>

</section>
