<script lang="ts">
  import { CallToAction } from 'lily-design-system-svelte-headless';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta
    name="description"
    content="What flow metrics are — cycle time, lead time, throughput, work in progress — and why a growing pile of skipped or flaky tests is itself a flow-metric signal that testing debt is piling up."
  />
</svelte:head>

<div class="page-header">
  <h1>What are flow metrics for automatic testing?</h1>
  <p>
    <strong>Flow metrics</strong> — a core Kanban and Lean idea — measure how work actually moves
    through a process: cycle time (how long one item takes end to end), lead time, throughput, and
    work in progress. The point is measuring what's actually moving, not how busy people look.
  </p>
</div>

<section class="section prose">
  <p>
    Here's why that belongs on a testing page: "time from a bug being reported to a regression
    test existing for it" is a concrete, trackable cycle time. And a growing pile of skipped,
    ignored, or flaky tests is itself a flow-metric signal — work in progress that isn't actually
    moving — meaning testing debt is piling up faster than it's being paid down, whether or not
    anyone's tracking it on a board.
  </p>

  <p>
    Learn more at Atlassian's <a href="https://www.atlassian.com/agile/kanban">guide to Kanban</a>, or
    watch ProKanban's
    <a href="https://www.youtube.com/watch?v=3Nd2e1lD8ng">"The Kanban Guide - Kanban Metrics"</a> for a
    video introduction to the metrics themselves.
  </p>

  <h3>For ideas ask AI</h3>
  <ul>
    <li>
      <strong>Novice:</strong>
      "What do 'cycle time' and 'throughput' actually mean, in plain terms, for a team's
      day-to-day work?"
    </li>
    <li>
      <strong>Intermediate:</strong>
      "How would I start tracking cycle time for bug fixes on my own team, without buying new
      tooling?"
    </li>
    <li>
      <strong>Advanced:</strong>
      "How do I use flow metrics to make a concrete case that a growing pile of flaky tests is
      real, measurable technical debt?"
    </li>
  </ul>

  <p style="margin-top: 2rem;">
    <CallToAction class="button button-primary" href="/what-is-lean-six-sigma-for-automatic-testing/"
      >Next: what is Lean Six Sigma for automatic testing? →</CallToAction
    >
  </p>
</section>
