<script>
  import 'normalize.css';
  import Header from './header.svelte';
  import Footer from './footer.svelte';
</script>

<div class="container">
  <Header />

  <main>
    <slot />
    <div class="order">
      <a href="https://pf.kakao.com/_UCbHxj/chat" target="_blank">지금 문의하기</a>
    </div>
  </main>

  <Footer />
</div>

<style lang="sass">
  :global(body)
    background-color: #212529

  :global(a)
    color: inherit

  div.container
    display: flex
    flex-direction: column
    height: 100vh
    margin: 0
    padding: 0

  main
    flex: 1 1 auto
    overflow: auto
    padding: 2rem 16rem
    background-color: #f8f9fa
    > div.order
      width: 100%
      text-align: center
      padding: 4rem 0
      > a
        font-family: 'Abel', sans-serif
        text-decoration: none
        font-size: 1.6rem
        border: 1px solid #212529
        padding: 1rem 2rem
      > a:hover
        color: white
        background-color: #212529

  @media (max-width: 1024px)
      main
          padding: 1rem 2rem
</style>
