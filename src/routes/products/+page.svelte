<script>
  import { onMount } from 'svelte';

  let numPages = 0;
  const pages = [];
  onMount(async () => {
    pdfjsLib.getDocument('/products/products_20230713.pdf').promise.then(async (pdf) => {
      numPages = pdf.numPages;
      for (let i = 3; i < pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const canvas = pages[i - 1];
        const context = canvas.getContext('2d');
        const outputScale = window.devicePixelRatio || 1;
        const transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null;
        const scale = 1;
        const viewport = page.getViewport({ scale });

        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);

        page.render({
          canvasContext: context,
          transform,
          viewport
        });
      }
    });
  });
</script>

<svelte:head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.10.111/pdf.min.js"></script>
</svelte:head>

<div>
  <ul>
    {#each { length: numPages } as _, i}
      {#if 2 <= i && i <= numPages}
        <li>
          <canvas bind:this={pages[i]} />
        </li>
      {/if}
    {/each}
  </ul>
</div>

<style lang="sass">
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
      canvas
        width: 28rem
  @media (max-width: 1024px)
    ul
      li
        canvas
          width: 100%
</style>
