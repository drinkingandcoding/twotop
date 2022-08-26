<script lang="ts">
	import { page } from '$app/stores';
</script>

<header class="desktopNav">
	<div class="brand">
		twotop
	</div>
	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.url.pathname.includes('/recipes') }>
				<a sveltekit:prefetch href="/recipes">Recipes</a>
			</li>
			<li class:active={$page.url.pathname.includes('/builder')}>
				<a sveltekit:prefetch href="/builder">Builder</a>
			</li>
		</ul>
	</nav>
</header>

<style>

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: var(--base);
		border-bottom: 2px solid var(--primary-dark);
	}

	nav {
		display: flex;
		justify-content: center;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
	}

	li {
		position: relative;
		height: 100%;
	}
	
	li.active {
		background-color: var(--accent);
	}

	li.active a {
		color: var(--base);
	}

	.brand, nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--primary-dark);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: all 0.2s linear;
	}


	a:hover {
		color: var(--accent);
	}
</style>
