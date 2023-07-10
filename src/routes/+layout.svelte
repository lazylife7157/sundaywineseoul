<script>
	import 'normalize.css';
</script>

<div class="container">
	<header>
		<a href="/">
			<h1 class="title">sunday wine seoul</h1>
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
	</header>

	<main>
		<slot />
		<div class="order">
			<a href="https://pf.kakao.com/_UCbHxj/chat" target="_blank">지금 문의하기</a>
		</div>
	</main>

	<footer>
		<div class="left">Sunday Wine Seoul © 2023 - All Rights Reserved</div>
		<div class="right">
			<a href="https://www.instagram.com/sundaywineseoul/" target="_blank">
				<svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 448 512"
					><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
						d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
					/></svg
				>
			</a>
			<a href="mailto:sundaywineseoul@gmail.com">
				<svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 512 512"
					><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
						d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
					/></svg
				>
			</a>
		</div>
	</footer>
</div>

<style>
	div.container {
		display: flex;
		flex-direction: column;
		height: 100vh;
		margin: 0;
		padding: 0;
	}

	header {
		margin: 0 8rem;
		border-bottom: 1px solid black;
	}
	header > a {
		color: black;
		text-decoration: none;
	}

	header h1.title {
		font-family: 'Megrim', cursive;
		font-size: 5.5rem;
		text-align: center;
		margin-top: 6rem;
	}

	header > nav {
		font-family: 'Abel', sans-serif;
		font-size: 1.5rem;
	}

	header > nav > ul {
		display: flex;
		justify-content: center;
		gap: 4rem;
		padding: 0;
		list-style: none;
	}

	header > nav > ul > li > span {
		padding: 0 1rem;
		cursor: default;
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
		font-size: 0.8em;
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
		flex-grow: 1;
		padding: 1rem 8rem;
	}

	main > div.order {
		width: 100%;
		text-align: center;
		padding: 4rem 0;
	}
	main > div.order > a {
		font-family: 'Abel', sans-serif;
		color: white;
		text-decoration: none;
		font-size: 2rem;
		background-color: black;
		border-radius: 1rem;
		padding: 1rem 2rem;
	}
	main > div.order > a:hover {
		color: pink;
	}

	footer {
		display: flex;
		justify-content: space-between;
		font-size: 1.2rem;
		margin: 0 8rem;
		padding: 1rem 2rem;
		border-top: 1px solid black;
	}
	footer a {
		padding: 0.5rem;
	}

	@media (max-width: 1024px) {
		header {
			margin: 0 1rem;
		}
		header > nav > ul {
			flex-direction: column;
			gap: 0;
			padding-left: 2rem;
		}
		header > nav > ul > li > span {
			padding: 0;
		}
		header > nav > ul > li > div.producers {
			position: relative;
			padding: 0;
			height: fit-content;
		}
		header > nav > ul > li > div.producers > a {
			padding-left: 1rem;
		}
		header > nav > ul > li:hover > div.producers {
			height: fit-content;
		}

		main {
			padding: 1rem 2rem;
		}

		footer {
			margin: 0 1rem;
		}
	}
</style>
