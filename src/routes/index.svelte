<script context="module">
  export function preload() {
    return this.fetch(`index.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<svelte:head>
  <title>Thomas Maitret</title>
</svelte:head>
<header class="mb-32">
  <h1 class="text-3xl md:text-5xl font-serif mt-12 md:mt-24">
    Bonjour, je suis Thomas Maitret.
  </h1>
  <h2 class="text-xl max-w-3xl mt-1">
    Je suis développeur Front-end chez
    <a
      rel="noopener"
      href="https://www.groupeonepoint.com/fr"
      target="_blank"
      class="font-semibold hover:underline">
      onepoint.
    </a>
  </h2>
  <p class="mt-6 font-light max-w-3xl">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget bibendum
    nulla. Duis in libero quis ipsum cursus luctus. Aliquam porta lorem quis
    felis semper tincidunt. Integer commodo ipsum risus, ac sagittis risus
    lacinia vitae. Mauris auctor, sapien eget accumsan pellentesque, quam dolor
    dapibus nunc, ac tincidunt ante erat at nibh. Integer pharetra, ex quis
    porta ornare, erat mauris efficitur risus, ac placerat mi enim nec dui.
    Etiam in arcu nisl.
  </p>
  <div class="inline-flex items-center mt-6">
    <a
      href="https://twitter.com/ThomasMaitret"
      target="_blank"
      rel="noopener"
      class="mr-4">
      <img width="30px" src="/social/twitter.svg" alt="Twitter profile" />
    </a>
    <a
      href="https://dev.to/thomasmaitret"
      target="_blank"
      rel="noopener"
      class="mr-4">
      <img width="30px" src="/social/devto.svg" alt="Devto profile" />
    </a>
    <a
      href="https://github.com/ThomasMaitret"
      target="_blank"
      rel="noopener"
      class="mr-4">
      <img width="30px" src="/social/github.svg" alt="Github profile" />
    </a>
    <a
      href="https://www.linkedin.com/in/thomas-maitret/"
      target="_blank"
      rel="noopener"
      class="mr-4">
      <img width="30px" src="/social/linkedin.svg" alt="Linkedin profile" />
    </a>
  </div>
</header>

{#if posts.length > 0}
  <h3 class="text-3xl mb-4">Articles récents</h3>
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
  <a
    href="/posts"
    rel="prefetch"
    class="inline-block bg-gray-300 hover:bg-gray-400 text-gray-800 py-1 px-3
    rounded mt-3 text-sm">
    Voir tous
  </a>
{/if}
