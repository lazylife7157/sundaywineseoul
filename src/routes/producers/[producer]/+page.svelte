<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>{data.title}</h1>
{#each data.contents as content}
	<p>{content}</p>
{/each}
{#each data.images as image}
	<img src={image} alt={image} />
{/each}

<style>
	h1 {
		font-family: 'Abel', sans-serif;
		text-align: center;
	}

	p {
		font-family: 'Abel', sans-serif;
		font-size: 1.4rem;
	}

	img {
		width: 100%;
	}
</style>
