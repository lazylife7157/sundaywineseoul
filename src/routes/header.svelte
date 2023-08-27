<script></script>

<header>
  <a class="title" href="/">
    <h1>sunday wine seoul</h1>
    <h2>Wine importer</h2>
    <h2>Est. 2022</h2>
  </a>
</header>
<nav>
  <ul>
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/about">About</a>
    </li>
    <li>
      <span>Producers</span>
      <div class="producers">
        <a href="/producers/eccocivi">Eccocivi</a>
        <a href="/producers/podere-sottoilnoce">Podere Sottoilnoce</a>
        <a href="/producers/hegyi-kaló">Hegyi Kaló</a>
        <a href="/producers/clos-thierrière">Clos Thierrière</a>
      </div>
    </li>
    <li>
      <a href="/partners">Partners</a>
    </li>
    <li>
      <a href="https://pf.kakao.com/_UCbHxj/chat" target="_blank">Contact</a>
    </li>
  </ul>
</nav>

<style lang="sass">
  @import 'open-color/open-color.scss'

  header
    background-color: $oc-gray-9
    color: $oc-gray-0
    > a.title
      display: flex
      flex-direction: column
      align-items: center
      text-decoration: none
      padding-top: 6rem
      padding-bottom: 4rem
      color: var(--color)
      > h1
        margin: 0
        font-family: 'Megrim', cursive
        font-size: 5.5rem
        text-align: center
      > h2
        margin: 0
        font-family: 'Abel', sans-serif
        font-size: 1.1rem
  nav
    z-index: 1
    color: $oc-gray-0
    background-color: $oc-gray-9
    position: sticky
    top: 0px
    font-family: 'Abel', sans-serif
    font-size: 1.5rem
    padding: 1rem 0
    > ul
      display: flex
      justify-content: center
      margin: 0
      padding: 0
      list-style: none
      > li
        display: flex
        flex-direction: column
        overflow: hidden
        > span
          z-index: 1
          padding: 0 4rem
          background-color: $oc-gray-9
          cursor: default
        > div.producers
          display: flex
          flex-direction: column
          justify-content: flex-end
          height: 0
          padding-bottom: 0.5rem
          overflow: visible
          transition: height 0.5s
          font-size: 0.8em
          a
            max-width: 1rem
            white-space: nowrap
        a
          padding: 0 4rem
          text-decoration: none
        a:hover
          text-decoration: underline
      > li:hover > div.producers
        height: 6.4rem

  @media (max-width: 1024px)
    header > nav > ul
      flex-direction: column
      gap: 0
      padding-left: 2rem
      > li
        > span
          padding: 0
        > div.producers
          position: relative
          padding: 0
          height: fit-content
        > div.producers > a
          padding-left: 1rem
      > li:hover > div.producers
        height: fit-content
</style>
