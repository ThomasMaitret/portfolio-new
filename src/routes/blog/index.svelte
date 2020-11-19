<script context="module">
  export function preload() {
    return this.fetch(`index.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="text-gray-700 dark:text-gray-100">
  <h1 class="text-3xl md:text-5xl font-bold">Blog</h1>
  <ul class="mt-5">
    {#each posts as post}
      <li class="mb-3 flex items-center text-xl">
        <span
          class="text-gray-700 dark:text-gray-300 font-sm mr-3">{post.date}</span>
        <a
          class="font-bold hover:underline"
          rel="prefetch"
          href="blog/{post.slug}">
          {post.title}
        </a>
      </li>
    {/each}
  </ul>
</div>
