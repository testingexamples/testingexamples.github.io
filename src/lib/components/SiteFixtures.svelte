<!--
  The home page fixture section — every id, name, class, href, and visible
  text here is a locked contract depended on by five sibling repos' test
  suites (see AGENTS.md and spec/index.md). NEVER translate or otherwise
  change anything in this file without first checking AGENTS.md and
  coordinating with those repos. It is rendered, byte-for-byte identical,
  in English on every locale's home page — including the Welsh ones — since
  it is a fixture/contract, not page content.
-->
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

  <form id="form-1">

    <h2>Input Text Example</h2>

    <label for="text-example-1-id">Text Example 1</label>
    <input type="text" id="text-example-1-id" name="text-example-1-name" value="Text Example 1 Value">

    <h2>Input Checkbox Example</h2>

    <label for="checkbox-example-1-id">Checkbox Example 1</label>
    <input type="checkbox" id="checkbox-example-1-id" name="checkbox-example-1-name" value="1" />

    <h2>Input Radio Example</h2>

    <input type="radio" id="radio-example-1-option-1-id" name="radio-example-1-name" value="1" />1
    <input type="radio" id="radio-example-1-option-2-id" name="radio-example-1-name" value="2" />2
    <input type="radio" id="radio-example-1-option-3-id" name="radio-example-1-name" value="3" />3

    <h2>Input Select Example</h2>

    <select id="select-example-1-id" name="select-example-1-name">
      <option id="select-example-1-option-1-id" value="a">alfa</option>
      <option id="select-example-1-option-2-id" value="b">bravo</option>
      <option id="select-example-1-option-3-id" value="c">charlie</option>
    </select>

    <h2>Input Select Multiple Example</h2>

    <select id="select-multiple-example-1-id" name="select-multiple-example-1-name" multiple>
      <option id="select-multiple-example-1-option-1-id" value="a">alfa</option>
      <option id="select-multiple-example-1-option-2-id" value="b">bravo</option>
      <option id="select-multiple-example-1-option-3-id" value="c">charlie</option>
    </select>

    <h2>Input Color Example</h2>
    <label for="color-example-1-id">Color Example 1</label>
    <input type="color" id="color-example-1-id" name="color-example-1-name" value="#336699">

    <h2>Input Date Example</h2>
    <label for="date-example-1-id">Date Example 1</label>
    <input type="date" id="date-example-1-id" name="date-example-1-name" value="2026-01-15">

    <h2>Input Date and Time Example</h2>
    <label for="datetime-local-example-1-id">Date and Time Example 1</label>
    <input type="datetime-local" id="datetime-local-example-1-id" name="datetime-local-example-1-name" value="2026-01-15T09:30">

    <h2>Input Email Example</h2>
    <label for="email-example-1-id">Email Example 1</label>
    <input type="email" id="email-example-1-id" name="email-example-1-name" value="example@example.com">

    <h2>Input File Example</h2>
    <label for="file-example-1-id">File Example 1</label>
    <input type="file" id="file-example-1-id" name="file-example-1-name">

    <h2>Input Hidden Example</h2>
    <input type="hidden" id="hidden-example-1-id" name="hidden-example-1-name" value="Hidden Example 1 Value">

    <h2>Input Image Example</h2>
    <input type="image" id="image-example-1-id" name="image-example-1-name" alt="Image Example 1" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Crect width='32' height='32' fill='%23336699'/%3E%3C/svg%3E" width="32" height="32">

    <h2>Input Month Example</h2>
    <label for="month-example-1-id">Month Example 1</label>
    <input type="month" id="month-example-1-id" name="month-example-1-name" value="2026-01">

    <h2>Input Number Example</h2>
    <label for="number-example-1-id">Number Example 1</label>
    <input type="number" id="number-example-1-id" name="number-example-1-name" value="42">

    <h2>Input Password Example</h2>
    <label for="password-example-1-id">Password Example 1</label>
    <input type="password" id="password-example-1-id" name="password-example-1-name" value="Password Example 1 Value">

    <h2>Input Slider Example</h2>
    <label for="range-example-1-id">Slider Example 1</label>
    <input type="range" id="range-example-1-id" name="range-example-1-name" value="50">

    <h2>Input Search Example</h2>
    <label for="search-example-1-id">Search Example 1</label>
    <input type="search" id="search-example-1-id" name="search-example-1-name" value="Search Example 1 Value">

    <h2>Input Telephone Example</h2>
    <label for="tel-example-1-id">Telephone Example 1</label>
    <input type="tel" id="tel-example-1-id" name="tel-example-1-name" value="+1-555-0100">

    <h2>Input Time Example</h2>
    <label for="time-example-1-id">Time Example 1</label>
    <input type="time" id="time-example-1-id" name="time-example-1-name" value="09:30">

    <h2>Input URL Example</h2>
    <label for="url-example-1-id">URL Example 1</label>
    <input type="url" id="url-example-1-id" name="url-example-1-name" value="https://example.com">

    <h2>Input Week Example</h2>
    <label for="week-example-1-id">Week Example 1</label>
    <input type="week" id="week-example-1-id" name="week-example-1-name" value="2026-W03">

    <h2>Input Button Example</h2>
    <input type="button" id="button-example-1-id" name="button-example-1-name" value="Button Example 1">

    <h2>Input Reset Example</h2>
    <input type="reset" id="reset-example-1-id" name="reset-example-1-name" value="Reset Example 1">

    <h2>Input Submit Example</h2>

    <input type="submit" value="Submit">

  </form>

</section>
