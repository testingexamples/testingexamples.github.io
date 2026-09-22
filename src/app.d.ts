declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    interface PageData {
      /**
       * The page's `<title>` text, e.g. "About — Testing Examples".
       * Optional: only the legacy redirect-stub routes under
       * src/routes/<old-slug>/ never set it (they redirect before
       * rendering). Every real content page instead sets its own
       * `<title>` via `<svelte:head>` inside src/lib/pages/<topicId>/
       * Page.svelte, keyed by locale; `+layout.svelte` reads it back
       * from `document.title` after navigation (see its `afterNavigate`
       * call) to pass to SharePicker, rather than plumbing the same
       * string through `load()` for all six locales of all 18 topics.
       */
      title?: string;
    }
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
