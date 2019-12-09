<script context="module">
  export function preload() {
    return this.fetch(`posts.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<a
  href="."
  rel="prefetch"
  class="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded
  inline-block mb-10 mt-4">
  accueil
</a>
<h3 class="text-3xl mb-4">Articles</h3>
<ul>
  {#each posts as post}
    <li class="mb-3 flex items-center text-lg font-mono">
      <span class="text-gray-600 font-sm mr-3">{post.date}</span>
      <a
        class="font-semibold hover:underline"
        rel="prefetch"
        href="./{post.slug}">
        {post.title}
      </a>
    </li>
  {/each}
</ul>
