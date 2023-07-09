<header>
	<a href="/">
		<h1 class="title">Sunday Wine Seoul</h1>
	</a>
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
					<a href="/producers/ket-diofas-pince">Ket Diofas Pince</a>
				</div>
			</li>
			<li>
				<a href="/partners">Partners</a>
			</li>
		</ul>
	</nav>
</header>
<main>
	<slot />
</main>

<style>
    header > a {
		color: black;
		text-decoration: none;
    }

	header h1.title {
		font-family: 'Megrim', cursive;
		font-size: 6rem;
		text-align: center;
	}

	header > nav {
		font-family: 'Abel', sans-serif;
		font-size: 1.5rem;
	}

	header > nav > ul {
		display: flex;
		justify-content: center;
		padding: 0;
		list-style: none;
	}

	header > nav > ul > li {
		margin-right: 4rem;
	}

	header > nav > ul > li > span {
		padding: 0 1rem;
	}

	header > nav > ul > li > div.producers {
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		height: 0;
		padding: 0 1rem;
		padding-bottom: 0.5rem;
		background-color: white;
		overflow: hidden;
		transition: height 0.5s;
	}

	header > nav > ul > li:hover > div.producers {
		height: 6.4rem;
	}

	header > nav > ul > li a {
		color: black;
		text-decoration: none;
	}

	header > nav > ul > li a:hover {
		color: black;
		text-decoration: underline;
	}

	main {
		padding: 1rem 8rem;
	}
</style>
