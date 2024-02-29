<script lang="ts">
  import { onMount } from 'svelte';

  let isMobile = false;

  onMount(() => {
    const mql = window.matchMedia('(max-width: 1280px)');
    mql.addEventListener('change', (v) => (isMobile = v.matches));
  });
</script>

<main>
  <div class="logo">
    {#if isMobile}
      <h1>sunday<br />wine<br />seoul</h1>
    {:else}
      <h1>sunday wine seoul</h1>
    {/if}
    <h2>Wine importer</h2>
    <h2>Est. 2022</h2>
  </div>

  <div class="info">
    <div>
      <h1>잘 팔리는 와인인가요?</h1>
      <p>
        선데이와인서울에서는 쇼룸 운영을 통해 2,000명이 넘는 일반 고객분들께 전 품목 시음 서비스를 제공하며 실질적인 데이터를 쌓았습니다. 소수의 와인 전문가보다는 절대다수인 일반 고객분들께서 어떤 취향, 어떤 목적으로 와인을 찾으시는지 알고 있습니다. 저희가 수입하는 와인은 일단 <잘 팔리는 와인>입니다. 거기에서 한 걸음 더 나아가, 업장의 위치와 주 고객층에 따라 와인 셀렉션을 추천해드립니다.
      </p>
      <p>
        또한 선데이와인서울에서는 주기적으로 와인별 SNS 광고를 진행하여 고객사에서 추가로 마케팅 비용을 쓰지 않으셔도 문의가 올 수 있게끔 하고 있습니다. 인스타그램, 유튜브, 블로그 등 다양한 채널을 활용하여 홍보가 이루어지오니 고객사 여러분께서는 판매만 하시면 됩니다.
      </p>
    </div>
    <div class="image" />
  </div>

  <div class="info">
    <div class="image" />
    <div>
      <h1>와인을 더 잘 팔 수 있게 해주는 도구는 없을까요?</h1>

      <p>
        선데이와인서울에서는 더 좋은 기술과 도구를 활용하면 와인을 더 잘 판매할 수 있다고 믿습니다. 그래서 잔 와인 판매나 와인 시음을 가능하게 해주는 와인 디스펜서에 대해 오랜 기간 리서치했는데요. 와인 디스펜서는 물론 좋은 제품들이 많지만 최저가가 수백만원부터 시작하기 때문에 처음부터 들여놓기에는 부담스럽습니다.
      </p>
      <p>
        저희 고객사 분들께는 훨씬 저렴한 가격으로 가볍게, 하지만 동일한 효과를 누릴 수 있는 장비 구성에 대해서도 전부 컨설팅해 드립니다.
      </p>
    </div>
  </div>

  <div class="info">
    <div>
      <h1>수익을 더 극대화할 방법은 없을까요?</h1>

      <p>
        와인 판매 수익을 극대화하실 수 있도록 와이너리와 컬래버레이션을 통해 전용 굿즈를 직접 제작하고 있습니다. 굿즈류는 고객사 여러분의 수익 극대화와, 저희 와인이 더 널리 사랑받기를 바라는 마음에서 저희 마진 없이 원가에 공급됩니다.
      </p>
      <p>
        저희 자체제작 굿즈와 와인을 결합해 세트상품으로 판매하거나, 업장 이벤트 시 프로모션 상품으로 제공하는 등 자유롭게 활용하실 수 있습니다.
      </p>
    </div>
    <div class="image" />
  </div>

  <h2>지금 선데이와인서울의 "잘 팔리는 와인"들을 만나보세요.</h2>
</main>

<style lang="sass">
  @import 'open-color/open-color.scss'

  p
    margin: 1rem 0
    font-size: 1.2rem
    line-height: 2rem

  main 
    font-family: 'Abel', sans-serif
    display: flex
    flex-direction: column
    > div
      height: 100vh
    > div.logo:nth-child(1)
      display: flex
      flex-direction: column
      justify-content: center
      align-self: center
      text-align: center
      width: 100%
      background: url('/1_2.jpeg')
      background-position: center
      background-size: cover
      color: $oc-gray-0
      h1
        margin: 0 0 2rem 0
        font-family: 'Megrim', cursive
        font-size: 8rem
        text-shadow: $oc-gray-8 1px 0 8px
      h2
        margin: 0 0 1rem 0
    > div.info
      display: flex
      justify-content: space-between
      align-items: center
      div
        box-sizing: border-box
        padding: 4rem
        width: 60%
        height: fit-content
        h1
          padding: 1rem 0
        p
          text-wrap: balance
      div.image
        width: 40%
        height: 100%
      img
        height: 32%
        border-radius: 2rem
    > div:nth-child(even)
      text-align: left
      div
        h1
          border-bottom: 2px solid $oc-gray-0
    > div:nth-child(odd)
      text-align: right
      color: $oc-gray-9
      background-color: $oc-gray-0
      div
        h1
          border-bottom: 2px solid $oc-gray-9
    > div:nth-child(2)
      div.image
        background-image: url('/1_1.jpeg')
        background-size: cover
    > div:nth-child(3)
      div.image
        background-image: url('/2_1.jpeg')
        background-size: cover
        background-position: center
    > div:nth-child(4)
      div.image
        background-image: url('/3_1.jpeg')
        background-size: cover
    > h2
      margin: 0
      padding: 2rem 4rem
      background: $oc-gray-0
      color: $oc-gray-9
      text-align: center
      text-wrap: balance

  @media (max-width: 1024px)
    main
      > div
        flex-direction: column
        justify-content: center
      > div.logo:nth-child(1)
        h1
          font-size: 6rem
      > div.info
        div
          padding: 1rem
          width: 100%
        div.image
          width: 100%
      > div:nth-child(3)
        div
          order: 1
        div.image
          order: 2
</style>
