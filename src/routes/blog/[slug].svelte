<script context="module">
  export async function preload({ params }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
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

<div class="text-gray-700 dark:text-gray-100">
  <h1 class="text-4xl font-bold">{post.title}</h1>
  <h3 class="text-xl text-gray-700 dark:text-gray-300 mt-2">{post.date}</h3>
  <div class="content max-w-3xl mt-16">
    {@html post.html}
  </div>
</div>
