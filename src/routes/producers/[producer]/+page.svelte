<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>{data.title}</h1>
{#each data.contents as content}
	<p>{content}</p>
{/each}
<ul class="images">
	{#each data.images as image}
		<li>
			<img src={image} alt={image} />
		</li>
	{/each}
</ul>

<style>
	h1 {
		font-family: 'Abel', sans-serif;
		text-align: center;
	}

	p {
		font-family: 'Abel', sans-serif;
		font-size: 1.4rem;
	}

	ul.images {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		list-style: none;
		padding: 0;
	}
	ul.images > li {
		flex-grow: 1;
		height: 32rem;
		position: relative;
	}
	ul.images > li > img {
		object-fit: cover;
		width: 100%;
		height: 100%;
		vertical-align: middle;
	}
</style>
