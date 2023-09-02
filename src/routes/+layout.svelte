<script>
  import 'normalize.css';
  import Header from './header.svelte';
  import Footer from './footer.svelte';
</script>

<div class="container">
  <Header />

  <slot />

  <Footer />
</div>

<style lang="sass">
  @import 'open-color/open-color.scss'

  :global(body)
    background-color: $oc-gray-9
    color: $oc-gray-0

  :global(a)
    color: inherit

  div.container
    margin: 0
    padding: 0

  @media (max-width: 1024px)
      main
          padding: 1rem 2rem
</style>
