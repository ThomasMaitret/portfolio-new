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
  <title>Thomas Maitret - Développeur Front-end</title>
</svelte:head>

<section class="text-gray-700 dark:text-gray-100">
  <h1 class="text-3xl md:text-5xl font-bold">
    Bonjour, je suis Thomas Maitret.
  </h1>
  <h2 class="text-2xl max-w-3xl mt-2">
    Je suis développeur Front-end chez
    <a
      rel="noopener"
      href="https://www.groupeonepoint.com/fr"
      target="_blank"
      class="font-bold hover:underline">
      onepoint.
    </a>
  </h2>
  <p class="mt-5 max-w-3xl text-lg leading-relaxed">
    Je crée des interfaces sobres et faciles d'utilisation, en mettant l'accent
    sur la
    <strong>performance</strong>
    et l'
    <strong>accessibilité</strong>
    .
    <br />
    J'ai une bonne expérience avec le framework Angular ainsi qu'avec NodeJS.
  </p>
  <div class="inline-flex items-center mt-8">
    <a
      href="https://twitter.com/ThomasMaitret"
      target="_blank"
      rel="noopener"
      class="mr-4">
      <img width="30" src="twitter.svg" alt="Twitter profile" />
    </a>
    <a
      href="https://github.com/ThomasMaitret"
      target="_blank"
      rel="noopener"
      class="mr-4">
      <img width="30" src="github.svg" alt="Github profile" />
    </a>
    <a
      href="https://www.linkedin.com/in/thomas-maitret/"
      target="_blank"
      rel="noopener"
      class="mr-4">
      <img width="30" src="linkedin.svg" alt="Linkedin profile" />
    </a>
  </div>
</section>

{#if posts.length > 0}
  <section class="mt-32 text-gray-700 dark:text-gray-100">
    <h3 class="text-3xl mb-4">Articles récents</h3>
    <ul>
      {#each posts as post}
        <li class="mb-3 flex items-center text-lg">
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
  </section>
{/if}
