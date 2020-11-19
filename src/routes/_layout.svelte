<script>
  import Nav from "../components/Nav.svelte";
  import Tailwind from "../components/Tailwind.svelte";
  export let segment;
</script>

<style global>
  body {
    border-top: 10px solid;
    border-image: linear-gradient(90deg, #6414ce, #2441e6) 3;
  }

  a:focus {
    outline: 4px solid var(--theme-color);
    outline-offset: 0;
  }

  @media (prefers-color-scheme: dark) {
    body {
      border-image: linear-gradient(90deg, #ecf024, #e67b24) 3;
    }
  }
</style>

<Tailwind />
<Nav {segment} />

<main>
  <slot />
</main>
