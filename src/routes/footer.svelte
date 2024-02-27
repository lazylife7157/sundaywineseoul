<script></script>

<footer>
  <div>Sunday Wine Seoul © 2023 - All Rights Reserved</div>
</footer>
<div class="contact">
  <a href="tel:070-4519-5310" target="_blank"> 070-4519-5310 </a>
  <a href="https://forms.gle/72MzCnRAVrKzQgHv9" target="_blank"> 주문하기 </a>
</div>

<style lang="sass">
  @import 'open-color/open-color.scss'

  footer
    bottom: 0
    display: flex
    justify-content: center
    gap: 2rem
    align-items: center
    box-sizing: border-box
    padding: 2rem
    color: white
    background-color: #212529
  .contact
    position: fixed
    display: flex
    gap: 1rem
    bottom: 1rem
    right: 1rem
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

  @media (max-width: 1024px)
    footer
      display: none
</style>
