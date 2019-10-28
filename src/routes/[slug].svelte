<script context="module">
  export async function preload({ params }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  function goBack() {
    history.back();
  }

  export let post;
</script>

<style>
  .content :global(pre) {
    background: #f2f2f2;
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 4px;
    overflow-x: auto;
    margin: 1rem 0;
    width: max-content;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<button
  type="button"
  on:click={goBack}
  class="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded
  inline-block mb-10 mt-4">
  ← retour
</button>
<h1 class="text-4xl font-mono font-semibold">{post.title}</h1>
<h3 class="text-xl text-gray-600 font-mono">{post.date}</h3>

<div class="content mt-6 max-w-3xl">
  {@html post.html}
</div>
