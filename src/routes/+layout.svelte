<script>
  import 'normalize.css';
  import Header from './header.svelte';
  import Footer from './footer.svelte';
</script>

<div class="container">
  <Header />

  <main>
    <slot />
  </main>

  <Footer />
</div>

<style lang="sass">
  @import 'open-color/open-color.scss'

  :global(body)
    background-color: $oc-gray-0

  :global(a)
    color: inherit

  div.container
    margin: 0
    padding: 0

  main
    margin-bottom: 4rem
    padding: 2rem 16rem

  @media (max-width: 1024px)
      main
          padding: 1rem 2rem
</style>
