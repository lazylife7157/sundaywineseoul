<script>
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';

  let isCollapsed = false;
  let isMobile = false;

  onMount(() => {
    const mql = window.matchMedia('(max-width: 1280px)');
    mql.addEventListener('change', (v) => (isMobile = v.matches));
  });
</script>

<header>
  <nav class="logo">
    <h1>
      <a href="/">sunday wine seoul</a>
    </h1>
    <button on:click={() => (isCollapsed = !isCollapsed)} on:touchend={() => (isCollapsed = !isCollapsed)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  </nav>
  {#if !isMobile || !isCollapsed}
    <nav class="menu" transition:slide={{}}>
      <ul>
        <li class="producers">
          <h2>Producers</h2>
          <div>
            <a href="/producers/eccocivi">Eccocivi</a>
            <a href="/producers/podere-sottoilnoce">Podere Sottoilnoce</a>
            <a href="/producers/hegyi-kaló">Hegyi Kaló</a>
            <a href="/producers/clos-thierrière">Clos Thierrière</a>
          </div>
        </li>
        <li>
          <h2>
            <a href="/products">Products</a>
          </h2>
        </li>
        <!-- <li>
          <h2>
            <a href="/partners">Partners</a>
          </h2>
        </li> -->
        <li>
          <h2>
            <a href="https://pf.kakao.com/_UCbHxj/chat" target="_blank">Contact</a>
          </h2>
        </li>
      </ul>
    </nav>
    <nav class="contact" transition:slide={{}}>
      <a href="https://pf.kakao.com/_UCbHxj/chat" target="_blank"> 카카오톡 문의 </a>
      <a href="https://whattime.co.kr/sundaywineseoul" target="_blank"> 시음 신청 </a>
    </nav>
  {/if}
</header>

<style lang="sass">
  @import 'open-color/open-color.scss'

  header
    z-index: 1
    display: flex
    justify-content: space-between
    align-items: start
    position: sticky
    top: 0px
    padding: 0 4rem
    background: $oc-gray-9
    nav.logo
      display: flex
      align-items: center
      padding: 1rem 0
      h1
        margin: 0
        padding: 0
        font-family: 'Megrim', cursive
        a
          text-decoration: none
      button
        display: none
    nav.menu
      display: flex
      align-items: start
      z-index: 1
      color: $oc-gray-0
      font-family: 'Abel', sans-serif
      padding: 1rem 0
      ul
        display: flex
        justify-content: flex-start
        align-items: start
        margin: 0
        margin-top: 0.5rem
        padding: 0
        list-style: none
        li
          display: flex
          flex-direction: column
          overflow: hidden
          h1, h2
            margin: 0
            padding: 0
          a
            padding: 0 4rem
            text-decoration: none
          a:hover
            text-decoration: underline
        li.producers
          h2
            z-index: 1
            padding: 0 4rem
            background-color: $oc-gray-9
            cursor: default
          div
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
              font-size: 1.2rem
              white-space: nowrap
        li.producers:hover
          div
            height: 6.4rem
    nav.contact
      display: flex
      gap: 1rem
      align-self: center
      a
        font-family: 'Abel', sans-serif
        text-decoration: none
        padding: 0.75rem 1rem 
        border: none
        background-color: $oc-pink-7
        color: $oc-gray-1
        cursor: pointer
        font-size: 1rem
        line-height: 1rem

  @media (max-width: 1280px)
    header
      flex-direction: column
      align-items: stretch
      padding: 1rem
      nav.logo
        justify-content: space-between
        padding: 0
        button
          display: flex
          border: none
          background: transparent
          cursor: pointer
          svg
            width: 1.5rem
            background: transparent
            color: white
      nav.menu
        flex-direction: column
        ul
          flex-direction: column
          gap: 0
          padding-left: 2rem
          li
            a
              padding: 0
            span
              padding: 0
          li.producers
            h2
              padding: 0 8rem 0 0
            div
              position: relative
              padding: 0
              height: fit-content
            div
              a
                padding-left: 1rem
          li.producers:hover
            div
              height: fit-content
      nav.contact
        align-self: end
</style>
