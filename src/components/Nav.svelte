<script>
  export let segment;
</script>

<style>
  .active {
    border-bottom: 5px solid;
    padding-bottom: 5px;
    border-image: linear-gradient(90deg, #6414ce, #2441e6) 3;
  }

  @media (prefers-color-scheme: dark) {
    .active {
      border-image: linear-gradient(90deg, #ecf024, #e67b24) 3;
    }
  }
</style>

<nav class="mt-16 mb-24">
  <ul class="inline-flex text-lg">
    <li class="mr-4">
      <a
        class="p-1 text-gray-700 dark:text-gray-100"
        rel="prefetch"
        class:active={segment === undefined}
        href=".">
        Accueil
      </a>
    </li>
    <li>
      <a
        class="p-1 text-gray-700 dark:text-gray-100"
        rel="prefetch"
        class:active={segment === 'blog'}
        href="blog">
        Blog
      </a>
    </li>
  </ul>
</nav>
