<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>{data.title}</h1>
<p>{@html data.content}</p>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');

    h1 {
        font-family: 'Abel', sans-serif;
        text-align: center;
    }

    p {
        font-family: 'Abel', sans-serif;
        font-size: 1.4rem;
    }
</style>
