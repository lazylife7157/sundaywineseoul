<script>
  const numPages = 18;
</script>

<main>
  <ul>
    {#each { length: numPages } as _, i}
      <li>
        <img src={`/products/${i + 1}.PNG`} alt="" />
      </li>
    {/each}
  </ul>
</main>

<style lang="sass">
  @import 'open-color/open-color.scss'

  main
    padding: 2rem 8rem
    background-color: $oc-gray-0
    ul
      display: flex
      justify-content: center
      flex-wrap: wrap
      gap: 1rem
      margin: 0
      padding: 0
      list-style: none
      li
        margin: 0
        padding: 0
        width: fit-content
        img
          width: 36rem
  @media (max-width: 1024px)
    main
      padding: 1rem 2rem
      ul
        li
          img
            width: 100%
</style>
