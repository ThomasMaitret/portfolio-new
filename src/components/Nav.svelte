<script>
  export let segment;
</script>

<style>
  .active {
    border-bottom: 5px solid;
    padding-bottom: 5px;
    border-image: linear-gradient(90deg, #6414ce, #2441e6) 3;
  }
</style>

<nav class="my-16 flex items-center justify-between">
  <a rel="prefetch" href=".">
    <img alt="Logo" src="favicon.ico" width="40" loading="lazy" />
  </a>

  <ul class="inline-flex text-lg">
    <li class="mr-4">
      <a
        class="p-1"
        rel="prefetch"
        class:active={segment === undefined}
        href=".">
        Accueil
      </a>
    </li>
    <li>
      <a
        class="p-1"
        rel="prefetch"
        class:active={segment === 'blog'}
        href="blog">
        Blog
      </a>
    </li>
  </ul>
</nav>
