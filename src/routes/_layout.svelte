<script>
  import Nav from "../components/Nav.svelte";
  import Tailwind from "../components/Tailwind.svelte";
  export let segment;
</script>

<Tailwind />
<Nav {segment} />

<main>
  <slot />
</main>

<style global>
body {
  border-top: 10px solid;
  border-image: linear-gradient(139deg, #7a17fb, #3001ff, #2139c1, #2a4aff) 3;
}

a:focus {
  outline: 4px solid var(--theme-color);
  outline-offset: 0;
}
</style>